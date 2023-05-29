//const slider = document.querySelector('.slider');
//const slides = document.querySelector('.slides');
//const slideWidth = slider.clientWidth;
//let currentIndex = 0;

/// Function to slide to the next image
//function slideNext() {
//  currentIndex = (currentIndex + 1) % slides.children.length;
//  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
//}

// Function to slide to the previous image
//function slidePrev() {
//  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
//  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
//}

// Event listeners for next and previous buttons
//document.querySelector('.next').addEventListener('click', slideNext);
//document.querySelector('.prev').addEventListener('click', slidePrev);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;
 
// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}
 
// Initial slide
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}
 
// Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}
 
// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}
 
// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});
 
// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});
 
startSlide();