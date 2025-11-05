const alfabeto = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const numeros = Array.from({ length: 20 }, (_, i) => i + 1);

const participantes = [
    ['A', 1, 'Mario 2°-B'],
    ['A', 2, 'Carlos E. Souza'],
    ['A', 3, 'Diego Vidal'],
    ['A', 4, 'Bruna Bertin'],
    ['A', 5, 'Carlos E. Souza'],
    ['A', 6, 'Livia Maria Pereira'],
    ['A', 7, 'Sara Hennicka'],
    ['A', 8, 'Alexandre Ramos'],
    ['A', 9, 'Diego Vidal'],
    ['A', 10, 'Diego Vidal'],
    ['A', 11, 'Livia Maria Pereira'],
    ['A', 12, 'Josafa'],
    ['A', 13, 'Camila Silva'],
    ['A', 14, 'Cauê Oliveira'],
    ['A', 15, 'Livia Maria Pereira'],
    ['A', 16, 'Livia Maria Pereira'],
    ['A', 17, 'Carlos E. Souza'],
    ['A', 18, 'Josafa'],
    ['A', 19, 'Livia Maria Pereira'],
    ['A', 20, 'Carlos E. Souza'],
    ['B', 1, 'Rose Abreu'],
    ['B', 2, 'Rose Abreu'],
    ['B', 3, 'Rose Abreu'],
    ['B', 4, 'Rose Abreu'],
    ['B', 5, 'Rose Abreu'],
    ['B', 6, 'Rose Abreu'],
    ['B', 7, 'Rose Abreu'],
    ['B', 8, 'Rose Abreu'],
    ['B', 9, 'Rose Abreu'],
    ['B', 10, 'Rose Abreu'],
    ['B', 11, 'Rose Abreu'],
    ['B', 12, 'Rose Abreu'],
    ['B', 13, 'Rose Abreu'],
    ['B', 14, 'Rose Abreu'],
    ['B', 15, 'Rose Abreu'],
    ['B', 16, 'Rose Abreu'],
    ['B', 17, 'Rose Abreu'],
    ['B', 18, 'Rose Abreu'],
    ['B', 19, 'Rose Abreu'],
    ['B', 20, 'Rose Abreu'],
    ['C', 1, 'Yzadora 1°-A'],
    ['C', 3, 'Carlos Roberto'],
    ['C', 5, 'Curinthia'],
    ['C', 6, 'Curinthia'],
    ['C', 7, 'Curinthia'],
    ['D', 1, 'Evyllen Argenton'],
    ['D', 2, 'Evyllen Argenton'],
    ['D', 3, 'Evyllen Argenton'],
    ['D', 4, 'Vivian Britz'],
    ['D', 5, 'Vivian Britz'],
    ['D', 6, 'Vivian Britz'],
    ['D', 7, 'Vivian Britz'],
    ['D', 8, 'Vivian Britz'],
    ['D', 9, 'Vivian Britz'],
    ['D', 10, 'Vivian Britz'],
    ['D', 11, 'Vivian Britz'],
    ['D', 12, 'Vivian Britz'],
    ['D', 13, 'Vivian Britz'],
    ['D', 14, 'Vitoria Dias'],
    ['D', 15, 'Vitoria Dias'],
    ['D', 16, 'Vitoria Dias'],
    ['D', 17, 'Vitoria Dias'],
    ['D', 18, 'Helena Neis'],
    ['D', 19, 'Helena Neis'],
    ['D', 20, 'Helena Neis'],
    ['E', 1, 'Brissia Brassaloti'],
    ['E', 2, 'Lucas Tolledo'],
    ['E', 3, 'Brissia Brassaloti'],
    ['E', 4, 'Lucas Tolledo'],
    ['E', 5, 'Brissia Brassaloti'],
    ['E', 6, 'Lucas Tolledo'],
    ['E', 7, 'Gabriel Tolledo'],
    ['E', 8, 'Pedro Rafael'],
    ['E', 9, 'Brissia Brassaloti'],
    ['E', 10, 'Lucas Tolledo'],
    ['E', 11, 'Brissia Brassaloti'],
    ['E', 12, 'Brissia Brassaloti'],
    ['E', 13, 'Brissia Brassaloti'],
    ['E', 14, 'Brissia Brassaloti'],
    ['E', 15, 'Brissia Brassaloti'],
    ['E', 16, 'Brissia Brassaloti'],
    ['E', 17, 'Pedro Rafael'],
    ['E', 18, 'Gabriel Toledo'],
    ['E', 19, 'Gabriel Toledo'],
    ['E', 20, 'Brissia Brassaloti'],
    ['F', 1, 'Yzabela Cunha'],
    ['F', 2, 'Yzadora de Almeida'],
    ['F', 3, 'Bianca Pinto'],
    ['F', 4, 'Matheus Kluae'],
    ['F', 5, 'Nicolli Minuzzo'],
    ['F', 6, 'Hugo Perim'],
    ['F', 7, 'Cauã Bueno'],
    ['F', 8, 'Rafael Simões'],
    ['F', 9, 'Emily Benachio'],
    ['F', 10, 'Nicolli Minuzzo'],
    ['F', 11, 'Pedro Reis'],
    ['F', 12, 'Claudir Pedro'],
    ['F', 13, 'Leide Bachinski'],
    ['F', 14, 'Cauã Bueno'],
    ['F', 15, 'Rafael Simões'],
    ['F', 16, 'Pedro Reis'],
    ['F', 17, 'Ana Carolina L'],
    ['F', 18, 'Nicolli Minuzzo'],
    ['F', 19, 'Leide Bachinski'],
    ['F', 20, 'Vitoria Rudnik da Silva'],
    ['G', 1, 'Junior'],
    ['G', 2, 'Junior'],
    ['G', 3, 'Junior'],
    ['G', 4, 'Junior'],
    ['G', 5, 'Junior'],
    ['G', 6, 'Jefferson'],
    ['G', 7, 'Jefferson'],
    ['G', 8, 'Jefferson'],
    ['G', 9, 'Jefferson'],
    ['G', 10, 'Jefferson'],
    ['G', 11, 'Jefferson'],
    ['G', 12, 'Jefferson'],
    ['G', 13, 'Jefferson'],
    ['G', 14, 'Jefferson'],
    ['G', 15, 'Jefferson'],
    ['G', 16, 'Junior'],
    ['G', 17, 'Junior'],
    ['G', 18, 'Junior'],
    ['G', 19, 'Junior'],
    ['G', 20, 'Junior'],
    ['H', 1, 'Jaciani Geraldo'],
    ['H', 2, 'Jaciani Geraldo'],
    ['H', 3, 'Carlos Roberto'],
    ['H', 4, 'Andre Geraldo'],
    ['H', 5, 'Andre Geraldo'],
    ['H', 6, 'Ruan Geraldo'],
    ['H', 7, 'Jaciani Geraldo'],
    ['H', 8, 'Andre Geraldo'],
    ['H', 9, 'Jaciani Geraldo'],
    ['H', 10, 'Jaciani Geraldo'],
    ['H', 11, 'Mirna R. Geraldo'],
    ['H', 12, 'Andre Geraldo'],
    ['H', 13, 'Andre Geraldo'],
    ['H', 14, 'Mirna R. Geraldo'],
    ['H', 15, 'Mirna R. Geraldo'],
    ['H', 16, 'Andre Geraldo'],
    ['H', 17, 'Andre Geraldo'],
    ['H', 18, 'Andre Geraldo'],
    ['H', 19, 'Andre Geraldo'],
    ['H', 20, 'Ruan Geraldo'],
    ['I', 6, 'Natalia de Bona'],
    ['I', 7, 'Natalia de Bona'],
    ['I', 11, 'Natalia de Bona'],
    ['I', 16, 'Natalia de Bona'],
    ['I', 17, 'Natalia de Bona'],

    // K
    ['K', 1, 'Kellen Daiana'],
    ['K', 2, 'Maria Baldissera'],
    ['K', 3, 'Jonas Marim'],
    ['K', 4, 'Jonas Marim'],
    ['K', 5, 'Gisele P Silva'],
    ['K', 6, 'Carlos Roberto'],
    ['K', 7, 'Jonas Marim'],
    ['K', 8, 'Jonas Marim'],
    ['K', 9, 'Jonas Marim'],
    ['K', 10, 'Sandra Gomes'],
    ['K', 11, 'Jean Pereira'],
    ['K', 12, 'Kellen Daiana'],
    ['K', 13, 'Kellen Daiana'],
    ['K', 14, 'Jonas Marim'],
    ['K', 15, 'Gisele P Silva'],
    ['K', 16, 'Jonas Marim'],
    ['K', 17, 'Jean Pereira'],
    ['K', 18, 'ines Baldissera'],
    ['K', 19, 'Pedro Ecco'],
    ['K', 20, 'Ademir Simas'],

    // L
    ['L', 1, 'Maria Angelica'],
    ['L', 2, 'Maria Angelica'],
    ['L', 3, 'Maria Angelica'],
    ['L', 4, 'Maria Angelica'],
    ['L', 5, 'Maria Angelica'],
    ['L', 6, 'Maria Angelica'],
    ['L', 7, 'Maria Angelica'],
    ['L', 8, 'Maria Angelica'],
    ['L', 9, 'Maria Angelica'],
    ['L', 10, 'Maria Angelica'],
    ['L', 11, 'Sofia Lisboa'],
    ['L', 12, 'Sofia Lisboa'],
    ['L', 13, 'Sofia Lisboa'],
    ['L', 14, 'Sofia Lisboa'],
    ['L', 15, 'Sofia Lisboa'],
    ['L', 16, 'Moises Lima'],
    ['L', 17, 'Moises Lima'],
    ['L', 18, 'Moises Lima'],
    ['L', 19, 'Moises Lima'],
    ['L', 20, 'Moises Lima'],

    // M
    ['M', 1, 'Nicole Prim'],
    ['M', 2, 'Nicollas Prim'],
    ['M', 3, 'Nicole Prim'],
    ['M', 4, 'Valcirio Prim'],
    ['M', 5, 'Nicollas Prim'],
    ['M', 6, 'Isolete Schmidt'],
    ['M', 7, 'Isolete Schmidt'],
    ['M', 8, 'Catarina Gúbio'],
    ['M', 9, 'Nicole Prim'],
    ['M', 10, 'Paulo Gúbio'],
    ['M', 11, 'Valcirio Prim'],
    ['M', 12, 'Josafa'],
    ['M', 18, 'Josafa'],
    ['M', 20, 'Josafa'],

    // N
    ['N', 1, 'Janice'],
    ['N', 2, 'Hugo Perim'],
    ['N', 3, 'Fernanda Felline'],
    ['N', 4, 'Raissa Joana'],
    ['N', 5, 'Ana Carolina'],
    ['N', 6, 'Yzadora'],
    ['N', 7, 'Sthefani Roth'],
    ['N', 8, 'Gabi-Maybelly'],
    ['N', 9, 'Yzadora'],
    ['N', 10, 'Emanuela Furtado'],
    ['N', 11, 'Yzadora'],
    ['N', 12, 'Ana Carolina'],
    ['N', 13, 'Emanuela Furtado'],
    ['N', 14, 'Andressa Dias'],
    ['N', 15, 'Carlos Roberto da Silva Filho'],
    ['N', 16, 'Marlene'],
    ['N', 17, 'Marlene'],
    ['N', 18, 'Gabi-Maybelly'],
    ['N', 19, 'Ana Carolina'],
    ['N', 20, 'Julia Costa'],

    // O
    ['O', 1, 'Curinthia'],
    ['O', 2, 'Curinthia'],
    ['O', 3, 'Curinthia'],
    ['O', 4, 'Marcia da Luz'],

    // P
    ['P', 1, 'Manuela Cristina'],
    ['P', 2, 'Lara Paganelli'],
    ['P', 3, 'Lara Paganelli'],
    ['P', 4, 'Lara Paganelli'],
    ['P', 5, 'Lara Paganelli'],
    ['P', 6, 'Lara Paganelli'],
    ['P', 7, 'Lara Paganelli'],
    ['P', 8, 'Lara Paganelli'],
    ['P', 9, 'Lara Paganelli'],
    ['P', 10, 'Lara Paganelli'],
    ['P', 11, 'Lara Paganelli'],
    ['P', 12, 'Kelly Costa'],
    ['P', 13, 'Lara Paganelli'],
    ['P', 14, 'Lara Paganelli'],
    ['P', 15, 'Lara Paganelli'],
    ['P', 16, 'Lara Paganelli'],
    ['P', 17, 'Lara Paganelli'],
    ['P', 18, 'Lara Paganelli'],
    ['P', 19, 'Lara Paganelli'],
    ['P', 20, 'Manuela Cristina'],

    // R
    ['R', 1, 'João Pedro S'],
    ['R', 2, 'João Pedro S'],
    ['R', 3, 'João Pedro S'],
    ['R', 4, 'João Pedro S'],
    ['R', 5, 'João Pedro S'],
    ['R', 6, 'João Pedro S'],
    ['R', 7, 'João Pedro S'],
    ['R', 8, 'João Pedro S'],
    ['R', 9, 'Eliel Bernardi'],
    ['R', 10, 'João Pedro S'],
    ['R', 11, 'João Pedro S'],
    ['R', 12, 'João Pedro S'],
    ['R', 13, 'João Pedro S'],
    ['R', 14, 'Fábio 2°-B'],
    ['R', 15, 'João Pedro S'],
    ['R', 16, 'João Pedro S'],
    ['R', 17, 'João Pedro S'],
    ['R', 18, 'João Pedro S'],
    ['R', 19, 'João Pedro S'],
    ['R', 20, 'Beatriz V'],

    // S
    ['S', 1, 'Carlos Roberto'],
    ['S', 2, 'Davi Bocarte'],
    ['S', 3, 'Marcus Vinicius'],
    ['S', 4, 'Marcelo Guerso'],
    ['S', 5, 'Marcelo Guerso'],
    ['S', 6, 'Marcelo Guerso'],
    ['S', 7, 'Marcelo Guerso'],
    ['S', 8, 'Marcelo Guerso'],
    ['S', 9, 'Maria Guerso'],
    ['S', 10, 'Maria Guerso'],
    ['S', 11, 'Maria Guerso'],
    ['S', 12, 'Marcus Vinicius'],
    ['S', 13, 'marcus Guerso'],
    ['S', 14, 'Julia E'],
    ['S', 15, 'Isabella Varela'],
    ['S', 16, 'Isabella Varela'],
    ['S', 17, 'Isabella Varela'],
    ['S', 18, 'Isabella Varela'],
    ['S', 19, 'Isabella Varela'],
    ['S', 20, 'marcus Guerso'],

    // U
    ['U', 1, 'Amabili Prof'],
    ['U', 2, 'Kelly Costa'],
    ['U', 3, 'Yzabela Cunha'],
    ['U', 4, 'Amabili Prof'],
    ['U', 5, 'Yzadora Almeida'],
    ['U', 6, 'Amabili Prof'],
    ['U', 7, 'Amabili Prof'],
    ['U', 8, 'Kelly Costa'],
    ['U', 9, 'Amabili Prof'],
    ['U', 10, 'Kelly Costa'],
    ['U', 11, 'Amabili Prof'],
    ['U', 12, 'Julya Oliveira'],
    ['U', 13, 'Elaine Barbosa'],
    ['U', 14, 'Amabili Prof'],
    ['U', 15, 'Yzabela Cunha'],
    ['U', 16, 'Amabili Prof'],
    ['U', 17, 'Yzabela Cunha'],
    ['U', 18, 'Amabili Prof'],
    ['U', 19, 'Kelly Costa'],
    ['U', 20, 'Amabili Prof'],

    // V
    ['V', 1, 'Wendel Moura'],
    ['V', 2, 'Mayara Mess'],
    ['V', 3, 'Pedro Henrique'],
    ['V', 4, 'Carlos E.Melo'],
    ['V', 5, 'Katherine Machado'],
    ['V', 6, 'Mayara Mess'],
    ['V', 7, 'Davi B'],
    ['V', 8, 'Vicente L'],
    ['V', 9, 'Eduardo Michereff'],
    ['V', 10, 'Isabeli Souzaq'],
    ['V', 11, 'Carlos E.Melo'],
    ['V', 12, 'Wendel'],
    ['V', 13, 'Prof Juliana'],
    ['V', 14, 'João Mateus'],
    ['V', 15, 'Pedro Henrique'],
    ['V', 16, 'Carlos E.Melo'],
    ['V', 17, 'Taina Melo'],
    ['V', 18, 'Mayara Mess'],
    ['V', 19, 'Katherine Machado'],
    ['V', 20, 'Taylline Wengue'],

    // W
    ['W', 1, 'Maria Conceição'],
    ['W', 2, 'Maria Conceição'],
    ['W', 3, 'Katia Ribeiro'],
    ['W', 4, 'Jonas Marim'],
    ['W', 5, 'Katia Ribeiro'],
    ['W', 6, 'Maria Conceição'],
    ['W', 7, 'Katia Ribeiro'],
    ['W', 8, 'Maria Conceição'],
    ['W', 9, 'Katia Ribeiro'],
    ['W', 10, 'Maria Conceição'],
    ['W', 11, 'natalia santana'],
    ['W', 12, 'Katia Ribeiro'],
    ['W', 13, 'Katia Ribeiro'],
    ['W', 14, 'Katia Ribeiro'],
    ['W', 15, 'juliana Aparecida'],
    ['W', 16, 'Katia Ribeiro'],
    ['W', 17, 'natalia santana'],
    ['W', 18, 'Katia Ribeiro'],
    ['W', 19, 'Maria Conceição'],
    ['W', 20, 'Katia Ribeiro'],

    // X
    ['X', 1, 'Julia Costa'],
    ['X', 2, 'Clara'],
    ['X', 3, 'Taylline Wengue'],
    ['X', 4, 'Clara'],
    ['X', 5, 'Ana carolina'],
    ['X', 6, 'Fabinho'],
    ['X', 7, 'Marlene'],
    ['X', 8, 'Isabeli Souzaq'],
    ['X', 9, 'Josy prof'],
    ['X', 10, 'Ana carolina'],
    ['X', 11, 'Venzon'],
    ['X', 12, 'Julia Costa'],
    ['X', 13, 'Eduardo Michereff'],
    ['X', 14, 'Fabinho'],
    ['X', 15, 'Sthefani roth'],
    ['X', 16, 'Fernanda Felline'],
    ['X', 17, 'Fabinho'],
    ['X', 18, 'Fernanda Felline'],
    ['X', 19, 'Fabinho'],
    ['X', 20, 'Taylline Wengue'],

    // Y
    ['Y', 1, 'Arthur Soglia'],
    ['Y', 2, 'Arthur Soglia'],
    ['Y', 3, 'Maria e'],
    ['Y', 4, 'Iara Lacerda'],
    ['Y', 5, 'Nathalia B'],
    ['Y', 6, 'Nathalia B'],
    ['Y', 7, 'Jediely -3°a'],
    ['Y', 8, 'Maica'],
    ['Y', 9, 'Sandra Gomes'],
    ['Y', 10, 'Gustavo Bonemann'],
    ['Y', 11, 'Isabeli Souza'],
    ['Y', 12, 'Sandrinha'],
    ['Y', 13, 'Isabeli Souza'],
    ['Y', 14, 'Paula Ferreira'],
    ['Y', 15, 'Milena Alves'],
    ['Y', 16, 'Milena Alves'],
    ['Y', 17, 'Sara Martins'],
    ['Y', 18, 'Milena Alves'],
    ['Y', 19, 'Jediely -3°a'],
    ['Y', 20, 'Milena Alves'],

    // Z
    ['Z', 1, 'Robson almeida'],
    ['Z', 2, 'Julia Schonaide'],
    ['Z', 3, 'Julia B'],
    ['Z', 4, 'Debora Schoenaide'],
    ['Z', 5, 'Robson almeida'],
    ['Z', 6, 'Klein'],
    ['Z', 7, 'Dionathan S'],
    ['Z', 8, 'Robson almeida'],
    ['Z', 9, 'Klein'],
    ['Z', 10, 'Robson almeida'],
    ['Z', 11, 'klein'],
    ['Z', 12, 'Eva S'],
    ['Z', 13, 'julia b'],
    ['Z', 14, 'julia schonaide'],
    ['Z', 15, 'Eva S'],
    ['Z', 16, 'klein'],
    ['Z', 17, 'klein'],
    ['Z', 18, 'Julia B'],
    ['Z', 19, 'Debora'],
    ['Z', 20, 'Eva S']
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

    // Cores de Halloween para o confete
    const halloweenColors = ['#FF6B35', '#8B0000', '#1A0B2E', '#39FF14', '#3D2352'];

    girarRoda(rodaLetra, alfabeto, 2000, l, () => {
        girarRoda(rodaNumero, numeros, 2000, n, () => {
            girarRoda(rodaGanhador, nomesAleatorios, 2000, ganhador, () => {
                // Dispara o confete ao final
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: halloweenColors,
                    shapes: ['circle', 'square'] // Adiciona formas diferentes
                });

                // Confeti adicional para mais efeito
                setTimeout(() => {
                    confetti({
                        particleCount: 100,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: halloweenColors
                    });
                }, 250);

                setTimeout(() => {
                    confetti({
                        particleCount: 100,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: halloweenColors
                    });
                }, 400);
            });
        });
    });
}