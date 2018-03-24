var slides = document.querySelectorAll('.slides');
slideNumber = 0;
w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 640;

var slideShowArrayLength = slides.length - 1

var slideInterval = setInterval(slideShow, 2000);

var playing = true;
var pauseButton = document.querySelector('#pause');
var resumeButton = document.querySelector('#resume');
var nextButton = document.querySelector('#next');
var previousButton = document.querySelector('#previous');

function slideMove(n) {
    slideShow(slideNumber += n);
}

function slideDisplayed(n) {
    slideShow(slideNumber = n);
}

function stop() {
    if (playing) {
        clearInterval(slideInterval);
        playing = false;
    }
}

function resume() {
    if (!playing) {
        slideInterval = setInterval(slideShow, 2000);
        playing = true;
    }
}


function slideShow(n) {

    if (w >= targetWidth) {
        var i = 0;
        if (n == undefined) {
            n = ++slideNumber;
        }
        if (n > slideShowArrayLength) {
            slideNumber = 0;
        }
        if (n < 0) {
            slideNumber = slides.length - 1;
        }
        for (i; i < slides.length; i += 1) {
            slides[i].style.display = "none"
        }

        slides[slideNumber].style.display = "block";
    }

};

nextButton.onclick = function() {
    slideMove(1);
    clearInterval(slideInterval);
    slideInterval = setInterval(slideShow, 2000);
}

previousButton.onclick = function() {
    slideMove(-1);
    clearInterval(slideInterval);
    slideInterval = setInterval(slideShow, 2000);
}


pauseButton.onclick = function() {
    stop();
}

resumeButton.onclick = function() {
    resume();
}

if (w >= targetWidth) {
    pauseButton.style.display = "inline-block";
    resumeButton.style.display = "inline-block";
    previousButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
}