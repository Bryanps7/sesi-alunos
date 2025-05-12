const alfabeto = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const numeros = Array.from({ length: 20 }, (_, i) => i + 1);

const participantes = [
    ['A', 9, 'Tiago Rocha'],
    ['B', 15, 'Isabela Ramos'],
    ['C', 14, 'Maria Rocha'],
    ['D', 10, 'Letícia Moura'],
    ['E', 13, 'Sofia Silva'],
    ['F', 3, 'Lucas Vieira'],
    ['G', 11, 'Maria Costa'],
    ['H', 4, 'Letícia Pereira'],
    ['I', 17, 'Gustavo Rocha'],
    ['J', 19, 'Bruno Gomes'],
    // ... 500 números mais ou menos
    ['R', 2, 'Tiago Rocha']
];

const participantesMap = new Map();
participantes.forEach(([l, n, nome]) => {
    participantesMap.set(`${l}-${n}`, nome);
});

let ganhador = '';

function sorteacao() {
    const randomLetra = alfabeto[Math.floor(Math.random() * alfabeto.length)];
    const randomNumber = numeros[Math.floor(Math.random() * numeros.length)];
    console.log(randomLetra, randomNumber);
    revelar(randomLetra, randomNumber);
}

function revelar(l, n) {
    const chave = `${l}-${n}`;
    if (participantesMap.has(chave)) {
        ganhador = participantesMap.get(chave);
        show(l, n);
    } else {
        sorteacao();
        console.log('Ganhador não encontrado, sorteando novamente...');
        
    }
}

function show(l, n) {
    const rodaLetra = document.getElementById('roda-letra');
    const rodaNumero = document.getElementById('roda-numero');
    const rodaGanhador = document.getElementById('roda-ganhador');

    const nomesAleatorios = participantes
        .map(p => p[2])
        .sort(() => 0.5 - Math.random())
        .slice(0, 30);

    function girarRoda(roda, valores, tempo, valorFinal, callback) {
        let index = 0;
        const intervalo = 100;
        const start = Date.now();
        const interval = setInterval(() => {
            roda.innerHTML = valores[index];
            index = (index + 1) % valores.length;
            if (Date.now() - start >= tempo) {
                clearInterval(interval);
                roda.innerHTML = valorFinal;
                if (callback) callback();
            }
        }, intervalo);
    }

    girarRoda(rodaLetra, alfabeto, 2000, l, () => {
        girarRoda(rodaNumero, numeros, 2000, n, () => {
            girarRoda(rodaGanhador, nomesAleatorios, 2000, ganhador, () => {
                // Dispara o confete ao final
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            });
        });
    });
}