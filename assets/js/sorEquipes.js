let alunos = [
    "Agatha Iasmin Koschel do Nascimento",
    "Ana Clara Furtado Goudinho",
    "Arthur Alexandre Abbruzzini",
    "Arthur Marcos Serpa Martins",
    "Arthur Soglia Veronica",
    "Artur Ximendes Del Guerso",
    "Augusto Gonçalves Dias",
    "Brenda Julya de Souza Freitas da Silva",
    "Bryan Prinz da Siva",
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

let codAlunos = [
    "/assets/img/aluno0.png",
    "/assets/img/aluno1.png",
    "/assets/img/aluno2.png",
    "/assets/img/aluno3.png",
    "/assets/img/aluno4.png",
    "/assets/img/aluno5.png",
    "/assets/img/aluno6.png",
    "/assets/img/aluno7.png",
    "/assets/img/aluno8.png",
    "/assets/img/aluno9.png",
    "/assets/img/aluno10.png",
    "/assets/img/aluno11.png",
    "/assets/img/aluno12.png",
    "/assets/img/aluno13.png",
    "/assets/img/aluno14.png",
    "/assets/img/aluno15.png",
    "/assets/img/aluno16.png",
    "/assets/img/aluno17.png",
    "/assets/img/aluno18.png",
    "/assets/img/aluno19.png",
    "/assets/img/aluno20.png",
    "/assets/img/aluno21.png",
    "/assets/img/aluno22.png",
    "/assets/img/aluno23.png",
    "/assets/img/aluno24.png",
    "/assets/img/aluno25.png",
    "/assets/img/aluno26.png",
    "/assets/img/aluno27.png",
    "/assets/img/aluno28.png",
    "/assets/img/aluno29.png",
    "/assets/img/aluno30.png",
    "/assets/img/aluno31.png",
    "/assets/img/aluno32.png",
    "/assets/img/aluno33.png",
    "/assets/img/aluno34.png",
    "/assets/img/aluno35.png"
];

let equipes = []

// let numPessoaEquipe = Number(document.getElementById('numPessoaEquipe').value)
let numPessoaEquipe = 11

let conta = alunos.length
let numEquipes = 0
let resto = 0

for (let i = 0; i < alunos.length; i++) {
    if (conta % numPessoaEquipe == 0) {
        numEquipes = conta / numPessoaEquipe
        resto = alunos.length - conta
        gerarEquipes()
        break;
    } else {
        conta--
        console.log('subtrai e passa pro proximo');
    }
}

function gerarEquipes() {
    let alunosDisponiveis = [
        "/assets/img/aluno0.png",
        "/assets/img/aluno1.png",
        "/assets/img/aluno2.png",
        "/assets/img/aluno3.png",
        "/assets/img/aluno4.png",
        "/assets/img/aluno5.png",
        "/assets/img/aluno6.png",
        "/assets/img/aluno7.png",
        "/assets/img/aluno8.png",
        "/assets/img/aluno9.png",
        "/assets/img/aluno10.png",
        "/assets/img/aluno11.png",
        "/assets/img/aluno12.png",
        "/assets/img/aluno13.png",
        "/assets/img/aluno14.png",
        "/assets/img/aluno15.png",
        "/assets/img/aluno16.png",
        "/assets/img/aluno17.png",
        "/assets/img/aluno18.png",
        "/assets/img/aluno19.png",
        "/assets/img/aluno20.png",
        "/assets/img/aluno21.png",
        "/assets/img/aluno22.png",
        "/assets/img/aluno23.png",
        "/assets/img/aluno24.png",
        "/assets/img/aluno25.png",
        "/assets/img/aluno26.png",
        "/assets/img/aluno27.png",
        "/assets/img/aluno28.png",
        "/assets/img/aluno29.png",
        "/assets/img/aluno30.png",
        "/assets/img/aluno31.png",
        "/assets/img/aluno32.png",
        "/assets/img/aluno33.png",
        "/assets/img/aluno34.png",
        "/assets/img/aluno35.png"
    ];
    
    for (let i = 0; i < numEquipes; i++) {
        let linha = []

        if(resto)
        for (let j = 0; j < numPessoaEquipe; j++) {
            let alunoRandom = Math.floor(Math.random() * codAlunos.length)
            let alunoIndex = Math.floor(Math.random() * alunosDisponiveis.length);
            linha.push(alunosDisponiveis[alunoIndex]);
            alunosDisponiveis.splice(alunoIndex, 1); // Remove o aluno selecionado

            // for (let k = 0; k < codAlunos.length; k++) {

            //     if (codAlunos[k] == `/assets/img/aluno${alunoRandom}.png`) {
            //         linha.push(codAlunos[k])
            //         codAlunos.splice(k, 1)
            //     }
            // }
        }
        equipes.push(linha)
    }
    console.table(alunosDisponiveis)

    if(resto == 1) {
        equipes.push(alunosDisponiveis)    
    } else if(resto == 2) {
        equipes.push([alunosDisponiveis[0], alunosDisponiveis[1]])
    } else if(resto == 3) {
        equipes.push([alunosDisponiveis[0], alunosDisponiveis[1]], alunosDisponiveis[2])
    }
}

console.log(equipes)