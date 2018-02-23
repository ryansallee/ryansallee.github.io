// The purpose of this code is to insert a message 
// to entice users to call the business before the spring rush starts.


//Set up variable to record the current date.
//We will use epoch time to obtain the current moment in epoch time.
var todayDate = Date.now();


//Set up variable to store the end date for the message
var springDate = new Date(2018, 02, 20);
springDate = springDate.getTime();

window.onload = function() {
    var springMessage = "<p><strong>Spring is coming! Call us now to get your Lawn Paynes solved!<strong></p>";

    if (todayDate < springDate) {
        var div = document.querySelector("#spring-alert");
        div.innerHTML = springMessage;
        div.style.background = "rgb(102, 153, 155)";
        document.querySelector("#spring-alert p").style.textAlign = "center";
    }
};

// beforeSpring;