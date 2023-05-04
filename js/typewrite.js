const messages = ["Este é um texto feito usando js, para dar mais realismo ao efeito", "e contento vários textos"]
const speed = 90
let textPosition = 0
const button = document.querySelector(".init")
const element = document.querySelector("#message");

function typewriter(message, shouldErase) {
    element.innerHTML = message.substring(0, textPosition)
    if(textPosition++ !== message.length) {
        setTimeout(() => typewriter(message, shouldErase), speed)
    }

//     erase
//     ok, there is a error here, the shouldErase is not been passed correctly.
    if(shouldErase && textPosition >= message.length){
        setTimeout(() => erase(message), 2000)
    }
}

function erase(message) {
    setInterval(() => {
        if(textPosition === 0) {
            return null
        }
        console.debug('it happened')
        element.textContent = message.substring(0, textPosition - 1)
        textPosition -= 1;
    }, speed)
}

function manyWords() {
    if(messages.length++ === -1) {
        return null
    }

    typewriter(messages[0], true)
    // typewriter(messages[1], false)
}
button.addEventListener('click', erase)

window.addEventListener("load", manyWords)

