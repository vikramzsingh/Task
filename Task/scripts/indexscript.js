function playVideo() {
    console.log("playvideo")
    var video = document.getElementById("myVideo")
    if(video.paused){
        video.loop="infinite";
        video.play();
     }
     else if(video.play){
        video.pause();
     }
                
}

