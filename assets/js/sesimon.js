let alunos = [
    "Agatha Iasmin Koschel do Nascimento", "Ana Clara Furtado Goudinho", "Arthur Alexandre Abbruzzini", "Arthur Luiz Beccari", "Arthur Marcos Serpa Martins", "Arthur Soglia Veronica", "Artur Ximendes Del Guerso", "Augusto Gonçalves Dias", "Brenda Julya de Souza Freitas da Silva", "Bryan Prinz da Silva", "Daniel Domingos Pereira", "Davi Schoenardie de Almeida", "Eduardo Corrêa da Cruz", "Eric D. Scapini", "Érick Miguel Schuck", "Francisco Lisboa da Silva Lima", "Giovanni Filipe Burgo", "Guilherme Tomaz Silva", "Helena Neis da Silva", "João Francisco Luchtenberg Ventura", "João Paulo Fagundes", "João Victor de Abreu Cunha", "João Vitor Galiotto de Souza", "João Vitor Santos", "Jonas Luiz Marin", "Lucas Pereira", "Manuela Cristina Torres Guimarães", "Mateus Queiroz Logrado", "Mateus Zandona Krieger", "Nicollas Jose Prim", "Nicollas Lopes do Nascimento", "Pedro Rafael Santiago", "Ruan Geraldo", "Vinícius de Bona Ruas", "Yan Bueno Goulart",
];

