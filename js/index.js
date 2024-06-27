// index.js
let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 2000); // 2초마다 다음 슬라이드로 넘어감
