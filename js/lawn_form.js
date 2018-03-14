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
var error = {
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
        $(".alertEmail").show().html("A valid email address is required!").css(error);
        console.log('done');
        $submitDisable();
    } else {
        console.log('awesome');
        $('.alertEmail').hide();
        $submitEnable();
    }

});

// Name field validation
$name.focusout(function() {
    if ($name.val() == "") {
        $('.alertName').show().html("Please enter your name!").css(error);
        $submitDisable();
    } else {
        $('.alertName').hide();
        $submitEnable();
    }
});

//Phone number field validation
$phone.focusout(function() {
    if ($phone.val() == "" || !phoneFormat.test($phone.val())) {
        $('.alertPhone').show().html("Please provide us your phone number so we may call you.").css(error);
        $submitDisable();
    } else {
        $('.alertPhone').hide();
        $submitEnable();
    }

});

// Start function upon clicking the submit button.
$submit.click(function(evt) {
    // Stop the default behavior of the form so that we can check for validation.
    evt.preventDefault();
    // Need comments
    $.post(url, formData, function() {
        $form.fadeOut(1000, function(response) {
            var success = "<p> Thank you for contacting us!</p><br>";
            success += "<p>We will be in touch with you soon!<p>"
            $form.fadeIn(1000).html(success);
        })
    })
});