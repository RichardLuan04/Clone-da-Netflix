// Mudar o menu ao rolar a tela

(function () {
    let menu = document.getElementById('header')
    window.addEventListener('scroll', function () {
        window.scrollY > 0 ? menu.classList.add('menuFixo') : menu.classList.remove('menuFixo')
    })
})()

// Animação da barra de pesquisar

let campo_texto = document.querySelector('.Campo-Texto')
let btnLupa = document.getElementById("lupa-pesquisa")

function Animacao_Campo() {
    campo_texto.classList.add('Active-Texto')

    let input = document.createElement('input')
    campo_texto.append(input)

    input.type = "text"
    input.id = "campo-texto"
    input.placeholder = "Títulos, gente e gêneros"
 
    btnLupa.setAttribute('onclick', "Fechar_Campo()") // Mudando botao de click
}

function Fechar_Campo() {
    campo_texto.classList.remove('Active-Texto')
    
    let input = document.getElementById("campo-texto")
    campo_texto.removeChild(input)

    btnLupa.setAttribute('onclick', "Animacao_Campo()")
}