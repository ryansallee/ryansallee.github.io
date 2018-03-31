// This script's purpose is to create a slideshow feature on the our_work.html page that only runs
// on viewports 640px or wider that has functional next, previous, pause and resume buttons. It also 
// overrides CSS to make sure that controls and the slides for the slideshow are displayed.

// Declare variable to select all of the .slides divs and place them in an array.
var slides = document.querySelectorAll('.slides');
// Declare variable to keep a counter of the .slides divs.
var slideNumber = 0;
// Set variables to detect the viewport width and to set the minimum width for the slideShow function to apply
// to viewport greater than or equal to 640px.
var viewPortWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 640;
// Set variable for the slideinterval for the slides to advance every 3 seconds by calling slideShow every 3 seconds
var slideInterval = setInterval(slideShow, 3000);
// Set variable to determine if the slideshow is playing. By default the show plays so it will be set to true.
var showPlaying = true;
// Declare variables for the control buttons as they will be used in the nextButton, previousButton, resumeButton, and  
// pauseButton on click event handlers as well as a conditional statement to set their display to inline-block if 
// JS is enabled.
var pauseButton = document.querySelector('#pause');
var resumeButton = document.querySelector('#resume');
var nextButton = document.querySelector('#next');
var previousButton = document.querySelector('#previous');

// Function to run the slideshow on window load (since the script is placed at the end of the HTML).
function slideShow(n) {
    // Function will only run if the user's viewPortWidth is greater than 640px.
    if (viewPortWidth >= targetWidth) {
        // Declare variable i as 0 for the for loop.
        var i = 0;
        // If is undefined (since the parameter n is defined only when the user calls the slideMove function), 
        // n is set to slideNumber incremented by 1 with the ++ operator so that the following conditions can be
        // evaluated.
        if (n == undefined) {
            n = ++slideNumber;
        }
        // If n is greater than the index of the last element of  slides (length of an array -1)
        // set the slideNumber to 0 so that the first image in slides can have its display set back to block.
        if (n > slides.length - 1) {
            slideNumber = 0;
        }
        // If n is less than 0 (this would occur if the previousButton on click event occurs), set slideNumber
        // to the index of the last element of slides (length of an array -1).
        if (n < 0) {
            slideNumber = slides.length - 1;
        }
        // Loop through i to set the current slide's display to none
        for (i; i < slides.length; i += 1) {
            slides[i].style.display = "none";
        }
        // Show the next slide since slideNumber is advanced by 1 when slideShow is called or the nextButton
        // onclick event handler is accessed. This shows the previous slide if the previousButton on click event
        // handler is accessed since parameter n is -1.
        slides[slideNumber].style.display = "block";
    }

};

// Function to set the control buttons display to inline-block so that they display if JS is enabled and the
// viewport width dectected by Javascript is more than or equal to 640px for tablet-sized displays and larger.
function showButtons() {
    if (viewPortWidth >= targetWidth) {
        pauseButton.style.display = "inline-block";
        resumeButton.style.display = "inline-block";
        nextButton.style.display = "inline-block";
        previousButton.style.display = "inline-block";
    }
};

// Call showButtons function to display the control buttons.
showButtons();

// Function to be called to manually move the slides with the parameter n to be supplied when the function is called
// in the nextButton and previousButton click event handlers.
function slideMove(n) {
    // Advance the SlideNumber variable by parameter n when the slideMove function is called by passing slideNumber +=n
    // as an argument to slideShow(n).
    slideShow(slideNumber += n);
};

// Function to stop the slideshow.
function stop() {
    // Only functions if the showPlaying variable is true.
    if (showPlaying) {
        // Clear the interval to stop the function slideShow.
        clearInterval(slideInterval);
        // Makes sure the showPlaying variable is set to false if the user clicks resumeButton resume() can 
        // be called by the click event handler on resumeButton.
        showPlaying = false;
    }
};

// On click event handler for the nextButton.
nextButton.onclick = function() {
    // Pass 1 as the value for the parameter to slideMove function to advance the slide by 1.
    slideMove(1);
    // Call the stop() function to stop the show allow the user to manually control the slideshow without interference
    // from the automatic slideshow. After the nextButton or previousButton is clicked for the first time, stop() will
    // not execute since showPlaying = false, but the interval will have been cleared by the first click of the nextButton
    // or previousButton while the slideshow is playing (either on page load or after a click on resumeButton).
    stop();
};

// On click event handler for the previousButton.
previousButton.onclick = function() {
    // Pass -1 as the value for the parameter to slideMove function to move the slide back 1 slide (advance slide -1).
    slideMove(-1);
    // Call the stop() function to stop the show allow the user to manually control the slideshow without interference
    // from the automatic slideshow. After the nextButton or previousButton is clicked for the first time, stop() will
    // not execute since showPlaying = false, but the interval will have been cleared by the first click of the nextButton
    // or previousButton while the slideshow is playing (either on page load or after a click on resumeButton).
    stop();
};

// On click event hander for the pauseButton to call the stop function.
pauseButton.onclick = function() {
    stop();
};

// On click event hander for the pauseButton to call the resume function.
resumeButton.onclick = function() {
    resume();
};

// Function to restart the slideshow.
function resume() {
    // Function only executes if the showPlaying variable is false. This can only occur if the user has clicked
    // the pause button. If this condition was not included, the slideShow function would be sped up. 
    if (!showPlaying) {
        // Reset the slideInterval to 3 seconds.
        slideInterval = setInterval(slideShow, 3000);
        // Set the ShowPlaying variable to true so that the pause button can be used again.
        showPlaying = true;
    }
};
// End of of Script.