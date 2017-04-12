$(function(){
/*
	$('div').addClass("carusele");
	var carouselList = $(".carusele ul");

	function addclasses(){
	carouselList.addClass('active');
	};

	setInterval(changeSlide, 2500);

	function changeSlide(){

	carouselList.animate({'marginLeft':-400}, 1000, moveFirstSlide);
	};	
	function moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");

	lastItem.after(firstItem)
	carouselList.css({marginLeft:0});
	};
    */   

 	$('.right').click(function(){

 	$('div').removeClass("carusele");
	var carouselList = $("#carousel ul");
	


	setInterval(changeSlide, 2500);
	function changeSlide(){

	carouselList.animate({'marginLeft':+400}, 1000, moveFirstSlide);
	};	

	function moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
    
	//firstItem.before(lastItem)
	firstItem.before(lastItem)
	carouselList.css({marginLeft:0});
	};
	
});



});
