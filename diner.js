const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");



hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute("aria-expanded", !isExpanded);
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
}))