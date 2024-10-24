let alunos = [ 
    "Agatha Iasmin Koschel do Nascimento", "Ana Clara Furtado Goudinho", "Arthur Alexandre Abbruzzini", "Arthur Marcos Serpa Martins", "Arthur Soglia Veronica", "Artur Ximendes Del Guerso", "Augusto Gonçalves Dias", "Brenda Julya de Souza Freitas da Silva", "Bryan Prinz da Silva", "Daniel Domingo", "Davi Schoenardie de Almeida", "Eduardo Corrêa da Cruz", "Eric D. Scapini", "Érick Miguel Schuck", "Francisco Lisboa da Silva Lima", "Giovanni Filipe Burgo", "Guilherme Tomaz Silva", "Helena Neis da Silva", "João Francisco Luchtenberg Ventura", "João Paulo Fagundes", "João Victor de Abreu Cunha", "João Vitor Galiotto de Souza", "João Vitor Santos", "Jonas Luiz Marin", "Kauê Dantti Schaparini", "Lucas Pereira", "Lucas Wagner Salim", "Manuela Cristina Torres Guimarães", "Mateus Queiroz Logrado", "Mateus Zandona Krieger", "Nicollas Jose Prim", "Nicollas Lopes do Nascimento", "Pedro Rafael Santiago", "Ruan Geraldo", "Vinícius de Bona Ruas", "Yan Bueno Goulart",
];

let ataquesAlunos = {
    "Agatha Iasmin Koschel do Nascimento": [
        ["Chute Veloz", 3],
        ["Soco Devastador", 4],
        ["Explosão de Energia", 5]
    ],
    "Ana Clara Furtado Goudinho": [
        ["Raio Congelante", 4],
        ["Soco Flamejante", 3],
        ["Investida Feroz", 4]
    ],
    "Arthur Alexandre Abbruzzini": [
        ["Golpe de Martelo", 5],
        ["Chute Giratório", 3],
        ["Corte de Espada", 4]
    ],
    "Arthur Marcos Serpa Martins": [
        ["Impacto de Trovão", 4],
        ["Chute Sônico", 3],
        ["Soco de Ferro", 4]
    ],
    "Arthur Soglia Veronica": [
        ["Tornado de Pés", 3],
        ["Golpe de Impacto", 5],
        ["Lança Relâmpago", 4]
    ],
    "Artur Ximendes Del Guerso": [
        ["Soco Flamejante", 4],
        ["Raio Concentrado", 5],
        ["Investida Poderosa", 3]
    ],
    "Augusto Gonçalves Dias": [
        ["Escudo de Terra", 3],
        ["Soco Sísmico", 4],
        ["Fúria Explosiva", 5]
    ],
    "Brenda Julya de Souza Freitas da Silva": [
        ["Chicote de Fogo", 4],
        ["Rajada de Vento", 3],
        ["Golpe Místico", 4]
    ],
    "Bryan Prinz da Silva": [
        ["Raio Energético", 4],
        ["Soco Meteoro", 5],
        ["Ataque de Velocidade", 3]
    ],
    "Daniel Domingo": [
        ["Muralha de Gelo", 3],
        ["Lâmina Voadora", 4],
        ["Soco de Terra", 5]
    ],
    "Davi Schoenardie de Almeida": [
        ["Impacto de Luz", 4],
        ["Fúria Elétrica", 5],
        ["Chute de Plasma", 3]
    ],
    "Eduardo Corrêa da Cruz": [
        ["Fúria do Dragão", 4],
        ["Golpe Pesado", 5],
        ["Soco Rápido", 3]
    ],
    "Eric D. Scapini": [
        ["Golpe de Fogo", 5],
        ["Chute Relâmpago", 4],
        ["Soco de Gelo", 3]
    ],
    "Érick Miguel Schuck": [
        ["Raio Violeta", 5],
        ["Impacto Pesado", 4],
        ["Explosão de Chamas", 3]
    ],
    "Francisco Lisboa da Silva Lima": [
        ["Soco Relâmpago", 4],
        ["Chute Furioso", 5],
        ["Golpe Aéreo", 3]
    ],
    "Giovanni Filipe Burgo": [
        ["Corte de Ar", 4],
        ["Impacto Sombrio", 5],
        ["Soco Explosivo", 3]
    ],
    "Guilherme Tomaz Silva": [
        ["Lança de Gelo", 4],
        ["Chute Elétrico", 5],
        ["Rajada de Fogo", 3]
    ],
    "Helena Neis da Silva": [
        ["Golpe de Luz", 4],
        ["Chute Destruidor", 5],
        ["Soco Congelante", 3]
    ],
    "João Francisco Luchtenberg Ventura": [
        ["Chama Azul", 5],
        ["Golpe de Impacto", 4],
        ["Lâmina de Vento", 3]
    ],
    "João Paulo Fagundes": [
        ["Raio Explosivo", 5],
        ["Soco Potente", 3],
        ["Chute de Ferro", 4]
    ],
    "João Victor de Abreu Cunha": [
        ["Ataque de Velocidade", 3],
        ["Impacto Sísmico", 5],
        ["Soco Elétrico", 4]
    ],
    "João Vitor Galiotto de Souza": [
        ["Lâmina de Fogo", 4],
        ["Golpe Rápido", 3],
        ["Explosão de Raio", 5]
    ],
    "João Vitor Santos": [
        ["Impacto de Fogo", 4],
        ["Soco de Terra", 5],
        ["Chute de Gelo", 3]
    ],
    "Jonas Luiz Marin": [
        ["Golpe Meteoro", 5],
        ["Rajada Congelante", 3],
        ["Fúria de Raios", 4]
    ],
    "Kauê Dantti Schaparini": [
        ["Impacto de Luz", 4],
        ["Soco Devastador", 5],
        ["Chute Sísmico", 3]
    ],
    "Lucas Pereira": [
        ["Rajada de Raios", 4],
        ["Impacto de Lava", 5],
        ["Chute Rápido", 3]
    ],
    "Lucas Wagner Salim": [
        ["Explosão de Vento", 4],
        ["Golpe de Energia", 5],
        ["Soco de Fogo", 3]
    ],
    "Manuela Cristina Torres Guimarães": [
        ["Lança de Luz", 4],
        ["Golpe Rápido", 3],
        ["Explosão Sombria", 5]
    ],
    "Mateus Queiroz Logrado": [
        ["Chute Elétrico", 5],
        ["Impacto de Gelo", 4],
        ["Soco de Raio", 3]
    ],
    "Mateus Zandona Krieger": [
        ["Golpe Sombrio", 5],
        ["Explosão de Luz", 3],
        ["Chute Devastador", 4]
    ],
    "Nicollas Jose Prim": [
        ["Raio Congelante", 4],
        ["Golpe de Energia", 5],
        ["Chute Relâmpago", 3]
    ],
    "Nicollas Lopes do Nascimento": [
        ["Impacto Devastador", 5],
        ["Explosão de Fogo", 4],
        ["Soco Rápido", 3]
    ],
    "Pedro Rafael Santiago": [
        ["Lança Relâmpago", 5],
        ["Golpe de Impacto", 4],
        ["Chute de Fogo", 3]
    ],
    "Ruan Geraldo": [
        ["Impacto de Fogo", 5],
        ["Chute de Gelo", 4],
        ["Rajada de Raios", 3]
    ],
    "Vinícius de Bona Ruas": [
        ["Explosão de Energia", 5],
        ["Golpe Pesado", 4],
        ["Chute Veloz", 3]
    ],
    "Yan Bueno Goulart": [
        ["Lâmina de Fogo", 4],
        ["Soco Sísmico", 5],
        ["Chute Rápido", 3]
    ]
};

