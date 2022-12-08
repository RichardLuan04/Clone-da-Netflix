// Mostrando na tela de editar

document.getElementById("campo-imagem").src = JSON.parse(localStorage.getItem(nomeUsuario)).img
document.getElementById("campo-nome").value = JSON.parse(localStorage.getItem(nomeUsuario)).nome.replace("%20", " ")