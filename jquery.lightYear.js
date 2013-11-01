/**
* jquery lightYear plugin
* "Scroll for infinity... and beyond!" Well, you can keep scrolling anyway. It's just a carousel. Nothing much.
* @author Phil Steer (@pdincubus)
* https://github.com/pdincubus/jquery.lightYear
*
* Kudos to this demo that gave me the obvious way forward with this:
* http://web.enavu.com/tutorials/making-an-infinite-jquery-carousel/
* Updated to make it a plugin, pass settings, use latest jQuery,
* make more automated, requires less css styles for base setup,
* autoslide options, and easing
*/

(function($) {
    $.fn.lightYear = function(options) {

        // settings
        var settings = $.extend({
            'animationDuration' : 500,               //milliseconds
            'slideEasing' : 'swing',                 //default options are swing or linear
            'autoSlide' : true,                      //wait for use interaction?
            'waitTime' : 4000,                       //duration of pause between shlides
            'slideContainer' : 'lightYearContain',   //id that holds JUST the ul for the slides
            'navNext' : 'navNext',                   //id for next button
            'navPrev' : 'navPrev'                    //id for prev button
        }, options);

        return this.each(function() {
            /*----------------------------------------------------
            *      initial setup
            *----------------------------------------------------*/
            //how wide are the slides? include margin in calculation
            var itemWidth = $('#' + settings.slideContainer + ' ul li').outerWidth(true),
                //how many slides are there?
                numSlides = $('#' + settings.slideContainer + ' ul li').size(),
                //slides total width
                listWidth = numSlides * itemWidth,
                //set up variable in advance of use
                leftIndent = 0;

            if ( numSlides == 1 ) {
                $('#' + settings.navNext + ', #' + settings.navPrev).hide();
            } else {
                //shift the last item before the first in case someone clicks prev first
                $('#' + settings.slideContainer + ' ul li:first').before( $('#' + settings.slideContainer + ' ul li:last') );
                //pull the list left a bit to hide the last slide from screen, and set the width of it automagically
                $('#' + settings.slideContainer + ' ul').css({
                    left: '-' + itemWidth + 'px',
                    width: listWidth
                });
            }

            /*----------------------------------------------------
            *      auto slider function
            *----------------------------------------------------*/
            function autoSliding() {
                leftIndent = ( parseInt( $('#' + settings.slideContainer + ' ul').css('left'), 10) - itemWidth );

                $('#' + settings.slideContainer + ' ul').animate({
                    left : leftIndent
                }, parseInt(settings.animationDuration, 10), settings.slideEasing, function(){
                    //get the first list item and put it after the last list item
                    $('#' + settings.slideContainer + ' ul li:last').after( $('#' + settings.slideContainer + ' ul li:first') );
                    //and set default left position again
                    $('#' + settings.slideContainer + ' ul').css({
                        left : '-' + itemWidth + 'px'
                    });
                });
            }

            /*----------------------------------------------------
            *      is autoslide enabled?
            *----------------------------------------------------*/
            if ( settings.autoSlide === true ) {
                //this isn't going to work well if there's less than 3!
                if ( numSlides > 2 ) {
                    //set auto slide timer
                    var autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                }
            }

            /*----------------------------------------------------
            *      next button
            *----------------------------------------------------*/
            $('#' + settings.navNext).on('click', function() {
                //interrupt the timer for auto if it's going
                if (settings.autoSlide === true) {
                    clearTimeout(autoSlideTimer);
                }

                //prevent animation queueing
                if ( $('#' + settings.slideContainer + ' ul').is(':animated') === true ) {
                    return;
                }

                leftIndent = ( parseInt( $('#' + settings.slideContainer + ' ul').css('left'), 10) - itemWidth );

                $('#' + settings.slideContainer + ' ul').animate({
                    left : leftIndent
                }, parseInt(settings.animationDuration, 10), settings.slideEasing, function(){
                    //get the first list item and put it after the last list item
                    $('#' + settings.slideContainer + ' ul li:last').after( $('#' + settings.slideContainer + ' ul li:first') );

                    //and set default left position again
                    $('#' + settings.slideContainer + ' ul').css({
                        left : '-' + itemWidth + 'px'
                    });
                });

                //set the timer going again
                if (settings.autoSlide === true) {
                    if ( numSlides > 1 ) {
                        autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                    }
                }
            });

            /*----------------------------------------------------
            *      prev button
            *----------------------------------------------------*/
            $('#' + settings.navPrev).on('click', function() {
                //interrupt the timer for auto if it's going
                if (settings.autoSlide === true) {
                    clearTimeout(autoSlideTimer);
                }

                //prevent animation queueing
                if ( $('#' + settings.slideContainer + ' ul').is(':animated') === true ) {
                    return;
                }

                leftIndent = ( parseInt( $('#' + settings.slideContainer + ' ul').css('left'), 10) + itemWidth );

                $('#' + settings.slideContainer + ' ul').animate({
                    left : leftIndent
                }, parseInt(settings.animationDuration, 10), settings.slideEasing, function(){
                    //get the last list item and put it before the first list item
                    $('#' + settings.slideContainer + ' ul li:first').before( $('#' + settings.slideContainer + ' ul li:last') );

                    //and set default left position again
                    $('#' + settings.slideContainer + ' ul').css({
                        left : '-' + itemWidth + 'px'
                    });
                });

                //set the timer going again
                if (settings.autoSlide === true) {
                    autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                }
            });

        });
    };
})(jQuery);
