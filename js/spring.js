// The purpose of this code is to insert a message 
// to entice vistiors to call the business before the spring rush starts
// and then to let visitors that know spring is here and to call before its too busy.


//Set up variable to record the current date.
//We will use epoch time for all of the dates obtained below.
// Here we will set up the current date.
var todayDate = Date.now();


//Set up variable to store the end date for the message, March 20 2018, the beginning of spring.
var beginSpringDate = new Date(2018, 02, 20);
beginSpringDate = beginSpringDate.getTime();

// Set up variable to set an end date of the message after spring has come.
// The end date will be the beginning of summer.
var beginSummerDate = new Date(2018, 05, 21);
beginSummerDate = beginSummerDate.getTime();

displayMessage();

// Function to display Dates
function displayMessage() {
    // Set Up Variables to Display Messages.
    var beforeSpringMessage = "<p><strong>Spring is coming! <a href='#telephone'> Call us</a> now to get your Lawn Paynes solved!<strong></p>";
    var beforeSummerMessage = "<p><strong>Spring is here! <a href='#telephone'> Call us</a> now before your Lawn Paynes are out of control!<strong></p>";
    var afterSummerMessage = "<p><strong> Summer is here! <a href='#telephone'> Call us now! We can solve the worst of your Lawn paynes! <strong></p>";
    // Select the Alert Div to insert messages.
    var div = document.querySelector("#alert");
    // Test Condition to make sure it is before spring. If so, insert the beforeSpringMessage.
    if (todayDate < beginSpringDate) {
        div.innerHTML = beforeSpringMessage;
        div.style.background = "rgb(240, 128, 41)";

        // Test Condition to see if it is after spring, but before summer. If so, insert the beforeSummerMessage.
    } else if (beginSummerDate > todayDate && todayDate > beginSpringDate) {
        div.innerHTML = beforeSummerMessage;
        div.style.background = "rgb(239, 52, 34)";
    } else if (beginSummerDate < todayDate) {
        div.innerHTML = afterSummerMessage;
        div.style.background = "rgb(239, 52, 34)";
    }
};
// End of Script.