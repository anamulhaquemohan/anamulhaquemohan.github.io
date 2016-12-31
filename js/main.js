/*------------------------------------------------------------------

[Main Script]

Project:    PortfolioS
Version:    1.0
Author:     anamulhaquemohan
Author URL: http://themeforest.net/user/anamulhaquemohan

-------------------------------------------------------------------*/

;(function ($) {
    "use strict";
    
    /* -------------------------------
       Common Variables
       ------------------------------- */
    var $wn = $(window);

    /* -------------------------------
       Function calls
       ------------------------------- */
    $wn.on('load', function () {
        /* Portfolio Items */
        var $portfolio = $('#portfolio'),
            $portfolioFMenu = $portfolio.find('.portfolio--filter-menu'),
            $portfolioItems = $portfolio.find('.portfolio--items'),
            $portfolioItem = $portfolioItems.children('.portfolio--item');
        
        $portfolioItems.isotope();
        
        $portfolioFMenu.on('click', 'li', function () {
            var $t = $(this),
                f = $t.data('target'),
                s = (f !== '*') ? '[data-filter~="'+ f +'"]' : f;
            
            $portfolioItems.isotope({
                filter: s
            });
            
            $t.addClass('active').siblings().removeClass('active');
        });
    });
})(jQuery);
