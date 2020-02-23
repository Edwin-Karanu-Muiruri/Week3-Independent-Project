//The code below is the back-end code for functionanity of the website.
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
    //This is the front-end code below
    $( "#submitButton" ).click(function() {
        alert( "Your Message has been successfully sent! Thank you for contacting us. Check your email for our reply shortly." );
      });
});