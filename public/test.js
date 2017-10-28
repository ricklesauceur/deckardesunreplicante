
var sprite = document.getElementById("toto");

var imgIndex = 0;
var imgs = [ "/public/images/chara.png", "/public/images/chara2.png" ]


var x = 0;

setInterval(function(){

	sprite.src = imgs[imgIndex];
	imgIndex = imgIndex  + 1;
	
	if(imgIndex >= 2)
	{
		imgIndex = 0;
	}

}, 1500);