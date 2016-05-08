/*-- Google map API -- */
var marker;
function initMap() {
  	var map = new google.maps.Map(document.getElementById('map'), {
   	zoom: 14,
    	center: {lat: 27.723174, lng: 85.359610}
        });

    marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 27.723174, lng: 85.359610},
    title: "I'm Here!!!"
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

//For image slider in blog page
window.onload = function(){
    var imgArray = [
    'img/post-1.jpg',
    'img/note-one.jpg',
    'img/mac-blog.jpg'],
    curIndex = 0;
    imgDuration = 3500;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();
}
// End of Slideshow

/** -- For Contact form validation -- **/
//Simple form validation
function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["message"].value;
    if (x == null || x == "" || y == null || y == "" || z == null || z == "") {
        alert("Please fill out all the forms!");
        return false;
    }else{
         btnSend();
    }
}
/* For blog section*/
function showOne(){
	var a = document.getElementById('blog-one');
	var  b = document.getElementById('blog-two');
	var c = document.getElementById('blog-three');
	var d = document.getElementById('blog-four');
	var e = document.getElementById('blog-five');

	a.style.display='block';
	b.style.display='none';
	c.style.display='none';
	d.style.display='none';
	e.style.display='none';
}
function showTwo(){
	var a = document.getElementById('blog-one');
	var  b = document.getElementById('blog-two');
	var c = document.getElementById('blog-three');
	var d = document.getElementById('blog-four');
	var e = document.getElementById('blog-five');

	a.style.display='none';
	b.style.display='block';
	c.style.display='none';
	d.style.display='none';
	e.style.display='none';
}
function showThree(){
	var a = document.getElementById('blog-one');
	var  b = document.getElementById('blog-two');
	var c = document.getElementById('blog-three');
	var d = document.getElementById('blog-four');
	var e = document.getElementById('blog-five');

	a.style.display='none';
	b.style.display='none';
	c.style.display='block';
	d.style.display='none';
	e.style.display='none';
}
function showFour(){
	var a = document.getElementById('blog-one');
	var  b = document.getElementById('blog-two');
	var c = document.getElementById('blog-three');
	var d = document.getElementById('blog-four');
	var e = document.getElementById('blog-five');

	a.style.display='none';
	b.style.display='none';
	c.style.display='none';
	d.style.display='block';
	e.style.display='none';
}
function showFive(){
	var a = document.getElementById('blog-one');
	var  b = document.getElementById('blog-two');
	var c = document.getElementById('blog-three');
	var d = document.getElementById('blog-four');
	var e = document.getElementById('blog-five');

	a.style.display='none';
	b.style.display='none';
	c.style.display='none';
	d.style.display='none';
	e.style.display='block';
}