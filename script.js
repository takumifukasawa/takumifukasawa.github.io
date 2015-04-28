
var script = document.createElement('script');
script.src = "//www.youtube.com/iframe_api";

var firstScript = document.getElementByTagName('script')[0];
firstScript.parentNode.insertBefore(script, firstScript);

var player;
var vid = 'fzzjgBAaWZw';

function onYoutubeIframe() {
    player = new YT.player( 'player', { 
                            width: '100%',
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
};
