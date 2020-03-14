// activate page action when url contains 'youtube.com'
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'youtube.com/watch?v=' },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

const winspecs = 'width=1300,height=790,resizable=0,locationbar=0,top=100,left=100';

function callUrl(url, title) {
    const pos = url.indexOf('?');
    const search = url.substr(pos);
    title = title
        .replace(/ /g, '+');
    const wurl = `youtube.html${search}&n=${title}`;
    // console.log(wurl);
    window.open(
        wurl,
        'youtube',
        winspecs
    );
}

// execute pageaction when user clicks icon
chrome.pageAction.onClicked.addListener(() => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        callUrl(tabs[0].url, tabs[0].title);
    });
});
