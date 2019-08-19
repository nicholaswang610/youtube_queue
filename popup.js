//Made by Nicholas Wang

var vidArray = [];
chrome.storage.local.get("vidArray", function(result){
  vidArray = result.vidArray
  vidArray = JSON.parse(vidArray)
  for(i = 0; i< vidArray.length; i++){
    var ol = document.getElementById("videoList");
    var li = document.createElement("li");
    var textNode = document.createTextNode(vidArray[i].toString());
    li.appendChild(textNode);
    ol.appendChild(li);
  }
})

document.getElementById("myButton").addEventListener("click", function(){
  chrome.tabs.query({currentWindow:true, active: true}, function(tabs){
    var activeTab = tabs[0];
    let msg = {
      txt: "clear!"
    }
    chrome.tabs.sendMessage(activeTab.id, msg)
  })
  window.close()
});
