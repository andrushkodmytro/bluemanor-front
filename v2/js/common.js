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
    $(".schedule-page .modal").css("display", "flex");
    $(this).toggleClass("active");
  });

  const date = new Date();
  let month = date.getMonth();
  let currentMonth = date.toLocaleString("default", { month: "long" });
  const currentYear = date.getFullYear();

  $(".month-name").text(currentMonth);
  $(".year").text(currentYear);

  $(".prev-month").click(function () {
    const dateNew = new Date();
    month -= 1;
    dateNew.setMonth(month);

    let newCurrentMonth = dateNew.toLocaleString("default", { month: "long" });
    $(".month-name").text(newCurrentMonth);
  });

  $(".next-month").click(function () {
    const dateNew = new Date();
    month += 1;
    dateNew.setMonth(month);
    console.log(month);
    let newCurrentMonth = dateNew.toLocaleString("default", { month: "long" });
    $(".month-name").text(newCurrentMonth);
  });

  // game

  // Info modal
  const $infoModal2 = $("#game-info-modal");

  $("#info-btn").click(() => {
    $infoModal2.css("display", "flex").find("dialog").attr("open", true);
  });

  $infoModal2.find(".closeButton").click(() => {
    $infoModal2.css("display", "none").find("dialog").attr("open", false);
  });

  //Score modal
  const $scoreModal2 = $("#game-score-modal");

  $("#high-scores-btn").click(() => {
    $scoreModal2.css("display", "flex").find("dialog").attr("open", true);
  });

  $scoreModal2.find(".closeButton").click(() => {
    $scoreModal2.css("display", "none").find("dialog").attr("open", false);
  });

  // Tabs init
  $("#tabs").tabs();

  //
  //
  //
  //  Line chart

  // Value in percents

  const $lineChartContainer = $(".tab-all-time .chart-content .charts");
  const $initContainer = $(".chart-content .charts");

  const data = [
    {
      goal: 100,
      completed: 80,
      section: 10,
      quiz: 20,
      books: 10,
      points: 10,
    },
    {
      goal: 120,
      completed: 80,
      section: 10,
      quiz: 20,
      books: 10,
      points: 10,
    },
    {
      goal: 80,
      completed: 90,
      section: 10,
      quiz: 20,
      books: 10,
      points: 10,
    },
  ];

  // Get max height for tabs
  function getMaxHeightForTabs() {
    let tabMaxHeight = 0;

    $initContainer.each(function () {
      const height = $(this).height();

      if (height > tabMaxHeight) {
        tabMaxHeight = height;
      }
    });

    return tabMaxHeight;
  }

  function createCoordinates(data) {
    const monthWidth = 70;
    const heightContainer = getMaxHeightForTabs();

    return data.map(function (item, i) {
      const heightXY = ((100 - item) / 100) * heightContainer;
      const widthXY = i * monthWidth;

      return [widthXY, heightXY];
    });
  }

  function newcreateCoordinates(data) {
    const monthWidth = 70;
    const heightContainer = getMaxHeightForTabs();
    const maxHeight = 200

    return data.map(function (item, i) {
      const goalPercent = (item.goal / 200)*100;
      const completedPercent = (item.completed / 200)*100;
      const goalHeightXY = ((100 - goalPercent) / 100) * heightContainer;
      const completedHeightXY = ((100 - completedPercent) / 100) * heightContainer;
      const widthXY = i * monthWidth;

      return {goal: [widthXY, goalHeightXY], completed: [widthXY, completedHeightXY] };
    });
  }

  function addPointOnChart([x, y], type, index) {
    $(
      `<a href='\#' class='chart-dot chart-dot-${type}'  data-dot-pos=${index}></a>`
    )
      .css({
        position: "absolute",
        top: y + "px",
        left: x + "px",
      })
      .appendTo($lineChartContainer);
  }

  function drawLineCharts(data) {
    // % of height
    const monthGoal = [50, 47, 12, 50, 30, 50, 40, 70, 50, 20, 36, 12];
    const monthCompleted = [45, 50, 20, 40, 25, 60, 40, 70, 35, 24, 34, 42];

    const monthGoalXY = createCoordinates(monthGoal);
    const monthCompletedXY = createCoordinates(monthCompleted);

    const newData = newcreateCoordinates(data);
    console.log(newcreateCoordinates(data))

    let prevItem1 = null;
    let prevItem2 = null;

    for (let i = 0; i < newData.length; i++) {
      if (i === 0) {
        prevItem1 = newData[i].goal;
        prevItem2 = newData[i].completed;

        addPointOnChart(newData[i].goal, "goal", i);
        addPointOnChart(newData[i].completed, "completed", i);
      } else {
        $lineChartContainer.line(
          prevItem1[0],
          prevItem1[1],
          newData[i].goal[0],
          newData[i].goal[1],
          {
            color: "red",
            stroke: 3,
            zindex: 110,
          }
        );

        $lineChartContainer.line(
          prevItem2[0],
          prevItem2[1],
          newData[i].completed[0],
          newData[i].completed[1],
          {
            color: "green",
            stroke: 3,
            zindex: 100,
          }
        );

        addPointOnChart(newData[i].goal, "goal", i);
        addPointOnChart(newData[i].completed, "completed", i);

        prevItem1 = newData[i].goal;
        prevItem2 = newData[i].completed;
      }
    }

    // for (let i = 0; i < monthGoalXY.length; i++) {
    //   if (i === 0) {
    //     prevItem1 = monthGoalXY[i];
    //     prevItem2 = monthCompletedXY[i];

    //     addPointOnChart(monthGoalXY[i], "goal", i);
    //     addPointOnChart(monthCompletedXY[i], "completed", i);
    //   } else {
    //     $lineChartContainer.line(
    //       prevItem1[0],
    //       prevItem1[1],
    //       monthGoalXY[i][0],
    //       monthGoalXY[i][1],
    //       {
    //         color: "red",
    //         stroke: 3,
    //         zindex: 110,
    //       }
    //     );

    //     $lineChartContainer.line(
    //       prevItem2[0],
    //       prevItem2[1],
    //       monthCompletedXY[i][0],
    //       monthCompletedXY[i][1],
    //       {
    //         color: "green",
    //         stroke: 3,
    //         zindex: 100,
    //       }
    //     );

    //     addPointOnChart(monthGoalXY[i], "goal", i);
    //     addPointOnChart(monthCompletedXY[i], "completed", i);

    //     prevItem1 = monthGoalXY[i];
    //     prevItem2 = monthCompletedXY[i];
    //   }
    // }
  }

  drawLineCharts(data);

  // Progress page day modal
  const $menu = $("#menu");
  const $progressItems = $(".percentage-chart, .chart-dot");
  let $currentProgressItem = null;

  function setPopupCoordinates() {
    if ($currentProgressItem) {
      const offset = $currentProgressItem.offset();
      const halfWidth = $currentProgressItem.width() / 2;

      $menu.css({ top: offset.top + 20, left: offset.left + halfWidth });
    }
  }

  $progressItems
    .click(function (e) {
      e.preventDefault();

      $currentProgressItem = $(this);

      const data = $(this).data();

      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          $(`#${key}`).text(data[key]);
        }
      }

      if (data.dotPos) {
        let topXY = { x: 0, y: 10000 };

        $(`[data-dot-pos=${data.dotPos}]`).each(function () {
          const coordinates = $(this).position();

          if (coordinates.top < topXY.y) {
            topXY.y = coordinates.top;
          }
          topXY.x = coordinates.left;
        });

        $(".selected-period").remove();

        const heightContainer = getMaxHeightForTabs();

        $lineChartContainer.line(
          topXY.x + 5,
          topXY.y,
          topXY.x + 5,
          heightContainer,
          {
            color: "black",
            stroke: 2,
            zindex: 90,
            style: "dashed",
            class: "selected-period",
          }
        );

        $(`[data-month-pos]`).removeClass("active-month");
        $(`[data-month-pos=${data.dotPos}]`).addClass("active-month");
      }

      setPopupCoordinates();

      $menu.removeClass("active").addClass("active");
    })
    .blur(function (e) {
      $menu.removeClass("active");
      $(".selected-period").remove();
      $(`[data-month-pos]`).removeClass("active-month");
      $currentProgressItem = null;
    });

  // Prevent focusout when click on popup
  $menu.on("mousedown", function (event) {
    event.preventDefault();
  });

  let resizeTimer;

  $(window).on("resize", function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      setPopupCoordinates();
    }, 250);
  });
});
