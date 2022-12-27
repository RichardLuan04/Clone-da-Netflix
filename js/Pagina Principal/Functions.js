// Mudar o menu ao rolar a tela

let menu = document.getElementById('header')
 window.addEventListener('scroll', function () {
    window.scrollY > 0 ? menu.classList.add('menuFixo') : menu.classList.remove('menuFixo')
})

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

        document.getElementById('botao-mais').setAttribute('onclick', `Buscar_ID("${imagesJson.medias[random_number].title}")`)
    }) 
})

fetch_function ()

async function fetch_function () {
    let catalogo_media = await fetch("Media_Catalog.json")
    let catalogJson = await catalogo_media.json()

    let titles = document.querySelectorAll('.container-text-add')
        let background_images = document.querySelectorAll('.galeria-add')

        for (let i=0;i<catalogJson.Catalog.length;i++){ // Repetindo de acordo com a quantidade de slider
            titles[i].innerHTML = catalogJson.Catalog[i].text // Insirando dentro da tag o nome do campo do slider

            for (let cont=0;cont<catalogJson.Catalog[i].images.length;cont++) { // Repetindo de acordo com a quantidade de imagens
                // Criando div 

                let div = document.createElement('div')
                div.className = 'imagens'
                
                let input = document.createElement('input')
                input.type = 'image'
                input.className = `item-${catalogJson.Catalog[i].abbreviation} image`
                input.id = `${i}-${cont}`
                input.src = catalogJson.Catalog[i].images[cont].image

                let name = catalogJson.Catalog[i].images[cont].name

                input.setAttribute('onmouseover', `Add_hover("${name}","${i}-${cont}")`)
                input.setAttribute("onMouseOut", `Remove_hover("${name}","${i}-${cont}")`)
                input.setAttribute('onclick', `Buscar_ID("${name}")`) // FINALIZAR Passando o id como parametro para o onclick
                div.append(input)
                
                // Criando imagemm invisivel
                
                let endpoint_media = `https://api.themoviedb.org/3/search/multi?api_key=bf345adcb24f454dbfd43680c4760cf5&query=${name}&language=pt-BR`
                let response_media = await fetch(endpoint_media)
                let jsonMedia = await response_media.json()
                
                let poster = jsonMedia.results[0].poster_path

                let input_invisivel = document.createElement('input')
                input_invisivel.type = 'image'
                input_invisivel.className = `item-${catalogJson.Catalog[i].abbreviation} image img-invisible`
                input_invisivel.id = `${i}-${cont}-invisible`
                input_invisivel.src = `https://image.tmdb.org/t/p/w500${poster}`
                div.append(input_invisivel)

                
                background_images[i].append(div)
            }
        }
}

// Animação hover nas imagens

async function Add_hover(hover_img, position) {

    let imagem_hover = document.getElementById(`${position}`)
    imagem_hover.classList.add("active-image")
}

async function Remove_hover(name, position) {
    let imagem_hover = document.querySelectorAll(".image")
    imagem_hover.forEach((img) => {
        img.classList.remove("active-image")
    })
}