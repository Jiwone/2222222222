(function ($) {

    var margin_top = 60;

    $.fn.scroll = function (fullHeightSection) {
        // preloading
        showContent();
        
        // avtive on scroll
        setMenuActiveOnScroll();

        // if section has full window height
        if (fullHeightSection) {
            resizeOnLoad();
        }

        // logic to scroll to the right content section without IDs and classes
        findListItemIndex();

        return this;
    };
    
    var setMenuActiveOnScroll = function() {
        $(window).scroll(function() {
            $('.scroll-content section').each(function(e) {
                var section_top_pos = $(this).offset().top,
                    document_top_pos = $(document).scrollTop() + margin_top + 10,
                    list = $('.scroll-header ul li');
                if (section_top_pos <= document_top_pos) {
                   list.removeClass('scroll-active');
                   list.eq(e).addClass('scroll-active');
                }
            });
        });
    }

    var resizeSection = function() {
        $('.scroll-content section').css({
            'height': $(window).height()-margin_top
        });
    };

    var resizeOnLoad = function() {
        resizeSection();
        $(window).on('resize', function() {
            resizeSection();
        });
    };

    var scrollToElement = function(_index) {
        $('html, body').animate({
            scrollTop: $('section:eq(' + _index +')').offset().top - margin_top
        }, 800);
    };

    var showContent = function() {
        $(window).on('load', function() {
            $('#scroll').fadeIn();
        });
    };

    var findListItemIndex = function() {
        $('.scroll-header ul li a').each(function(i) {
            var _this_li = $(this).parent('li'),
                           _this = $(this);
            _this_li.bind('click', {index:i}, function(e){
                e.preventDefault();
                var _index = e.data.index,
                    _this_ul = $(this).parent('ul');
                //$(_this_ul).find('li').removeClass('skroll-active');
                //$(_this).parent('li').addClass('skroll-active');

                if (!$(_this).hasClass('no-scroll')) {
                    scrollToElement(_index);
                }
            });
        });
    }

})(jQuery);