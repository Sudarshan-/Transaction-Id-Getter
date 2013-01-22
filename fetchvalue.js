// Send back to the popup a sorted deduped list of valid link URLs on this page.
// The popup injects this script into all frames in the active tab.
var links = document.getElementsByName('id');
retValue = "";
if (links[0] == undefined || links[0] == "undefined") {
    retValue = "";
} else {
    retValue = links[0].value;
}
if (retValue == "") {
    retValue = "Not a Quote Page";
}
chrome.extension.sendRequest(retValue);
