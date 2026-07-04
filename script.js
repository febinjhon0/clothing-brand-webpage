// Select elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation item
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const heroImg = document.getElementById("heroImg");

const images = [
    "images/front1.webp",
    "images/front2.jpg",
    "images/front3.jpg",
    "images/front4.jpg"
];

let currentIndex = 0;

setInterval(() => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    heroImg.src = images[currentIndex];

}, 3000);