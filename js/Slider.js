// Slider apenas para figuras classicas

function Slider(controle, item) {
debugger
    let controles = document.querySelectorAll(controle)
    let itens = document.querySelectorAll(item)
    let max_Itens = itens.length

    let corrente_itens = 0

    controles.forEach((control) => {
        control.addEventListener("click", (e) => {
            let left = e.target.classList.contains('arrow-left')

            left ? corrente_itens -= 6: corrente_itens += 6

            if (corrente_itens >= max_Itens){
                corrente_itens = 0
            }

            if (corrente_itens < 0) [
                corrente_itens = max_Itens - 1
            ]

            itens.forEach(obj => obj.classList.remove('corrente-item'))

            itens[corrente_itens].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest"
            })

            itens[corrente_itens].classList.add("corrente-item")
            console.log(corrente_itens)
        })
    })
}