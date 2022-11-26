const modal = document.querySelector(".modal-login")
const page = document.querySelector('.principal')
const overlay = document.querySelector(".opacidade-principal")

function Mostrar_Modal() {
    modal.style.display = 'flex'
    page.style.display = 'none'
}

function Fechar_Modal() {
    modal.style.display = 'none'
    page.style.display = 'flex'
}

overlay.addEventListener('click', function(e) {
    if (e.target == this) Fechar_Modal() 
})