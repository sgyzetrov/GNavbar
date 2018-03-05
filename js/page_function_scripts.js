var top_menu_height = 0;
jQuery(function($) {
    $(document).ready( function() {
        top_menu_height = $('.page-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#nav-bar', offset: top_menu_height+10 });


        // scroll to specific id when click on menu
        $('.page-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });

        // to stick navbar on top
        $('.page-top-menu ').stickUp();
    });
});

// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}