let ataquesAlunos = {
    "Agatha Iasmin Koschel do Nascimento": [
        ["Chute Otaku", -3],
        ["Soco de Mangá", -4],
        ["Golpe Animado", -5]
    ],
    "Ana Clara Furtado Goudinho": [
        ["Patada do Golden", -4],
        ["Puxão de Cabelo", -3],
        ["Vassourada", -4]
    ],
    "Arthur Alexandre Abbruzzini": [
        ["Golpe Abuzado", -5],
        ["Chute Abuzado", -3],
        ["Soco Abuzado", -4]
    ],
    "Arthur Luiz Beccari": [
        ["Golpe X", -5],
        ["Chute X", -3],
        ["Soco X", -4]
    ],
    "Arthur Marcos Serpa Martins": [
        ["Explosão de Código", -4],
        ["Chute da Cobra", -3],
        ["Soco de Python", -4]
    ],
    "Arthur Soglia Veronica": [
        ["TDAH mortal", -3],
        ["edição épica", +5],
        ["Bonecas Infláveis", -4]
    ],
    "Artur Ximendes Del Guerso": [
        ["raiva incontrolável", -4],
        ["capoeira proibida", -5],
        ["Investida Poderosa", -3]
    ],
    "Augusto Gonçalves Dias": [
        ["vai a merda scapini", -20], // (Apenas se for eric scapini)
        ["shadow boxing", -10],
        ["kamikaze", +6]
    ],
    "Brenda Julya de Souza Freitas da Silva": [
        ["Ataque Silencioso", -4],
        ["Cash Dash", -3],
        ["Apunhalada do Marketing", -4]
    ],
    "Bryan Prinz da Silva": [
        ["Soco de JavaScript", -4],
        ["Martelada do Vidraceiro", -5],
        ["Hipnose dos Espelhos", -9]
    ],
    "Daniel Domingos Pereira": [
        ["Toon Force", -9],
        ["Lança Guarda-Chuva", -4],
        ["Soco Animado", -5]
    ],
    "Davi Schoenardie de Almeida": [
        ["Soneca Profunda", +10],
        ["cadeirada Psíquica", -6],
        ["fumaça aniquiladora", -4]
    ],
    "Eduardo Corrêa da Cruz": [
        ["Soco do Minecraft", -4],
        ["Golpe do Baiano", -5],
        ["Frete Grátis", -3]
    ],
    "Eric D. Scapini": [
        ["back-hand mortal", -6],
        ["visca barça", +5],
        ["Ataque das Borboletas", -8]
    ],
    "Erick Miguel Schuck": [
        ["Lança de nariz", -5],
        ["Foice de Perna", -4],
        ["Ataque Fertil", -3]
    ],
    "Francisco Lisboa da Silva Lima": [
        ["Puta biscati", -4],
        ["Chute Farroupilha", -5],
        ["Golpe Gaúcho", -3]
    ],
    "Giovanni Felipe Burgo": [
        ["Soco da Torradeira", -4],
        ["Impacto do 0", -5],
        ["Ataque do Lobo Mal", -3]
    ],
    "Guilherme Tomaz Silva": [
        ["Marido de Aluguel", -4],
        ["Tornado de Açaí", -5],
        ["Hipnose do Teclado", -3]
    ],
    "Helena Neis da Silva": [
        ["Granada de Cuscuz", -4],
        ["Chute de Mainha", -5],
        ["Soco do Nordeste", -3]
    ],
    "João Francisco Luchtenberg Ventura": [
        ["Pulo do Jaguará", -5],
        ["Vaca Tossindo", -4],
        ["É Bucha mesmo", -3]
    ],
    "João Paulo Fagundes": [
        ["Simplesmente odeio o Bryan", -20], // (‘Apenas se for o Bryan’)
        ["Arrumar Cabelo", +3],
        ["Garras de ANA", -6]
    ],
    "João Victor de Abreu Cunha": [
        ["Imposto do Sicredi", -3],
        ["Marretada do Frankie", -10], // (apenas com o JS)
        ["Soco do chatGPT", -4]
    ],
    "João Vitor Galiotto de Souza": [
        ["Soco da Jambá", -4],
        ["Ataque do PCD", -3],
        ["Ataque Flácido", -5]
    ],
    "João Vitor Santos": [
        ["Soco de JS", -3],
        ["Rajada de PHP", -6],
        ["Tapa sem Mouse", -4]
    ],
    "Jonas Luiz Marin": [
        ["Transtorno de Identidade", -5],
        ["DÃRR", -3],
        ["Punho de Bergamota", -4]
    ],
    "Lucas Pereira": [
        ["Narvalhada Crítica", -4],
        ["Tesourada", -5],
        ["Capa Voadora", -3] // (‘Deixa um rodada sem jogar’)
    ],
    "Lucas Wagner Salim": [
        ["Pancada Snorlax", -4],
        ["IHHAAAAAAAAAAAAA", -5],
        ["Chute açúcarado", -3]
    ],
    "Manuela Cristina Torres Guimarães": [
        ["Laçada", -4],
        ["Golpe Boiadeira", -3],
        ["Pancada Rancheira", -5]
    ],
    "Mateus Queiroz Logrado": [
        ["Soco Logrado", -5],
        ["Tapa Intelectual", -4],
        ["Ondas de Raciocínio", -3]
    ],
    "Mateus Zandona Krieger": [
        ["Ataque de fumaça", -5],
        ["Chama meu Advogado", -8],
        ["Ir ao banheiro", +4] // (‘demora um turno’)
    ],
    "Nicollas Jose Prim": [
        ["Soco da Rita Lee", -4],
        ["Golpe de Miopia", -5],
        ["espingarda cobain", -3]
    ],
    "Nicollas Lopes do Nascimento": [
        ["Apaixonite de Erick", -5],
        ["Encoxa Erick", +4], // (‘Apenas com o Erick’)
        ["Soco Editado", -3]
    ],
    "Pedro Rafael Santiago": [
        ["Voadora de Polenguinho", -4],
        ["Confusão", -3],
        ["Celibato Infinito", -5]
    ],
    "Ruan Geraldo": [
        ["Rei do Açougue", -7],
        ["Picadinho Poderoso", -4],
        ["Costelada Bruta", -3]
    ],
    "Vinícius de Bona Ruas": [
        ["Golpe do Defer", -5],
        ["Chicote de Glitters", -4],
        ["Mordida", -3]
    ],
    "Yan Bueno Goulart": [
        ["Lâmina de Python", -4],
        ["Ataque da Lua", -5],
        ["Chute do Roblox", -3]
    ]
};


function setValueRandom(max, min) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}

window.addEventListener('load', () => {
    let lista = document.getElementById('alunos')

    for (let i = 0; i < alunos.length; i++) {
        lista.innerHTML += `<option value='${alunos[i]}'>${alunos[i]}</option>`
    }
})

let personagem = '', adversario = ''
let numberPerson = 0, numberAdver = 0
let vidaPerson = 200, vidaAdver = 200
let screen = document.getElementById('container')

