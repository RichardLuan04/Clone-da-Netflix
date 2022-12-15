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

// Função para mostrar modal de confirmação

const tela_fotos = document.querySelector('.principal')
const modal_confirma = document.querySelector(".modal")


function Modal_Confirmar (image) {
    tela_fotos.style.display = 'none'
    modal_confirma.style.display = 'flex'

    Click_Image(image)
}

function Desativar_Modal () {
    tela_fotos.style.display = 'flex'
    modal_confirma.style.display = 'none'
}

// Funções para passar a imagem de perfil para o editar por url

function Passar_Nome(usuario, imagem, numero, nome) {
    window.location.href = `Editar.html?Usuario=${usuario}&Imagem=${imagem}&Numero=${numero}&Nome=${nome}`
}

function Consulta(parametro) {  
    
    let loc = location.search.substring(1, location.search.length)
    let parametro_valor = false  
    let parametros = loc.split("&")
    for (i=0; i<parametros.length;i++) {   
        parametro_name = parametros[i].substring(0,parametros[i].indexOf('='))  
        if (parametro_name == parametro) {                                          
            parametro_valor = parametros[i].substring(parametros[i].indexOf('=')+1)   
        }   
    }   
    if (parametro_valor) {   
        return parametro_valor   
    }   
    else {   
        return undefined
    }   
}

// Local storage 
let numero_perfil = Consulta('Numero')
let nomeUsuario = Consulta('Usuario')
let nomePerfil = Consulta('Nome')
let imagemPerfil = Consulta('Imagem')

let perfil = {
    numero: numero_perfil,
    usuario: nomeUsuario,
    nome: nomePerfil,
    img: imagemPerfil
}
    
let perfilJson = JSON.stringify(perfil)
localStorage.setItem(nomeUsuario, perfilJson)

function Salvar() {
        
    nomePerfil = document.getElementById('campo-nome').value
    imagemPerfil = document.getElementById('campo-imagem').src
    
    perfil = {
        numero: numero_perfil,
        usuario: nomeUsuario,
        nome: nomePerfil,
        img: imagemPerfil
    }

    perfilJson = JSON.stringify(perfil)
    localStorage.setItem(nomeUsuario, perfilJson)

    window.location.href = `Perfis.html`
}

function Tela_Trocar_Imagem() {
    window.location.href = `Mudar Foto.html?Usuario=${nomeUsuario}&Numero=${numero_perfil}&Imagem=${imagemPerfil}&Nome=${nomePerfil}`
} 

function Voltar() {
    window.history.back()
}

function Voltar_perfil() {
    window.location.href = 'Perfis.html'
}