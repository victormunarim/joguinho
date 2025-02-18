const canvas = document.getElementById('jogoCanvas')
const ctx = canvas.getContext('2d')

document.addEventListener('click', (e) => {
    if (gameOver == true) {
        location.reload()
    }
})

let gameOver = false

const personagem = {
    posicaox: 50,
    posicaoy: canvas.height - 50,
    tamanhox: 50,
    tamanhoy: 50,
}

function desenhaPersonagem() {
    ctx.fillStyle = 'white'
    ctx.fillRect(personagem.posicaox, personagem.posicaoy, personagem.tamanhox, personagem.tamanhoy)
}

const obstaculo = {
    posicaox: canvas.width - 100,
    posicaoy: canvas.height - 100,
    tamanhox: 50,
    tamanhoy: 100,
    velocidade: 20,
}

function desenhaObstaculo() {
    ctx.fillStyle = 'red'
    ctx.fillRect(obstaculo.posicaox, obstaculo.posicaoy, obstaculo.tamanhox, obstaculo.tamanhoy)
}

function atualizaObstaculo() {
    obstaculo.posicaox -= obstaculo.velocidade
}

function verificaColisao() {
    if (
        personagem.posicaox + personagem.tamanhox >= obstaculo.posicaox
    ) {
        houveColisao()
    }
}

function houveColisao() {
    obstaculo.velocidade = 0
    atualizaObstaculo()
    ctx.fillStyle = 'red'
    ctx.fillRect((canvas.width / 2) - 100, (canvas.height / 2) - 50, 200, 100)
    gameOver = true
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    desenhaPersonagem()
    desenhaObstaculo()
    verificaColisao()
    requestAnimationFrame(loop)
    atualizaObstaculo()
    gameOver()
}


loop()