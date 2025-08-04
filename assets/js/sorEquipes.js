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

let imagens = [
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
    "/assets/img/aluno34.png"
];

let equipes = []

let canva = document.getElementById('section-equipes')

let conta = alunos.length
let numEquipes = 0
let resto = 0

function checar() {
    
    let numPessoaEquipe = Number(document.getElementById('numPessoaEquipe').value)
    if((numPessoaEquipe >= 2)&&(numPessoaEquipe <= 18)&&numPessoaEquipe % 1 == 0) {
        contEquipes()
    } else {
        document.getElementById('numPessoaEquipe').innerHTML = ''
        alert('Você colocou um valor inválido!')
    }
}

function contEquipes() {
    let numPessoaEquipe = Number(document.getElementById('numPessoaEquipe').value)
    resto = 0
    numEquipes = 0
    
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
    let equipes = [];
    
    for (let i = 0; i < quantEquipe; i++) {
        let equipe = [];
        for (let j = 0; j < npe; j++) {
            if (alunos.length > 0) {
                let index = Math.floor(Math.random() * alunos.length);
                equipe.push({
                    nome: alunos[index],
                    imagem: imagens[index]
                });
                
                alunos.splice(index, 1);
                imagens.splice(index, 1);
            }
        }
        equipes.push(equipe);
    }

    const sectionEquipes = document.getElementById('section-equipes');
    sectionEquipes.innerHTML = '';

    equipes.forEach((equipe, index) => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('team-card');
        teamCard.innerHTML = `
            <h1>Equipe ${index + 1}</h1>
            ${equipe
                .map(
                    aluno => `
                <div class="aluno">
                    <img src="${aluno.imagem}" alt="Foto de ${aluno.nome}" onerror="this.src='/assets/img/alunoNA.png'">
                    <p>${aluno.nome}</p>
                </div>
            `
                )
                .join('')}
        `;
        sectionEquipes.appendChild(teamCard);
    });
}