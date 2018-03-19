// This form will use the jQuery Post Function to send data to a
// free server that uses back end CORS to send request so that browsers
// will allow a cross domain request. As well, the reset button will have an event handler added
// so that the error messages will be hidden and the focus will be returned to the name input.

// The URL below is a test server that sends back CORS responses so that POST can be used
// since POST cannot be used with JSONP.
var url = "https://cors-test.appspot.com/test";

// While the form data doesn't go to a useful since this website will not be in production,
// we can still seralize the form to ensure that it is in a JSON format like a real request.
var formData = $('form').serialize();

// Declare form tag and button as a jQuery selector variable as it will be used multiple times
var $form = $('form');
var $submit = $('input[type="button"]');

// Declare all the spans except the .telephone span as a variable for the reset function
var $errorSpans = $(".alertEmail, .alertName, .alertPhone, .alertComment");

// Declare variables for the validation of the email, name, phone, and comment fields.
var $name = $('#name');
var $email = $('#mail');
var $phone = $('#phone');
var $comment = $('#comments');

// Declare regEx variable for email and phone to make sure they match accepted formats.
var emailFormat = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
var phoneFormat = new RegExp(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);

// Declare an object variable for the styles for the Validation check Error Messages
var errorStyle = {
    "color": "red",
    "font-size": "1.25em",
    "font-weight": "bold"
};

// This variable is declared for the event handler that will be placed on the reset button. If the reset button
// is clicked, this variable will be set to true. In the validation functions, this variable will be used to escape the function
// as the event handler focuses out and causes issues with the focus to be returned to the name field.
var notDoValidation = false;

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
// whenever the visitor enters an input field and leaves the input field. 

// Email validation
$email.focusout(function() {
    // Return from function
    if (notDoValidation) {
        return
    }
    // Test email input against the regEx for email and being blank. If it meets the criteria of not matching an
    // email format or being blank, display an error message and set it to the errorStyle. Also it will disable the 
    // submit button.
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
    if (notDoValidation) {
        return
    }
    // Ensure the name input is not blank. If it is blank, display an error message and set it to the errorStyle.  
    // Like in the email validation, disable the submit button.
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
    if (notDoValidation) {
        return
    }
    // Test phone number input against the regEx for US phone numbers and being blank. If it meets the criteria of not matching an
    // US phone number format or being blank, display an error message and set it to the errorStyle. Like the other validations,
    // disable the submit button.
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
    if (notDoValidation) {
        return
    }
    // Ensure the comment input is not blank. If it is blank, display an error message and set it to the errorStyle.  
    // Disables the submit button like the other validations.
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
        // jQuery method fadeOut is used to fade out the contact form div when the AJAX POST request is sent.
        success: function(response) {
            $form.fadeOut(1000, function(response) {
                // Set variable successMessage for the message that will display if there is a successful response.
                var successMessage = "<p> Thank you for contacting us!</p><br>";
                successMessage += "<p>We will be in touch with you soon!<p>";
                // If there is a successful response the form div will fade in and replace the html with successMessage.
                $form.fadeIn(1000).html(successMessage);
            })
        },
        // If there is an error from the server or the site cannot connect to the server the error alert span will 
        // display the errorMessage variable.
        error: function(xhr, ajaxOptions, thrownError) {
            // Log the error to the console for the purpose of testing
            console.log(xhr.status);
            // Declare the errorMessage variable.
            var errorMessage = "<p> Oh no! Something went wrong! Please try again.<p>";
            // The errorMessage displays in the errorAlert span
            $(".errorAlert").html(errorMessage).css(errorStyle);
        }
    })
});
// End of AJAX request code

// This is the portion of the script to reset and hide all of the error messages if reset clicked. As well, the 
// input field for name will receive focus. The mousedown method is used.
$('input[type="reset"]').on("mousedown", function(evt) {
    // Set the notDoValidation to true so that when focus is lost on the current input field the validations
    // do not fire and cause the focus that is to be sent to the name field to be interrupted.
    notDoValidation = true;
    // Hide all of the active error messages and send the focus to the name input. Reset the notDoValidation
    // variable to false so that the validations can be tested again once each individual field loses focus.
    $errorSpans.hide(function() {
        $name.focus();
        notDoValidation = false;
    })

});
// End of reset.