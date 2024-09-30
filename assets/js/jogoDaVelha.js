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
    "Daniel Domingos",
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

// imprimir.innerHTML += `<option value='${comidas[i]}'>${comidas[i]}</option>`

window.addEventListener('load', ()=>{
    let lista1 = document.getElementById('lista1')
    let lista2 = document.getElementById('lista2')

    for(let i = 0; i < alunos.length; i++) {
        lista1.innerHTML += `<option value='${alunos[i]}'>${alunos[i]}</option>`
        lista2.innerHTML += `<option value='${alunos[i]}'>${alunos[i]}</option>`
    }
})

let aluno1 = '', aluno2 = ''

function inicio() {
    let escolha = document.getElementById('escolha')
    aluno1 = document.getElementById('aluno1').value
    aluno2 = document.getElementById('aluno2').value
    escolha.innerHTML = ''
    escolha.style.backgroundColor = 'black'
    document.getElementById('header').style.height = '10vh'
    descobrir(aluno1, aluno2)
    document.getElementById('main').style.height = '70vh'
    document.getElementById('main').innerHTML = `
        <aside id="aside">
        </aside>
        <table>
            <tbody>
                <tr>
                    <td id="11" onclick="velho(11)"></td>
                    <td id="12" onclick="velho(12)"></td>
                    <td id="13" onclick="velho(13)"></td>
                </tr>
                <tr>
                    <td id="21" onclick="velho(21)"></td>
                    <td id="22" onclick="velho(22)"></td>
                    <td id="23" onclick="velho(23)"></td>
                </tr>
                <tr>
                    <td id="31" onclick="velho(31)"></td>
                    <td id="32" onclick="velho(32)"></td>
                    <td id="33" onclick="velho(33)"></td>
                </tr>
            </tbody>
        </table>
    `
}

let save1 = 0, save2 = 0

function descobrir(carinha1, carinha2) {
    for(let i = 0; i < alunos.length; i++) {
        if(carinha1 == alunos[i]) {
            save1 = i
        }
    }
    
    for(let i = 0; i < alunos.length; i++) {
        if(carinha2 == alunos[i]) {
            save2 = i
        }
    }
}

let vez = alunos[save1]
let cod = save1

let veios = [
    [11, 12, 13],
    [21, 22, 23],    
    [31, 32, 33],
]

function rodada(name) {
    document.getElementById('vez').innerHTML = name    
}

function velho(value) {
    if(document.getElementById(value).innerHTML == '') {
        document.getElementById(value).src = `${codAlunos[cod]}`
        document.getElementById(value).innerHTML = `<img src='${codAlunos[cod]}' alt='${vez}'>`
        troca()
        rodada(vez)
    } else {
        alert('Inválido')
    }
    
    final()
    ganhador()
}

function final() {
    let cont = 0
    for(let i = 1; i <= veios.length; i++) {
        for(let j = 1; j <= veios.length; j++) {
            if(document.getElementById(i+''+j).innerHTML == '') {
            } else {
                cont++
            }
        }
    }
    if(cont == 9) {
        // alert('Deu velho')
        // document.getElementById('aside').style = "background: url('img/velho.png');"
        document.getElementById('aside').innerHTML = '<img src="./img/velho.png">'
        // document.getElementById('aside').style = "background-repeat: no-repeat;"
        setTimeout(acabou, 3000)
    }
}

function acabou() {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            document.getElementById(veios[i][j]).innerHTML = ''
        }
    }
    document.getElementById('aside').innerHTML = ''
}

function troca() {
    if(vez == alunos[save1]) {
        vez = alunos[save2]
        cod = save2
    } else {
        vez = alunos[save1]
        cod = save1
    }
}

function ganhador() {
    for(let i = 0; i < veios.length; i++) {
        if((document.getElementById((i+1)+'1').innerHTML != '')&&(document.getElementById((i+1)+'2').innerHTML != '')&&(document.getElementById((i+1)+'3').innerHTML != '')) {
            if((document.getElementById((i+1)+'1').innerHTML == document.getElementById((i+1)+'2').innerHTML)&&(document.getElementById((i+1)+'1').innerHTML == document.getElementById((i+1)+'3').innerHTML)) {
                troca()
                document.getElementById('aside').innerHTML = `<img style='width: 100%;' src="${codAlunos[cod]}">`
                setTimeout(acabou, 3000)
            }
        }
        
        if((document.getElementById('1'+(i+1)).innerHTML != '')&&(document.getElementById('2'+(i+1)).innerHTML != '')&&(document.getElementById('3'+(i+1)).innerHTML != '')) {
            if((document.getElementById('1'+(i+1)).innerHTML == document.getElementById('2'+(i+1)).innerHTML)&&(document.getElementById('1'+(i+1)).innerHTML == document.getElementById('3'+(i+1)).innerHTML)) {
                troca()
                document.getElementById('aside').innerHTML = `<img style='width: 100%;' src="${codAlunos[cod]}">`
                setTimeout(acabou, 3000)
            }
        }
        
        if((document.getElementById('11').innerHTML != '')&&(document.getElementById('22').innerHTML != '')&&(document.getElementById('33').innerHTML != '')) {
            if((document.getElementById('11').innerHTML == document.getElementById('22').innerHTML)&&(document.getElementById('11').innerHTML == document.getElementById('33').innerHTML)) {
                troca()
                document.getElementById('aside').innerHTML = `<img style='width: 100%;' src="${codAlunos[cod]}">`
                setTimeout(acabou, 3000)
            }
        }

        if((document.getElementById('13').innerHTML != '')&&(document.getElementById('22').innerHTML != '')&&(document.getElementById('31').innerHTML != '')) {
            if((document.getElementById('13').innerHTML == document.getElementById('22').innerHTML)&&(document.getElementById('13').innerHTML == document.getElementById('31').innerHTML)) {
                troca()
                document.getElementById('aside').innerHTML = `<img style='width: 100%;' src="${codAlunos[cod]}">`
                setTimeout(acabou, 3000)
            }
        }
    }
}