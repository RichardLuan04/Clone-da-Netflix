function Entrar_index() {
    let campo_texto = document.getElementById("campo-email").value
    if (campo_texto != "") {
        window.location.href = 'pages/Perfis.html'
    } else {
        alert("Preencha o campo de email!")
    }
}

function Entrar() {
    let campo_email = document.getElementById("email-telefone").value
    let campo_senha = document.getElementById("Senha").value

    if (campo_email != "" && campo_senha != "") {
        window.location.href = 'pages/Perfis.html'
    } else {
        alert("Preencha todos os campos de textos!")
    }
}

document.getElementById("campo-email").addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        Entrar_index()
    }
})

document.getElementById("email-telefone").addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        Entrar()
    }
})
document.getElementById("Senha").addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        Entrar()
    }
})