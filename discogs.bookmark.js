javascript:(function() {
    var url = "http://elauria.github.io/dgexplorer/index.html?ids=";
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

    script_tag.onload = function() {    window.jQuery.noConflict();
        var releases = [];
        $('span.br_release_link a, td.hl a:not(.mr_toggler), td h4 a:not(.mr_toggler):last-child').each(function(i, r) {
            var release = $(r).attr('href').split('/');
            if (release && releases.indexOf(release) == -1) {
                releases.push(release[release.length-1]);
            }
        });

        window.open(url + releases.join('|'), '_blank');
    };
})();
