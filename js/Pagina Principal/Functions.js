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

let overlay_principal = document.querySelector(".conteudo")

overlay_principal.addEventListener('click', function(e) {
    if (e.target == this) Fechar_Campo()
})

function Recarregar() {
    window.location.reload()
}

// Hover de perfis

function Modal_Perfis_Open() {
    document.querySelector(".modal-perfis").style.display = 'grid'
}

function Modal_Perfis_Close() {
    document.querySelector(".modal-perfis").style.display = 'none'
}

let imagens_modal = document.querySelectorAll(".imagem-modal") // Adicionando perfis no modal
let nomes_modal = document.querySelectorAll(".nome-modal")
let figuras_modal = document.querySelectorAll(".figura-perfil")

let indice = 1
imagens_modal.forEach((imagens) => {
    imagens.src = JSON.parse(localStorage.getItem(`Usuario%20${indice}`)).img
    indice++
})

indice = 1
nomes_modal.forEach((nomes) => {
    nomes.innerHTML = JSON.parse(localStorage.getItem(`Usuario%20${indice}`)).nome
    nomes.setAttribute("onclick", `Mudar_Perfil('Usuario%20${indice}')`)
    indice++
})

function Mudar_Perfil(user) {
    let userJson = JSON.parse(localStorage.getItem(user))
    window.location.href = `\\\pages/Catalogo/Inicio.html?usuario=${userJson.usuario}&imagem=${userJson.img}&numero=${userJson.numero}&nome=${userJson.nome}`
}   

indice = 1
figuras_modal.forEach((figuras) => {
    if (`Usuario%20${indice}` == nomeUsuario) {
        figuras.style.display = 'none'
    } 

    indice++
})

document.getElementById("sair").addEventListener("click", () => {
    window.location.href = '\\\index.html'
})

// Loading

setTimeout(() => {
    document.querySelector(".pagina").style.display = 'flex'
    document.querySelector(".tela-loading").style.display = 'none'
},500)

// Usando json de imagens para o main e escolhendo uma aleatoriamente

