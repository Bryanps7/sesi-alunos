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

window.onload = iniciar()

function iniciar() {
    let carousel = document.querySelector('.carousel-images')

    for(let i = 1; i <= 100; i++){
        carousel.innerHTML = `
            <img src="/assets/img/alunoNA.png" alt="Agatha Iasmin Koschel do Nascimento">
            <img src="/assets/img/aluno1.png" alt="Ana Clara Furtado Goudinho">
            <img src="/assets/img/aluno2.png" alt="Arthur Alexandre Abbruzzini">
            <img src="/assets/img/aluno3.png" alt="Arthur Marcos Serpa Martins">
            <img src="/assets/img/aluno4.png" alt="Arthur Soglia Veronica">
            <img src="/assets/img/aluno5.png" alt="Artur Ximendes Del Guerso">
            <img src="/assets/img/aluno6.png" alt="Augusto Gonçalves Dias">
            <img src="/assets/img/aluno7.png" alt="Brenda Julya de Souza Freitas da Silva">
            <img src="/assets/img/aluno8.png" alt="Bryan Prinz da Siva">
            <img src="/assets/img/aluno9.png" alt="Daniel Domingo">
            <img src="/assets/img/aluno10.png" alt="Davi Schoenardie de Almeida">
            <img src="/assets/img/aluno11.png" alt="Eduardo Corrêa da Cruz">
            <img src="/assets/img/aluno12.png" alt="Eric D. Scapini">
            <img src="/assets/img/aluno13.png" alt="Érick Miguel Schuck">
            <img src="/assets/img/aluno14.png" alt="Francisco Lisboa da Silva Lima">
            <img src="/assets/img/aluno15.png" alt="Giovanni Filipe Burgo">
            <img src="/assets/img/aluno16.png" alt="Guilherme Tomaz Silva">
            <img src="/assets/img/aluno17.png" alt="Helena Neis da Silva">
            <img src="/assets/img/aluno18.png" alt="João Francisco Luchtenberg Ventura">
            <img src="/assets/img/aluno19.png" alt="João Paulo Fagundes">
            <img src="/assets/img/aluno20.png" alt="Joao Victor de Abreu Cunha">
            <img src="/assets/img/aluno21.png" alt="João Vitor Galiotto de Souza">
            <img src="/assets/img/aluno22.png" alt="João Vitor Santos">
            <img src="/assets/img/aluno23.png" alt="Jonas Luiz Marin">
            <img src="/assets/img/aluno24.png" alt="Kauê Dantti Schaparini">
            <img src="/assets/img/aluno25.png" alt="Lucas Pereira">
            <img src="/assets/img/aluno26.png" alt="Lucas Wagner Salim">
            <img src="/assets/img/aluno27.png" alt="Manuela Cristina Torres Guimarães">
            <img src="/assets/img/aluno28.png" alt="Mateus Queiroz Logrado">
            <img src="/assets/img/aluno29.png" alt="Mateus Zandona Krieger">
            <img src="/assets/img/aluno30.png" alt="Nicollas Jose Prim">
            <img src="/assets/img/aluno31.png" alt="Nicollas Lopes do Nascimento">
            <img src="/assets/img/aluno32.png" alt="Pedro Rafael Santiago">
            <img src="/assets/img/aluno33.png" alt="Ruan Geraldo">
            <img src="/assets/img/aluno34.png" alt="Vinícius de Bona Ruas">
            <img src="/assets/img/aluno35.png" alt="Yan Bueno Goulart">
        `
    }
}

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