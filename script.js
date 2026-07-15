/* =======================================
PAULINE & MICH - SCRIPT PREMIUM
======================================= */

// Menu qui change au défilement
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

if (window.scrollY > 80) {
nav.classList.add("scrolled");
} else {
nav.classList.remove("scrolled");
}

});


// Apparition des sections
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("visible");

}

});

}, {
threshold: 0.15
});

sections.forEach(section => {

section.classList.add("hidden");

observer.observe(section);

});


// Animation de la photo
const photo = document.querySelector(".photo-principale");

window.addEventListener("load", () => {

photo.style.opacity = "1";
photo.style.transform = "translateY(0px)";

});


// =======================================
// COMPTE À REBOURS
// =======================================

const targetDate = new Date("July 17, 2027 14:00:00").getTime();

const timer = setInterval(function () {

const now = new Date().getTime();

const distance = targetDate - now;

if (distance < 0) {

clearInterval(timer);

return;

}

const jours = Math.floor(distance / (1000 * 60 * 60 * 24));

const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const secondes = Math.floor((distance % (1000 * 60)) / 1000);

if(document.getElementById("jours")){

document.getElementById("jours").innerHTML = jours;
document.getElementById("heures").innerHTML = heures;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("secondes").innerHTML = secondes;

}

},1000);
