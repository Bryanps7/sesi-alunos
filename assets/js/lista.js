const alunos = [
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
    "Joao Victor de Abreu Cunha",
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
    "Victor Fey da Silva",
    "Vinícius de Bona Ruas",
    "Yan Bueno Goulart",
];

let todosAlunos = document.getElementById("todosAlunos");
let abrirInput = document.getElementById("abrirInput");
let mostraAlunos = document.getElementById("mostraAlunos");
let letra = document.getElementById("letra");

todosAlunos.addEventListener('click', ()=>{
    
    mostraAlunos.innerHTML = ""

    for(let i=0;i<alunos.length;i++){
        const box = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('p');
        
        img.src = `/assets/img/aluno${i}.png`;
        img.alt = `Aluno(a) ${alunos[i]}`;
        title.textContent = alunos[i];
        
        title.style.height = `60px`
        title.style.fontSize = `1.5rem`;
        box.style.width = `20%`;
        img.style.width = `100%`;
        img.style.marginBottom = `25px`;

        img.onerror = function() {
            this.src = '/assets/img/alunoNA.png';
        };
        
        box.appendChild(title);
        box.appendChild(img);

        mostraAlunos.appendChild(box);
    }
})

abrirInput.addEventListener('click', ()=>{
    letra.innerHTML = "<input id='letraBus' type='text' placeholder='Insira uma letra:'>"
    letra.innerHTML += "<button onclick='buscaLetra()'>Buscar</button>"
})  

function buscaLetra(){
    let letraBus = String(document.getElementById("letraBus").value)

    mostraAlunos.innerHTML = ""
    console.log('teste')
    for(let i=0; i<alunos.length;i++){
        if(alunos[i].charAt(0) == letraBus.charAt(0)){
            const box = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('p');
            
            img.src = `/assets/img/aluno${i}.png`;
            img.alt = `Aluno(a) ${alunos[i]}`;
            title.textContent = alunos[i];
            
            title.style.height = `60px`
            title.style.fontSize = `1.5rem`;
            box.style.width = `20%`;
            img.style.width = `100%`;
            img.style.marginBottom = `25px`;

            img.onerror = function() {
                this.src = '/assets/img/alunoNA.png';
            };
            
            box.appendChild(title);
            box.appendChild(img);
            
            mostraAlunos.appendChild(box);
        }
    }
}

