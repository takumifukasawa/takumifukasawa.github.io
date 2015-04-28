$(function(){

    var player;
    var videoID = "XfkXW49bXfo";

    function fGetScript() {
        $.ajax({
            url: "http://www.youtube.com/player_api/",
            dataType: "script",
            success: function(data) {
                dbg("done");
            },
            error: function(xhr, status, thrown) {
                dbg(xhr);
                fGetScript();
            }
        });
    }
    fGetScript();

    window.onYouTubeIframeAPIReady = function() {
        dbg("onYouTubeIframeAPIReady");
        loadPlayer(videoID);
    };

    function loadPlayer(videoID) {
        dbg("loadPlayer(" + videoID + ")");
        if(!player) {
            player = new YT.Player('player', {
                    width: '640',
                    height: '390',
                    videoId: videoID,
                    events: {
                        "onReady": onPlayerReady,
                        "onStateChange": onPlayerStateChange,
                    },
                    playerVals: {
                        "rel": 0,
                        "showInfo": 0,
                        "controls": 1
                    }
                }
            );
        } else {
            player.loadVideoByID(videoID);
        }
    }
    
    function onPlayerReady(event) {
        dbg("onPlayerReady");
    }

    function onPlayerStateChange(event) {
        dbg("PlayerState:" + event.data);
        switch(event.data) {
            case YT.PlayerState.ENDED:
            case YT.PlayerState.PAUSED:
            case YT.PlayerState.CUED:
                $("#play").html("再生");
                break;
            case YT.PlayerState.PLAYING:
            case YT.PlayerState.BUFFERING:
                $("#play").html("一時停止");
                break;
            default:
                $("#play").html("再生");
                break;
        }

    }

    function play() {
        dbg("play");
        player.playVide();
        $(this).html("一時停止");
    }

    function pause() {
        dbg("pause");
        player.pauseVideo();
        $(this).html("再生");
    }

    function stop() {
        dbg("stop");
        player.stopVieo();
        player.cueVideoById(videoID);
        $(this).html("一時停止");
    }

    $("#play").click(function() {
        var label = $(this).html();
        dbg("play");
        if(label == "再生") {
            play();
        } else {
            pause();
        }
    });

    $("#stop").click(function() {
        player.seekTo(30, true);
        play();
    });

    function dbg(str) {
        $("#debuglog").val(str + "\n" + $("#debuglog").val());
        if(window.console && window.console.log) {
         console.log(str);
        }
    }


});
