function Ir_Catalogo(usuario, imagem, numero, nome) {
    if (JSON.parse(localStorage.getItem(`${usuario}`))) {
        window.location.href = `Catalogo/Inicio.html?usuario=${usuario}&imagem=${imagem}&numero=${numero}&nome=${nome}`
    } else {
        alert("Crie seu perfil para entrar")
    }
}