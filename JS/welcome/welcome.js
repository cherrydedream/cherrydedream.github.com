var image,welcomeWords;
image=document.getElementById("image");
welcomeWords=document.getElementById("welcomeWords");
redu=false;
digree=0;
digreeWords=0;

welcomeWords.style.opacity=0.0;
image.style.opacity=0.0;
function F(){
//if(!redu&&digree>0)
  if(digreeWords<1){
    if(digree<1)
      digree+=1/24/3;
    if(digree>=1)
      digreeWords+=1/24/3;
  }
	
  else{
  	digree=1;
    digreeWords=1;
    document.location="HTML/login.html"
  }
  image.style.opacity=digree;
  welcomeWords.style.opacity=digreeWords;

}
Finterval=setInterval(F,1000/24);
welcomeWords.onclick=function(){
	clearInterval(Finterval);
}