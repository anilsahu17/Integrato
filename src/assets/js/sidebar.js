
jQuery( document ).ready(function($) {

    sideBar();
    menuActive();

    $('.menu-item.has-sub').click( function(){
        $(this).toggleClass('open');
        $(this).find('.sub-menu').slideToggle();
        
    });

    $('.menu-item').click(function(){

        menuActive();
        
    });
    

   
});

$(document).mouseup(function(e){

//CLICK OUTSIDE SIDEBAE
    var ww =  jQuery( window ).width();
    var container = $(".sidebar");

        if(ww < 767){
            
            if (!container.is(e.target) && container.has(e.target).length === 0) 
                {
                    jQuery('body').removeClass('sidebar-open');
                }
        }


});


/* sidebar toggle open-close */
function sideBar(){
    var ww =  jQuery( window ).width();
    if(ww < 767){
        jQuery('body').removeClass('sidebar-open');
    }else{
        jQuery('body').addClass('sidebar-open');
    }
}

/* menu active */
function menuActive(){

        $(".menu-item").removeClass("active");

        var url = $(location).attr("href");
        var parts = url.substring(url.lastIndexOf('/') + 1);

        $('.menu-item a').each(function(){

             var url2 = $(this).attr('href');
             var parts2 = url2.substring(url2.lastIndexOf('/') + 1);

             if(parts == parts2){
                //console.log(parts,parts2);
                $(this).parent("li").addClass("active");
            }

        });
 
      
}




jQuery(window).resize(function() { 

   sideBar();

}); 
