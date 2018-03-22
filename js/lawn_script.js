var slides = document.querySelectorAll('.slides');
var slidesMinus = document.querySelectorAll('.slides');
slideNumber = 0;
var i;
w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 640;

var slideInterval = setInterval(slideShow, 2000);

var playing = true;
var pauseButton = document.querySelector('#pause');
var resumeButton = document.querySelector('#resume');
var nextButton = document.querySelector('#next');
var previousButton = document.querySelector('#previous');



function slideShow() {

    if (w >= targetWidth) {
        i = 0;
        for (i; i < slides.length; i += 1) {
            slidesMinus[i].style.display = "none"
        }
        slideNumber += 1;
        if (slideNumber > slides.length) {
            slideNumber = 1;
        }
        slides[slideNumber - 1].style.display = "block";
    }
    nextButton.onclick = function() {
        next();
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
        slideInterval = setInterval(slideShow, 2000);
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


// resumeButton.onclick = function() {
//     for (i; i < slides.length; i += 1) {
//         clearInterval(slideInterval);
//         slidesMinus.style.display = "none"


//     }
//     slideNumber += 1;
//     if (slideNumber > slides.length - 1) {
//         slideNumber = 1;
//     }
//     slides[slideNumber].style.display = "none";
//     slides[slideNumber + 1].style.display = "block";
// }

// nextButton.onclick = function() {
//     clearInterval(slideInterval);
//     if (slideNumber = 1) {
//         slides[0].style.display = "none";
//         slides[1].style.display = "block";
//     } else {
//         for (i = 0; i < slides.length; i += 1) {
//             slidesMinus[i].style.display = "none"
//         }
//         slideNumber += 1;
//         if (slideNumber > slides.length) {
//             slideNumber = 1;
//         }
//         slides[slideNumber - 1].style.display = "block";
//         slideInterval = setInterval(slideShow, 2000);
//     }
// }
// previousButton.onclick = function() {
//     clearInterval(slideInterval);

//     slides[slideNumber - 1].style.display = "none";
//     for (i; i < slides.length; i += 1) {
//         slidesMinus[i].style.display = "none";
//     }
//     if (slideNumber < slides.length) {
//         slideNumber = 3;

//     }
//     if (slideNumber > slides.length) {
//         slideNumber = 1;
//     }
//     slides[slideNumber].style.display = "block";
// }