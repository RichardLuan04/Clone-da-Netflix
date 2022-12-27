async function Buscar_ID(name_media){
    const key = 'bf345adcb24f454dbfd43680c4760cf5'
    let language = 'PT-br'
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
    },500)

    const key = 'bf345adcb24f454dbfd43680c4760cf5'
    const language = 'pt-BR'
    let endpoint_id = `https://api.themoviedb.org/3/${media_type}/${id_media}?api_key=${key}&language=${language}`
    let response_id = await fetch(endpoint_id)
    let JsonId = await response_id.json()

    let image = JsonId.backdrop_path
    document.getElementById("preview-imagem").src = `https://image.tmdb.org/t/p/w500${image}` // Adicionando imagem

    // adicionando titulo ou nome

    if (media_type == 'movie'){
        document.getElementById("titulo-midia").innerText = JsonId.title
    } else {
        document.getElementById("titulo-midia").innerText = JsonId.name
    }

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

    // Adicionando imagem da compania
    
    let company = JsonId.production_companies[0].logo_path
    let logo = document.getElementById("company")

    if (company != undefined) {    
        logo.style.visibility = 'visible'
        logo.src = `https://image.tmdb.org/t/p/w500${company}`
    } else {
        logo.style.visibility = 'hidden'
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
}

const closeButton = document.getElementById("close-modal")

closeButton.addEventListener('click', () => {
    document.querySelector(".modal-mais-informacoes").style.display = 'none'
        document.getElementById("catalogo-sliders").style.position = 'static'
})