// // This script's purpose is to create a slideshow feature on the our_work.html page that only runs
// on viewports 640px or wider that has functional next, previous, pause and resume buttons. It also 
// overrides CSS to make sure that controls and the slides for the slideshow are displayed.

// Declare variable to select all of the .slides divs.
var slides = document.querySelectorAll('.slides');
// Declare variable to keep a counter of the .slides divs
var slideNumber = 0;
// Set variables to detect the viewport width and to set the minimum width for the slideShow function to apply
var viewPortWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 640;
// Set variable for the interval for the slides to advance every 2 seconds
var slideInterval = setInterval(slideShow, 2000);
// Set variable to determine if the slideshow is playing. By default the show plays so it will be set to true.
var showPlaying = true;
// Declare variables for the control buttons as they will be used several times
var pauseButton = document.querySelector('#pause');
var resumeButton = document.querySelector('#resume');
var nextButton = document.querySelector('#next');
var previousButton = document.querySelector('#previous');

// Function to be called to manually move the slides with the parameter n to be supplied when the function is called
function slideMove(n) {
    slideShow(slideNumber += n);
}

// 
function slideDisplayed(n) {
    slideShow(slideNumber = n);
}

function slideShow(n) {

    if (viewPortWidth >= targetWidth) {
        var i = 0;
        if (n == undefined) {
            n = ++slideNumber;
        }
        if (n > slides.length - 1) {
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

function stop() {
    if (showPlaying) {
        clearInterval(slideInterval);
        showPlaying = false;
    }
}

function resume() {
    if (!showPlaying) {
        slideInterval = setInterval(slideShow, 2000);
        showPlaying = true;
    }
}

if (viewPortWidth >= targetWidth) {
    pauseButton.style.display = "inline-block";
    resumeButton.style.display = "inline-block";
    previousButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
}