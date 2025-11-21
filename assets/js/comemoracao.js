let alunos = [
    "Agatha Iasmin Koschel do Nascimento",
    "Ana Clara Furtado Goudinho",
    "Arthur Alexandre Abbruzzini",
    "Arthur Luiz Beccari",
    "Arthur Marcos Serpa Martins",
    "Arthur Soglia Veronica",
    "Artur Ximendes Del Guerso",
    "Augusto Gonçalves Dias",
    "Brenda Julya de Souza Freitas da Silva",
    "Bryan Prinz da Silva",
    "Daniel Domingos Pereira",
    "Davi Schoenardie de Almeida",
    "Eduardo Corrêa da Cruz",
    "Eric Debarba Scapini",
    "Érick Miguel Schuck",
    "Francisco Lisboa da Silva Lima",
    "Giovanni Felipe Burgo",
    "Guilherme Tomaz Silva",
    "Helena Neis da Silva",
    "João Francisco Luchtenberg Ventura",
    "João Paulo Fagundes",
    "João Victor de Abreu Cunha",
    "João Vitor Galiotto de Souza",
    "João Vitor Santos",
    "Jonas Luiz Marin",
    "Lucas Pereira",
    "Manuela Cristina Torres Guimarães",
    "Mateus Queiroz Logrado",
    "Mateus Zandona Krieger",
    "Nicollas José Prim",
    "Nícollas Lopes do Nascimento",
    "Pedro Rafael Santiago",
    "Ruan Geraldo",
    "Vinícius de Bona Ruas",
    "Yan Bueno Goulart"
];

let codAlunos = [
    "/assets/img/alunoNA.png", "/assets/img/aluno1.png", "/assets/img/aluno2.png", "/assets/img/aluno3.png", "/assets/img/aluno4.png", "/assets/img/aluno5.png", "/assets/img/aluno6.png", "/assets/img/aluno7.png", "/assets/img/aluno8.png", "/assets/img/aluno9.png", "/assets/img/aluno10.png", "/assets/img/aluno11.png", "/assets/img/aluno12.png", "/assets/img/aluno13.png", "/assets/img/aluno14.png", "/assets/img/aluno15.png", "/assets/img/aluno16.png", "/assets/img/aluno17.png", "/assets/img/aluno18.png", "/assets/img/aluno19.png", "/assets/img/aluno20.png", "/assets/img/aluno21.png", "/assets/img/aluno22.png", "/assets/img/aluno23.png", "/assets/img/aluno24.png", "/assets/img/aluno25.png", "/assets/img/aluno26.png", "/assets/img/aluno27.png", "/assets/img/aluno28.png", "/assets/img/aluno29.png", "/assets/img/aluno30.png", "/assets/img/aluno31.png", "/assets/img/aluno32.png", "/assets/img/aluno33.png", "/assets/img/aluno34.png"
];

window.addEventListener('load', () => {
    let lista = document.getElementById('alunos')

    for (let i = 0; i < alunos.length; i++) {
        lista.innerHTML += `<option value='${alunos[i]}'>${alunos[i]}</option>`
    }


})

document.getElementById('but-comemorar').addEventListener('click', () => {
    let salvarIdAluno = 0
    let salvarAluno = ''

    for (let i = 0; i < alunos.length; i++) {
        if (document.getElementById('aluno').value == alunos[i]) {
            salvarIdAluno = i
            salvarAluno = alunos[i]
        }
    }

    // Criar imagem do aluno
    let image = document.createElement('img')
    image.src = codAlunos[salvarIdAluno]
    image.alt = salvarAluno
    image.style.width = '400px'
    image.style.borderRadius = '20px'
    image.style.border = '4px solid white'
    image.style.boxShadow = '0 0 25px white'

    // Colocar na tela
    let container = document.getElementById('container-aluno')
    container.innerHTML = ''
    container.appendChild(image)

    // Música
    let musica = document.getElementById('musica-comemoracao')
    musica.currentTime = 0
    musica.volume = 0 // começa mudo
    musica.play()

    document.getElementById('textao').innerText = `🎉 ${salvarAluno.toUpperCase()}! 🎉`

    // Crescimento gradual do volume (2 segundos)
    let vol = 0
    let intervaloVol = setInterval(() => {
        vol += 0.02
        if (vol >= 1) {
            vol = 1
            clearInterval(intervaloVol)
        }
        musica.volume = vol
    }, 40)

    // Mostrar tela
    let tela = document.getElementById('tela-comemoracao')
    tela.style.display = 'flex'

    // Explosão inicial
    confetti({
        particleCount: 300,
        spread: 120,
        origin: { y: 0.6 }
    })

    // document.querySelector('body').style.backgroundColor = '#b8002eff'

    // 🌧️ **Chuva constante infinita de confete**
    let chuvaAtiva = true
    function chuvaDeConfete() {
        if (!chuvaAtiva) return
        confetti({
            particleCount: 8,
            spread: 70,
            origin: { x: Math.random(), y: 0 }
        })
        requestAnimationFrame(chuvaDeConfete)
    }
    chuvaDeConfete()

    // Remover tela ao clicar
    tela.addEventListener('click', () => {
        tela.style.display = 'none'
        musica.pause()
        chuvaAtiva = false
        // document.querySelector('body').style.backgroundColor = '#f8f8f8'
    })
})
