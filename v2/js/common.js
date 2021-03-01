$(function(){
	//+Owl Carousel
	if ($('.owl-carousel.owl-papers').length) {
		$('.owl-carousel.owl-papers').owlCarousel({
			autoplay: false,
			autoplayHoverPause: true,
			items: 1,
			animateOut: 'fadeOut',
			nav: false,
			navText: [,],
			loop: true
		});
	}
	if ($('.owl-carousel.owl-letters').length) {
		$('.owl-carousel.owl-letters').owlCarousel({
			autoplay: false,
			autoplayHoverPause: true,
			items: 1,
			animateOut: 'fadeOut',
			dots: false,
			nav: true,
			navText: [,],
			loop: true
		});
	}
	if ($('.owl-carousel.owl-studentCourse').length) {
		$('.owl-carousel.owl-studentCourse').owlCarousel({
			autoplay: false,
			autoplayHoverPause: true,
			// autoWidth: true,
			animateOut: 'fadeOut',
			dots: false,
			nav: true,
			navText: [,],
			loop: false,
			items: 6,
			slideBy: 6,
			responsiveClass: true,
			responsive: {
				0: {
					autoplay: false,
					autoplayHoverPause: true,
					loop: false,
					slideBy: 1,
					// items: 2.5
					items: 2
				},
				480: {
					autoplay: false,
					autoplayHoverPause: true,
					loop: false,
					slideBy: 2,
					// items: 3.5
					items: 3
				},
				768: {
					autoplay: false,
					autoplayHoverPause: true,
					loop: false,
					slideBy: 3,
					// items: 4.5
					items: 4
				},
				1024: {
					autoplay: false,
					autoplayHoverPause: true,
					loop: false,
					slideBy: 4,
					// items: 5.5
					items: 5
				},
				1200: {
					autoplay: false,
					autoplayHoverPause: true,
					loop: false,
					slideBy: 5,
					// items: 6.5
					items: 6
				}
			}
		});
	}
	//-Owl Carousel

	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var dest = $(this).attr('href');
		// console.log(dest);
		$('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
	});
	// $("a[href^='#']").click(function(e) {
	// 	e.preventDefault();
	// 	const dest = $(this).attr('href');
	// 	const target = document.querySelector(dest);
	// 	target.scrollIntoView({behavior: 'smooth', block: 'start'})
	// });

	//+Show/hide password
	$("button.showPassword").click(function() {
		$(this).toggleClass("hidePassword");
		return false;
		// $(this).next()
		
		// if($(this).next().attr("type","password")) {
		// 	$(this).next().attr("type","text");
		// } else {
		// 	$(this).next().attr("type","password");

		// }
		// if ($(this).next().type === "password") {
		// 	$(this).next().type = "text";
		// } else {
		// 	$(this).next().type = "password";
		// }

		// if($(this).hasClass('.showPassword')){
		// 	$(this).addClass("lalala");
		// }
	});

	// $("button.showPassword").change(function(){
  
	// 	// Check the checkbox state
	// 	if($(this).hasClass('.hidePassword')){
	// 		$(this).addClass("lalala")
	// 		// Changing type attribute
	// 		$("#password").attr("type","text");
	// 		// Change the Text
	// 		$("#toggleText").text("Hide");
	// 	} else {
	// 		// Changing type attribute
	// 		$("#password").attr("type","password");
	// 		// Change the Text
	// 		$("#toggleText").text("Show");
	// 	}
	   
	//    });
	//-Show/hide password
	

$('#blackboard-btn').click(()=>{
const $dialog = $(this).find('dialog');
$dialog.attr( "open",function(index, attr){
	
	return attr ? false : true;
} )
})

$('#blackboard-close-btn').click(()=>{
	const $dialog = $(this).find('dialog');
	$dialog.attr( "open",function(index, attr){
		return attr ? false : true;
	} )
	})

	$('#maximize-btn').click(()=>{
		const dialog = $(this).parents('dialog')
		$('dialog').toggleClass("full-black-board")
	});

	$('#minimize-btn').click(()=>{
		const dialog = $(this).parents('dialog')
		$('dialog').toggleClass("full-black-board")
	});

});