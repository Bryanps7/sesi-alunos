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

// let carrosel = document.querySelector(`.carousel-images`)
// function criarAlunos() {
//     for(let i=0;i<alunos.length;i++){
//         const img = document.createElement('img')
        
//         img.src = `/assets/img/aluno${i}.png`
//         img.alt = `Aluno(a) ${alunos[i]}`
    
//         carrosel.style.display = `flex`
//         img.style.width = `20%`
//         img.style.height = `auto`
    
//         img.onerror = function() {
//             this.src = `/assets/img/alunoNA.png`
//         }
    
//         carrosel.appendChild(img)
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var stopButton = document.getElementById('stopButton');
    var music = document.getElementById('music');

    playButton.addEventListener('click', function() {
        music.play();
    });

    stopButton.addEventListener('click', function() {
        setTimeout(function() {
            music.pause();
            music.currentTime = 0; // Reseta a música para o início
        }, 5000);
    });
});

let currentIndex = 0;
let isSpinning = false;
let stopRequested = false;
let animationFrameId = null;

const nome = document.getElementById(`nome`)
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const spinButton = document.querySelector('.spin');
const stopButton = document.querySelector('.stop');
const studentNameElement = document.querySelector('.name');

spinButton.addEventListener('click', spinCarousel);
stopButton.addEventListener('click', stopCarousel);

function spinCarousel() {
    if (isSpinning) return; // Evita múltiplas animações simultâneas
    isSpinning = true;
    stopRequested = false;
    
    let currentSpeed = 100; // Velocidade inicial
    let currentMove = 0;
    const spins = Math.floor(Math.random() * 10); // Número aleatório de voltas
    const targetIndex = Math.floor(Math.random() * totalImages); // Índice aleatório da imagem alvo
    const totalMoves = spins * totalImages + targetIndex; // Movimentos totais para alcançar a imagem alvo

    function animate() {
        if (stopRequested) {
            currentSpeed *= 1.10; // Desacelera gradualmente
            if (currentSpeed >= 400) { // Condição para parar
                cancelAnimationFrame(animationFrameId);
                isSpinning = false;
                highlightImage(currentIndex); // Destaca a imagem alvo
                return;
            }
        }

        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
        currentMove++;

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const text = document.createElement(`h1`)

    text = alunos[targetIndex]

    nome.appendChild(text)


}

function stopCarousel() {
    if (isSpinning) {
        stopRequested = true;
    }
}

function updateCarousel() {
    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    const newTransformValue = -currentIndex * carouselWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}px)`;
}

function highlightImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

// Adiciona a funcionalidade de redimensionamento para manter o carrossel ajustado
window.addEventListener('resize', updateCarousel);