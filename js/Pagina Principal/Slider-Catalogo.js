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

// Slider apenas para Series pós apocalipticas - abreviação = spa

let corrente_itens_spa = 0

const controle_spa = document.querySelectorAll('.control-spa')
const itens_spa = document.querySelectorAll('.item-spa')
const max_itens_spa = itens_spa.length

controle_spa.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_spa -= 5: corrente_itens_spa += 5

        if (corrente_itens_spa >= max_itens_spa) {
            corrente_itens_spa = 0
        }

        if ( corrente_itens_spa < 0) {
            corrente_itens_spa = max_itens_spa - 1
        }

        itens_spa[corrente_itens_spa].scrollIntoView({
            inline: 'start',
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para top 10 Filmes - abreviação - topFilme

let corrente_itens_topFilme = 0

const controle_topFilme = document.querySelectorAll('.control-topFilme')
const itens_topFilme = document.querySelectorAll('.item-topFilme')
const max_itens_topFilme = itens_topFilme.length

controle_topFilme.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_topFilme -= 5: corrente_itens_topFilme += 5

        if (corrente_itens_topFilme >= max_itens_topFilme) {
            corrente_itens_topFilme = 0
        }

        if ( corrente_itens_topFilme < 0) {
            corrente_itens_topFilme = max_itens_topFilme - 1
        }

        itens_topFilme[corrente_itens_topFilme].scrollIntoView({
            inline: 'start',
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas series policiais - abreviação - sp

let corrente_itens_sp = 0

const controle_sp = document.querySelectorAll('.control-sp')
const itens_sp = document.querySelectorAll('.item-sp')
const max_itens_sp = itens_sp.length

controle_sp.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_sp -= 5: corrente_itens_sp += 5

        if (corrente_itens_sp >= max_itens_sp) {
            corrente_itens_sp = 0
        }

        if ( corrente_itens_sp < 0) {
            corrente_itens_sp = max_itens_sp - 1
        }

        itens_sp[corrente_itens_sp].scrollIntoView({
            inline: 'start',
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas lançamentos - abreviação - lan

let corrente_itens_lan = 0

const controle_lan = document.querySelectorAll('.control-lan')
const itens_lan = document.querySelectorAll('.item-lan')
const max_itens_lan = itens_lan.length

controle_lan.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_lan -= 5: corrente_itens_lan += 5

        if (corrente_itens_lan >= max_itens_lan) {
            corrente_itens_lan = 0
        }

        if ( corrente_itens_lan < 0) {
            corrente_itens_lan = max_itens_lan - 1
        }

        itens_lan[corrente_itens_lan].scrollIntoView({
            inline: 'start',
            behavior: "smooth",
            block: "nearest"
        })
    })
})