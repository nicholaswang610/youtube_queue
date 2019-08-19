//Made by Nicholas Wang
chrome.contextMenus.removeAll(function(){
  chrome.contextMenus.create({
    "id": "queueVideo",
    "title": "Queue This Video",
    "contexts": ["link"]
  });
});


chrome.contextMenus.onClicked.addListener(function(info, tab){
  if (info.menuItemId == "queueVideo") {
    let msg = {
      txt: info.linkUrl
    }
    chrome.tabs.sendMessage(tab.id, msg)
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(changeInfo.url.includes("youtube.com/watch")){
    let msg = {
      txt: "ready"
    }
    chrome.tabs.sendMessage(tab.id, msg);
  }
})
