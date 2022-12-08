// Mostrando na tela de Mudar foto

document.getElementById("foto-perfil").src = JSON.parse(localStorage.getItem(nomeUsuario)).img
document.getElementById("name-perfil").innerText = JSON.parse(localStorage.getItem(nomeUsuario)).nome.replace("%20", " ")