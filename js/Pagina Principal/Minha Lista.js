const botao_lista = document.querySelector(".lista-botao")
const lista = document.querySelector(".minha-lista")
let minha_lista = []

botao_lista.addEventListener("click", () => {
    let imagem = document.getElementById("preview-imagem").src
    let nome = document.getElementById("titulo-midia").textContent

    let midia = {
        imagem: imagem,
        nome: nome,
    }

    minha_lista.push(midia)

    let nomeUsuario = Consulta('usuario')

    let listaJson = JSON.stringify(minha_lista)
    localStorage.setItem(`Lista-${nomeUsuario}`, listaJson)

    
})