w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 640;

fader();

function fader() {
    if (w >= targetWidth) {
        $('.service-wrap img').css("opacity", "0").animate({
                "opacity": "1",
            },
            2000);
        $('.service-wrap li').delay(2000).css("opacity", "0").animate({
                "opacity": "1",
            },
            2000);
    }
};