// This extension demonstrates using chrome.downloads.download() to
// download URLs.
var visibleLinks = 1;

// Display all visible links.
function showLinks() {
    var linksTable = document.getElementById('toggle_all');
    linksTable.value = visibleLinks;
}

// Add links to allLinks and visibleLinks, sort and show them.  send_links.js is
// injected into all frames of the active tab, so this listener may be called
// multiple times.
chrome.extension.onRequest.addListener(function (links) {

    visibleLinks = links;

    showLinks();
});

// Set up event handlers and inject send_links.js into all frames in the active
// tab.
window.onload = function () {

    chrome.windows.getCurrent(function (currentWindow) {
        chrome.tabs.query({
            active: true,
            windowId: currentWindow.id
        },

        function (activeTabs) {
            chrome.tabs.executeScript(
            activeTabs[0].id, {
                file: 'fetchvalue.js',
                allFrames: true
            });
        });
    });
};
