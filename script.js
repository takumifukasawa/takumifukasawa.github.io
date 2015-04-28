var script = document.createElement('script');
script.src = "https://www.youtube.com/iframe_api";

var firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(script, firstScript);

var player;
var vid = 'fzzjgBAaWZw';

function onYoutubeIframeAPIReady() {
    player = new YT.player( 'player', { 
        width: '700',
        height: '500',
        videoId: vid,
        playerVars: {
            'showinfo':0,
            'autohide':1,
            'controls': 0,
            'rel': 0,
            'loop': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    /*
    $(".youtube_play").click(function(){
        player.playVideo();
        console.log("play");
    });
    */
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.ENDED) {
        alert('finish');
    }
}
