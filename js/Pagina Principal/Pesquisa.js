/* 
# API

- TMDB key = bf345adcb24f454dbfd43680c4760cf5

- Site: https://www.themoviedb.org/settings/api?language=pt-BR

- Response para imagens = https://image.tmdb.org/t/p/w500
- Response para pesquisar por filmes = https://api.themoviedb.org/3/search/movie?api_key={key}&query={filme}&language={lingua}
- Response para pesquisar por series = https://api.themoviedb.org/3/search/multi?api_key={key}&query={Serie}&language={língua}
- videos e mais infomarções = https://api.themoviedb.org/3/movie/{Id do filme/serie}?api_key={key}&append_to_response=videos
*/

document.addEventListener("keyup", function(e) {
    if (e.key === 'Enter') {
        Search()    
    }
})

async function Search () {
    let images = document.querySelector('.imagens-pesquisa')
    let ul = document.getElementById('lista-nomes')

    ul.innerHTML = ''
    images.innerHTML = ''

    const key = 'bf345adcb24f454dbfd43680c4760cf5'
    let language = 'PT-br'
    let search = document.getElementById("campo-texto").value

    // Fazendo busca por filme - endpoint normal

    let endpoint_movie = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}&language=${language}`
    let response_movie = await fetch(endpoint_movie)
    let bodyJson_filme = await response_movie.json()

    let id_movie = bodyJson_filme.results[0].id

    // Endpoint de filme com mais informações

    let endpoint_movie_more = `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${key}&append_to_response=videos`  
    let response_movie_more = await fetch(endpoint_movie_more)
    let bodyJson_filme_more = await response_movie_more.json()  

    // Trocando de main

    document.getElementById('catalogo-sliders').style.display = 'none'
    document.querySelector('.modal-pesquisa').style.display = 'flex'

    // Carregando imagens relacionadas a pesquisa

    for (let i=0;i<bodyJson_filme.results.length;i++) {
        let background_filme = bodyJson_filme.results[i].backdrop_path

        if (background_filme != null) {
            let image = document.createElement('input')
            image.type = 'image'
            image.className = 'item-search'
            image.src = `https://image.tmdb.org/t/p/w500${background_filme}`
            images.append(image)
        }
    }

    // Carregando textos relacionados

    for (let i=0;i<5;i++) {
        let nome_filme = bodyJson_filme.results[i].title

        if (nome_filme != null) {
            let li = document.createElement('li')
            li.innerText = nome_filme
            ul.append(li)
        }
    }
}