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
    document.getElementById("preview-imagem").src = `https://image.tmdb.org/t/p/w500${image}`

    if (media_type == 'movie'){
        document.getElementById("titulo-midia").innerText = JsonId.title
    } else {
        document.getElementById("titulo-midia").innerText = JsonId.name
    }

    document.querySelector(".infos-baixo").innerHTML = JsonId.overview

    let temporada
    JsonId.number_of_seasons == 1 ? temporada = 'Temporada': temporada = 'Temporadas'

    if (media_type == 'tv'){
        document.getElementById("temporadas").innerText = `${JsonId.number_of_seasons} ${temporada}`
    } else {
        document.getElementById("temporadas").innerText = JsonId.runtime
    }

    let company = JsonId.production_companies[0].logo_path
    document.getElementById("company").src = `https://image.tmdb.org/t/p/w500${company}`

    document.getElementById("ultimo-ano-lançamento").innerText = JsonId.last_air_date
}

const closeButton = document.getElementById("close-modal")

closeButton.addEventListener('click', () => {
    document.querySelector(".modal-mais-informacoes").style.display = 'none'
        document.getElementById("catalogo-sliders").style.position = 'static'
})