// Mostrando na tela de Mudar foto
debugger
document.getElementById("foto-perfil").src = JSON.parse(localStorage.getItem('user')).img
document.getElementById("name-perfil").innerText = JSON.parse(localStorage.getItem('user')).usuario.replace("%20", " ")