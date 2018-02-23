const slides = document.querySelectorAll('.slides');
slideNumber = 0;
w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 640;

showSlides();

function showSlides() {
    var i = 0;
    var slidesMinus = document.querySelectorAll('.slides');
    if (w >= targetWidth) {
        for (i = 0; i < slides.length; i += 1) {
            slidesMinus[i].style.display = "none"
        }
        slideNumber += 1;
        if (slideNumber > slides.length) {
            slideNumber = 1;
        }
        slides[slideNumber - 1].style.display = "block";
        setTimeout(showSlides, 2000)
    }
};


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