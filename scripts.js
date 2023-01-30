const moon = document.querySelector(".moon");
const body = document.querySelector(".body");
const container = document.querySelector(".container");
const img = document.querySelector(".img");
const bio = document.querySelector(".bio");
const namep = document.querySelector(".name");
const reseaux = document.querySelector(".reseaux");
const hire = document.querySelector(".hire");
const about = document.querySelector(".about");



moon.addEventListener("click", () => {
    body.classList.toggle("bodyn");
    container.classList.toggle("containern");
    img.classList.toggle("imgn");
    bio.classList.toggle("bion");
    namep.classList.toggle("namen");
    reseaux.classList.toggle("reseauxn");
    hire.classList.toggle("hiren");
    about.classList.toggle("aboutn");
    moon.classList.toggle("moonn");
})