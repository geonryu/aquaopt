$(document).ready(function() {
    let ckScr = $(window).scrollTop();
    $("#navBtn").on("click", function() {
        $("#navigation").toggleClass("active");
        let ckClass = $("#navigation").hasClass("active");
        $(this).toggleClass("on");
        if(ckClass){
            ckScr = $(window).scrollTop();
            $("#wrapper").css({
                "height" : "100vh",
                "overflow" : "hidden"
            });
        } else {
            $("#wrapper").css({
                "height" : "unset",
                "overflow" : "unset"
            });
            $(window).scrollTop(ckScr);
        }
    });

    $("#scrTop").on("click", function() {
        $(window).scrollTop(0);
    })
    
    AOS.init();
});