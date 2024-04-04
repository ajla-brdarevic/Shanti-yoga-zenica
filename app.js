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

//chakra
var cakre = [
  { ime: 'Cakra 1', slike: ['images/Poze/root/1.jpeg', 'images/Poze/root/2.jpeg', 'images/Poze/root/3aa.jpeg', 'images/Poze/root/4.jpeg', 'images/Poze/root/5.jpeg', 'images/Poze/root/6.jpeg', 'images/Poze/root/7.jpeg', 'images/Poze/root/9.jpeg', 'images/Poze/root/10.jpeg',] },
  // Dodajte ostale čakre sa odgovarajućim slikama
];

// Funkcija za dinamičko učitavanje slika u odgovarajuće čakre
function ucitajSlikeZaCakre() {
  cakre.forEach(function(cakra, index) {
      var cakraDiv = document.getElementById('cakra' + (index + 1));

      cakra.slike.forEach(function(slikaUrl) {
          var img = document.createElement('img');
          img.src = slikaUrl;
          img.alt = cakra.ime; // Postavite alt tekst za svaku sliku
          cakraDiv.appendChild(img);
      });
  });
}

// Pozovite funkciju za učitavanje slika kada se stranica učita
window.onload = ucitajSlikeZaCakre;