function saveConfig() {
    let counter = 0
    for (let i = 0; i < alunos.length; i++) {
        if (document.getElementById('aluno').value == alunos[i]) {
            counter++
        }
    }
    if (counter == 1) {
        personagem = document.getElementById('aluno').value
        console.log('Seu personagem escolhido: ' + personagem)
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i] == personagem) {
                alunos.splice(i, 1)
                numberPerson = i
            }
        }
        numberAdver = setValueRandom(alunos.length, 0)
        if (numberAdver >= numberPerson) {
            adversario = alunos[numberAdver - 1]
        } else {
            adversario = alunos[numberAdver]
        }
        console.log('Seu adversário será: ' + adversario)

        console.log(`Seu número: ${numberPerson} || Número do adversário: ${numberAdver}`)
        iniciar()
    } else {
        alert('Personagem Inválido')
    }
}

let scren = document.getElementById('quem')

function iniciar() {
    setTimeout(()=>{
        document.querySelector('#container').style.display = 'none'
    }, 1000)
    document.querySelector('#container').style.height = '0'
    document.getElementById('luta').style.display = 'flex'
    document.getElementById('placar').style.display = 'flex'

    scren.innerHTML = personagem

    let nomeJog = document.querySelector('#nameJogador')
    let imgJog = document.querySelector('#imgJogador')
    let ata1Jog = document.querySelector('#golpe1Jogador')
    let ata2Jog = document.querySelector('#golpe2Jogador')
    let ata3Jog = document.querySelector('#golpe3Jogador')

    nomeJog.innerHTML = personagem
    imgJog.src = `/assets/img/aluno${numberPerson}.png`
    imgJog.alt = personagem
    ata1Jog.textContent = ataquesAlunos[personagem][0][0]
    ata2Jog.textContent = ataquesAlunos[personagem][1][0]
    ata3Jog.textContent = ataquesAlunos[personagem][2][0]



    let nomeAdv = document.querySelector('#nameAdversario')
    let imgAdv = document.querySelector('#imgAdversario')

    nomeAdv.innerHTML = adversario
    imgAdv.src = `/assets/img/aluno${numberAdver}.png`
    imgAdv.alt = adversario
}

let contAdver = 100
let contJogad = 100

function ataque(atack) {
    let lifeJogador = document.querySelector('#porcentagemJogador');
    let lifeAdversario = document.querySelector('#porcentagemAdversario');
    let buttons = document.querySelectorAll('.btn-attack');

    // Desabilitar botões durante o ataque
    buttons.forEach(button => button.disabled = true);

    if (scren.innerHTML == personagem) {
        let oAtaque = ataquesAlunos[personagem][atack][1];

        if (oAtaque < 0) {
            vidaAdver += oAtaque * 10;
            contAdver += oAtaque * 5;
            lifeAdversario.style.width = contAdver + '%';
        } else {
            vidaPerson += oAtaque * 10;
            contJogad += oAtaque * 5;
            lifeJogador.style.width = contJogad + '%';
        }

        gameOver();

        scren.innerHTML = adversario;
        setTimeout(() => {
            ataqueAdversario();
            buttons.forEach(button => button.disabled = false);
        }, 2000);
    }
}

function ataqueAdversario() {
    let qualGolpe = setValueRandom(2, 0)
    let lifeJogador = document.querySelector('#porcentagemJogador')
    let lifeAdversario = document.querySelector('#porcentagemAdversario')
    if (scren.innerHTML == adversario) {
        let oAtaque = ataquesAlunos[adversario][qualGolpe][1]

        if ((oAtaque <= -1)||(oAtaque == personagem)) {

            let calculoPor = 0
            
            if(oAtaque == personagem) {
                vidaPerson += -200
                calculoPor = -100 
            } else {
                vidaPerson += oAtaque * 10
                calculoPor = oAtaque * 5
            }

            lifeJogador.style.width = contJogad + calculoPor + '%'
            console.log("Vida do Personagem: " + vidaPerson)

            contJogad += calculoPor
        } else {
            vidaAdver += oAtaque * 10

            let calculoPor = oAtaque * 5

            lifeAdversario.style.width = contAdver + calculoPor + '%'
            console.log("Vida do Adversario: " + vidaAdver)

            contAdver += calculoPor
        }

        gameOver()

        scren.innerHTML = personagem
    }
}

function gameOver() {
    if (vidaPerson <= 0) {
        setTimeout(()=>{
            document.getElementById('gameOver').style.display = 'flex'
        }, 1000)
        setTimeout(()=>{
            resetar()
        }, 2000)
    } else if (vidaAdver <= 0) {
        setTimeout(()=>{
            document.getElementById('vitory').style.display = 'flex'
        }, 1000)
        setTimeout(()=>{
            resetar()
        }, 2000)
    }
}

function resetar() {
    window.location.reload()
}