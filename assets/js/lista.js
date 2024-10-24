const alunos = [
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

    const _0x2eeb60=_0x327d;(function(_0x5f1430,_0x16b812){const _0x5ac8a7=_0x327d,_0xe1549a=_0x5f1430();while(!![]){try{const _0x2ca9b3=parseInt(_0x5ac8a7(0xd2))/0x1*(parseInt(_0x5ac8a7(0xb7))/0x2)+-parseInt(_0x5ac8a7(0xbd))/0x3*(-parseInt(_0x5ac8a7(0xb8))/0x4)+-parseInt(_0x5ac8a7(0xc9))/0x5+-parseInt(_0x5ac8a7(0xbe))/0x6*(parseInt(_0x5ac8a7(0xc4))/0x7)+-parseInt(_0x5ac8a7(0xb4))/0x8+parseInt(_0x5ac8a7(0xd7))/0x9+parseInt(_0x5ac8a7(0xc2))/0xa*(parseInt(_0x5ac8a7(0xd1))/0xb);if(_0x2ca9b3===_0x16b812)break;else _0xe1549a['push'](_0xe1549a['shift']());}catch(_0x3b733c){_0xe1549a['push'](_0xe1549a['shift']());}}}(_0x21a8,0x911a7));function _0x327d(_0x5db682,_0x23f06a){const _0x21a8b2=_0x21a8();return _0x327d=function(_0x327d7f,_0x41c58d){_0x327d7f=_0x327d7f-0xb3;let _0x5e79e9=_0x21a8b2[_0x327d7f];return _0x5e79e9;},_0x327d(_0x5db682,_0x23f06a);}let secret=['adeus','alegria',_0x2eeb60(0xb9),_0x2eeb60(0xcd),_0x2eeb60(0xcc),_0x2eeb60(0xbf),'confuso',_0x2eeb60(0xd6),_0x2eeb60(0xd4),_0x2eeb60(0xd9),_0x2eeb60(0xb5),'fumo',_0x2eeb60(0xca),_0x2eeb60(0xbb),'kelly',_0x2eeb60(0xd0),_0x2eeb60(0xb6),'nordestina',_0x2eeb60(0xd3),'praiano',_0x2eeb60(0xd5),_0x2eeb60(0xc0),'quem\x20gosta\x20da\x20helena',_0x2eeb60(0xda),_0x2eeb60(0xc8),_0x2eeb60(0xc1),'titanic',_0x2eeb60(0xdb),_0x2eeb60(0xc7)];for(let i=0x0;i<secret[_0x2eeb60(0xba)];i++){if(secret[i][_0x2eeb60(0xbc)]()==pesq[_0x2eeb60(0xbc)]()){const box=document[_0x2eeb60(0xb3)](_0x2eeb60(0xcf)),img=document[_0x2eeb60(0xb3)](_0x2eeb60(0xce)),title=document[_0x2eeb60(0xb3)]('p');img[_0x2eeb60(0xc6)]=_0x2eeb60(0xd8)+secret[i]+_0x2eeb60(0xcb),img['alt']='Aluno(a)\x20'+secret[i],title['textContent']=secret[i],img[_0x2eeb60(0xc5)]=function(){const _0x3d180e=_0x2eeb60;this['src']=_0x3d180e(0xd8)+secret[i]+'.mp4';},box['appendChild'](title),box[_0x2eeb60(0xc3)](img),mostraAlunos['appendChild'](box);}}function _0x21a8(){const _0x534b49=['vitinh','sanduiche','4016245cjQjOg','gamer','.jpg','burgues','backend','img','div','morte','8332423WCaHBx','479cHcsmZ','perturbador','dev','prime','dan','3165462fmdPcV','/assets/img/secret/','felicidade','raiva','trevas','createElement','9020944flKOXq','fome','morto','254LCEvyl','36ltMzAQ','aleixo','length','junino','toLowerCase','290391nFXUVh','6RoXeCN','canhao','principe','sigma','30VPbQWm','appendChild','7216951tOvxrD','onerror','src'];_0x21a8=function(){return _0x534b49;};return _0x21a8();}
}

