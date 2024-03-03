const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

//Hero image
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-image');

function showSlide(n) {
    slides.forEach(slide => slide.style.opacity = 0);
    slides[n].style.opacity = 1;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Automatski prelazak na sljedeću sliku svakih 5 sekundi
