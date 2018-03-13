// This form will use the jQuery Post Function to send data to a
// free server that uses back end CORS to send request so that browsers
// will allow a cross domain request.

var url = "https://cors-test.appspot.com/test";
var formData = $('form').serialize();

$('input[type="button"]').click(function(evt) {
    evt.preventDefault();

    $.post(url, formData, function(response) {
        var success = "<p> Thank you for contacting us!</p>";
        $('form').html(success);
    })
});