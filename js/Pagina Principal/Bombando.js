let botao_bombando = document.getElementById("bombando_a")

botao_bombando.addEventListener("click", () => {
    document.querySelector(".modal-pesquisa").style.display = 'none'
    document.getElementById("catalogo-sliders").style.display = 'none'
    document.querySelector(".modal-lista").style.display = 'none'
    document.querySelector(".bombando").style.display = 'flex'
})