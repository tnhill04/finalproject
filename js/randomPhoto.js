var images = ["me.jpg","nikon-d750-review-body-angle.jpg"];

function photo()

	var rand = Math.floor(Math.random() * images.length);
	
	document.getElementById("mypicture").src = images[rand];