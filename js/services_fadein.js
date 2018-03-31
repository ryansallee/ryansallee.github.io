// This script is used to fade in the images and the list items on the services.html page over 4 seconds
// to add a dramatic event to the page load. This script will only run on tablet sized viewports and larger.

// Set variables to detect the viewport width and to set the minimum width for the fadeInOnLoad function to apply.
var viewPortWith = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 640;

// Call the fadeInOnLoad function to execute.
fadeInOnLoad();

function fadeInOnLoad() {
    // Only execute the code if the detected viewport width is greater than or equal to 640px.
    if (viewPortWith >= targetWidth) {
        // Set the opacity of the images in the .service-wrap div to 0 on page load as the script is right before the 
        // closing body tag.
        $('.service-wrap img').css("opacity", "0")
            // Gradually increase the opacity of the images to 1 over 2 seconds.
            .animate({ "opacity": "1" }, 2000);

        // Set the opacity of the list items in the .service-wrap div to 0 on page load.
        $('.service-wrap li').css("opacity", "0")
            // Wait 2 seconds so that the .service-wrap images have reached full opacity before the next method is employed.
            .delay(2000)
            // Gradually bring the opacity of the list items to 1 over 2 seconds.
            .animate({ "opacity": "1" }, 2000);
    }
};
// End of script.