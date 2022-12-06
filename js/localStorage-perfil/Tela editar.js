// Mostrando na tela de editar

document.getElementById("campo-imagem").src = JSON.parse(localStorage.getItem('user')).img
document.getElementById("campo-nome").value = JSON.parse(localStorage.getItem('user')).usuario.replace("%20", " ")