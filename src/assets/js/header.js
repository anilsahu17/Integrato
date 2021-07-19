jQuery( document ).ready(function($) {


    $('.dropdown-tigger').click( function(){
        
        if( $(this).parents('.my-dropdown').hasClass('open')){
            
            $('.my-dropdown').removeClass('open');
            $(this).parents('.my-dropdown').removeClass('open');   

        }else{
            
            $('.my-dropdown').removeClass('open');
            $(this).parents('.my-dropdown').addClass('open');
        }
        
    });

   

    $('.sidebarToggle').click( function(){

        if( $('body').hasClass('sidebar-open')){
            $('body').removeClass('sidebar-open');
        }else{
            $('body').addClass('sidebar-open');
        }

    });

    $('.search-icon').click( function(){

        $(".top-search-form").show();

    });


    $('body').addClass('bg-light-blue');
    


});


$(document).mouseup(function(e) 
{
    //CLICK OUTSIDE DROPDOWN
    var container = $(".my-dropdown");
    
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.my-dropdown').removeClass('open');
    }


});


