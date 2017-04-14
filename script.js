$(function(){
	var carouselList = $("#carousel ul");
	var intervalId = setInterval(changeSlide, 1500);  

	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 1000, moveFirstSlide);
	};	

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});
	};

	function changeSlideLeft(){
		carouselList.animate({'marginLeft':0}, 1000);
	};	

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem)
		carouselList.css({marginLeft:-400});
	};
	       
	$('.left').click(function(){
		clearInterval(intervalId);
		intervalId = setInterval(function() {
			moveLastSlide();
			changeSlideLeft();	
		},1500);				
	});
	
 	$('.right').click(function(){
 		clearInterval(intervalId);
 		intervalId = setInterval(function() {
 			changeSlide();			
 		},1500);
 	});
});
