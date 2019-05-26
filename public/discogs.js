var onYouTubeIframeAPIReady = null;

$(function() {
  var releaseIDs = [];
  var masterIDs = [];
  var mainReleaseIDs = [];
  var releases = [];
  var notFound = [];
  var allVideos = [];
  var releasesWithoutVideo = [];
  var hideWatched = false;
  var loadingProgress = 0;
  var totalToLoad = 0;
  var requests = [];
  var players = [];
  var user = {};
  var key = "gxBBxqoarieJItbUyIyU";
  var secret = "vKScVyTocMtDBOYwOOcAbjhXndJFpyqQ";
  var db = null;
  var dbSettings = {
    timestampsInSnapshots: true
  };
  var throttle = 1000; //1 sec throttle (~60 req/m)

  var watchedVideos = {};
  var watchedVideoIDs = [];

  var watchedVideosCol = null;

  var getParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  var updateQueryString = function(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
      hash;

    if (re.test(url)) {
      if (typeof value !== "undefined" && value !== null)
        return url.replace(re, "$1" + key + "=" + value + "$2$3");
      else {
        hash = url.split("#");
        url = hash[0].replace(re, "$1$3").replace(/(&|\?)$/, "");
        if (typeof hash[1] !== "undefined" && hash[1] !== null)
          url += "#" + hash[1];
        return url;
      }
    } else {
      if (typeof value !== "undefined" && value !== null) {
        var separator = url.indexOf("?") !== -1 ? "&" : "?";
        hash = url.split("#");
        url = hash[0] + separator + key + "=" + value;
        if (typeof hash[1] !== "undefined" && hash[1] !== null)
          url += "#" + hash[1];
        return url;
      } else return url;
    }
  };

  var getOneRelease = function(rid, cb) {
    requests.push(function() {
      $.ajax({
        url: "https://api.discogs.com/releases/" + rid,
        jsonp: "callback",
        data: {
          key: key,
          secret: secret
        },
        dataType: "jsonp",
        success: function(release) {
          releases.push(release.data);
          loadingProgress++;
          setLoadingBar();
          cb();
        },
        error: function(err) {
          console.warn("error", err.error());
          loadingProgress++;
          setLoadingBar();
          cb();
        }
      });
    });
  };

  var getOneMaster = function(rid, cb) {
    if (!rid) {
      return cb();
    }
    requests.push(function() {
      $.ajax({
        url: "https://api.discogs.com/masters/" + rid,
        jsonp: "callback",
        data: {
          key: key,
          secret: secret
        },
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
          console.warn("error", err.error());
          loadingProgress++;
          setLoadingBar();
          cb();
        }
      });
    });
  };

  var getAllReleases = function(releaseIds, cb) {
    async.eachSeries(releaseIds, getOneRelease, function(err, result) {
      if (err) {
        throw err;
      }
      cb();
    });
  };

  var getAllMasters = function(masterIDs, cb) {
    async.eachSeries(masterIDs, getOneMaster, function(err) {
      if (err) {
        throw err;
      }
      cb();
    });
  };

  var getAllVideos = function(releases, cb) {
    async.eachSeries(releases, getReleaseVideos, function(err) {
      if (err) {
        throw err;
      }
      cb();
    });
  };

  var getReleaseVideos = function(release, cb) {
    if (!release.videos) {
      releasesWithoutVideo.push(release);
      return cb();
    }

    async.eachSeries(
      release.videos,
      function(video, _cb) {
        var uri = video.uri;
        var id = uri.split("https://www.youtube.com/watch?v=")[1];

        if (allVideos.indexOf(id) === -1) {
          if (hideWatched) {
            watchedVideosCol
              .doc(id)
              .get()
              .then(function(doc) {
                if (doc.exists) {
                  // video has been watched, so kip it.
                  return _cb();
                } else {
                  // video doesn't exist, add it
                  allVideos.push(id);
                  return _cb();
                }
              })
              .catch(function(e) {
                // video hasn't been watched. Add it.
                allVideos.push(id);
                return _cb();
              });
          } else {
            allVideos.push(id);
            return _cb();
          }
        } else {
          return _cb();
        }
      },
      cb
    );
  };

  var genThumbnail = function(release) {
    //FIXME Oauth required to get thumbnails
    //var cover = release.thumb || "http://s.pixogs.com/images/record150.png";
    var cover = "https://s.discogs.com/images/default-release-cd.png";
    var thumb = '<div class="thumbnail"><div class="cover">';
    var artist = release.artists[0].name;
    var title = artist + "-" + release.title;
    thumb += '<img id="' + release.id + '" src=' + cover + ' class="thumb">';
    thumb +=
      '<a class="title" href="http://www.google.com/search?q=' +
      title +
      '">' +
      title +
      "</a>";
    thumb +=
      '</div><div id="links">' +
      genGoogleLinks(genTracklist(release.id)) +
      "</div></div>";
    return thumb;
  };

  var attachThumbs = function(releases) {
    _.each(releases, function(release) {
      var thumb = genThumbnail(release);
      $("#thumbnails").append(thumb);
    });
  };

  var getReleaseById = function(id) {
    var r = null;
    _.each(releases, function(release) {
      if (release.id == id) {
        r = release;
      }
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
        tracks.push(artistNames.join(" ") + " - " + track.title);
      } else {
        var tas = [];
        _.each(track.artists, function(artist) {
          tas.push(artist.name);
        });
        track = tas.join(" ") + " - " + track.title;
        tracks.push(track);
      }
    });
    return tracks;
  };

  var genGoogleLinks = function(tracks) {
    var html = "";
    _.each(tracks, function(track) {
      var url = encodeURI(
        "http://www.google.com/search?q=" + track.replace("&", "&amp;")
      );
      html += '<a href="' + url + '" target="_blank">' + track + "</a>";
    });
    return html;
  };

  var attachHandlers = function() {
    $("img.thumb").click(function(e) {
      var $e = $(e.currentTarget);
      var id = $e.attr("id");
      $("#links", $e).append(genGoogleLinks(genTracklist(id)));
    });
  };

  var uploadLocalStorageToCloud = function() {
    var localStorageHistory = JSON.parse(localStorage.getItem("watched")) || {};
    var keys = Object.keys(localStorageHistory);
    var offset = 0;
    var batch = null;

    function makeBatch(offset) {
      batch = db.batch();
      for (i = offset; i <= offset + 450; i++) {
        var key = keys[i];
        var doc = watchedVideosCol.doc(key);
        batch.set(doc, { date: localStorageHistory[key].date });
        console.log("batching...");
      }
      commit();
    }

    function commit() {
      batch
        .commit()
        .then(function() {
          console.log("Commited", offset);
          if (offset < keys.length) {
            offset = offset + 450;
            makeBatch(offset);
          }
        })
        .catch(function(e) {
          console.log("Error", e);
        });
    }

    makeBatch(offset);
  };

  var markAsWatched = function() {
    _.each(allVideos, function(id) {
      watchedVideosCol.doc(id).set({ date: new Date() });
    });
    updateWatchedCounter();
  };

  var toggleHideWatched = function() {
    hideWatched = !hideWatched;
    window.location = updateQueryString("hideWatched", hideWatched);
  };

  var setControls = function() {
    if (hideWatched) {
      $(".menu .controls #hide-watched").addClass("active");
    }
    $(".menu .controls #cloud").click(uploadLocalStorageToCloud);
    $(".menu .controls #mark").click(markAsWatched);
    $(".menu .controls #hide-watched").click(toggleHideWatched);
  };

  var setLoadingBar = function() {
    $(".loading").width(
      Math.round((loadingProgress / totalToLoad) * 100) + "%"
    );
  };

  onYouTubeIframeAPIReady = function() {
    console.log("YT API Ready");
  };

  var createPlayerContainers = function(n) {
    console.log("create", n);
    for (var i = 0; i < n; i++) {
      $("#players").append('<div id="player' + i + '"></div>');
    }
  };

  var createPlayers = function(videoBatches) {
    _.each(videoBatches, function(playlist, idx) {
      players.push(
        new YT.Player("player" + idx, {
          height: "390",
          width: "640",
          videoId: "M7lc1UVf-VE",
          events: {
            onReady: function(e) {
              var id = e.target.a.id.split("player")[1];
              e.target.cuePlaylist(videoBatches[id]);
            }
          }
        })
      );
    });
  };

  var getVideosInBatches = function(allVideos) {
    var videoBatches = [[]];
    var j = 0;
    for (var i = 0; i <= allVideos.length; i++) {
      if (videoBatches[j].length < 100) {
        videoBatches[j].push(allVideos[i]);
      } else {
        j += 1;
        videoBatches[j] = ["M7lc1UVf-VE"];
      }
    }
    return videoBatches;
  };

  var fetchData = function() {
    setInterval(function() {
      if (requests.length > 0) {
        var request = requests.pop();
        if (typeof request === "function") {
          request();
        }
      }
    }, throttle);
  };

  var updateWatchedCounter = function() {
    watchedVideosCol.get().then(function(querySnapshot) {
      console.log("No. of watched videos:", querySnapshot.size);
      $("#watched").text(querySnapshot.size);
    });
  };

  var main = function() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;

        db = firebase.firestore();
        db.settings(dbSettings);

        watchedVideosCol = db.collection("/users/" + user.uid + "/history/");

        // fetchWatchedVideos(function() {
        start();
        // });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log("Error", error);
      });
  };

  var start = function() {
    updateWatchedCounter();

    hideWatched = getParameterByName("hideWatched") == "true" ? true : false;
    if (getParameterByName("releases")) {
      releaseIDs = getParameterByName("releases").split("|");
    }
    if (getParameterByName("masters")) {
      masterIDs = getParameterByName("masters").split("|");
    }
    totalToLoad = releaseIDs.length + masterIDs.length;

    setControls();

    getAllMasters(masterIDs, function() {
      getAllReleases(releaseIDs, function() {
        getAllVideos(releases, function() {
          var videoBatches = getVideosInBatches(allVideos);
          createPlayerContainers(videoBatches.length);
          setTimeout(function() {
            createPlayers(videoBatches);
          }, 2000);
          attachThumbs(releasesWithoutVideo);
          attachHandlers();
          $(".loading").hide();
        });
      });
    });

    fetchData();
  };

  main();
});
