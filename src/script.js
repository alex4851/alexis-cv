document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    document.querySelector('.next').addEventListener('click', () => {
        moveToNextSlide();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        moveToPrevSlide();
    });

    function updateSlidePosition() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
    }

    function moveToNextSlide() {
        if (currentSlide === totalSlides - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        if (currentSlide === 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide--;
        }
        updateSlidePosition();
    }
});
