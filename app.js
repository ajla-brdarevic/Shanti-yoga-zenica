const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; 
  } else {
    document.body.style.overflow = ''; 
  }
});

window.addEventListener('scroll', function () {
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
  { ime: 'Cakra 1', slike: ['images/Poze/root/seated.jpg', 'images/Poze/root/ChildPose.jpg', 'images/Poze/root/warrior.jpg', 'images/Poze/root/pigeon.jpg', 'images/Poze/root/boattwist.jpg', 'images/Poze/root/lizard.jpg','images/Poze/root/janu.jpg', 'images/Poze/root/mountain.jpg', 'images/Poze/root/u.jpg'] },
  { ime: 'Cakra 2', slike: ['images/Poze/sacral/boattwist.jpg', 'images/Poze/sacral/bowtable.jpg', 'images/Poze/sacral/cowcat.jpg', 'images/Poze/sacral/chair.jpg', 'images/Poze/sacral/cowface.jpg', 'images/Poze/sacral/fishandleg.jpg', 'images/Poze/sacral/forwardside.jpg', 'images/Poze/sacral/goddess.jpg', 'images/Poze/sacral/htk.jpg', 'images/Poze/sacral/kamila.jpg', 'images/Poze/sacral/lizard.jpg', 'images/Poze/sacral/mm.jpg', 'images/Poze/sacral/otklon.jpg', 'images/Poze/sacral/pigeon.jpg', 'images/Poze/sacral/warrior.jpg'] },
  { ime: 'Cakra 3', slike: ['images/Poze/solar/boattwist.jpg', 'images/Poze/solar/chair.jpg', 'images/Poze/solar/cowcat.jpg', 'images/Poze/solar/eagle.jpg', 'images/Poze/solar/forwardside.jpg', 'images/Poze/solar/kamila.jpg', 'images/Poze/solar/lukskakavac.jpg', 'images/Poze/solar/moon.jpg', 'images/Poze/solar/mostduga.jpg', 'images/Poze/solar/plow.jpg', 'images/Poze/solar/sideangle.jpg', 'images/Poze/solar/svijeca.jpg'] },
  { ime: 'Cakra 4', slike: ['images/Poze/heart/cowface.jpg', 'images/Poze/heart/fishcobra.jpg', 'images/Poze/heart/kamila.jpg', 'images/Poze/heart/lungemonkey.jpg', 'images/Poze/heart/mostduga.jpg', 'images/Poze/heart/pasnadole.jpg', 'images/Poze/heart/pigeonash.jpg', 'images/Poze/heart/sideangle.jpg', 'images/Poze/heart/sideplank.jpg', 'images/Poze/heart/stolplank.jpg', 'images/Poze/heart/twist.jpg', 'images/Poze/heart/warrior.jpg', 'images/Poze/heart/warrior3.jpg'] },
  { ime: 'Cakra 5', slike: ['images/Poze/throat/bowtable.jpg', 'images/Poze/throat/cowcat.jpg', 'images/Poze/throat/fishcobra.jpg', 'images/Poze/throat/kamila.jpg', 'images/Poze/throat/pas na gore.jpg', 'images/Poze/throat/planks.jpg', 'images/Poze/throat/plow.jpg', 'images/Poze/throat/skakavacash.jpg', 'images/Poze/throat/svijeca.jpg'] },
  { ime: 'Cakra 6', slike: ['images/Poze/third/ChildPose.jpg', 'images/Poze/third/cowface.jpg', 'images/Poze/third/delfin.jpg', 'images/Poze/third/drvo.jpg', 'images/Poze/third/eagle.jpg', 'images/Poze/third/headstand1.jpg', 'images/Poze/third/stoj2.jpg', 'images/Poze/third/stoj3.jpg', 'images/Poze/third/svijeca.jpg', 'images/Poze/third/vranamjesec.jpg', 'images/Poze/third/warrior3.jpg', 'images/Poze/third/zecplow.jpg'] },
  { ime: 'Cakra 7', slike: ['images/Poze/crown/forwardside.jpg', 'images/Poze/crown/headstand1.jpg', 'images/Poze/crown/headstand2.jpg', 'images/Poze/crown/headstand3.jpg', 'images/Poze/crown/headstand4.jpg', 'images/Poze/crown/pasnadole.jpg', 'images/Poze/crown/warrior3.jpg', 'images/Poze/crown/zec.jpg'] },
];

// Funkcija za dinamičko učitavanje slika u odgovarajuće čakre
function ucitajSlikeZaCakre() {
  cakre.forEach(function (cakra, index) {
    var cakraDiv = document.getElementById('cakra' + (index + 1));

    cakra.slike.forEach(function (slikaUrl) {
      var img = document.createElement('img');
      img.src = slikaUrl;
      img.alt = cakra.ime; 
      cakraDiv.appendChild(img);
    });
  });
}

// Pozovite funkciju za učitavanje slika kada se stranica učita
window.onload = ucitajSlikeZaCakre;