function setValueRandom(max, min) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}

window.addEventListener('load', ()=>{
    let lista = document.getElementById('alunos')

    for(let i = 0; i < alunos.length; i++) {
        lista.innerHTML += `<option value='${alunos[i]}'>${alunos[i]}</option>`
    }
})

let personagem = '', adversario = ''
let numberPerson = 0, numberAdver = 0
let screen = document.getElementById('container')

function saveConfig() {
    let counter = 0
    for(let i = 0; i < alunos.length; i++){
        if(document.getElementById('aluno').value == alunos[i]) {
            counter++
        }
    }
    if(counter == 1){
        personagem = document.getElementById('aluno').value
        console.log('Seu personagem escolhido: '+personagem)
        for(let i = 0; i < alunos.length; i++) {
            if(alunos[i] == personagem) {
                alunos.splice(i, 1)
                numberPerson = i
            }
        }
        numberAdver = setValueRandom(alunos.length, 0)
        adversario = alunos[numberAdver]
        console.log('Seu adversário será: '+ adversario)

        console.log(`Seu número: ${numberPerson} || Número do adversário: ${numberAdver}`)
        iniciar()
    } else {
        alert('Personagem Inválido')
    }
}

function iniciar() {
    let name = document.createElement('h1')
    let icon = document.createElement('img')
    let vida = document.createElement('div')
    let textV = document.createElement('p')
    
    let golpes = document.createElement('div')
     = document.createElement('')

    let jogador = document.createElement('div')
    jogador.id('jogador')
    
    let adversario = document.createElement('div')
    adversario.id('adversario')
}