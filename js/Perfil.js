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

// Funções para passar o nome de perfil pra tela de editar por url

function Passar_Nome(nome) {
    window.location.href = `Editar.html?NomePerfil=${nome}`
}

function Consulta(parametro) {  
    
    let loc = location.search.substring(1, location.search.length);   
    let parametro_valor = false;   
    let parametros = loc.split("&");   
    for (i=0; i<parametros.length;i++) {   
        parametro_name = parametros[i].substring(0,parametros[i].indexOf('='));   
        if (parametro_name == parametro) {                                          
            parametro_valor = parametros[i].substring(parametros[i].indexOf('=')+1)   
        }   
    }   
    if (parametro_valor) {   
        return parametro_valor;   
    }   
    else {   
        return undefined;   
    }   
}

// Funções para passar a imagem de perfil para o editar por url

document.getElementById("campo-nome").value = Consulta('NomePerfil');