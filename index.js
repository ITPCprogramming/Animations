$(document).ready(function () {
    $("#sub").click(function () {
        $("#Line").animate({
            width: "500px",
            opacity: "0.5"
        }, "slow");
        var output = $('#Num'),
            timer = null,
            start = 0,
            end = 80;

        timer = setInterval(function(){
            output.text(++start + '%');
            if(start >= end){
                clearInterval(timer);
            }
        },0.5);
    })
});