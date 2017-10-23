$(document).ready(function(){
    // Edit time for slide
    $(".carousel").carousel({
        interval:4000
    });

    // for nice scroll
    $("html").niceScroll();

});

  //section Animation colors


$(document).ready(function(){
     $(".gear-option").click(function(){
         $(".color").toggle(3000);
     });
});



    // for change The color
$(document).ready(function(){
    var ColorLi=$(".color ul li")

    ColorLi
    .eq(0).css("backgroundColor","#71ADB5").end()
    .eq(1).css("backgroundColor","#ffab00").end()
    .eq(2).css("backgroundColor","#964f8e").end()
    .eq(3).css("backgroundColor","#568564").end()
    .eq(4).css("backgroundColor","#172035");

    ColorLi.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
       //console.log($(this).attr("data-value"))
    });

    // for Scroll Up
    // var scroll = $(".scroll-up")
    // $(window).scroll(function(){
    //
    //     if($(this).scrollTop()>=700)
    //     {
    //         scroll.fadeIn();
    //     }
    //     else
    //     {
    //         scroll.fadeOut();
    //     }
    //     // animate for scroll
    //
    // });
    //     $(scroll).click(function(){
    //         $("html,body").animate({scrollTop:0},2000)
    //     });

});
