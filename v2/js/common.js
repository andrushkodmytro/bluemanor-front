$(function () {
  //+Owl Carousel
  if ($(".owl-carousel.owl-papers").length) {
    $(".owl-carousel.owl-papers").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 1,
      animateOut: "fadeOut",
      nav: false,
      navText: [,],
      loop: true,
    });
  }
  if ($(".owl-carousel.owl-letters").length) {
    $(".owl-carousel.owl-letters").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 1,
      animateOut: "fadeOut",
      dots: false,
      nav: true,
      navText: [,],
      loop: true,
    });
  }
  if ($(".owl-carousel.owl-studentCourse").length) {
    $(".owl-carousel.owl-studentCourse").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      // autoWidth: true,
      animateOut: "fadeOut",
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
          items: 2,
        },
        480: {
          autoplay: false,
          autoplayHoverPause: true,
          loop: false,
          slideBy: 2,
          // items: 3.5
          items: 3,
        },
        768: {
          autoplay: false,
          autoplayHoverPause: true,
          loop: false,
          slideBy: 3,
          // items: 4.5
          items: 4,
        },
        1024: {
          autoplay: false,
          autoplayHoverPause: true,
          loop: false,
          slideBy: 4,
          // items: 5.5
          items: 5,
        },
        1200: {
          autoplay: false,
          autoplayHoverPause: true,
          loop: false,
          slideBy: 5,
          // items: 6.5
          items: 6,
        },
      },
    });
  }
  //-Owl Carousel

  $("a[href^='#']").click(function (e) {
    e.preventDefault();
    var dest = $(this).attr("href");
    // console.log(dest);
    $("html,body").animate({ scrollTop: $(dest).offset().top }, "slow");
  });
  // $("a[href^='#']").click(function(e) {
  // 	e.preventDefault();
  // 	const dest = $(this).attr('href');
  // 	const target = document.querySelector(dest);
  // 	target.scrollIntoView({behavior: 'smooth', block: 'start'})
  // });

  //+Show/hide password
  $("button.showPassword").click(function () {
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

  $("#blackboard-btn").click(() => {
    const $dialog = $(this).find("dialog");
    $dialog.attr("open", function (index, attr) {
      return attr ? false : true;
    });
  });

  $("#blackboard-close-btn").click(() => {
    const $dialog = $(this).find("dialog");
    $dialog.attr("open", function (index, attr) {
      return attr ? false : true;
    });
  });

  $("#maximize-btn").click(() => {
    const dialog = $(this).parents("dialog");
    $("dialog").toggleClass("full-black-board");
  });

  $("#minimize-btn").click(() => {
    const dialog = $(this).parents("dialog");
    $("dialog").toggleClass("full-black-board");
  });

  //Delete notification
  $(".delete-btn").click(function () {
    $(this).closest(".notification-item").addClass("restore-block");

    $(this).closest(".note-item").addClass("restore-block");
  });

  //Undo delete notification
  $(".undo-btn").click(function () {
    $(this).closest(".notification-item").removeClass("restore-block");
    $(this).closest(".note-item").removeClass("restore-block");
  });

  //View more
  $("#view-more").click(function (e) {
    e.preventDefault();

    $(".notification-item").clone().appendTo($(".notification-container"));
    $(".note-item").clone().appendTo($(".note-container"));

    $(this).css("display", "none");
  });

  // Info modal
  const $infoModal = $("#add-note-modal");

  $(".edit-btn").click(() => {
    $infoModal.css("display", "flex").find("dialog").attr("open", true);
  });

  $infoModal.find(".closeButton").click(() => {
    $infoModal.css("display", "none").find("dialog").attr("open", false);
  });

  // 	ClassicEditor
  // 	.create( document.querySelector( '#editor' ), {
  // 		// toolbar: [ 'bold', 'italic', 'underline' ],
  // 		// heading: {
  // 		// 		options: [
  // 		// 				{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
  // 		// 				{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
  // 		// 				{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
  // 		// 		]
  // 		// }
  // }  )
  // 	.catch( error => {
  // 			console.error( error );
  // 	} );

  // CKEDITOR.replace( 'editor'
  // , {
  // 	toolbar: [
  // 		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] }
  // 	]
  // }
  // );

  const $scoreModal = $("#quiz-report-modal");
  $scoreModal.find(".closeButton").click(() => {
    $scoreModal.css("display", "none").find("dialog").attr("open", false);
  });

  $scoreModal.css("display", "flex").find("dialog").attr("open", true);
  $("#high-scores-btn").click(() => {
    $scoreModal.css("display", "flex").find("dialog").attr("open", true);
  });

  $scoreModal.find(".closeButton").click(() => {
    $scoreModal.css("display", "none").find("dialog").attr("open", false);
  });

  // Quiz report open

  $("#quiz-report-btn").click(function (e) {
    e.preventDefault();

    // Close books modal
    $("#BookTableOfContents")
      .attr("open", false)
      .closest(".modal")
      .css("display", "none")
      .focus();

    //  Open quiz report modal
    $("#quiz-report-modal")
      .css("display", "flex")
      .find("dialog")
      .attr("open", true);
  });

  $(".day").click(function (e) {
    $(".day").removeClass("active");
    $('.schedule-page .modal').css('display', 'flex')
    $(this).toggleClass("active");
  });


  const date = new Date;
  let month = date.getMonth();
  let currentMonth = date.toLocaleString('default', { month: 'long' });
  const currentYear= date.getFullYear();
  


  $('.month-name').text(currentMonth);
  $('.year').text(currentYear);

  $('.prev-month').click(function(){
   const dateNew = new Date();
   month -= 1;
   dateNew.setMonth(month);

   let newCurrentMonth = dateNew.toLocaleString('default', { month: 'long' });
   $('.month-name').text(newCurrentMonth);
  })

  $('.next-month').click(function(){
    const dateNew = new Date();
    month += 1;
    dateNew.setMonth(month);
 console.log(month)
    let newCurrentMonth = dateNew.toLocaleString('default', { month: 'long' });
    $('.month-name').text(newCurrentMonth);
   })



  
   $('div[role="button"]').on('keydown', function(e) {
    const keyD = e.key !== undefined ? e.key : e.keyCode;
    // e.key && e.keycode have mixed support - keycode is deprecated but support is greater than e.key
    // I tested within IE11, Firefox, Chrome, Edge (latest) & all had good support for e.key
  
      if ( (keyD === 'Enter' || keyD === 13) || (['Spacebar', ' '].indexOf(keyD) >= 0 || keyD === 32)) {
      // In IE11 and lower, e.key will equal "Spacebar" instead of ' '
  
      // Default behavior is prevented to prevent the page to scroll when "space" is pressed
      e.preventDefault();
      this.click();
    }
  });

   
});
