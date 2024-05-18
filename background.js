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

const createData = {
    url: 'popup/view/popup.html?popup2',
    type: 'popup',
    width: 1300,
    height: 790,
    left: 100,
    top: 100,
};

function callUrl(url, title) {
    const pos = url.indexOf('?');
    const search = url.substr(pos);
    title = title
        .replace(/ /g, '+');
    createData.url = `youtube.html${search}&n=${title}`;
    chrome.windows.create(createData).then();
}

chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        callUrl(tabs[0].url, tabs[0].title);
    });
});
