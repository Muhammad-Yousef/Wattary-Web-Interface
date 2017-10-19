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
    .eq(0).css("backgroundColor","#403ce6").end()
    .eq(1).css("backgroundColor","#e41b17").end()
    .eq(2).css("backgroundColor","#2DAF94").end()
    .eq(3).css("backgroundColor","#568564").end()
    .eq(4).css("backgroundColor","#F08C00");
    
    ColorLi.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
       //console.log($(this).attr("data-value")) 
    });
    
    // for Scroll Up
    var scroll = $(".scroll-up")
    $(window).scroll(function(){
    
        if($(this).scrollTop()>=700)
        {
            scroll.fadeIn();
        }
        else
        {
            scroll.fadeOut();
        }
        // animate for scroll
    
    });
        $(scroll).click(function(){
            $("html,body").animate({scrollTop:0},2000)
        });
    
});


$(window).load(function(){
    $(".loading .loader").fadeOut(5000,function(){
        $("body").css("overflow","hidden");
        $(this).parent().fadeOut(7000,function(){
            $(this).remove();
        });
    });
});