const body = document.getElementById("body");
const header = document.getElementById("header");
const photoContainer = document.getElementById("about");
const goals = document.getElementById("goals");
const certificates = document.getElementById("certificates");
const goalsText = document.getElementById("goals-text");
const caption = document.getElementById("caption");
const projects = document.getElementById("projects");
const footer = document.getElementById("contact");
const elements = [header, body, photoContainer, certificates, goals, goalsText, caption, projects, footer];

// Seta transition antes do carregamento em todos os elementos

   elements.forEach((element) => {
    element.style.transition = "opacity 1s ease-in-out";
});

// Espera o caregamento do DOM para começar a animação

window.addEventListener("DOMContentLoaded", () => {

    // Animação fade-in que é aplicada a cada elemento com um delay entre eles

        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = "1";
            }, index * 500);
        });

});

 /* Poderia ter sido feito com uma biblioteca ou até mesmo com CSS puro
 mas fiz em Javascript por ser mais prático do que importar uma biblioteca
 pra algo tão "simples" e mais rapido do que usar CSS puro, 
 o forEach já cobre todos e aplica sem ter que ficar colocando manualmente de 1 em 1
 e sem ter que importar uma biblioteca.
 */