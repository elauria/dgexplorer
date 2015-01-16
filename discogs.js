$(function() {
    var releaseIDs = [];
    var masterIDs = [];
    var mainReleaseIDs = [];
    var releases = [];
    var notFound = [];
    var allVideos = [];
    var videoBatches = [];
    var releasesWithoutVideo = [];
    var watchedIDs = [];
    var hideWatched= false;
    var loadingProgress = 0;
    var totalToLoad = 0;

    var getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var updateQueryString = function (key, value, url) {
        if (!url) url = window.location.href;
        var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"), hash;

        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + key + "=" + value + '$2$3');
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
                    url += '#' + hash[1];
                return url;
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
                    url += '#' + hash[1];
                return url;
            }
            else
                return url;
        }
    }

    var getOneRelease = function(rid, cb) {
        $.ajax({
            url: "http://api.discogs.com/releases/"+rid,
            success: function(release) {
                releases.push(release);
                return setTimeout(function() {
                    loadingProgress++;
                    setLoadingBar();
                    cb();
                }, 2000);
            },
            error: function(err) {
                console.warn('error', err.error());
                setTimeout(function() {
                    loadingProgress++;
                    setLoadingBar();
                    cb();
                }, 2000);
            }
        });
    };

    var getOneMaster = function(rid, cb) {
        if (!rid) { return cb(); }
        $.ajax({
            url: "http://api.discogs.com/masters/"+rid,
            success: function(master) {
                releases.push(master);
                loadingProgress++;
                setLoadingBar();
                return setTimeout(function() {
                    loadingProgress++;
                    setLoadingBar();
                    cb();
                }, 2000);
            },
            error: function(err) {
                console.warn('error', err.error());
                setTimeout(function() {
                    loadingProgress++;
                    setLoadingBar();
                    cb();
                }, 2000);
            }
        });
    }

    var getAllReleases = function(releaseIds, cb) {
        async.eachSeries(releaseIds, getOneRelease, function(err, result) {
            if (err) { throw err };
            console.log('got all releases');
            cb();
        });
    }

    var getAllMasters = function(masterIDs, cb) {
        async.eachSeries(masterIDs, getOneMaster, function(err) {
            if (err) { throw err };
            console.log('got all masters');
            cb();
        });
    }

    var getAllVideos = function(releases) {
        var videos = [];
        _.each(releases, function(release) {
            getReleaseVideos(release);
        });
    }

    var getReleaseVideos = function(release) {
        if (!release.videos) { releasesWithoutVideo.push(release); }
        _.each(release.videos, function (video, i) {
            var uri = video.uri;
            var id = uri.split('http://www.youtube.com/watch?v=')[1];
            if (allVideos.indexOf(id) == -1) {
                if (hideWatched && watchedIDs.indexOf(id) !== -1) return;
                allVideos.push(id);
            }
        });
    }

    var splitVideoIds = function(allVideos) {
        var videos = [];
        _.each(allVideos, function (id, i) {
            var b = Math.floor(i/50);
            if (!videos[b]) { videos[b] = []; };
            videos[b].push(id);
        });
        return videos;
    }

    var genIframe = function(batch, i) {
        var firstVideo = batch.splice(0, 1);
        var iframe = '<iframe id="ytplayer'+i+'" type="text/html"';
        iframe += ' width="640" height="390"';
        iframe += ' src="http://www.youtube.com/v/'+firstVideo;
        iframe += '?playlist='+batch.join(',');
        iframe += '" frameborder="0"/></iframe>'
        return iframe;
    }

    var attachIFrames = function(videoBatches) {
        $('#videos').html('');
        if (videoBatches.length === 0) {
            return $('#videos').html('<span class="warning">No videos to show :-(</span>');
        }
        _.each(videoBatches, function(batch, i) {
            var iframe = genIframe(batch, i);
            $('#videos').append(iframe);
        });
    }

    var genThumbnail = function(release) {
        //FIXME Oauth required to get thumbnails
        //var cover = release.thumb || "http://s.pixogs.com/images/record150.png";
        var cover = "http://s.pixogs.com/images/default-release.png";
        var thumb = '<div class="thumbnail"><div class="cover">';
        thumb += '<img id="'+ release.id +'" src=' + cover +' class="thumb">';
        thumb += '</div><div id="links">' + genGoogleLinks(genTracklist(release.id)) + '</div></div>';
        return thumb;
    }

    var attachThumbs = function(releases) {
        _.each(releases, function(release) {
            var thumb = genThumbnail(release);
            $('#thumbnails').append(thumb);
        });
    }

    var getReleaseById = function(id) {
        var r = null;
        _.each(releases, function(release) {
            if (release.id == id) { r = release; };
        });
        return r;
    }

    var genTracklist = function(id) {
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

    var genGoogleLinks = function(tracks) {
        var html = '';
        _.each(tracks, function (track) {
            var url = 'http://www.google.com/search?q=' + track;
            html += '<a href="'+url+'" target="_blank">'+track+'</a>';
        });
        return html;
    }

    var attachHandlers = function() {
        $('img.thumb').click(function(e) {
            var $e = $(e.currentTarget);
            var id = $e.attr('id');
            $('#links', $e).append(genGoogleLinks(genTracklist(id)));
        });

        $('.menu .controls #mark').click(function() {
            markAsWatched();
        });

        $('.menu .controls #hide-watched').click(function() {
            toggleHideWatched();
        });
    }

    var markAsWatched = function() {
        var watched = JSON.parse(localStorage.getItem("watched")) || {};
        watchedIDs = _.uniq(watchedIDs.concat(allVideos));
        _.each(watchedIDs, function(id) {
            if (typeof watched[id] === 'undefined') {
                watched[id] = {
                    date: new Date()
                };
            } else if (!hideWatched) {
                watched[id].date = new Date();
            }
        });
        localStorage.setItem('watched', JSON.stringify(watched));
        console.log('Watched videos saved in localStorage');
    }

    var toggleHideWatched = function() {
        hideWatched = !hideWatched;
        window.location = updateQueryString('hideWatched', hideWatched);
    }

    var setControls = function() {

        if (hideWatched) {
            $('.menu .controls #hide-watched').addClass('active');
        }
    }

    var setLoadingBar = function() {
        $('.loading').width(Math.round(loadingProgress/totalToLoad * 100) + '%');
    }

    var main = function() {
        watchedIDs = _.keys(JSON.parse(localStorage.getItem("watched")));
        console.log('No. of watched videos:', watchedIDs.length);
        hideWatched = getParameterByName("hideWatched") == 'true' ? true : false;
        if (getParameterByName("releases")) {
            releaseIDs = getParameterByName("releases").split('|');
        }
        if (getParameterByName("masters")) {
            masterIDs = getParameterByName("masters").split('|');
        }
        totalToLoad = releaseIDs.length + masterIDs.length;
        setControls();
        setTimeout(function() {
            getAllMasters(masterIDs, function() {
                setTimeout(function() {
                    getAllReleases(releaseIDs, function() {
                        console.log('releases', releases);
                        getAllVideos(releases);
                        console.log('videos', allVideos);
                        videoBatches = splitVideoIds(allVideos);
                        attachIFrames(videoBatches);
                        attachThumbs(releasesWithoutVideo);
                        attachHandlers();
                        $('.loading').hide();
                    });
                }, 2000);
            });
        }, 2000);
    }

    main();
});
