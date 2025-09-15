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
    "Lucas Pereira",
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

window.addEventListener('load', (e) => {
    e.preventDefault()

    let checkout = document.getElementById('checkout-alunos')

    checkout.innerHTML = ''

    for(let i = 0; i < alunos.length; i++) {
        checkout.innerHTML += `
            <label for="aluno${i}" class="check">${alunos[i]}</label>
            <input type="checkbox" id="aluno${i}"> 
            |
        `

        if(i % 3 == 1) {
            checkout.innerHTML += '<br>'
        }

    }
})


function sorteacao() {
    let alunosTrue = []
    
    for(let i = 0; i < alunos.length; i++) {            
        alunosTrue.push(document.getElementById('aluno'+i).checked)
    }
    
    let novosAluno = []
    let nAlunos = [];

    for(let i = 0; i < alunos.length; i++) {
        if(alunosTrue[i] == true) {
            novosAluno.push(`/assets/img/aluno${i}.png`)
            nAlunos.push(i)
        }
    }

    console.log(novosAluno);
    
    let valor = randomValue(novosAluno.length - 1, 0);

    console.log(valor);
    
    if(novosAluno.length == 0) {
        alert('Selecione os Alunos!')
    } else {
        const scren = document.getElementById('scren');
        scren.innerHTML = `
            <h1>${alunos[nAlunos[valor]]}</h1>
            <img src="${novosAluno[valor]}" alt="Aluno(a) ${alunos[valor]}">
        `;
    }

}

function randomValue(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}