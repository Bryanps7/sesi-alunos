const listAlunos = [
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
let alunos = [...listAlunos];

function renderStudentList() {
    const ul = document.querySelector('#student-list ul');
    ul.innerHTML = '';
    alunos.forEach((aluno, index) => {
        ul.innerHTML += `
            <li>
                <input type="checkbox" id="aluno${index}" checked>
                <label for="aluno${index}">${aluno}</label>
            </li>
        `;
    });
}

function updateStudentList() {
    alunos = listAlunos.filter((_, index) => {
        const checkbox = document.getElementById(`aluno${index}`);
        return checkbox && checkbox.checked;
    });
    renderCarousel(); // Atualiza o carrossel após filtrar
}

function renderCarousel() {
    const carousel = document.querySelector('.carousel-images');
    carousel.innerHTML = ''; // Limpa o carrossel
    alunos.forEach((aluno, index) => {
        carousel.innerHTML += `
            <img src="/assets/img/aluno${listAlunos.indexOf(aluno)}.png" alt="${aluno}">
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderStudentList();
    renderCarousel();

    document.getElementById('updateList').addEventListener('click', updateStudentList);

    const spinButton = document.querySelector('.spin');
    const stopButton = document.querySelector('.stop');

    spinButton.addEventListener('click', spinCarousel);
    stopButton.addEventListener('click', stopCarousel);
});

// Funções de girar/parar carrossel
let currentIndex = 0;
let isSpinning = false;
let stopRequested = false;
let animationFrameId = null;

function spinCarousel() {
    if (isSpinning) return;
    isSpinning = true;
    stopRequested = false;

    function animate() {
        if (stopRequested) {
            cancelAnimationFrame(animationFrameId);
            isSpinning = false;
            highlightImage(currentIndex);
            return;
        }
        currentIndex = (currentIndex + 1) % alunos.length;
        updateCarouselTransform();
        animationFrameId = requestAnimationFrame(animate);
    }
    animate();
}

function stopCarousel() {
    if (isSpinning) {
        stopRequested = true;
    }
}

function updateCarouselTransform() {
    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    const newTransformValue = -currentIndex * carouselWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}px)`;
}

function highlightImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    images.forEach(img => img.classList.remove('active'));
    if (images[index]) images[index].classList.add('active');
}

// Adapta o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarouselTransform);