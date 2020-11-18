var myPix = new Array("img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg", "img/image6.jpg", "img/image7.jpg");


var randomNum = Math.floor(Math.random() * myPix.length);

document.getElementById("myPicture").src = myPix[randomNum];
