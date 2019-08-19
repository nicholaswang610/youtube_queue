//Made by Nicholas Wang

var videoArray = localStorage.getItem("videoArray");
videoArray = localStorage.getItem("videoArray") ? JSON.parse(videoArray) : [];

//current tab
var currentTab = window.location;
console.log(currentTab);
//LISTENER FROM BACKGROUND -> CONTENT
chrome.runtime.onMessage.addListener(receiveMessageFromBackground);


function receiveMessageFromBackground(message, sender, sendResponse){
  if(message.txt == "ready"){
    console.log(message.txt);
    location.reload();
  }else{
    videoArray.push(message.txt);
    console.log(videoArray);
    localStorage.setItem("videoArray", JSON.stringify(videoArray));
    chrome.storage.local.set({"vidArray": JSON.stringify(videoArray)}, function(){
    });
  }
}


if(currentTab.href.toString().includes("youtube.com/watch")){
  //var currentVid = document.getElementsByClassName("video-stream html5-main-video")[0];
  let vid = document.querySelector("video");
  vid.addEventListener('ended', (event)=> {
    window.open(videoArray[0].toString(), "_self");
    videoArray.shift();
    localStorage.setItem("videoArray", JSON.stringify(videoArray));
    chrome.storage.local.set({"vidArray": JSON.stringify(videoArray)}, function(){})
  });
};
