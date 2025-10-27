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

let alunosNP = [
    "Agatha Iasmin Koschel do Nascimento",
    "Ana Clara Furtado Goudinho",
    "Arthur Alexandre Abbruzzini",
    "Arthur Luiz Beccari",
    "Arthur Marcos Serpa Martins",
    "Artur Ximendes Del Guerso",
    "Brenda Julya de Souza Freitas da Silva",
    "Daniel Domingos Pereira",
    "Davi Schoenardie de Almeida",
    "Eduardo Corrêa da Cruz",
    "Eric Debarba Scapini",
    "Érick Miguel Schuck",
    "Francisco Lisboa da Silva Lima",
    "Giovanni Felipe Burgo",
    "Guilherme Tomaz Silva",
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
    "/assets/img/aluno34.png"
];

let lista1 = document.getElementById('lista1')
let lista2 = document.getElementById('lista2')

window.addEventListener('load', () => {

    for (let i = 0; i < alunos.length; i++) {
        lista1.innerHTML += `<option value='${alunos[i]}'>${alunos[i]}</option>`
        lista2.innerHTML += `<option value='${alunosNP[i]}'>${alunosNP[i]}</option>`
    }
})

let aluno1H = document.getElementById('aluno1')
let aluno2H = document.getElementById('aluno2')

aluno1H.addEventListener('change', () => {
    console.log("Selecionado:", aluno1H.value);

    switch (aluno1H.value) {
        case 'Arthur Soglia Veronica':
            lista2.innerHTML = `<option value='Helena Neis da Silva'>Helena Neis da Silva</option>`
            console.log('❤ Oh, o amor está no ar');
            break;
        case 'Helena Neis da Silva':
            lista2.innerHTML = `<option value='Arthur Soglia Veronica'>Arthur Soglia Veronica</option>`
            console.log('❤ Oh, o amor está no ar');
            break;
        case 'Bryan Prinz da Silva':
            lista2.innerHTML = `<option value='Luna Laurato Régis Francisca'>Luna Laurato Régis Francisca</option>`
            console.log('❤ Oh, o amor está no ar');
            break;
        case 'Augusto Gonçalves Dias':
            lista2.innerHTML = `<option value='Evylleen Argenton'>Evylleen Argenton</option>`
            console.log('❤ Oh, o amor está no ar');
            break;
        default:
            for (let i = 0; i < alunos.length; i++) {
                lista1.innerHTML += `<option value='${alunos[i]}'>${alunos[i]}</option>`
                lista2.innerHTML += `<option value='${alunosNP[i]}'>${alunosNP[i]}</option>`
            };
            break;
    }
});

function inicio() {
    let caracter1 = aluno1H.value.length
    let caracter2 = aluno2H.value.length

    let cod1, cod2

    for(let i = 0; i < alunos.length; i++) {
        if(alunos[i] == aluno1H.value) {
            cod1 = i
        } else if(alunos[i] == aluno2H.value) {
            cod2 = i
        }
    }

    let random = (Math.random()).toFixed(2)
    
    let porcentagem = (caracter1 + caracter2 + cod1 + cod2) * random

    if(((cod1 == 18)&&(cod2 == 5))||((cod1 == 5)&&(cod2 == 18))) {
        porcentagem = 100
    }

    if((cod1 == 9)&&(aluno2H.value = "Luna Laurato Régis Francisca")) {
        porcentagem = 100
    }

    console.log(porcentagem);

    let escolha = document.getElementById('escolha')

    escolha.innerHTML = ''
    escolha.style.backgroundColor = 'black'

    document.getElementById('header').style.height = '10vh'
    document.getElementById('main').style.height = '70vh'

    document.getElementById('main').innerHTML = `
        <img class='elus' src='${codAlunos[cod1]}'>
        <div id='love'>
            <div id='size'></div>
            <img src='/assets/img/so-love.png'>
        </div>
        <img class='elus' src='${codAlunos[cod2]}'>
    `

    document.getElementById('size').style.height = 2*porcentagem + 'px'

    console.log(document.getElementById('main'))

    document.getElementById('header').innerHTML = `
    <p>Porcentagem:</p>
    <span id="vez">${porcentagem.toFixed(2)}%</span>
    `
}