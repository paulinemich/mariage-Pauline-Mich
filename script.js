// Défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();

const cible = document.querySelector(this.getAttribute('href'));

if(cible){
cible.scrollIntoView({
behavior: "smooth"
});
}
});
});


// Apparition des sections au
