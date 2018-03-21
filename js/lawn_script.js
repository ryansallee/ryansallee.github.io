const slides = document.querySelectorAll('.slides');
slideNumber = 0;
w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 640;

var slideInterval = setInterval(slideShow, 1000);

var playing = true;
var pauseButton = document.querySelector('#pause');
var resumeButton = document.querySelector('#resume');


function slideShow() {
    var i = 0;
    var slidesMinus = document.querySelectorAll('.slides');
    if (w >= targetWidth) {
        for (i; i < slides.length; i += 1) {
            slidesMinus[i].style.display = "none"
        }
        slideNumber += 1;
        if (slideNumber > slides.length) {
            slideNumber = 1;
        }
        slides[slideNumber - 1].style.display = "block";

    }
};

function stop() {
    if (playing) {
        clearInterval(slideInterval);
        playing = false;
    }
}

function resume() {
    if (!playing) {
        slideInterval = setInterval(slideShow, 1000);
        playing = true;
    }
}

pauseButton.onclick = function() {
    stop();
}

resumeButton.onclick = function() {
    resume();
}

if (w < targetWidth) {
    document.querySelector('#pause').style.display = "none";
    document.querySelector('#resume').style.display = "none"
}

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