$(document).ready(function(){
    $("#designIcon").click(function(){
        $("#imgDesign").toggle();
        $("#paragraphDesign").toggle();
    })
    $("#devIcon").click(function(){
        $("#imgDev").toggle();
        $("#paragraphDev").toggle();
    });
    $("#productIcon").click(function(){
        $("#imgProduct").toggle();
        $("#paragraphProduct").toggle();
    });
    $(".workDone").hover(function(){
        $(this).find(".hoverCaption").fadeIn(60);
    }, function(){
        $(this).find(".hoverCaption").fadeOut(30);
    });
});