// Mudar o menu ao rolar a tela

document.getElementById("imagem-loading").src = Consulta('imagem')

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
    input.autocomplete = 'off'
 
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
    let user = JSON.parse(localStorage.getItem(`Usuario ${indice}`))

    if (user) {
        imagens.src = user.img
        indice++
    }
})

indice = 1
nomes_modal.forEach((nomes) => {
    let user = JSON.parse(localStorage.getItem(`Usuario ${indice}`))

    if (user) {
        nomes.innerHTML = user.nome
        nomes.setAttribute("onclick", `Mudar_Perfil('Usuario ${indice}')`)
        indice++
    }
})

indice = 1
figuras_modal.forEach((figuras) => {
    let user = JSON.parse(localStorage.getItem(`Usuario ${indice}`))

    if (user) {
        if (`Usuario ${indice}` == nomeUsuario.replace("%20", " ")) {
            figuras.style.display = 'none'
        } 
    }
    indice++
})

function Mudar_Perfil(user) {
    let userJson = JSON.parse(localStorage.getItem(user))
    window.location.href = `\\\pages/Catalogo/Inicio.html?usuario=${userJson.usuario}&imagem=${userJson.img}&numero=${userJson.numero}&nome=${userJson.nome}`
}   

document.getElementById("sair").addEventListener("click", () => {
    window.location.href = '\\\index.html'
})

// Loading

setTimeout(() => {
    document.querySelector(".pagina").style.display = 'flex'
    document.querySelector(".tela-loading").style.display = 'none'
},5000)

// Usando json de imagens para o main e escolhendo uma aleatoriamente

let random_number = parseInt(Math.random() * 22)

fetch("../../json/Media_Main.json").then((response) => {
    response.json().then((main_images) => {
        document.getElementById('imagem-principal').src = main_images.medias[random_number].image
        document.querySelector('.sobre').innerHTML = main_images.medias[random_number].media_overview
        document.getElementById('logo-principal').src = main_images.medias[random_number].media_logo
        document.getElementById('classificacao-idade').src = main_images.medias[random_number].age_rating
        document.getElementById("video-principal").src = main_images.medias[random_number].video
        document.getElementById('botao-mais').setAttribute('onclick', `Buscar_ID("${main_images.medias[random_number].title}")`)
    }) 
})

Iniciar_Video()

function Iniciar_Video () {
    setTimeout(() => {
        document.getElementById('imagem-principal').style.display = 'none'
        document.getElementById("video-principal").style.display = 'flex'
    
        setTimeout(() => {
            document.getElementById('imagem-principal').style.display = 'flex'
            document.getElementById("video-principal").style.display = 'none'
        },70000) // Tempo que demora para o video ser retirado
    },10000) // Tempo que demorara para aparecer o video 
}

const botao_som = document.querySelector(".botao-som")
const som_off = document.getElementById("som-off")
const som_on = document.getElementById("som-on")

function Botao_On() {
    som_off.style.display = 'none'
    som_on.style.display = 'block'
    botao_som.setAttribute("onclick", "Botao_Off()")
    
    Mudando_Som(1,0)
}

function Botao_Off() {
    som_off.style.display = 'block'
    som_on.style.display = 'none'
    botao_som.setAttribute("onclick", "Botao_On()")

    Mudando_Som(0,1)
}

function Mudando_Som(old, new_audio) {
    fetch("../../json/Media_Main.json").then((response) => {
        response.json().then((main_images) => {
            let src_video = main_images.medias[random_number].video
            src_video = src_video.replace(`mute=${old}`, `mute=${new_audio}`)

            document.getElementById("video-principal").src = src_video
        })
    })
}

fetch_function ()

async function fetch_function () {
    let catalogo_media = await fetch("../../json/Media_Catalog.json")
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
    window.open(document.getElementById("video-principal").src)
})

// Adicionando imagem de perfil

document.getElementById("imagem-perfil").src = Consulta('imagem')

const inicio_a = document.getElementById("inicio_a")
inicio_a.addEventListener("click", () => {
    document.querySelector(".modal-pesquisa").style.display = 'none'
    document.getElementById("catalogo-sliders").style.display = 'flex'
    document.querySelector(".modal-lista").style.display = 'none'
    document.querySelector(".bombando").style.display = 'none'
    document.querySelector(".series-modal").style.display = 'none' 
    document.querySelector(".filmes-modal").style.display = 'none'

    Iniciar_Video()
})

// Entrando no modal de series

const series_a = document.querySelector("#series_a")

series_a.addEventListener("click", () => {
    document.querySelector(".modal-pesquisa").style.display = 'none'
    document.getElementById("catalogo-sliders").style.display = 'none'
    document.querySelector(".modal-lista").style.display = 'none'
    document.querySelector(".bombando").style.display = 'none'
    document.querySelector(".filmes-modal").style.display = 'none'
    document.querySelector(".series-modal").style.display = 'flex' 

    document.getElementById('imagem-principal').style.display = 'flex'
    document.getElementById("video-principal").style.display = 'none'

})

