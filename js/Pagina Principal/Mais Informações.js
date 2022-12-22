async function Buscar_ID(name_media){
    debugger
    const key = 'bf345adcb24f454dbfd43680c4760cf5'
    let language = 'PT-br'
    let search = name_media

    let endpoint_media = `https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${search}&language=${language}`
    let response_media = await fetch(endpoint_media)
    let bodyJson_media = await response_media.json()

    Mais_Informações(bodyJson_media.results[0].id)
}

function Mais_Informações (id_media) {
    alert(id_media)
}