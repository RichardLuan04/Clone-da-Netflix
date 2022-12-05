let corrente_itens = 0

// Slider apenas para figuras classica

const controle_classico = document.querySelectorAll(".control-classico")
const itens_classico = document.querySelectorAll(".item-classico")
const max_itens_classico = itens_classico.length

controle_classico.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 6: corrente_itens += 6

        if (corrente_itens >= max_itens_classico){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_itens_classico - 1
        }

        itens_classico[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para Elite

const controle_elite = document.querySelectorAll(".control-elite")
const itens_elite = document.querySelectorAll(".item-elite")
const max_Itens = itens_elite.length

controle_elite.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 8: corrente_itens += 8

        if (corrente_itens >= max_Itens){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_Itens - 1
        }

        itens_elite[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para La casa de papel

const controle_la = document.querySelectorAll(".control-la")
const itens_la = document.querySelectorAll(".item-la")
const max_itens_la = itens_la.length

controle_la.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 6: corrente_itens += 6

        if (corrente_itens >= max_itens_la){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_itens_la - 1
        }

        itens_la[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider para The umbrella academy

const controle_umbrella = document.querySelectorAll(".control-umbrella")
const itens_umbrella = document.querySelectorAll(".item-umbrella")
const max_itens_umbrella = itens_umbrella.length

controle_umbrella.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 6: corrente_itens += 6

        if (corrente_itens >= max_itens_umbrella){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_itens_umbrella - 1
        }

        itens_umbrella[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider apenas para Round 6

const controle_round = document.querySelectorAll(".control-round")
const itens_round = document.querySelectorAll(".item-round")
const max_itens_round = itens_round.length

controle_round.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 9: corrente_itens += 9

        if (corrente_itens >= max_itens_round){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_itens_round - 1
        }

        itens_round[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider unico para Stranger Things

const controle_stranger = document.querySelectorAll(".control-stranger")
const itens_stranger = document.querySelectorAll(".item-stranger")
const max_itens_stranger = itens_stranger.length

controle_stranger.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 8: corrente_itens += 8

        if (corrente_itens >= max_itens_stranger){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_itens_stranger - 1
        }

        itens_stranger[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider unico para Cobra Kai

const controle_cobra = document.querySelectorAll(".control-cobra")
const itens_cobra = document.querySelectorAll(".item-cobra")
const max_itens_cobra = itens_cobra.length

controle_cobra.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 9: corrente_itens += 9

        if (corrente_itens >= max_itens_cobra){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_itens_cobra - 1
        }

        itens_cobra[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider unico para Lucifer

const controle_lucifer = document.querySelectorAll(".control-lucifer")
const itens_lucifer = document.querySelectorAll(".item-lucifer")
const max_itens_lucifer = itens_lucifer.length

controle_lucifer.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 6: corrente_itens += 6

        if (corrente_itens >= max_itens_lucifer){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_itens_lucifer - 1
        }

        itens_lucifer[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})

// Slider unico para Sex education

const controle_sex = document.querySelectorAll(".control-sex")
const itens_sex = document.querySelectorAll(".item-sex")
const max_itens_sex = itens_sex.length

controle_sex.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left')

        isLeft ? corrente_itens -= 7: corrente_itens += 7

        if (corrente_itens >= max_itens_sex){
            corrente_itens = 0
        }

        if (corrente_itens < 0) {
            corrente_itens = max_itens_sex - 1
        }

        itens_sex[corrente_itens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
    })
})