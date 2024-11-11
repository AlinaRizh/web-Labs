document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function updateSlider() {
        const width = slider.clientWidth;
        slider.style.transform = `translateX(-${currentSlide * width}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    nextButton.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % dots.length;
        updateSlider();
    });

    prevButton.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + dots.length) % dots.length;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentSlide = index;
            updateSlider();
        });
    });

    updateSlider();
});
