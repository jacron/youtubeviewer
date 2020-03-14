// 1. get querystring
const qs = document.location.search;
const params = getSearchParams(qs);
// console.log(params);
const videoId = params.v;
const title = params.n
    .replace(/\+/g, ' ');
document.title = title;
window.onresize = function() {
    player.setSize(window.innerWidth, window.innerHeight);
};

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '760',
        width: '1280',
        videoId,
        // feature: params.feature,
        events: {
            'onReady': onPlayerReady,
        }
    });

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

