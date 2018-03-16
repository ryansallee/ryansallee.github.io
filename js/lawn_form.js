// This form will use the jQuery Post Function to send data to a
// free server that uses back end CORS to send request so that browsers
// will allow a cross domain request.

// The URL below is a test server that sends back CORS responses so that POST can be used
// since POST cannot be used with JSONP.
var url = "https://cors-test.appspot.com/test";

// While the form data doesn't go to a useful since this website will not be in production,
// we can still seralize the form to ensure that it is in a JSON format like a real request.
var formData = $('form').serialize();

// Declare form tag and button as a jQuery selector variable as it will be used multiple times
var $form = $('form');
var $submit = $('input[type="button"]');

// Declare variables for the validation of the email, name, phone, and comment fields.
var $name = $('#name');
var $email = $('#mail');
var $phone = $('#phone');
var $comment = $('#comments');

// Declare regex variable for email and phone to make sure they match accepted formats.
var emailFormat = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
var phoneFormat = new RegExp(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);

// Declare an object variable for the styles for the Validation check Error Messages
var errorStyle = {
    "color": "red",
    "font-size": "1.25em",
    "font-weight": "bold"
};

// Declare named functions both to enable and disable the submit button with the jQuery method prop() if the 
// field fails a valiation that we will have next.
// We will be able to call the functions in the validations to disable or enable the Submit button.
function $submitDisable() {
    $submit.prop('disabled', true);
};

function $submitEnable() {
    $submit.prop('disabled', false);
}


// The next 4 functions will validate the name, email, phone number, and comment fields
// whenever the visitor enters an input field and leaves the input field

// Email validation
$email.focusout(function() {

    if (!emailFormat.test($email.val()) || $email.val() == "") {
        $(".alertEmail").show().html("A valid email address is required!").css(errorStyle);
        $submitDisable();
    } else {

        $('.alertEmail').hide();
        $submitEnable();
    }

});

// Name field validation
$name.focusout(function() {
    if ($name.val() == "") {
        $('.alertName').show().html("Please enter your name!").css(errorStyle);
        $submitDisable();
    } else {
        $('.alertName').hide();
        $submitEnable();
    }
});

//Phone number field validation
$phone.focusout(function() {
    if ($phone.val() == "" || !phoneFormat.test($phone.val())) {
        $('.alertPhone').show().html("Please provide us your phone number so we may call you.").css(errorStyle);
        $submitDisable();
    } else {
        $('.alertPhone').hide();
        $submitEnable();
    }

});

// Comment Field Validation
$comment.focusout(function() {
    if ($comment.val() == "") {
        $('.alertComment').show().html("Please leave us a comment!").css(errorStyle);;
        $submitDisable();
    } else {
        $('.alertComment').hide();
        $submitEnable();
    }
});

// Start Ajax request upon clicking the submit button.
$submit.click(function(evt) {
    // Stop the default behavior of the form so that we can check for validation.
    evt.preventDefault();
    // Using post method to send the form data with the AJAX method to have simple error handling.
    $.ajax({
        type: "POST",
        url: url,
        data: formData,
        // jQuery method is beinbgfadeOut to fade out the contact form div
        success: function(response) {
            $form.fadeOut(1000, function(response) {
                // Set variable successMessage for the message that will display if there is a successful response.
                var successMessage = "<p> Thank you for contacting us!</p><br>";
                successMessage += "<p>We will be in touch with you soon!<p>";
                // If there is a successful response the form div will fade in and replace the html with successMessage.
                $form.fadeIn(1000).html(successMessage);
            })
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            var errorMessage = "<p> Oh no! Something went wrong! Please try again.<p>";
            $(".errorAlert").html(errorMessage).css(errorStyle);
        }
    })
});











//   // Using call back to first fade out the form for effect
//   $form.fadeOut(1000, function(response) {
//     // Using another call back function to show the success and fail response with the done and fail methods
//     //  with the variable below as well as fade in the response
//     var success = "<p> Thank you for contacting us!</p><br>";
//     success += "<p>We will be in touch with you soon!<p>";
//     var failure = "<p> Oh no! Something happened! Please refresh and try again!<p>";
//     $form.fadeIn(1000).html(success);
// })

// })
// });