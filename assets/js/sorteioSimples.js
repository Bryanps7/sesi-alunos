let alunos = [
    "Agatha Iasmin Koschel do Nascimento",
    "Ana Clara Furtado Goudinho",
    "Arthur Alexandre Abbruzzini",
    "Arthur Marcos Serpa Martins",
    "Arthur Soglia Veronica",
    "Artur Ximendes Del Guerso",
    "Augusto Gonçalves Dias",
    "Brenda Julya de Souza Freitas da Silva",
    "Bryan Prinz da Silva",
    "Daniel Domingo",
    "Davi Schoenardie de Almeida",
    "Eduardo Corrêa da Cruz",
    "Eric D. Scapini",
    "Érick Miguel Schuck",
    "Francisco Lisboa da Silva Lima",
    "Giovanni Filipe Burgo",
    "Guilherme Tomaz Silva",
    "Helena Neis da Silva",
    "João Francisco Luchtenberg Ventura",
    "João Paulo Fagundes",
    "João Victor de Abreu Cunha",
    "João Vitor Galiotto de Souza",
    "João Vitor Santos",
    "Jonas Luiz Marin",
    "Kauê Dantti Schaparini",
    "Lucas Pereira",
    "Lucas Wagner Salim",
    "Manuela Cristina Torres Guimarães",
    "Mateus Queiroz Logrado",
    "Mateus Zandona Krieger",
    "Nicollas Jose Prim",
    "Nicollas Lopes do Nascimento",
    "Pedro Rafael Santiago",
    "Ruan Geraldo",
    "Vinícius de Bona Ruas",
    "Yan Bueno Goulart",
];

let nAlunos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

function sorteacao() {
    let valor = randomValue(alunos.length - 1, 0)
    
    document.getElementById('scren').innerHTML = ''
    document.getElementById('scren').innerHTML += `
        <h1>${alunos[valor]}</h1><br>
        <img src="/assets/img/aluno${nAlunos[valor]}.png" width="300px">
    `

    alunos.splice(valor, 1)
    nAlunos.splice(valor, 1)

}

function randomValue(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}