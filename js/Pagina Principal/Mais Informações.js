const key = 'bf345adcb24f454dbfd43680c4760cf5'
const language = 'pt-BR'

async function Buscar_ID(name_media){
    let search = name_media

    let endpoint_media = `https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${search}&language=${language}`
    let response_media = await fetch(endpoint_media)
    let bodyJson_media = await response_media.json()

    Mais_Informações(bodyJson_media.results[0].id, bodyJson_media.results[0].media_type)
}

async function Mais_Informações (id_media,media_type) {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })

    setTimeout(() => {
        document.querySelector(".modal-mais-informacoes").style.display = 'flex'
        document.getElementById("catalogo-sliders").style.position = 'fixed'
        document.querySelector(".modal-pesquisa").style.position = 'fixed'
    },500)

    let endpoint_id = `https://api.themoviedb.org/3/${media_type}/${id_media}?api_key=${key}&language=${language}`
    let response_id = await fetch(endpoint_id)
    let JsonId = await response_id.json()

    let image = JsonId.backdrop_path
    document.getElementById("preview-imagem").src = `https://image.tmdb.org/t/p/w500${image}` // Adicionando imagem

    // adicionando titulo ou nome

    let midia = media_type == 'movie' ? JsonId.title : JsonId.name

    document.getElementById("titulo-midia").innerText = midia
    document.querySelector(".infos-baixo").innerHTML = JsonId.overview // Adicionando resumo sobre a midia

    let season
    JsonId.number_of_seasons == 1 ? season = 'Temporada': season = 'Temporadas' // Mudando frase

    // Adicionando quantidade de temporadas ou tempo de filme

    if (media_type == 'tv'){
        document.getElementById("temporadas").innerText = `${JsonId.number_of_seasons} ${season}`
    } else {
        let time_minutes = JsonId.runtime

        let hours = parseInt(time_minutes / 60)
        let minutes = time_minutes - hours*60
        document.getElementById("temporadas").innerText = `${hours}h ${minutes}min`
    }

    if (JsonId.last_air_date != undefined) {
        document.getElementById("ultimo-ano-lançamento").innerText = JsonId.last_air_date.substring(0,4) // Adicionando ultima data de lançamento
    }

    // Adicionando restrição de idade

    if (media_type == 'tv'){
        let endpoint_rating = `https://api.themoviedb.org/3/${media_type}/${id_media}/content_ratings?api_key=${key}&language=${language}`
        let response_rating= await fetch(endpoint_rating)
        let jsonRating = await response_rating.json()
        
        let age_response = await fetch("age_restriction.json")
        let jsonAge = await age_response.json()

        for (let i=0;i<jsonRating.results.length;i++){
            if (jsonRating.results[i].iso_3166_1 == "BR") {

                let age = jsonRating.results[i].rating

                for (let cont=0;cont<jsonAge.result.length;cont++){
                    if (jsonAge.result[cont].age == age) {
                        document.getElementById("avaliacao").style.backgroundColor = jsonAge.result[cont].background
                        document.getElementById("numero-avaliacao").innerText = jsonAge.result[cont].age
                    }
                }
            }
        }
    } else {
        for (let i=0;i<JsonId.genres.length;i++){
            if (JsonId.genres[i].name == 'Animação'){
                document.getElementById("avaliacao").style.backgroundColor = 'blue'
                document.getElementById("numero-avaliacao").innerText = 10
            } else {
                document.getElementById("avaliacao").style.backgroundColor = 'red'
                document.getElementById("numero-avaliacao").innerText = 16
            }
        }
    }

    // Adicionando relevancia

    let vote_average = JsonId.vote_average
    let vote_min = 100 / vote_average
    let relevance = parseInt(100 - vote_min)

    let campo_relevancia = document.getElementById("relevancia")
    campo_relevancia.innerText = `${relevance}% relevante`

    if (relevance >= 70) {
        campo_relevancia.style.color = '#46d369'
    } else if ( relevance >= 50) {
        campo_relevancia.style.color = '#d46102'
    } else {
        campo_relevancia.style.color = '#c40202'
    }

    // Adicionando elenco,generos e diretor
    if (media_type == 'tv') {
        let endpoint_elenco = `https://api.themoviedb.org/3/tv/${id_media}/season/1?api_key=${key}&language=${language}`
        let response_elenco= await fetch(endpoint_elenco)
        let jsonElenco = await response_elenco.json()

        let coluna = document.querySelectorAll(".coluna-lista")
        coluna[0].innerHTML = ''
        coluna[1].innerHTML = ''
        coluna[2].innerHTML = ''
        
        // Elenco

        let spanElenco = document.createElement('span')
        spanElenco.id = 'tag'
        spanElenco.innerText = 'Elenco: '
        coluna[0].append(spanElenco)

        for(let i=0;i<jsonElenco.episodes[0].guest_stars.length;i++){
            if (i<3){
                let span = document.createElement('span')
                span.id = 'item'

                let a = document.createElement('a')
                a.innerText = `${jsonElenco.episodes[0].guest_stars[i].original_name}, `

                span.append(a)
                coluna[0].append(span)
            }
            if (i>3){
                let etc = document.createElement('p')
                etc.innerText = 'etc...'
                coluna[0].append(etc)
                break
            }
        }
        // Genero
        let spanGenero = document.createElement('span')
        spanGenero.id = 'tag'
        spanGenero.innerText = 'Gênero: '
        coluna[1].append(spanGenero)

        for (let i=0;i<JsonId.genres.length;i++){
            let span = document.createElement('span')
            span.id = 'item'

            let a = document.createElement('a')
            a.innerText = `${JsonId.genres[i].name}, `

            span.append(a)
            coluna[1].append(span)
        }
        //Diretor
        let spanDirector = document.createElement('span')
        spanDirector.id = 'tag'
        spanDirector.innerText = 'Diretor: '
        coluna[2].append(spanDirector)

        for (let i=0;i<jsonElenco.episodes[0].crew.length;i++){
            if (jsonElenco.episodes[0].crew[i].job == 'Director') {
                let span = document.createElement('span')
                span.id = 'item'

                let a = document.createElement('a')
                a.innerText = `${jsonElenco.episodes[0].crew[i].original_name}.`

                span.append(a)
                coluna[2].append(span)
            }
        }
    } else {
        // Colocando genero do filme (unica coisa que dá)

        let coluna = document.querySelectorAll(".coluna-lista")
        coluna[0].innerHTML = ''
        coluna[1].innerHTML = ''
        coluna[2].innerHTML = ''

        let spanGenero = document.createElement('span')
        spanGenero.id = 'tag'
        spanGenero.innerText = 'Gênero: '
        coluna[0].append(spanGenero)

        for (let i=0;i<JsonId.genres.length;i++){
            let span = document.createElement('span')
            span.id = 'item'

            let a = document.createElement('a')
            a.innerText = `${JsonId.genres[i].name}, `

            span.append(a)
            coluna[0].append(span)
        }
    }

    // Adicionando imagem da compania

    let logo = document.getElementById("company")

    if (JsonId.production_companies.length != 0) {
        let company = JsonId.production_companies[0].logo_path

        logo.style.visibility = 'visible'
        logo.src = `https://image.tmdb.org/t/p/w500${company}`
    } else {
        logo.style.visibility = 'hidden'
    }

    let number_season = document.getElementById('select').textContent
    number_season = number_season.substring(10)

    Adicionar_Temporada(media_type, id_media, number_season)

    
    // Verificando se a midia ja esta na 'minha lista'
    
    const svg_certo = document.getElementById("svg-certo")
    const svg_x = document.getElementById("svg-x")

    svg_certo.style.display = 'none'
    svg_x.style.display = 'flex'
    botao_lista.setAttribute("onclick", "Adiconar_Minha_lista()")
    
    if (midias_Salvas != null) {
        JSON.parse(midias_Salvas).forEach(element => {
            if (element.nome == midia) {
                botao_lista.setAttribute("onclick", "Remover_Minha_Lista()")
                svg_certo.style.display = 'flex'
                svg_x.style.display = 'none'
            }
        });
    }
}

