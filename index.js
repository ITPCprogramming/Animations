
function Line() {
            $("#Line").animate({
                width: "500px",
                opacity: "4000"
            }, 1280);
    var output = $('#Num'),
        timer = null,
        start = 0,
        end = 80;


    timer = setInterval(function () {

                output.text(++start + '%');
                if (start >= end) {
                    clearInterval(timer);
                }
            }, 16);
}