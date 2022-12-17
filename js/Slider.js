// Slider apenas para figuras classica

let corrente_itens_classico = 0

const controle_classico = document.querySelectorAll(".control-classico")
const itens_classico = document.querySelectorAll(".item-classico")
const max_itens_classico = itens_classico.length

controle_classico.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_classico -= 8: corrente_itens_classico += 8

        if (corrente_itens_classico >= max_itens_classico){
            corrente_itens_classico = 0
        }

        if (corrente_itens_classico < 0) {
            corrente_itens_classico = max_itens_classico - 1
        }

        itens_classico[corrente_itens_classico].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para Elite

let corrente_itens_elite = 0

const controle_elite = document.querySelectorAll(".control-elite")
const itens_elite = document.querySelectorAll(".item-elite")
const max_Itens = itens_elite.length

controle_elite.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_elite -= 8: corrente_itens_elite += 8

        if (corrente_itens_elite >= max_Itens){
            corrente_itens_elite = 0
        }

        if (corrente_itens_elite < 0) {
            corrente_itens_elite = max_Itens - 1
        }

        itens_elite[corrente_itens_elite].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para La casa de papel

let corrente_itens_la = 0

const controle_la = document.querySelectorAll(".control-la")
const itens_la = document.querySelectorAll(".item-la")
const max_itens_la = itens_la.length

controle_la.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_la -= 6: corrente_itens_la += 6

        if (corrente_itens_la >= max_itens_la){
            corrente_itens_la = 0
        }

        if (corrente_itens_la < 0) {
            corrente_itens_la = max_itens_la - 1
        }

        itens_la[corrente_itens_la].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider para The umbrella academy

let corrente_itens_umbrella = 0

const controle_umbrella = document.querySelectorAll(".control-umbrella")
const itens_umbrella = document.querySelectorAll(".item-umbrella")
const max_itens_umbrella = itens_umbrella.length

controle_umbrella.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_umbrella -= 6: corrente_itens_umbrella += 6

        if (corrente_itens_umbrella >= max_itens_umbrella){
            corrente_itens_umbrella = 0
        }

        if (corrente_itens_umbrella < 0) {
            corrente_itens_umbrella = max_itens_umbrella - 1
        }

        itens_umbrella[corrente_itens_umbrella].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para Round 6

let corrente_itens_round = 0

const controle_round = document.querySelectorAll(".control-round")
const itens_round = document.querySelectorAll(".item-round")
const max_itens_round = itens_round.length

controle_round.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_round -= 9: corrente_itens_round += 9

        if (corrente_itens_round >= max_itens_round){
            corrente_itens_round = 0
        }

        if (corrente_itens_round < 0) {
            corrente_itens_round = max_itens_round - 1
        }

        itens_round[corrente_itens_round].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider unico para Stranger Things

let corrente_itens_stranger = 0

const controle_stranger = document.querySelectorAll(".control-stranger")
const itens_stranger = document.querySelectorAll(".item-stranger")
const max_itens_stranger = itens_stranger.length

controle_stranger.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_stranger -= 8: corrente_itens_stranger += 8

        if (corrente_itens_stranger >= max_itens_stranger){
            corrente_itens_stranger = 0
        }

        if (corrente_itens_stranger < 0) {
            corrente_itens_stranger = max_itens_stranger - 1
        }

        itens_stranger[corrente_itens_stranger].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider unico para Cobra Kai

let corrente_itens_cobra = 0

const controle_cobra = document.querySelectorAll(".control-cobra")
const itens_cobra = document.querySelectorAll(".item-cobra")
const max_itens_cobra = itens_cobra.length

controle_cobra.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_cobra -= 9: corrente_itens_cobra += 9

        if (corrente_itens_cobra >= max_itens_cobra){
            corrente_itens_cobra = 0
        }

        if (corrente_itens_cobra < 0) {
            corrente_itens_cobra = max_itens_cobra - 1
        }

        itens_cobra[corrente_itens_cobra].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider unico para Lucifer

let corrente_itens_lucifer = 0

const controle_lucifer = document.querySelectorAll(".control-lucifer")
const itens_lucifer = document.querySelectorAll(".item-lucifer")
const max_itens_lucifer = itens_lucifer.length

controle_lucifer.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_lucifer -= 6: corrente_itens_lucifer += 6

        if (corrente_itens_lucifer >= max_itens_lucifer){
            corrente_itens_lucifer = 0
        }

        if (corrente_itens_lucifer < 0) {
            corrente_itens_lucifer = max_itens_lucifer - 1
        }

        itens_lucifer[corrente_itens_lucifer].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider unico para Sex education

let corrente_itens_sex = 0

const controle_sex = document.querySelectorAll(".control-sex")
const itens_sex = document.querySelectorAll(".item-sex")
const max_itens_sex = itens_sex.length

controle_sex.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens_sex -= 7: corrente_itens_sex += 7

        if (corrente_itens_sex >= max_itens_sex){
            corrente_itens_sex = 0
        }

        if (corrente_itens_sex < 0) {
            corrente_itens_sex = max_itens_sex - 1
        }

        itens_sex[corrente_itens_sex].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})