fetch("\\json/Media_Main.json").then((response) => {
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
    let catalogo_media = await fetch("\\\json/Media_Catalog.json")
    let catalogJson = await catalogo_media.json()

    let titles = document.querySelectorAll('.container-text-add')
        let background_images = document.querySelectorAll('.galeria-add')

        for (let i=0;i<catalogJson.Catalog.length;i++){ // Repetindo de acordo com a quantidade de slider
            titles[i].innerHTML = catalogJson.Catalog[i].text // Insirando dentro da tag o nome do campo do slider

            for (let cont=0;cont<catalogJson.Catalog[i].images.length;cont++) { // Repetindo de acordo com a quantidade de imagens
                
                let div = document.createElement("div")
                div.style.position = 'relative'

                let input = document.createElement('input')
                input.type = 'image'
                input.className = `image item-${catalogJson.Catalog[i].abbreviation}`
                input.id = `${i}-${cont}`
                input.src = catalogJson.Catalog[i].images[cont].image

                let name = catalogJson.Catalog[i].images[cont].name

                input.setAttribute('onmouseover', `Add_hover("${i}-${cont}", "${i}-${cont}-second")`)
                input.setAttribute("onMouseOut", `Remove_hover()`)
                input.setAttribute('onclick', `Buscar_ID("${name}")`) // FINALIZAR Passando o id como parametro para o onclick
                div.append(input)

                // Imagem invisivel

                let second = document.createElement('input')
                second.type = 'image'
                second.className = `image invisible`
                second.id = `${i}-${cont}-second`

                second.style.display = 'none' // Estilizando
                second.style.opacity = 0
                second.style.position = 'absolute'
                second.style.zIndex = 1
                second.style.top = 0

                second.setAttribute('onmouseover', `Add_hover("${i}-${cont}", "${i}-${cont}-second")`)
                second.setAttribute("onMouseOut", `Remove_hover()`)
                second.setAttribute('onclick', `Buscar_ID("${name}")`)

                let endpoint_media = `https://api.themoviedb.org/3/search/multi?api_key=bf345adcb24f454dbfd43680c4760cf5&query=${name}&language=pt-BR`
                let response_media = await fetch(endpoint_media)
                let jsonMedia = await response_media.json()

                if (jsonMedia.total_results != 0) {
                    let background = jsonMedia.results[0].backdrop_path
                    second.src = `https://image.tmdb.org/t/p/w500${background}`
                }
                div.append(second)

                background_images[i].append(div) 
            }
        }
}

// Animação hover nas imagens

async function Add_hover(position,second_position) {
    let imagem_hover = document.getElementById(`${position}`)
    imagem_hover.classList.add("active-image")

    let imagem_secundaria = document.getElementById(`${second_position}`)
    imagem_secundaria.classList.add("active-image")
    imagem_secundaria.style.display = 'flex' 
    setTimeout(() => {
        imagem_secundaria.style.opacity = 1
    }, 200);
}

async function Remove_hover() {
    let imagem_hover = document.querySelectorAll(".image")
    imagem_hover.forEach((img) => {
        img.classList.remove("active-image")
    })

    let imagens_secundarias = document.querySelectorAll(".invisible")
    imagens_secundarias.forEach((img) => {
        img.style.opacity = 0
    }) 
}

// Caso o usuario click para assistir 

let play = document.getElementById('assistir-play')

play.addEventListener('click', () => {
    alert('Não é possivel assistir nesse site!')
})

let botao_play = document.getElementById("botao-assistir")

botao_play.addEventListener('click', () => {
    alert('Não é possivel assistir nesse site!')
})

// Adicionando imagem de perfil

document.getElementById("imagem-perfil").src = Consulta('imagem')

const inicio_a = document.getElementById("inicio_a")
inicio_a.addEventListener("click", () => {
    window.location.reload()
})

// Entrando no modal de series

const series_a = document.querySelector("#series_a")

series_a.addEventListener("click", () => {
    document.querySelector(".modal-pesquisa").style.display = 'none'
    document.getElementById("catalogo-sliders").style.display = 'none'
    document.querySelector(".modal-lista").style.display = 'none'
    document.querySelector(".bombando").style.display = 'none'
    document.querySelector(".series-modal").style.display = 'flex' 
})

const procurar_botao = document.getElementById("procurar-relacionado")
let imagens_relacionados = document.querySelector(".resultados-relacionados")

document.getElementById("campo-relacionado").addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        procurar_botao.click()
    }
})

procurar_botao.addEventListener("click", () => {
    imagens_relacionados.innerHTML = ''
    
    let pesquisa = document.getElementById("campo-relacionado").value
    let endpoint_media = `https://api.themoviedb.org/3/search/tv?api_key=bf345adcb24f454dbfd43680c4760cf5&query=${pesquisa}&language=pt-BR`

    fetch(endpoint_media).then((response) => {
        response.json().then((mediaJson) => {
            var id = mediaJson.results[0].id

            let endpoint_id = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=bf345adcb24f454dbfd43680c4760cf5&language=pt-BR&page=${document.getElementById("number_page-rel").textContent}`
            fetch(endpoint_id).then((responseId) => {
                responseId.json().then((idJson) => {
                    
                    if (idJson.total_pages == 0) {
                        let p = document.createElement("p")
                        p.innerText = `Não encontramos Séries relacionadas a ${pesquisa} `
                        p.id = 'erro-rel'
                        imagens_relacionados.append(p)
                    } else {
                        for (let imagem of idJson.results) {

                            let img = document.createElement("img")
                            img.id = 'image_lista'
                            img.alt = 'Serie'
                            img.src = `https://image.tmdb.org/t/p/w500${imagem.poster_path}`
                            img.setAttribute('onclick', `Mais_Informações("${imagem.id}","${imagem.media_type}")`)
    
                            imagens_relacionados.append(img)
                        }
                    }
                })
            })
        })
    })
})

// Mudando pagina

const controls_rel = document.querySelectorAll(".control-rel")

    controls_rel.forEach((control) => {
        control.addEventListener("click", () => {
                
            const left = control.classList.contains('left-rel')

            let pagina = document.getElementById("number_page-rel")
            let number = parseInt(pagina.textContent)

            left ? number -= 1 : number += 1

            number < 1 || number > 2 ? alert('Pagina não encontrada') : pagina.innerHTML = number

            procurar_botao.click()
    })
})