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

// Declare form tag and button as a jQuery selector variable as it will be used multiple times.
var $form = $('form');
var $submitButton = $('input[type="button"]');

// Declare all the spans except the .telephone span as a variable for the reset function.
var $errorSpans = $(".alertEmail, .alertName, .alertPhone, .alertComment");

// Declare variables for the validation of the email, name, phone, and comment fields.
var $name = $('#name');
var $email = $('#mail');
var $phone = $('#phone');
var $comment = $('#comments');

// Declare regEx variable for email and phone to make sure they match accepted formats.
var emailFormat = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
var phoneFormat = new RegExp(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);

// Declare an object variable for the styles for the Validation check Error Messages.
var errorStyle = {
    "color": "red",
    "font-size": "1.25em",
    "font-weight": "bold"
};

// These variables are declared for the event handler that will be placed on the submit button. If any of the following
// validations are true, this variable will be set to true so that the event handler on the submit cannot proceed to
// submitting the AJAX request.
var doNotSubmitName = false;
var doNotSubmitEmail = false;
var doNotSubmitPhone = false;
var doNotSubmitComments = false;


// // The next 4 functions will validate the name, email, phone number, and comment fields.
// // whenever a visitor attempts to submit the form. They will be called on the click even handler on the submit button.

function nameValidate() {
    // Ensure the name input is not blank. If it is blank, display an error message and set it to the errorStyle.
    if ($name.val() == "") {
        $('.alertName').show().html("Please enter your name!").css(errorStyle);
        doNotSubmitName = true;
    } else {
        // If the form has had a previous submission and now the name field contains information, clear it out, and
        // set the doNotSubmit variable to false so that in a later conditional statement in the submit click handler
        // fails and allows the AJAX request to be sent.
        $('.alertName').hide();
        doNotSubmitName = false;
    }
};

function emailValidate() {
    // Test email input against the regEx for email and being blank. If it meets the criteria of not matching an
    // email format or being blank, display an error message and set it to the errorStyle. 
    if (!emailFormat.test($email.val()) || $email.val() == "") {
        $(".alertEmail").show().html("A valid email address is required!").css(errorStyle);
        doNotSubmitEmail = true;
    } else {
        // If the form has had a previous submission and now the email field contains information, clear it out, and
        // set the doNotSubmit variable to false so that in a later conditional statement in the submit click handler
        // fails and allows the AJAX request to be sent.
        $('.alertEmail').hide();
        doNotSubmitEmail = false;
    }
};

function phoneValidate() {
    // Test phone number input against the regEx for US phone numbers and being blank. If it meets the criteria of not matching an
    // US phone number format or being blank, display an error message and set it to the errorStyle. 
    if ($phone.val() == "" || !phoneFormat.test($phone.val())) {
        $('.alertPhone').show().html("Please provide us your phone number so we may call you.").css(errorStyle);
        doNotSubmitPhone = true;
    } else {
        // If the form has had a previous submission and now the email field contains information, clear it out, and
        // set the doNotSubmit variable to false so that in a later conditional statement in the submit click handler
        // fails and allows the AJAX request to be sent.
        $('.alertPhone').hide();
        doNotSubmitPhone = false;
    }
};

function commentValidate() {
    // Ensure the comment input is not blank. If it is blank, display an error message and set it to the errorStyle.
    if ($comment.val() == "") {
        $('.alertComment').show().html("Please leave us a comment!").css(errorStyle);
        doNotSubmitComments = true;
    } else {
        // If the form has had a previous submission and now the comment field contains information, clear it out, and
        // set the doNotSubmit variable to false so that in a later conditional statement in the submit click handler
        // fails and allows the AJAX request to be sent.
        $('.alertComment').hide();
        doNotSubmitComments = false;
    }
};

// Start Ajax request upon clicking the submit button.
$submitButton.click(function(evt) {
    // Stop the default behavior of the form so that we can check for validation.
    evt.preventDefault();
    nameValidate();
    emailValidate();
    phoneValidate();
    commentValidate();

    // If after all of the validations above have run and the notDoSubmit variable is equal to true, return from
    // the click handler event so that the AJAX request below cannot be sent.

    if (doNotSubmitName || doNotSubmitEmail || doNotSubmitPhone || doNotSubmitComments) {
        throw new Error("This isn't an error and just to abort script.");
    }


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
            // Declare the errorMessage variable.
            var errorMessage = "<p> Oh no! Something went wrong! Please try again.<p>";
            // The errorMessage displays in the errorAlert span.
            $(".errorAlert").html(errorMessage).css(errorStyle);
        }
    })
});
// End of AJAX request code

// This is the portion of the script to reset and hide all of the error messages if reset clicked. As well, the 
// input field for name will receive focus. The mousedown method is used.
$('input[type="reset"]').on("mousedown", function(evt) {
    // Stop default behavior of the reset button.
    evt.preventDefault();
    // Hide all of the $errorSpans.
    $errorSpans.hide(function() {
        // Bring focus back to the name field.
        $name.focus();
    })
});
// End of reset.