$(document).ready(function() {

	var containerEl = document.querySelector('.portfolio_grid');
	var mixer = mixItUp(containerEl);

 // $(function () { $("input,select,textarea").jqBootstrapValidation(); } );

	$(".s_portfolio li").on('click', function() {
		$(".s_portfolio li").removeClass("active");		
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true, closeBtnInside:true});

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

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i );
		$(this).find(".port_descr").attr("id", "work_" + i );
		console.log(i);
	});



});

$(window).on("load", function() { 	
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

