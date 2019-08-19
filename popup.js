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
