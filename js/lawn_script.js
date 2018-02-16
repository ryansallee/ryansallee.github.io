const slides = document.querySelectorAll('.slides');
let i = 0;

function showSlides() {
    for (i; i < slides.length; i += 1) {
        var showSlide = slides[i];
        var hideSlide = slides[i - 1];
        showSlide.style.display = 'block';
    }
};

setTimeout(showSlides(), 2000);

// function showSlides () {
//     for (i; i < slides.length; i += 1) {
//         if (i< slides.length) {
//             i=0;
//         }
//         var showSlide = slides[i];
//         showSlide.style.display = 'block';
//     }
// };

// setTimeout(showSlides(), 2000);

// for (let i = 0; i < slides.length; i += 1) {
//     var showSlide = slides[i];
//     showSlide.style.display = "block";
//     if (i < slides.length) {
//         i = 0;
//     }
// };