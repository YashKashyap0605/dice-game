
var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var im1="dice"+random1+".png";
var im2="dice"+random2+".png";
var i1=document.querySelectorAll("img")[0];
i1.setAttribute("src",im1);
document.querySelectorAll("img")[1].setAttribute("src",im2);
if(random1>random2)
{
	document.querySelector("h1").innerHTML="🚩 Player1 Wins!";
}
else if(random2>random1)
{
	document.querySelector("h1").innerHTML="🚩 PLayer2 Wins!";
}
else{
document.querySelector("h1").innerHTML="Draw";
}