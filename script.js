let btn_left = document.querySelector("#btn_left");
let btn_right = document.querySelector("#btn_right");
let slides = document.querySelectorAll(".div_articles article");
let dots = document.querySelectorAll(".carrossel_navButton");

let currentSlide = 0;
const countSlides = slides.length;

function showSlide(index){
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
    
    dots.forEach((dot) => {
        dot.classList.remove('current_slide');
    });
    dots[index].classList.add('current_slide');
}
showSlide(currentSlide);

btn_right.addEventListener('click', function(){
    currentSlide = (currentSlide + 1) % countSlides;
    showSlide(currentSlide);
});
btn_left.addEventListener('click', function(){
    currentSlide = (currentSlide - 1 + countSlides) % countSlides;
    showSlide(currentSlide);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', function(){
        showSlide(index);
        currentSlide = index;
    });
});