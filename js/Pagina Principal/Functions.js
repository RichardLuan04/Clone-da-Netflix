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

function Recarregar() {
    window.location.reload()
}

// Usando json de imagens para o main e escolhendo uma aleatoriamente

fetch("Media_Main.json").then((response) => {
    response.json().then((main_images) => {
        let imagesJson = main_images

        let random_number = parseInt(Math.random() * imagesJson.medias.length)

        document.getElementById('imagem-principal').src = imagesJson.medias[random_number].image
        document.querySelector('.sobre').innerHTML = imagesJson.medias[random_number].media_overview
        document.getElementById('logo-principal').src = imagesJson.medias[random_number].media_logo
        document.getElementById('classificacao-idade').src = imagesJson.medias[random_number].age_rating
    }) 
})

fetch("Media_Catalog.json").then((response) => {
    response.json().then((catalog_images) => {
        let catalogJson = catalog_images
        let titles = document.querySelectorAll('.container-text-add')
        let background_images = document.querySelectorAll('.galeria-add')

        for (let i=0;i<catalogJson.Catalog.length;i++){ // Repetindo de acordo com a quantidade de slider
            titles[i].innerHTML = catalogJson.Catalog[i].text // Insirando dentro da tag o nome do campo do slider

            for (let cont=0;cont<catalogJson.Catalog[i].images.length;cont++) { // Repetindo de acordo com a quantidade de imagens
                let input = document.createElement('input')
                input.type = 'image'
                input.className = `item-${catalogJson.Catalog[i].abbreviation}`
                input.src = catalogJson.Catalog[i].images[cont].image
                
                input.setAttribute('onclick', `Buscar_ID("${catalogJson.Catalog[i].images[cont].name}")`) // FINALIZAR Passando o id como parametro para o onclick

                background_images[i].append(input)
            }
        }
    })
})