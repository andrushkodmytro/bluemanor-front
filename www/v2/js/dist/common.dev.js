"use strict";

$(function () {
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
  } //-Owl Carousel


  $("a[href^='#']").click(function (e) {
    e.preventDefault();
    var dest = $(this).attr('href'); // console.log(dest);

    $('html,body').animate({
      scrollTop: $(dest).offset().top
    }, 'slow');
  }); // $("a[href^='#']").click(function(e) {
  // 	e.preventDefault();
  // 	const dest = $(this).attr('href');
  // 	const target = document.querySelector(dest);
  // 	target.scrollIntoView({behavior: 'smooth', block: 'start'})
  // });
  //+Show/hide password

  $("button.showPassword").click(function () {
    $(this).toggleClass("hidePassword");
    return false; // $(this).next()
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
  }); // $("button.showPassword").change(function(){
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
});