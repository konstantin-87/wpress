$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	$(".slide_left").animated("fadeInLeft", "fadeOutLeft");
	$(".slide_right").animated("fadeInRight", "fadeOutRight");
	$(".slide_img").animated("flipInY", "flipOutY");



	function heightDetect() {
		$(".main_head").css("height", $(window).height() );	
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_menu").on("click", function() {
	  $(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a").on("click", function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").removeClass("active");		
	}).append("<span>");

	$(".toggle_menu").on("click", function() {		
		if ($(".top_menu").is(":visible")) {
			$(".top_text").removeClass("opacty");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("opacty");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}		
	});

	// $(".top_menu li").sliphover({
	// 	target: "a",
	// 	backgroundColor: "rgba(255,255,255,.05)"
	// });

	
});

$(window).on("load", function() { 	
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});