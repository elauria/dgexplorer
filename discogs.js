$(function() {
    var releaseIDs = [];
    var mainReleaseIDs = [];
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
            url: "http://api.discogs.com/releases/"+rid,
            success: function(release) {
                    releases.push(release);
                    return setTimeout(function() { cb(); }, 2000);
                }
                notFound.push(rid);
                return setTimeout(function() { cb(); }, 2000);
            },
            error: function(err) {
                console.warn('error', err.error());
                setTimeout(function() { cb(); }, 2000);
            }
        });
    };

    getOneMaster = function(rid, cb) {
        if (!rid) { return cb(); }
        $.ajax({
            url: "http://api.discogs.com/masters/"+rid,
            success: function(master) {
                    releases.push(master);
                    return setTimeout(function() { cb(); }, 2000);
                }
                notFound.push("master-"+rid);
                setTimeout(function() { cb(); }, 2000);
            },
            error: function(err) {
                console.warn('error', err.error());
                setTimeout(function() { cb(); }, 2000);
            }
        });
    }

    getAllReleases = function(releaseIds, cb) {
        async.eachSeries(releaseIds, getOneRelease, function(err, result) {
            if (err) { throw err };
            console.log('got all releases');
            cb();
        });
    }

    getAllMasters = function(masterIDs, cb) {
        async.eachSeries(masterIDs, getOneMaster, function(err) {
            if (err) { throw err };
            console.log('got all masters');
            cb();
        });
    }

    getAllVideos = function(releases) {
        var videos = [];
        _.each(releases, function(release) {
            getReleaseVideos(release);
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
        //FIXME Oauth required to get thumbnails
        //var cover = release.thumb || "http://s.pixogs.com/images/record150.png";
        var cover = "http://s.pixogs.com/images/record150.png";
        var thumb = '<div class="thumbnail"><div class="cover">';
        thumb += '<img id="'+ release.id +'" src=' + cover +' class="thumb">';
        thumb += '</div><div id="links">' + genGoogleLinks(genTracklist(release.id)) + '</div></div>';
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
        releaseIDs = getParameterByName("releases").split('|');
        masterIDs = getParameterByName("masters").split('|');
        setTimeout(function() {
            getAllMasters(masterIDs, function() {
                _.each(mainReleaseIDs, function(mrid) {
                    if (releaseIDs.indexOf(mrid) == -1) { releaseIDs.push(mrid); }
                });
                setTimeout(function() {
                    getAllReleases(releaseIDs, function() {
                        console.log('releases', releases);
                        getAllVideos(releases);
                        console.log('videos', allVideos);
                        videoBatches = splitVideoIds(allVideos);
                        attachIFrames(videoBatches);
                        attachThumbs(releasesWithoutVideo);
                        attachHandlers();
                    });
                }, 2000);
            });
        }, 2000);
    }

    main();
});
