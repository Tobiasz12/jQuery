$(function(){
	var carouselList = $("#carousel ul");
	
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

/*
 $('.right').click(function(){

	carouselList.animate({'marginLeft':+400}, 500);
});

  $('.left').click(function(){

	carouselList.animate({'marginLeft':-400}, 500,moveLastSlide);
});
	function moveLastSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");

	firstItem.after(lastItem);
	carouselList.css({marginRight:0});
};
*/
});
