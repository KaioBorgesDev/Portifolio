const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const idade = document.getElementById("idade");

idade.innerHTML = new Date().getFullYear() - 2004;
const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Array de palavras para o efeito de digitação
const words = ["Full-Stack", "Back-End"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");
const cursorElement = typingElement.querySelector(".cursor");

// Velocidades em milissegundos
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseBetweenWords = 1000;
const pauseAfterDelete = 500;

function type() {
    const currentWord = words[currentWordIndex];
    
    if (!isDeleting) {
        // Adiciona um caractere
        typingElement.innerHTML = currentWord.substring(0, currentCharIndex + 1) + '<span class="cursor">|</span>';
        currentCharIndex++;

        if (currentCharIndex === currentWord.length) {
            // Palavra completa, pausa antes de deletar
            isDeleting = true;
            setTimeout(type, pauseBetweenWords);
            return;
        }
    } else {
        // Remove um caractere
        typingElement.innerHTML = currentWord.substring(0, currentCharIndex - 1) + '<span class="cursor">|</span>';
        currentCharIndex--;

        if (currentCharIndex === 0) {
            // Palavra deletada, muda para a próxima
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, pauseAfterDelete);
            return;
        }
    }

    // Define a velocidade com base na ação
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
}

// Inicia o efeito de digitação quando a página carrega
document.addEventListener("DOMContentLoaded", type);