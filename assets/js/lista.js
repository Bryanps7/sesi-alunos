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

let todosAlunos = document.getElementById("todosAlunos");
let abrirInput = document.getElementById("abrirInput");
let mostraAlunos = document.getElementById("mostraAlunos");
let pesquisa = document.getElementById("pesquisa");

todosAlunos.addEventListener('click', ()=>{
    
    mostraAlunos.innerHTML = ""

    pesquisa.style.display = 'none'
    
    for(let i=0;i<alunos.length;i++){
        const box = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('p');
        
        img.src = `/assets/img/aluno${i}.png`;
        img.alt = `Aluno(a) ${alunos[i]}`;
        title.textContent = alunos[i];
            
        // title.style.height = `auto`
        // box.style.width = `30%`;
        // title.style.fontSize = `1.5rem`;
        // title.style.margin = `5px 0`;
        // box.style.margin = `0 1%`
        // box.style.border = `1px solid rgb(0, 92, 169)`
        // box.style.height = `min-content`
        // img.style.width = `100%`;
        // img.style.borderRadius = `15px`
        // box.style.borderRadius = `15px`
        // box.style.marginBottom = `25px`;
        

        img.onerror = function() {
            this.src = '/assets/img/alunoNA.png';
        };
        
        box.appendChild(title);
        box.appendChild(img);
        
        mostraAlunos.appendChild(box);
    }
})

abrirInput.addEventListener('click', ()=>{
    pesquisa.style.display = 'flex'

    pesquisa.innerHTML = "<input id='pesq' type='text' placeholder='Insira um nome:'>"
    pesquisa.innerHTML += "<button onclick='pesquisar()'>Buscar</button>"
})  

function pesquisar(){
    let pesq = String(document.getElementById("pesq").value)

    mostraAlunos.innerHTML = ""
    console.log('teste')
    for(let i=0; i<alunos.length;i++){
        if(alunos[i].toLowerCase().indexOf(pesq.toLowerCase()) > -1){
            const box = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('p');
            
            img.src = `/assets/img/aluno${i}.png`;
            img.alt = `Aluno(a) ${alunos[i]}`;
            title.textContent = alunos[i];
            
            // title.style.height = `60px`
            // title.style.fontSize = `1.5rem`;
            // box.style.width = `20%`;
            // img.style.width = `100%`;
            // img.style.marginBottom = `25px`;

            img.onerror = function() {
                this.src = '/assets/img/alunoNA.png';
            };
            
            box.appendChild(title);
            box.appendChild(img);
            
            mostraAlunos.appendChild(box);
        }
    }
}

