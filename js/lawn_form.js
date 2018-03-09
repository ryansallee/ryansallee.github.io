// This form will use the jQuery Post Function to send data to a
// free server

var url = "http://ptsv2.com/t/jhffd-1520552880/post";
var formData = $('form').serialize();

$('input[type="button"]').click(function(evt) {
    evt.preventDefault();
    $.post(url, formData, function(response) {
        var success = "<p> Thank you for contacting us!</p>";
        $('form').html(success);
    })
});

// Research needed-JSONP so we can do cross domain. Or research something different.