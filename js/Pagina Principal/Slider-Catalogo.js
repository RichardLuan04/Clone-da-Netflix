// Slider apenas para series para maratonar - abreviação = spm

let corrente_itens_spm = 0

const controle_spm = document.querySelectorAll(".control-spm")
const itens_spm = document.querySelectorAll(".item-spm")
const max_itens_spm = itens_spm.length

controle_spm.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_spm -= 5: corrente_itens_spm += 5

        if (corrente_itens_spm >= max_itens_spm){
            corrente_itens_spm = 0
        }

        if (corrente_itens_spm < 0) {
            corrente_itens_spm = max_itens_spm - 1
        }

        itens_spm[corrente_itens_spm].scrollIntoView({
            inline: "start",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para Continuar assistindo como - abreviação = cam

let corrente_itens_cam = 0

const controle_cam = document.querySelectorAll('.control-cam')
const itens_cam = document.querySelectorAll('.item-cam')
const max_itens_cam = itens_cam.length

controle_cam.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_cam -= 5: corrente_itens_cam += 5

        if (corrente_itens_cam >= max_itens_cam) {
            corrente_itens_cam = 0
        }

        if ( corrente_itens_cam < 0) {
            corrente_itens_cam = max_itens_cam - 1
        }

        itens_cam[corrente_itens_cam].scrollIntoView({
            inline: 'start',
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para Em Alta - abreviação = alta

let corrente_itens_alta = 0

const controle_alta = document.querySelectorAll('.control-alta')
const itens_alta = document.querySelectorAll('.item-alta')
const max_itens_alta = itens_alta.length

controle_alta.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_alta -= 5: corrente_itens_alta += 5

        if (corrente_itens_alta >= max_itens_alta) {
            corrente_itens_alta = 0
        }

        if ( corrente_itens_alta < 0) {
            corrente_itens_alta = max_itens_alta - 1
        }

        itens_alta[corrente_itens_alta].scrollIntoView({
            inline: 'start',
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para Filmes de ação - abreviação = fda

let corrente_itens_fda = 0

const controle_fda = document.querySelectorAll('.control-fda')
const itens_fda = document.querySelectorAll('.item-fda')
const max_itens_fda = itens_fda.length

controle_fda.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_fda -= 5: corrente_itens_fda += 5

        if (corrente_itens_fda >= max_itens_fda) {
            corrente_itens_fda = 0
        }

        if ( corrente_itens_fda < 0) {
            corrente_itens_fda = max_itens_fda - 1
        }

        itens_fda[corrente_itens_fda].scrollIntoView({
            inline: 'start',
            behavior: "smooth",
            block: "nearest"
        })
    })
})