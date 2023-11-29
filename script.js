document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 4; 
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100;
        slider.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, 3000);
});