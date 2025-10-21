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
    "Yan Bueno Goulart"
];

let dadosAlunos = {
    "Agatha Iasmin Koschel do Nascimento": [
        "Feminino",
        "Dezembro de 2008",
        '',
        '',
        '',
        '' 
    ],
    "Ana Clara Furtado Goudinho": [],
    "Arthur Alexandre Abbruzzini": [],
    "Arthur Luiz Beccari": [],
    "Arthur Marcos Serpa Martins": [],
    "Arthur Soglia Veronica": [],
    "Artur Ximendes Del Guerso": [],
    "Augusto Gonçalves Dias": [],
    "Brenda Julya de Souza Freitas da Silva": [],
    "Bryan Prinz da Silva": [
        "Masculino",
        "Março de 2008",
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28379.870351043755!2d-48.654605008634235!3d-27.23535228522384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a96722683abb%3A0xd95794b9cc95d33f!2sTijucas%2C%20SC%2C%2088200-000!5e0!3m2!1spt-BR!2sbr!4v1761008478065!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        "#368b45ff",
        "Desenvolvimento de Sistemas",
        '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0TXRO7qVCw0UOSkCPxWvUM?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    ],
    "Daniel Domingo": [],
    "Davi Schoenardie de Almeida": [],
    "Eduardo Corrêa da Cruz": [],
    "Eric D. Scapini": [],
    "Erick Miguel Schuck": [],
    "Francisco Lisboa da Silva Lima": [],
    "Giovanni Felipe Burgo": [],
    "Guilherme Tomaz Silva": [],
    "Helena Neis da Silva": [],
    "João Francisco Luchtenberg Ventura": [],
    "João Paulo Fagundes": [],
    "João Victor de Abreu Cunha": [],
    "João Vitor Galiotto de Souza": [],
    "João Vitor Santos": [],
    "Jonas Luiz Marin": [],
    "Lucas Pereira": [],
    "Manuela Cristina Torres Guimarães": [],
    "Mateus Queiroz Logrado": [],
    "Mateus Zandona Krieger": [],
    "Nicollas Jose Prim": [
        "Masculino",
        "Fevereiro de 2008",
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28399.932419006625!2d-48.589466408831505!3d-27.156556011214292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a59192f83479%3A0xb408dc5f7ad35162!2sPorto%20Belo%2C%20SC%2C%2088210-000!5e0!3m2!1spt-BR!2sbr!4v1761010581034!5m2!1spt-BR!2sbr" width="80%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        '#9D00FF',
        'Humanas',
        '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/42Kv1RoTAm09FeytxiuZIB?utm_source=generator" width="80%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    ],
    "Nicollas Lopes do Nascimento": [],
    "Pedro Rafael Santiago": [],
    "Ruan Geraldo": [],
    "Vinícius de Bona Ruas": [],
    "Yan Bueno Goulart": []
};

let jogo = document.getElementById("jogo");
let random1 = document.getElementById("random1");
let random2 = document.getElementById("random2");
let container = document.getElementById("container");

function diario() {
    // function que pega o a data atual e multiplica seus valores para gerar um numero aleatorio diário
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let numeroDiario = (20 * mes) % alunos.length;

    const resposta = alunos[numeroDiario];

    jogo.style.display = "flex";
    random1.style.display = "flex";
    random2.style.display = "flex";
    container.style.display = "none";
    document.querySelector('body').style.flexDirection = "row";
    document.querySelector('body').style.justifyContent = "space-around";

    jogo.innerHTML = `
        <h2 id="titulo">Adivinhe o Aluno:</h2>
        <div id="foto">
            <img src="/assets/img/silhueta/aluno${numeroDiario}.png">
        <div>
        <div class="aluno">
            <input id="inAluno" list="lista">
            <datalist id="lista">
                <option value="Agatha Iasmin Koschel do Nascimento">
                <option value="Ana Clara Furtado Goudinho">
                <option value="Arthur Alexandre Abbruzzini">
                <option value="Arthur Luiz Beccari">
                <option value="Arthur Marcos Serpa Martins">
                <option value="Arthur Soglia Veronica">
                <option value="Artur Ximendes Del Guerso">
                <option value="Augusto Gonçalves Dias">
                <option value="Brenda Julya de Souza Freitas da Silva">
                <option value="Bryan Prinz da Silva">
                <option value="Daniel Domingos">
                <option value="Davi Schoenardie de Almeida">
                <option value="Eduardo Corrêa da Cruz">
                <option value="Eric D. Scapini">
                <option value="Érick Miguel Schuck">
                <option value="Francisco Lisboa da Silva Lima">
                <option value="Giovanni Filipe Burgo">
                <option value="Guilherme Tomaz Silva">
                <option value="Helena Neis da Silva">
                <option value="João Francisco Luchtenberg Ventura">
                <option value="João Paulo Fagundes">
                <option value="João Victor de Abreu Cunha">
                <option value="João Vitor Galiotto de Souza">
                <option value="João Vitor Santos">
                <option value="Jonas Luiz Marin">
                <option value="Lucas Pereira">
                <option value="Manuela Cristina Torres Guimarães">
                <option value="Mateus Queiroz Logrado">
                <option value="Mateus Zandona Krieger">
                <option value="Nicollas Jose Prim">
                <option value="Nicollas Lopes do Nascimento">
                <option value="Pedro Rafael Santiago">
                <option value="Ruan Geraldo">
                <option value="Vinícius de Bona Ruas">
                <option value="Yan Bueno Goulart">
            </datalist>
        </div><br>
        <button onclick="verificarResposta('${resposta}', ${numeroDiario})">Verificar</button>
    `
}

let jaFoi = ['silhueta', 'cor', 'musica', 'materia', 'endereco', 'genero', 'aniversario', 'caracteres'];

function verificarResposta(res, numeroDiario) {
    const inputAluno = document.getElementById("inAluno");

    if (res === inputAluno.value) {
        document.getElementById("titulo").innerHTML = 'VOCÊ ACERTOU!'
        document.getElementById("foto").innerHTML = `<img src="/assets/img/aluno${numeroDiario}.png">`;
        document.getElementById("foto").style.backgroundColor = "transparent";

        confetti({
            particleCount: 200, // quantidade de confetes
            spread: 100,        // abertura do efeito
            origin: { y: 0.6 }  // altura inicial (0 = topo, 1 = base)
        });
    } else {
        let escolhido = Math.floor(Math.random() * jaFoi.length);

        console.log(jaFoi[escolhido]);

        if (jaFoi[escolhido] == 'silhueta') {
            document.getElementById("foto").style.backgroundColor = "transparent";

            // 0: genero || 1: aniversario || 2: bairro e cidade || 3: cor || 4: materia || 5: musica
        } else if (jaFoi[escolhido] == 'cor') {
            document.querySelector('body').style.backgroundColor = dadosAlunos[res][3];
        } else if (jaFoi[escolhido] == 'musica') {
            if (Math.random() < 0.5) {
                random1.innerHTML += `<h3>Música Favorita:</h3> ${dadosAlunos[res][5]}`;
            } else {
                random2.innerHTML += `<h3>Música Favorita:</h3> ${dadosAlunos[res][5]}`;
            }
        } else if (jaFoi[escolhido] == 'materia') {
            if (Math.random() < 0.5) {
                random1.innerHTML += `<h3>Matéria Favorita: ${dadosAlunos[res][4]}</h3>`;
            } else {
                random2.innerHTML += `<h3>Matéria Favorita: ${dadosAlunos[res][4]}</h3>`;
            }
        } else if (jaFoi[escolhido] == 'endereco') {
            if (Math.random() < 0.5) {
                random1.innerHTML += `<h3>Local de Moradia:</h3> ${dadosAlunos[res][2]}`;
            } else {
                random2.innerHTML += `<h3>Local de Moradia:</h3> ${dadosAlunos[res][2]}`;
            }
        } else if (jaFoi[escolhido] == 'genero') {
            if (Math.random() < 0.5) {
                random1.innerHTML += `<h3>Gênero: ${dadosAlunos[res][0]}</h3>`;
            } else {
                random2.innerHTML += `<h3>Gênero: ${dadosAlunos[res][0]}</h3>`;
            }
        } else if (jaFoi[escolhido] == 'aniversario') {
            if (Math.random() < 0.5) {
                random1.innerHTML += `<h3>Data de Aniversário: ${dadosAlunos[res][1]}</h3>`;
            } else {
                random2.innerHTML += `<h3>Data de Aniversário: ${dadosAlunos[res][1]}</h3>`;
            }
        } else if (jaFoi[escolhido] == 'caracteres') {
            let campo = ''
            for (let i = 0; i < res.length; i++) {
                if (res[i] == ' ') {
                    campo += ' ';
                } else {
                    campo += '_';
                }
            }

            if (Math.random() < 0.5) {
                random1.innerHTML += `<h3>Nome do Aluno:</h3> ${campo}`;
            } else {
                random2.innerHTML += `<h3>Nome do Aluno:</h3> ${campo}`;
            }
        }

        // remove o item ja escolhido do array para não repetir
        jaFoi.splice(escolhido, 1);

        if (jaFoi.length == 0) {
            document.getElementById("titulo").innerHTML = 'PERDEU!'
            document.getElementById("foto").innerHTML = `<img src="/assets/img/aluno${numeroDiario}.png">`;
        }
    }
} 