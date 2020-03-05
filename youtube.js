// 1. get querystring
function getQueryParm(qs, name) {
    const posStart = document.location.search.indexOf(name + '=');
    const v = document.location.search.substr(posStart + name.length + 1);
    const posEnd = v.indexOf('&');
    if (~posEnd) {
        return v.substr(0, posEnd);
    } else {
        return v;
    }
}

// console.log(document.location.search);

const qs = document.location.search;
const videoId = getQueryParm(qs, 'v');
document.title = getQueryParm(qs, 'n').replace(/\+/g, ' ');
window.onresize = function(e) {
    player.setSize(window.innerWidth, window.innerHeight);
};

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
// console.log(document.location.href);
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '780',
        width: '1280',
        videoId,
        // enablejsapi: 1,
        // origin: 'chrome-extension://blgbgfolbfbnmfkmecgggnbiegnmhgjo',
        events: {
            'onReady': onPlayerReady,
        }
    });

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    // console.log(event.target);
    // event.target.contentWindow.body.addEventListener('keyup', playerKeyup);
    // const iframe = document.getElementById('player').contentWindow;
    // iframe.body.addEventListener('keyup', playerKeyup);
}

