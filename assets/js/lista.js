const alunos = [
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
    pesquisa.innerHTML += "<button onfocus='pesquisar();'>Buscar</button>"
})  

function pesquisar(){
    let pesq = String(document.getElementById("pesq").value)

    mostraAlunos.innerHTML = ""

    for(let i=0; i<alunos.length;i++){
        if(alunos[i].toLowerCase().indexOf(pesq.toLowerCase()) > -1){
            const box = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('p');
            
            img.src = `/assets/img/aluno${i}.png`;
            img.alt = `Aluno(a) ${alunos[i]}`;
            title.textContent = alunos[i];

            img.onerror = function() {
                this.src = '/assets/img/alunoNA.png';
            };
            
            box.appendChild(title);
            box.appendChild(img);
            
            mostraAlunos.appendChild(box);
        }
    }

    let _0x4d1a=["adeus","alegria","aleixo","canhao","perturbador","morte","confuso","junino","raiva","felicidade","backend","fumo","trevas","burgues","kelly","sigma","gamer","nordestina","quem gosta do soglia","praiano","dan","dev","quem gosta da helena","fome","morto","titanic","prime","principe","vitinh","sanduiche"];
for(let _0x3b8e=0;_0x3b8e<_0x4d1a.length;_0x3b8e++){if(_0x4d1a[_0x3b8e].toLowerCase()===pesq.toLowerCase()){const _0x5fa0=document.createElement('div');const _0x468a=document.createElement('img');const _0x44cb=document.createElement('p');_0x468a.src='/assets/img/secret/'+_0x4d1a[_0x3b8e]+'.jpg';_0x468a.alt='Aluno(a) '+_0x4d1a[_0x3b8e];_0x44cb.textContent=_0x4d1a[_0x3b8e];_0x468a.onerror=function(){this.src='/assets/img/secret/'+_0x4d1a[_0x3b8e]+'.mp4'};_0x5fa0.appendChild(_0x44cb);_0x5fa0.appendChild(_0x468a);mostraAlunos.appendChild(_0x5fa0)}}

}

