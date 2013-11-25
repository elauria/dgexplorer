$(function() {
    var releaseIDs = [];
    var releases = [];
    var notFound = [];
    var allVideos = [];
    var videoBatches = [];
    var releasesWithoutVideo = [];

    getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    getOneRelease = function(rid, cb) {
        $.ajax({
            url: "http://api.discogs.com/release/"+rid,
            success: function(data) {
                if (data && data.resp && data.resp.release) {
                    if (releases.indexOf(data.resp.release.id) == -1) {
                        releases.push(data.resp.release);
                    }
                    return cb();
                }
                notFound.push(rid);
                cb();
            },
            error: function(err) {
                console.log('error', err.error());
                cb(); }
        });
    };

    getAllReleases = function(releaseIds, cb) {
        async.each(releaseIds, getOneRelease, function(err, result) {
            if (err) { throw err };
            cb();
        });
    }

    getReleaseVideos = function(release) {
        if (!release.videos) { releasesWithoutVideo.push(release); }
        _.each(release.videos, function (video, i) {
            var uri = video.uri;
            var id = uri.split('http://www.youtube.com/watch?v=')[1];
            if (allVideos.indexOf(id) == -1) {
                allVideos.push(id);
            }
        });
    }

    getAllVideos = function(releases) {
        var videos = [];
        _.each(releases, function(release) {
            getReleaseVideos(release);
        });
        return allVideos;
    }

    splitVideoIds = function(allVideos) {
        var videos = [];
        _.each(allVideos, function (id, i) {
            var b = Math.floor(i/50);
            if (!videos[b]) { videos[b] = []; };
            videos[b].push(id);
        });
        return videos;
    }

    genIframe = function(batch, i) {
        var firstVideo = batch.splice(0, 1);
        var iframe = '<iframe id="ytplayer'+i+'" type="text/html"';
        iframe += ' width="640" height="390"';
        iframe += ' src="http://www.youtube.com/v/'+firstVideo;
        iframe += '?playlist='+batch.join(',');
        iframe += '" frameborder="0"/></iframe>'
        return iframe;
    }

    attachIFrames = function(videoBatches) {
        _.each(videoBatches, function(batch, i) {
            var iframe = genIframe(batch, i);
            $('#videos').append(iframe);
        });
    }

    genThumbnail = function(release) {
        var thumb = '<div class="thumbnail"><img id="'+ release.id +'" src=' + release.thumb +' class="thumb">';
        thumb += '<div id="links">' + genGoogleLinks(genTracklist(release.id)) + '</div>';
        return thumb;
    }

    attachThumbs = function(releases) {
        _.each(releases, function(release) {
            var thumb = genThumbnail(release);
            $('#thumbnails').append(thumb);
        });
    }

    getReleaseById = function(id) {
        var r = null;
        _.each(releases, function(release) {
            if (release.id == id) { r = release; };
        });
        return r;
    }

    genTracklist = function(id) {
        var release = getReleaseById(id);
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
        return tracks;

    }

    genGoogleLinks = function(tracks) {
        var html = '';
        _.each(tracks, function (track) {
            var url = 'http://www.google.com/search?q=' + track;
            html += '<a href="'+url+'" target="_blank">'+track+'</a>';
        });
        return html;
    }

    attachHandlers = function() {
        $('img.thumb').click(function(e) {
            var $e = $(e.currentTarget);
            var id = $e.attr('id');
            $('#links', $e).append(genGoogleLinks(genTracklist(id)));
        });
    }

    main = function() {
	releaseIDs = getParameterByName("ids").split('|');
        getAllReleases(releaseIDs, function() {
            getAllVideos(releases);
            videoBatches = splitVideoIds(allVideos);
            attachIFrames(videoBatches);
            attachThumbs(releasesWithoutVideo);
            attachHandlers();
        });
    }

    main();
});
