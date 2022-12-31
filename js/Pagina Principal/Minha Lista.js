const botao_lista = document.querySelector(".lista-botao")
const lista = document.querySelector(".minha-lista")
lista.innerHTML = '' // Resetando sempre que entrar no site

let nomeUsuario = Consulta('usuario')

let minha_lista = []
let midias_Salvas = localStorage.getItem(`Lista-${nomeUsuario}`)


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

botao_lista.addEventListener("click", () => {

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

    alert("Adicionado aos seus favoritos")
})