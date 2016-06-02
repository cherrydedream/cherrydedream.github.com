var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
var img1=new Image();
img1.src="../IMG/light.png";
var img2=new Image();
img2.src="../IMG/light.png";
var offestX=0;
var offestTemp=0;

var mainAudio=document.getElementById("mainAudio");
var mainPlay=document.getElementById("mainPlay");
var mainPlaying=false;
    function play(){
	    context.clearRect(0,0,canvas.width,canvas.height);
    	offestX=offestX>=canvas.width?0:offestX+canvas.width/24/2;
    	context.translate(-offestX,0);
    	context.drawImage(img1,0,0,canvas.width,canvas.height);
    	context.drawImage(img2,canvas.width,0,canvas.width,canvas.height);
    	context.translate(offestX,0);
    }
    function show(){
       offestTemp+=1/24;
       if(offestTemp>1)
       	offestX+=0.1;
    }
    function run(){
       if(offestX==0)
       	show();
       else{
       	play();
       	offestTemp=0;
       }
    }
Finterval=setInterval(run,1000/24);

mainPlay.onclick=function(){
  if(mainPlaying){
    mainPlaying=false;
    $("#mainPlay").removeClass("fa-stop");
        $("#mainPlay").addClass("fa-play");
        mainAudio.pause();
  }
      else{
        mainPlaying=true;
        $("#mainPlay").removeClass("fa-play");
        $("#mainPlay").addClass("fa-stop");
        mainAudio.play();
      }
}
/*var moreInMain=document.getElementById("moreInMain");
    moreInMain.click();*/
    //$("#moreInMain").slidedown();
