/* Efeito de aparecer ao rolar a página */
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            el.classList.add('active');
        }
    });
}

/* Dispara ao carregar e ao rolar */
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Modo escuro */
document.getElementById("toggleTheme").onclick = () => {
    document.body.classList.toggle("dark");
};
