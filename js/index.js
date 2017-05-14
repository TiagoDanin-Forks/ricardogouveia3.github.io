/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

    });

}(jQuery));

/* Active link on main-nav */
$(document).ready(function() {
  $('.main-menu .list a.item').removeClass('active');
  $('.main-menu .list a.item[href="' + location.pathname + '"]').addClass('active');
});

/* Footer to the end of the page */
 // function to set the height on fly
 function autoHeight() {
   $('#container').css('min-height', 0);
   $('#container').css('min-height', (
     $(document).height() - $('#header').outerHeight(true) - $('#menu').outerHeight(true) - $('#footer').outerHeight(true)
    )
   );
 }

 // onDocumentReady function bind
 $(document).ready(function() {
   autoHeight();
 });

 // onResize bind of the function
 $(window).resize(function() {
   autoHeight();
 });