// This form will use the jQuery Post Function to send data to a
// free server that uses back end CORS to send request so that browsers
// will allow a cross domain request.

// The URL below is a test server that sends back CORS responses so that POST can be used
// since POST cannot be used with JSONP.
var url = "https://cors-test.appspot.com/test";
// While the form data doesn't go to a useful since this website will not be in production,
// we can still seralize the form to ensure that it is in a JSON format like a real request.
var formData = $('form').serialize();

// Declare form tag as a jQuery selector variable as it will be used multiple
var $form = $('form');
// Declare variables for the validation of the email, name, phone, and comment fields.
var $name = $('#Name');
var $email = $('#mail');
var $phone = $('#phone');
var $comment = $('#comments');
// Declare regex for email and phone to make sure they match accepted formats.
var emailFormat = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);

$email.focusout(function() {

    if (!emailFormat.test($email.val()) || $email.val() == "") {
        $(".alertEmail").show().html("A valid email address is required!");
        console.log('done');
    } else {
        console.log('awesome');
        $('.alertEmail').hide();
    }

});

$name.focusout(function() {
    if ($name.val() == "") {
        alert("The name is required!");

    }
});





// Start function upon clicking the submit button.
$('input[type="button"]').click(function(evt) {
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