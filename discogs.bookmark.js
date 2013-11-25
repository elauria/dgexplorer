javascript:(function() {
    var url = "http://elauria.github.io/dgexplorer/index.html?ids=";
    var script_tag = document.createElement('script');
    var async_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    async_tag.setAttribute("type", "text/javascript");
    async_tag.setAttribute("src", "//raw.github.com/caolan/async/master/lib/async.js");
    script_tag.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(async_tag);
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

    script_tag.onload = function() {    window.jQuery.noConflict();
        var releases = [];
        $('span.br_release_link a').each(function(i, r) {
            var release = $(r).attr('href').split('/');
            releases.push(release[release.length-1]);
        });

        window.open(url + releases.join('|'), '_blank');
    };
})();
