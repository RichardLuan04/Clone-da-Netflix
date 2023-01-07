let botao_bombando = document.getElementById("bombando_a")

botao_bombando.addEventListener("click", () => {
    document.querySelector(".modal-pesquisa").style.display = 'none'
    document.getElementById("catalogo-sliders").style.display = 'none'
    document.querySelector(".modal-lista").style.display = 'none'
    document.querySelector(".series-modal").style.display = 'none'
    document.querySelector(".filmes-modal").style.display = 'none'
    document.querySelector(".bombando").style.display = 'flex'

    document.getElementById('imagem-principal').style.display = 'flex'
    document.getElementById("video-principal").style.display = 'none'

    let lista_bombando = document.querySelector(".bombando-lista")
    lista_bombando.innerHTML = ''
    let endpointPopular = `https://api.themoviedb.org/3/${document.getElementById('botao-mudar').textContent}/popular?api_key=bf345adcb24f454dbfd43680c4760cf5&language=pt-BR&page=${document.getElementById("number_page").textContent}`

    fetch(endpointPopular).then((respose) => {
        respose.json().then((popularJson) => {
            for (let resultado of popularJson.results) {
                let img = document.createElement('img')
                img.id = 'image_lista'
                img.alt = 'Bombando'
                img.src = `https://image.tmdb.org/t/p/w500${resultado.poster_path}`
                img.setAttribute('onclick', `Mais_Informações("${resultado.id}","${document.getElementById('botao-mudar').textContent}")`)
                
                lista_bombando.append(img)
            }
        })
    })
})

let mudar_botao = document.getElementById("botao-mudar")

mudar_botao.addEventListener("click", () => {
    mudar_botao.textContent == 'movie' ? mudar_botao.innerHTML = 'tv' : mudar_botao.innerHTML = 'movie'
    botao_bombando.click()
})

// Mudando pagina

const controls = document.querySelectorAll(".control")

controls.forEach((control) => {
    control.addEventListener("click", () => {
        
        const left = control.classList.contains('left')

        let pagina = document.getElementById("number_page")
        let number = parseInt(pagina.textContent)

        left ? number -= 1 : number += 1

        let midia = document.getElementById('botao-mudar').textContent
        let limit = midia == 'movie' ? 36570 : 7117

        number < 1 || number > limit ? alert('Pagina não encontrada') : pagina.innerHTML = number

        botao_bombando.click()
    })
})