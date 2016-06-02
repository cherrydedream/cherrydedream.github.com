var playCanvas = document.getElementById('playCanvas'),
    playContext = playCanvas.getContext('2d');

var backInPlayMusic=document.getElementById("backInPlayMusic");
var audio=document.getElementById("playAudio");
var thePlayButton=document.getElementById("playPlay");
var play=false;
    
var angle=0;
var playImg=new Image();
playImg.src="../IMG/3.jpg";
playImg.onload=function(){
  playContext.drawImage(playImg,
                            -playCanvas.width/2,-playCanvas.height/2,
                            playCanvas.width,playCanvas.height)
}
playContext.translate(playCanvas.width/2,playCanvas.height/2);
    function playMusic(){
      angle+=1;
      angle=angle%360;
      var theAngle=(angle/180)*Math.PI;
      theAngle=(angle/180)*Math.PI;
      playContext.rotate(theAngle);
      playContext.drawImage(playImg,
      	                    -playCanvas.width/2,-playCanvas.height/2,
      	                    playCanvas.width,playCanvas.height)
      playContext.rotate(-theAngle);

    }
    var playMusicInterval;
    

 
thePlayButton.onclick=function(){
	if(play){
		play=false;
    clearInterval(playMusicInterval);
		$("#playPlay").removeClass("fa-stop");
        $("#playPlay").addClass("fa-play");
        audio.pause();
	}
      else{
      	play=true;
        playMusicInterval=setInterval(playMusic,1000/24);
      	$("#playPlay").removeClass("fa-play");
        $("#playPlay").addClass("fa-stop");
        audio.play();
      }
}
backInPlayMusic.onclick=function(){
  play=false;
    $("#playPlay").removeClass("fa-stop");
        $("#playPlay").addClass("fa-play");
        audio.pause();
        document.location="main.html"
  }
 

   // paused}
