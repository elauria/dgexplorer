var onYouTubeIframeAPIReady = null;

$(function() {
    var releaseIDs = [];
    var masterIDs = [];
    var mainReleaseIDs = [];
    var releases = [];
    var notFound = [];
    var allVideos = [ 'M7lc1UVf-VE' ];
    var releasesWithoutVideo = [];
    var watchedIDs = [];
    var hideWatched= false;
    var loadingProgress = 0;
    var totalToLoad = 0;
    var requests = [];
    var throttle = 5000;   //10sec throttle

    //dropbox storage
    var client = new Dropbox.Client({key: 'y3pjpej9gtzxa0w'});

    client.authenticate({interactive: false}, function (error) { if (error) { alert('Authentication error: ' + error); } });

    if (client.isAuthenticated()) {
        console.log('client authenticated!');
    }

    var dropboxAuth = function() {
        client.authenticate();
    };

    var getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

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
    };

    var getOneRelease = function(rid, cb) {
        requests.push(function() {
            $.ajax({
                url: "http://api.discogs.com/releases/"+rid,
                jsonp: "callback",
                dataType: "jsonp",
                success: function(release) {
                    releases.push(release.data);
                    loadingProgress++;
                    setLoadingBar();
                    cb();
                },
                error: function(err) {
                    console.warn('error', err.error());
                    loadingProgress++;
                    setLoadingBar();
                    cb();
                }
            });
        });
    };

    var getOneMaster = function(rid, cb) {
        if (!rid) { return cb(); }
        requests.push(function() {
            $.ajax({
                url: "http://api.discogs.com/masters/"+rid,
                jsonp: "callback",
                dataType: "jsonp",
                success: function(master) {
                    releases.push(master.data);
                    loadingProgress++;
                    setLoadingBar();
                    loadingProgress++;
                    setLoadingBar();
                    cb();
                },
                error: function(err) {
                    console.warn('error', err.error());
                    loadingProgress++;
                    setLoadingBar();
                    cb();
                }
            });
        });
    };

    var getAllReleases = function(releaseIds, cb) {
        async.eachSeries(releaseIds, getOneRelease, function(err, result) {
            if (err) { throw err; }
            cb();
        });
    };

    var getAllMasters = function(masterIDs, cb) {
        async.eachSeries(masterIDs, getOneMaster, function(err) {
            if (err) { throw err; }
            cb();
        });
    };

    var getAllVideos = function(releases) {
        var videos = [];
        _.each(releases, function(release) {
            getReleaseVideos(release);
        });
    };

    var getReleaseVideos = function(release) {
        if (!release.videos) { releasesWithoutVideo.push(release); }
        _.each(release.videos, function (video, i) {
            var uri = video.uri;
            var id = uri.split('https://www.youtube.com/watch?v=')[1];
            if (allVideos.indexOf(id) == -1) {
                if (hideWatched && watchedIDs.indexOf(id) !== -1) return;
                allVideos.push(id);
            }
        });
    };

    var genThumbnail = function(release) {
        //FIXME Oauth required to get thumbnails
        //var cover = release.thumb || "http://s.pixogs.com/images/record150.png";
        var cover = "https://s.discogs.com/images/default-release-cd.png";
        var thumb = '<div class="thumbnail"><div class="cover">';
        var artist = release.artists[0].name;
        var title = artist + '-' + release.title;
        thumb += '<img id="'+ release.id +'" src=' + cover +' class="thumb">';
        thumb += '<a class="title" href="http://www.google.com/search?q=' + title + '">' + title + '</a>';
        thumb += '</div><div id="links">' + genGoogleLinks(genTracklist(release.id)) + '</div></div>';
        return thumb;
    };

    var attachThumbs = function(releases) {
        _.each(releases, function(release) {
            var thumb = genThumbnail(release);
            $('#thumbnails').append(thumb);
        });
    };

    var getReleaseById = function(id) {
        var r = null;
        _.each(releases, function(release) {
            if (release.id == id) { r = release; }
        });
        return r;
    };

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
    };

    var genGoogleLinks = function(tracks) {
        var html = '';
        _.each(tracks, function (track) {
            var url = encodeURI('http://www.google.com/search?q=' + track.replace('&', '&amp;'));
            html += '<a href="'+ url +'" target="_blank">'+track+'</a>';
        });
        return html;
    };

    var attachHandlers = function() {
        $('img.thumb').click(function(e) {
            var $e = $(e.currentTarget);
            var id = $e.attr('id');
            $('#links', $e).append(genGoogleLinks(genTracklist(id)));
        });
    };

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
    };

    var toggleHideWatched = function() {
        hideWatched = !hideWatched;
        window.location = updateQueryString('hideWatched', hideWatched);
    };

    var setControls = function() {

        if (hideWatched) {
            $('.menu .controls #hide-watched').addClass('active');
        }

        $('.menu .controls #mark').click(markAsWatched);

        $('.menu .controls #hide-watched').click(toggleHideWatched);

        $('.menu .controls #dropbox').click(dropboxAuth);
    };

    var setLoadingBar = function() {
        $('.loading').width(Math.round(loadingProgress/totalToLoad * 100) + '%');
    };

    var player;
    onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
        }
    }
    function stopVideo() {
        player.stopVideo();
    }

    var fetchData = function() {
        setInterval(function() {
            if(requests.length > 0) {
                var request = requests.pop();
                if(typeof request === "function") {
                    request();
                }
            }
        }, throttle);
    };

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
        getAllMasters(masterIDs, function() {
            getAllReleases(releaseIDs, function() {
                getAllVideos(releases);
                setTimeout(function() {
                    player.cuePlaylist(allVideos);
                }, 3000);
                attachThumbs(releasesWithoutVideo);
                attachHandlers();
                $('.loading').hide();
            });
        });
        fetchData();
    };

    main();
});
