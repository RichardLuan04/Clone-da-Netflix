const botao_lista = document.querySelector(".lista-botao")
const lista = document.querySelector(".minha-lista")
lista.innerHTML = '' // Resetando sempre que entrar no site

let nomeUsuario = Consulta('usuario')

let minha_lista = []
let midias_Salvas = localStorage.getItem(`Lista-${nomeUsuario}`)

// Abrindo pagina para minha lista

let lista_botao = document.getElementById("lista_a")

lista_botao.addEventListener("click", () => {
    document.querySelector(".modal-pesquisa").style.display = 'none'
    document.getElementById("catalogo-sliders").style.display = 'none'
    document.querySelector(".bombando").style.display = 'none'
    document.querySelector(".series-modal").style.display = 'none' 
    document.querySelector(".modal-lista").style.display = 'flex'

    let campo_lista = document.querySelector(".imagens-lista")
    campo_lista.innerHTML = ''

    JSON.parse(midias_Salvas).forEach(element => {
        let endpoint_media = `https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${element.nome}&language=${language}`
        fetch(endpoint_media).then((response) => {
            response.json().then((posterJson) => {
                console.log(posterJson)
                let image = document.createElement("img")
                image.id = 'image_lista'
                image.src = `https://image.tmdb.org/t/p/w500${posterJson.results[0].poster_path}`
                image.alt = 'Midia minha lista'
                image.setAttribute('onclick', `Mais_Informações("${posterJson.results[0].id}","${posterJson.results[0].media_type}")`)

                campo_lista.append(image)
            })
        })
    })
})

// Mudando no catalogo assim que entrar no site

if (midias_Salvas !== null) {
    minha_lista = JSON.parse(midias_Salvas)

    for (let midia of minha_lista) {
        let input = document.createElement('input')
        input.type = 'image'
        input.src = midia.imagem
        input.className = `image item-my`
        input.id = 'lista-imagem'
        input.setAttribute('onclick', `Buscar_ID('${midia.nome}')`)
        
        lista.append(input)
    }
}

function Adiconar_Minha_lista() {

    // Adicionando ao local storage

    let imagem = document.getElementById("preview-imagem").src
    let nome = document.getElementById("titulo-midia").textContent

    let midia = {
        imagem: imagem,
        nome: nome,
    }

    minha_lista.push(midia)

    let listaJson = JSON.stringify(minha_lista)
    localStorage.setItem(`Lista-${nomeUsuario}`, listaJson)


    // Mudando no catalogo assim que adiciona

    lista.innerHTML = '' // Resetando sempre que adicionar

    for (let midia of minha_lista) {
        let input = document.createElement('input')
        input.type = 'image'
        input.src = midia.imagem
        input.className = `image item-my`
        input.id = 'lista-imagem'
        input.setAttribute('onclick', `Buscar_ID('${midia.nome}')`)

        lista.append(input)
    }

    document.getElementById("svg-certo").style.display = 'flex'
    document.getElementById("svg-x").style.display = 'none'

    window.location.reload()
}

function Remover_Minha_Lista() {debugger
    minha_lista = []
    let imagem = document.getElementById("preview-imagem").src
    let nome = document.getElementById("titulo-midia").textContent

    JSON.parse(midias_Salvas).forEach(element => {
        if (element.nome != nome) {
            let midia = {
                imagem: element.imagem,
                nome: element.nome
            }

            minha_lista.push(midia)
        }
    });

    let listaJson = JSON.stringify(minha_lista)
    localStorage.removeItem(`Lista-${nomeUsuario}`)
    localStorage.setItem(`Lista-${nomeUsuario}`, listaJson)

    document.getElementById("svg-certo").style.display = 'none'
    document.getElementById("svg-x").style.display = 'flex'

    window.location.reload()
}