document.getElementById('nome-perfil-1').innerText = JSON.parse(localStorage.getItem('Usuario%201')).nome.replace("%20", " ")
document.getElementById('usuario-imagem-1').src = JSON.parse(localStorage.getItem('Usuario%201')).img

document.getElementById('nome-perfil-2').innerText = JSON.parse(localStorage.getItem('Usuario%202')).nome.replace("%20", " ")
document.getElementById('usuario-imagem-2').src = JSON.parse(localStorage.getItem('Usuario%202')).img

document.getElementById('nome-perfil-3').innerText = JSON.parse(localStorage.getItem('Usuario%203')).nome.replace("%20", " ")
document.getElementById('usuario-imagem-3').src = JSON.parse(localStorage.getItem('Usuario%203')).img

document.getElementById('nome-perfil-4').innerText = JSON.parse(localStorage.getItem('Usuario%204')).nome.replace("%20", " ")
document.getElementById('usuario-imagem-4').src = JSON.parse(localStorage.getItem('Usuario%204')).img

document.getElementById('nome-perfil-5').innerText = JSON.parse(localStorage.getItem('Usuario%205')).nome.replace("%20", " ")
document.getElementById('usuario-imagem-5').src = JSON.parse(localStorage.getItem('Usuario%205')).img