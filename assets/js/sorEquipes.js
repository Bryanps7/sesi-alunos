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

let equipes = []

let canva = document.getElementById('section-equipes')

let conta = alunos.length
let numEquipes = 0
let resto = 0

function checar() {
    let numPessoaEquipe = Number(document.getElementById('numPessoaEquipe').value)
    if((numPessoaEquipe >= 2)&&(numPessoaEquipe < 18)) {
        contEquipes()
    } else {
        document.getElementById('numPessoaEquipe').innerHTML = ''
        alert('Você colocou um valor inválido!')
    }
}

function contEquipes() {
    let numPessoaEquipe = Number(document.getElementById('numPessoaEquipe').value)

    for (let i = 0; i < alunos.length; i++) {
        if (conta % numPessoaEquipe == 0) {
            numEquipes = conta / numPessoaEquipe
            resto = alunos.length - conta
            gerarEquipes(numEquipes, resto, numPessoaEquipe)
            break;
        } else {
            conta--
            console.log('subtrai e passa pro proximo');
        }
    }
}


function gerarEquipes(quantEquipe, valResto, npe) {
    let alunosDisponiveis = [
        "/assets/img/alunoNA.png",
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

    for (let i = 0; i < quantEquipe; i++) {
        let linha = []

        for (let j = 0; j < npe; j++) {            
            let alunoIndex = Math.floor(Math.random() * alunosDisponiveis.length);
            linha.push(alunosDisponiveis[alunoIndex]);
            console.table(alunosDisponiveis);
            
            alunosDisponiveis.splice(alunoIndex, 1);

        }
        equipes.push(linha)
    }
    
    if(valResto == 1) {
        equipes.push(alunosDisponiveis)    
    } else if(valResto == 2) {
        equipes.push([alunosDisponiveis[0], alunosDisponiveis[1]])
    } else if(valResto == 3) {
        equipes.push([alunosDisponiveis[0], alunosDisponiveis[1]], alunosDisponiveis[2])
    } else if(valResto == 4) {
        equipes.push([alunosDisponiveis[0], alunosDisponiveis[1]], alunosDisponiveis[2], alunosDisponiveis[3])
    } else if(valResto == 5) {
        equipes.push([alunosDisponiveis[0], alunosDisponiveis[1]], alunosDisponiveis[2], alunosDisponiveis[3], alunosDisponiveis[4])
    } else if(valResto == 6) {
        equipes.push([alunosDisponiveis[0], alunosDisponiveis[1]], alunosDisponiveis[2], alunosDisponiveis[3], alunosDisponiveis[4], alunosDisponiveis[5])
    }

    let nomeDisplay = ''
    let tamanho = ''

    if(npe >= 10) {
        tamanho = '30%'
    } else if(npe >= 7) {
        tamanho = '50%'
    } else {
        tamanho = '90%'
    }

    if(npe == 1) {
        nomeDisplay = 'Solo?'
    } else if(npe == 2) {
        nomeDisplay = 'Dupla'
    } else if(npe == 3) {
        nomeDisplay = 'Trio'
    } else {
        nomeDisplay = 'Equipe'
    }

    console.table(equipes)
    canva.innerHTML = ''
    for(let i = 0; i < equipes.length; i++) {
        let grupo = `
            <div id='equipe${i+1}'>
                <h1>${nomeDisplay} ${i+1}</h1>
                <section class='imagens'>
            `
        for(let j = 0; j < npe; j++) {
            grupo += `
                <img src='${equipes[i][j]}' height='${tamanho}'>
            `
        }
        grupo += `
            </section>
            </div>
        `
        canva.innerHTML += grupo
    }
}
