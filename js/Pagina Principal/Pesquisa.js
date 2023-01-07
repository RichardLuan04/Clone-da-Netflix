/* 
# API

- TMDB key = bf345adcb24f454dbfd43680c4760cf5

- Site: https://www.themoviedb.org/settings/api?language=pt-BR

- Response para imagens = https://image.tmdb.org/t/p/w500
- Response para pesquisar por midias = https://api.themoviedb.org/3/search/multi?api_key={key}&query={Serie}&language={língua}
*/

document.addEventListener("keyup", function() {

	let campo_pesquisa = document.getElementById("campo-texto")

	if (campo_pesquisa != null) {
		setTimeout(() => {
			Search()    
		},2000)
	}
})

async function Search () {

    // Resetando o html 

    let images = document.querySelector('.imagens-pesquisa')
    let ul = document.getElementById('lista-nomes')

    ul.innerHTML = ''
    images.innerHTML = ''

    const key = 'bf345adcb24f454dbfd43680c4760cf5'
    let language = 'PT-br'
    let search = document.getElementById("campo-texto").value

    // Fazendo busca por midias

    let endpoint_media = `https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${search}&language=${language}`
    let response_media = await fetch(endpoint_media)
    let bodyJson_media = await response_media.json()

    // Trocando de main

    document.getElementById('catalogo-sliders').style.display = 'none'
    document.querySelector(".modal-lista").style.display = 'none'
    document.querySelector(".bombando").style.display = 'none'
    document.querySelector(".series-modal").style.display = 'none' 
    document.querySelector('.modal-pesquisa').style.display = 'flex'

    document.getElementById('imagem-principal').style.display = 'flex'
    document.getElementById("video-principal").style.display = 'none'

    // Carregando imagens relacionadas a pesquisa e textos relacionados

    for (let i=0;i<bodyJson_media.results.length;i++) {
        if (bodyJson_media.results[i].vote_average >= 6.0) {
            let background_media = bodyJson_media.results[i].poster_path

            if (background_media != null) {
                let image = document.createElement('input')
                image.type = 'image'
                image.className = 'item-search'
                image.setAttribute('onclick', `Mais_Informações("${bodyJson_media.results[i].id}","${bodyJson_media.results[i].media_type}")`)
                image.src = `https://image.tmdb.org/t/p/w500${background_media}`
                images.append(image)
            }
            
            let name_media = bodyJson_media.results[i].original_name

            if (name_media != null && i < 10) {
                let li = document.createElement('li')
                li.innerText = name_media
                ul.append(li)
            }
        }
    }
}

/*
 - Response para ver temporadas de serie e informações dos episodios = 
   https://api.themoviedb.org/3/tv/{serie_id}/season/{numero_temporada}?api_key={chave}&language={lingua}

 - Response do episodio separado = 
   https://api.themoviedb.org/3/tv/{serie_id}/season/{numero_temporada}/episode/{numero_episodio}?api_key={chave}&language={lingua}

- Response para pesquisar por popularidade =
  https://api.themoviedb.org/3/movie/popular?api_key=bf345adcb24f454dbfd43680c4760cf5&language=pt-BR&page=1

- Response para recomendações =
  https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=bf345adcb24f454dbfd43680c4760cf5&language=pt-BR&page=1

- Response para classificação de idade = 
  https://api.themoviedb.org/3/tv/{tv_id}/content_ratings?api_key=bf345adcb24f454dbfd43680c4760cf5&language=pt-BR
*/