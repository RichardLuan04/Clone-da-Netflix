let user_1 = JSON.parse(localStorage.getItem('Usuario 1'))
let user_2 = JSON.parse(localStorage.getItem('Usuario 2'))
let user_3 = JSON.parse(localStorage.getItem('Usuario 3'))
let user_4 = JSON.parse(localStorage.getItem('Usuario 4'))
let user_5 = JSON.parse(localStorage.getItem('Usuario 5'))

if (user_1) {
    document.getElementById('nome-perfil-1').innerText = JSON.parse(localStorage.getItem('Usuario 1')).nome.replace("%20", " ")
    document.getElementById('usuario-imagem-1').src = JSON.parse(localStorage.getItem('Usuario 1')).img
}

if (user_2) {
    document.getElementById('nome-perfil-2').innerText = JSON.parse(localStorage.getItem('Usuario 2')).nome.replace("%20", " ")
    document.getElementById('usuario-imagem-2').src = JSON.parse(localStorage.getItem('Usuario 2')).img
}

if (user_3) {
    document.getElementById('nome-perfil-3').innerText = JSON.parse(localStorage.getItem('Usuario 3')).nome.replace("%20", " ")
    document.getElementById('usuario-imagem-3').src = JSON.parse(localStorage.getItem('Usuario 3')).img
}

if (user_4) {
    document.getElementById('nome-perfil-4').innerText = JSON.parse(localStorage.getItem('Usuario 4')).nome.replace("%20", " ")
    document.getElementById('usuario-imagem-4').src = JSON.parse(localStorage.getItem('Usuario 4')).img
}

if (user_5) {
    document.getElementById('nome-perfil-5').innerText = JSON.parse(localStorage.getItem('Usuario 5')).nome.replace("%20", " ")
    document.getElementById('usuario-imagem-5').src = JSON.parse(localStorage.getItem('Usuario 5')).img
}