// Entrando no modal de filmes

const filmes_a = document.querySelector("#filmes_a")

filmes_a.addEventListener("click", () => {
    document.querySelector(".modal-pesquisa").style.display = 'none'
    document.getElementById("catalogo-sliders").style.display = 'none'
    document.querySelector(".modal-lista").style.display = 'none'
    document.querySelector(".bombando").style.display = 'none'
    document.querySelector(".series-modal").style.display = 'none'
    document.querySelector(".filmes-modal").style.display = 'flex'  

    document.getElementById('imagem-principal').style.display = 'flex'
    document.getElementById("video-principal").style.display = 'none'

})

const procurar_botao_serie = document.getElementById("procurar-relacionado") // JavaScript para buscar por series relacionadas
let imagens_relacionados_serie = document.querySelector(".resultados-relacionados")

document.getElementById("campo-relacionado").addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        procurar_botao_serie.click()
    }
})

procurar_botao_serie.addEventListener("click", () => {
    imagens_relacionados_serie.innerHTML = ''
    
    let pesquisa = document.getElementById("campo-relacionado").value
    let endpoint_media = `https://api.themoviedb.org/3/search/tv?api_key=bf345adcb24f454dbfd43680c4760cf5&query=${pesquisa}&language=pt-BR`

    fetch(endpoint_media).then((response) => {
        response.json().then((mediaJson) => {
            let id = mediaJson.results[0].id

            let endpoint_id = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=bf345adcb24f454dbfd43680c4760cf5&language=pt-BR&page=${document.getElementById("number_page-rel").textContent}`
            fetch(endpoint_id).then((responseId) => {
                responseId.json().then((idJson) => {
                    
                    if (idJson.total_pages == 0) {
                        let p = document.createElement("p")
                        p.innerText = `Não encontramos Séries relacionadas a ${pesquisa} `
                        p.id = 'erro-rel'
                        imagens_relacionados_serie.append(p)
                    } else {
                        for (let imagem of idJson.results) {

                            let img = document.createElement("img")
                            img.id = 'image_lista'
                            img.alt = 'Serie'
                            img.src = `https://image.tmdb.org/t/p/w500${imagem.poster_path}`
                            img.setAttribute('onclick', `Mais_Informações("${imagem.id}","${imagem.media_type}")`)
    
                            imagens_relacionados_serie.append(img)
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

            procurar_botao_serie.click()
    })
})

const procurar_botao_filme = document.getElementById("procurar-relacionado-filme") // JavaScript para procurar por filmes relacionados
let imagens_relacionados_filme = document.querySelector(".resultados-relacionados-filme")

document.getElementById("campo-relacionado-filme").addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        procurar_botao_filme.click()
    }
})

procurar_botao_filme.addEventListener("click", () => {
    imagens_relacionados_filme.innerHTML = ''
    
    let pesquisa = document.getElementById("campo-relacionado-filme").value
    let endpoint_media = `https://api.themoviedb.org/3/search/movie?api_key=bf345adcb24f454dbfd43680c4760cf5&query=${pesquisa}&language=pt-BR`

    fetch(endpoint_media).then((response) => {
        response.json().then((mediaJson) => {
            let id = mediaJson.results[0].id

            let endpoint_id = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=bf345adcb24f454dbfd43680c4760cf5&language=pt-BR&page=${document.getElementById("number_page-rel-filme").textContent}`
            fetch(endpoint_id).then((responseId) => {
                responseId.json().then((idJson) => {
                    
                    if (idJson.total_pages == 0) {
                        let p = document.createElement("p")
                        p.innerText = `Não encontramos Séries relacionadas a ${pesquisa} `
                        p.id = 'erro-rel'
                        imagens_relacionados_filme.append(p)
                    } else {
                        for (let imagem of idJson.results) {

                            let img = document.createElement("img")
                            img.id = 'image_lista'
                            img.alt = 'Serie'
                            img.src = `https://image.tmdb.org/t/p/w500${imagem.poster_path}`
                            img.setAttribute('onclick', `Mais_Informações("${imagem.id}","${imagem.media_type}")`)
    
                            imagens_relacionados_filme.append(img)
                        }
                    }
                })
            })
        })
    })
})

// Mudando pagina

const controls_rel_filme = document.querySelectorAll(".control-rel-filme")

    controls_rel_filme.forEach((control) => {
        control.addEventListener("click", () => {
                
            const left = control.classList.contains('left-rel-filme')

            let pagina = document.getElementById("number_page-rel-filme")
            let number = parseInt(pagina.textContent)

            left ? number -= 1 : number += 1

            number < 1 || number > 2 ? alert('Pagina não encontrada') : pagina.innerHTML = number

            procurar_botao_filme.click()
    })
})