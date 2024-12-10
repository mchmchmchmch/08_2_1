let menu = document.querySelector(".container ul");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle("show-menu");
});

const slider = document.querySelector('.texts');
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')
const slides = Array.from(slider.querySelectorAll('p'))
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide(){
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider(){
    slides.forEach((slide, index) => {
        if (index === slideIndex){
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    })
}

updateSlider();