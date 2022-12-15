// Mudar o menu ao rolar a tela

(function () {
    let menu = document.getElementById('header')
    window.addEventListener('scroll', function () {
        window.scrollY > 0 ? menu.classList.add('menuFixo') : menu.classList.remove('menuFixo')
    })
})()

// Animação da barra de pesquisar

function Animacao_Campo() {
    let campo_texto = document.querySelector('.Campo-Texto')
    campo_texto.classList.add('Active-Texto')

    let input = document.createElement('input')
    campo_texto.append(input)

    input.type = "text"
    input.id = "campo-texto"
    input.placeholder = "Títulos, gente e gêneros"

    // Mudando botao de click
}