// Mostrando na tela de Mudar foto

document.getElementById("foto-perfil").src = imagemPerfil
document.getElementById("name-perfil").innerText = nomePerfil.replace("%20", " ")

document.getElementById('imagem-atual').src = imagemPerfil

function Click_Image(image) {
    document.getElementById('imagem-nova').src = image
}

function Mudar_Imagem() {
    let nova_imagem = document.getElementById('imagem-nova').src

    window.location.href = `Editar.html?Usuario=${nomeUsuario}&Imagem=${nova_imagem}&Numero=${numero_perfil}&Nome=${nomePerfil}`
}