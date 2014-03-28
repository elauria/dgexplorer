javascript:(function() {
    var url = "http://elauria.github.io/dgexplorer/index.html?";
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

    script_tag.onload = function() {    window.jQuery.noConflict();
        var releases = [];
        var masters = [];
        $('td.title>a:not(.mr_toggler), span.br_release_link a').each(function(i, r) {
            var release = $(r).attr('href').split('/');
            var type = release[release.length-2];
            if (release && type === "release" && releases.indexOf(release) == -1) {
                releases.push(release[release.length-1]);
            }
            if (release && type === "master" && release.indexOf(release) == -1) {
                masters.push(release[release.length-1]);
            }
        });

        if (releases.length) { url += "&releases=" + releases.join('|'); };
        if (masters.length) { url += "&masters=" + masters.join('|'); };
        window.open(url, '_blank');
    };
})();
