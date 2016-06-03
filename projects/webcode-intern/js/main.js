/*

[MAIN SCRIPT]

*/

(function ($) {
    "use strict";
    
    $(document).ready(function () {
        /*---------------------------------------------
            FORM VALIDATION
        ---------------------------------------------*/
        var $formEl = $('.contact--form form');
        
        if ( $formEl.length ) {
            $formEl.validate({
                rules: {
                    contactName: "required",
                    contactEmail: {
                        required: true,
                        email: true
                    },
                    contactMessage: "required"
                },
                errorPlacement: function () {
                    return false;
                }
            });
        }
        var $footerSubscribeEl = $('.footer-widget--subscribe form');
        
        if ( $footerSubscribeEl.length ) {
            $footerSubscribeEl.validate({
                rules: {
                    footerEmail: {
                        required: true,
                        email: true
                    }
                },
                errorPlacement: function () {
                    return false;
                }
            });
        }
        
        /*---------------------------------------------
            MAP
        ---------------------------------------------*/
        var $mapEl = $('.contact--map');
        
        if ( $mapEl.length ) {
            // Specify features and elements to define styles.
            var styleArray = [
                {
                    featureType: "all",
                    stylers: [
                        { saturation: -80 }
                    ]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [
                        { hue: "#00ffee" },
                        { saturation: 50 }
                    ]
                }, {
                    featureType: "poi.business",
                    elementType: "labels",
                    stylers: [
                        { visibility: "off" }
                    ]
                }
            ];
            
            var mapPosition  = {lat: 23.7393133, lng: 90.3889774};

            // Create a map object and specify the DOM element for display.
            var map = new google.maps.Map(document.getElementById('map'), {
                center: mapPosition,
                scrollwheel: false,
                
                // Apply the map style array to the map.
                styles: styleArray,
                zoom: 16
            });

            // Create a marker and set its position.
            var marker = new google.maps.Marker({
                map: map,
                position: mapPosition,
                icon: 'img/map/marker.png'
            });
        }
    });
    
    $(window).on("load", function () {
        /*---------------------------------------------
            ISOTOPE
        ---------------------------------------------*/
        var $galleryFilterMenu = $(".gallery--filter-menu")
        ,   $galleryItems = $(".gallery--items")
        ,   galleryItem = ".gallery--item";
        
        if ( $galleryItems.length ) {
            $galleryItems.isotope({
                itemSelector: galleryItem
            });
            
            $galleryFilterMenu.on('click', function (e) {
                var $t = $(e.target);
                
                if ( $t.is('li') ) {
                    var value = $t.data('filter');
                    
                    value = value !== "*" ? ("." + value) : "*";
                    
                    $galleryItems.isotope({
                        filter: value
                    });
                }
                
                $t.siblings().removeClass("active");
                $t.addClass('active');
            });
        }
    });
})(jQuery);