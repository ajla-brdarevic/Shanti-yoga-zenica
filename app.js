const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.nav');
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
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

setInterval(nextSlide, 5000); 

