function Open_Select() {
    document.getElementById("lista-temporadas").style.display = 'grid'
    document.getElementById("select").setAttribute("onclick", "Close_Select()")
}

function Close_Select() {
    document.getElementById("lista-temporadas").style.display = 'none'
    document.getElementById("select").setAttribute("onclick", "Open_Select()")
}