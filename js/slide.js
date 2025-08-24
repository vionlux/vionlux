// slide.js

let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

// Auto play every 4 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 4000);

// Initialize
showSlide(currentIndex);
