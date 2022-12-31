function Open_Select() {
    document.getElementById("lista-temporadas").style.display = 'grid'
    document.getElementById("select").setAttribute("onclick", "Close_Select()")
}

function Close_Select() {
    document.getElementById("lista-temporadas").style.display = 'none'
    document.getElementById("select").setAttribute("onclick", "Open_Select()")
}

// Mudando temporada ao clicar 

function Mudar_Temporada(media_type, id_media, temporada) {
    let number_season = document.getElementById('select')

    number_season.textContent = `Temporada ${temporada} `
    Adicionar_Temporada(media_type, id_media, temporada)
}