/* Carregamento de episodios, temporadas, nomes dos episodios e etc */

async function Adicionar_Temporada(media_type, id_media, number_season) {
    // Refazendo 

    let endpoint_id = `https://api.themoviedb.org/3/${media_type}/${id_media}?api_key=${key}&language=${language}`
    let response_id = await fetch(endpoint_id)
    let jsonId = await response_id.json()

    let episodios = document.querySelector(".episodios")
    episodios.innerHTML = ''  // Resetando o html 

    if (media_type == 'tv'){
        
        document.querySelector(".preview-episodios").style.display = 'flex'

        let endpoint_season = `https://api.themoviedb.org/3/tv/${id_media}/season/${number_season}?api_key=${key}&language=${language}`
        let response_season= await fetch(endpoint_season)
        let jsonSeason = await response_season.json()

        // Adicionando episodios

        for (let i=0;i<jsonSeason.episodes.length;i++){

            // Criando campo para o episodio
            
            let div_ep = document.createElement("div")
            div_ep.className = 'ep'

            let div_infos_ep = document.createElement("div")
            div_infos_ep.className = 'infos-ep'

            let hr = document.createElement("hr")

            div_ep.append(div_infos_ep)

            let div_numero_ep = document.createElement("div")
            div_numero_ep.className = 'numero-ep'
            div_numero_ep.innerHTML = jsonSeason.episodes[i].episode_number

            div_infos_ep.append(div_numero_ep)

            let div_imagem_ep = document.createElement("div")
            div_imagem_ep.className = 'imagem-ep'

            let img = document.createElement("img")

            if (jsonSeason.episodes[i].still_path != null) {
                let still = jsonSeason.episodes[i].still_path
                img.src = `https://image.tmdb.org/t/p/w500${still}`
            }

            div_imagem_ep.append(img)
            div_infos_ep.append(div_imagem_ep)

            let div_sobre_ep = document.createElement("div")
            div_sobre_ep.className = 'sobre-ep'

            let div_top = document.createElement("div")
            div_top.className = 'top'

            let p_1 = document.createElement("p")
            p_1.innerText = jsonSeason.episodes[i].name
            let p_2 = document.createElement("p")
            p_2.innerText = jsonSeason.episodes[i].runtime

            div_top.append(p_1)
            div_top.append(p_2)

            div_sobre_ep.append(div_top)

            let div_bottom = document.createElement("div")
            div_bottom.className = 'bottom'
            let p_overview = document.createElement('p')
            p_overview.innerText = jsonSeason.episodes[i].overview

            div_bottom.append(p_overview)
            div_sobre_ep.append(div_bottom)

            div_infos_ep.append(div_sobre_ep)

            episodios.append(div_ep)
            episodios.append(hr)
        } 

        // Adicionando modal
        
        if (jsonId.seasons.length != 1) {
            let ul = document.getElementById("lista-temporadas")
            ul.innerHTML = ''

            for (let i=1;i<jsonId.seasons.length;i++){

                let li = document.createElement("li")
                li.setAttribute('onclick', `Mudar_Temporada("${media_type}", ${id_media}, ${i})`)

                let div = document.createElement("div")
                div.className = 'text-temp'
                div.innerHTML = jsonId.seasons[i].name

                let span = document.createElement("span")
                span.innerText = `(${jsonId.seasons[i].episode_count} episódios)`
                
                li.append(div)
                li.append(span)

                ul.append(li)
            }
        }
    } else {
        document.querySelector(".preview-episodios").style.display = 'none'
    }
}

const closeButton = document.getElementById("close-modal")

closeButton.addEventListener('click', () => {
    document.querySelector(".modal-mais-informacoes").style.display = 'none'
    document.getElementById("catalogo-sliders").style.position = 'static'
    document.querySelector(".modal-pesquisa").style.position = 'static'
})