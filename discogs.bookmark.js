javascript:(function() {
    var script_tag = document.createElement('script');
    var async_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    async_tag.setAttribute("type", "text/javascript");
    async_tag.setAttribute("src", "//raw.github.com/caolan/async/master/lib/async.js");
    script_tag.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(async_tag);
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

    var allVideos = [];
    var releasesWithoutVideo = [];
    var newWindow = window.open();

    getReleaseVideos = function(release) {
        if (!release.videos) { releasesWithoutVideo.push(release); }
        _.each(release.videos, function (video, i) {
            var uri = video.uri;
            var id = uri.split('http://www.youtube.com/watch?v=')[1];
            allVideos.push(id);
        });
    }

    getAllVideoIds = function(allVideos) {
        var videos = [];
        _.each(allVideos, function (id, i) {
            var b = Math.floor(i/20);
            if (!videos[b]) { videos[b] = []; };
            videos[b].push(id);
        });
        return videos;
    }

    openPage = function() {
        var page = '<html><body style="background=#222;">';
        _.each(getAllVideoIds(allVideos), function(b, i) {
            var firstVideo = b.splice(0, 1);
            page += '<iframe id="ytplayer'+i+'" type="text/html" width="640" height="390"';
            page += 'src="http://www.youtube.com/v/'+firstVideo+'?playlist='+b.join(',');
            page += '" frameborder="0"/></iframe>'
        });
        page += '<hr>';
        _.each(releasesWithoutVideo, function (release) {
            page += thumbnail(release);
        });
        page += '</body></html>';
        newWindow.document.write(page);
    };

    googleIt = function(tracks) {
        tracks = tracks.split('||');
        _.each(tracks, function (track) {
            var url = 'http://www.google.com/search?q=' + track;
            newWindow.open(url, '_blank');
        });
        console.log(tracks);
    }

    thumbnail = function(release) {
        html = '';
        var artistNames = [];
        var tracks = [];
        _.each(release.artists, function(artist) {
            artistNames.push(artist.name);
        });
        _.each(release.tracklist, function(track) {
            if (!track.artists) {
                tracks.push(artistNames.join(' ') + ' - ' + track.title);
            } else {
                var tas = [];
                _.each(track.artists, function(artist) {
                   tas.push(artist.name);
                });
                track = tas.join(' ') + ' - ' + track.title;
                tracks.push(track);
            }
        });
        html += '<a onclick="window.opener.googleIt(\''+ tracks.join('||') +'\')"><img src=' + release.thumb +' style="padding=10px;"></>'
        return html;
    };

    script_tag.onload = function() {    window.jQuery.noConflict();
        var releases = [];
        $('span.br_release_link a').each(function(i, r) {
            var release = $(r).attr('href').split('/');
            releases.push(release[release.length-1]);
        });

        getRelease = function(rid, cb) {
            $.ajax({
                url: "http://api.discogs.com/release/"+rid,
                success: function(data) {
                    getReleaseVideos(data.resp.release);
                    cb();
                },
                error: function(err) { console.log('error', err.error()); cb(); }
            });
        };

        async.each(releases, getRelease, function (err, result) {
            openPage();
        });
    };
})();
