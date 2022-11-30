function Gerenciar_Perfil() {

    document.getElementById("titulo").style.display = 'none'
    document.querySelector(".text-gerenciar").classList.add("title-active")

    let filtro = document.querySelectorAll(".filtro")
    for (let i=0; i<filtro.length; i++) {
        filtro[i].classList.add("filtro-active")
    }

    document.getElementById("botao-gerenciar").style.display = 'none'
    document.querySelector(".botao-concluir").classList.add("botao-concluir-active")

    //Ativando animação do main
    document.querySelector(".body").classList.add("body-animation")
}

function Concluir_Perfis(){
    document.getElementById("titulo").style.display = 'flex'
    document.querySelector(".text-gerenciar").classList.remove("title-active")

    let filtro = document.querySelectorAll(".filtro")
    for (let i=0; i<filtro.length; i++) {
        filtro[i].classList.remove("filtro-active")
    }

    document.getElementById("botao-gerenciar").style.display = 'flex'
    document.querySelector(".botao-concluir").classList.remove("botao-concluir-active")

    //Ativando animação do main
    document.querySelector(".body").classList.remove("body-animation")
}

let callback = 0
function Tela_Editar(nome) {
    
    callback += 1
    if(window.location.href == 'http://127.0.0.1:5500/pages/Editar.html'){ //Mudar para pagina no fim
        if (callback < 2){
            Tela_Editar(nome)
        } else if (callback == 2) {
            let nome_perfil = nome
            return nome_perfil
        }
    } else {
        window.location.href = 'Editar.html'
    }
}

if (window.location.href != 'http://127.0.0.1:5500/pages/Perfis.html') { //Mudar para pagina no fim
    document.getElementById("campo-nome").value = Tela_Editar()     
} 

