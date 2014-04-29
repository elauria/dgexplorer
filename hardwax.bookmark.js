javascript: (function () {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    if (!window.hasOwnProperty('mplayer')) { 
        window.mplayer = {
            playlist: [],
            timers: [],
            head: 0
        }
    };
    script_tag.onload = function () {
        window.jQuery.noConflict();
        window.mplayer.playlist = window.jQuery('a.download_listen, .tracklisting li span.download_listen');
    };
    window.mplayer.play = function () {
        window.jQuery.each(window.mplayer.playlist.slice(window.mplayer.head), function (i) {
            var e = window.mplayer.head;
            window.mplayer.timers[i] = setTimeout(function () {
                window.jQuery('i', window.mplayer.playlist[e]).trigger('click');
                window.mplayer.head = e;
            }, i * 44000);
        });
    };
    window.mplayer.stop = function () {
        window.jQuery.each(window.mplayer.timers, function (i) {
            clearTimeout(window.mplayer.timers[i]);
        });
    };
    window.mplayer.next = function () {
        if (window.mplayer.head < window.mplayer.playlist.length) {
            window.mplayer.head += 1;
            window.mplayer.stop();
            window.mplayer.play();
        }
    };
    window.mplayer.prev = function () {
        if (window.mplayer.head > 0) {
            window.mplayer.head -= 1;
            window.mplayer.stop();
            window.mplayer.play();
        }
    };
    window.mplayer.jump = function () {
        if (window.mplayer.head < window.mplayer.playlist.length -5) {
            window.mplayer.head += 5;
            window.mplayer.stop();
            window.mplayer.play();
        }
    };
    window.mplayer.buy = function () {
        var buy = window.jQuery('.icon-shopping-cart', window.jQuery(window.mplayer.playlist[window.mplayer.head]).parents('.textblock'));
        window.jQuery(buy).trigger('click');
    };
})();
