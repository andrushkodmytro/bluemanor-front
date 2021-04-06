$(function () {
  // Tabs init
  const $tabs = $("#tabs");
  if ($tabs.length) {
    $tabs.tabs();
  }

  //
  //  Line chart
  const $lineChartContainer = $(".tab-all-time .chart-content .charts");
  const $initContainer = $(".chart-content .charts");
  const $reportModalContainer = $(".progress-report-page .modal");
  const $menu = $("#menu");
  const $progressItems = $(".percentage-chart");
  const $scrolledContainers = $(".chart-content ");
  // Max value in min for line chart grid
  const maxHeight = 2000;

  const data = [
    {
      goal: 1500,
      completed: 800,
      section: 10,
      quiz: 20,
      books: 10,
      points: 10,
    },
    {
      goal: 1700,
      completed: 800,
      section: 10,
      quiz: 20,
      books: 10,
      points: 10,
    },
    {
      goal: 1600,
      completed: 900,
      section: 10,
      quiz: 20,
      books: 10,
      points: 10,
    },
    {
      goal: 1200,
      completed: 900,
      section: 10,
      quiz: 20,
      books: 10,
      points: 10,
    },
    {
      goal: 600,
      completed: 900,
      section: 10,
      quiz: 20,
      books: 10,
      points: 10,
    },
  ];

  // Prevent focusout when click on popup
  $menu.on("mousedown", function (event) {
    event.preventDefault();
  });

  // Get max height tabs for drawing line chart
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

  // Convert hours to percents
  function createCoordinates(data) {
    const monthWidth = 70;
    const heightContainer = getMaxHeightForTabs();

    return data.map(function (item, i) {
      const goalPercent = (item.goal / maxHeight) * 100;
      const completedPercent = (item.completed / maxHeight) * 100;
      const goalHeightXY = ((100 - goalPercent) / 100) * heightContainer;
      const completedHeightXY =
        ((100 - completedPercent) / 100) * heightContainer;
      const widthXY = i * monthWidth;

      return {
        goal: [widthXY, goalHeightXY, { ...item }],
        completed: [widthXY, completedHeightXY, { ...item }],
      };
    });
  }

  function convertMinToHoursStr(total) {
    let hours = Math.floor(total / 60);
    let minutes = total % 60;
    let res = null;

    if (hours && minutes) {
      res = `${hours}h ${minutes}min`;
    } else if (hours) {
      res = `${hours}h`;
    } else if (minutes) {
      res = `${minutes}min`;
    } else {
      res = `0 min`;
    }

    return res;
  }

  // Add points for line chart
  function addPointOnChart([x, y, rest], type, index) {
    const goalTime = convertMinToHoursStr(rest.goal);
    const completedTime = convertMinToHoursStr(rest.completed);

    $(
      `<a href='\#' class='chart-dot chart-dot-${type}'  data-dot-pos=${index}  data-goal='${goalTime}'
    data-completed='${completedTime}' data-section='${rest.section}' data-quiz='${rest.quiz}' data-books='${rest.books}'
    data-points='${rest.points}'></a>`
    )
      .css({
        position: "absolute",
        top: y + "px",
        left: x + "px",
      })
      .appendTo($lineChartContainer);
  }

  // Draw line chart
  function drawLineCharts(data) {
    const chartData = createCoordinates(data);

    let prevItem1 = null;
    let prevItem2 = null;

    for (let i = 0; i < chartData.length; i++) {
      if (i === 0) {
        prevItem1 = chartData[i].goal;
        prevItem2 = chartData[i].completed;

        addPointOnChart(chartData[i].goal, "goal", i);
        addPointOnChart(chartData[i].completed, "completed", i);
      } else {
        $lineChartContainer.line(
          prevItem1[0],
          prevItem1[1],
          chartData[i].goal[0],
          chartData[i].goal[1],
          {
            color: "#D12335",
            stroke: 3,
            zindex: 110,
          }
        );

        $lineChartContainer.line(
          prevItem2[0],
          prevItem2[1],
          chartData[i].completed[0],
          chartData[i].completed[1],
          {
            color: "#1a944d",
            stroke: 3,
            zindex: 100,
          }
        );

        addPointOnChart(chartData[i].goal, "goal", i);
        addPointOnChart(chartData[i].completed, "completed", i);

        prevItem1 = chartData[i].goal;
        prevItem2 = chartData[i].completed;
      }
    }

    $(".chart-dot").click(modalHandler).blur(blurHandler);
  }

  //  Set coordinates for popup menu(modal)
  let $currentProgressItem = null;
  function setPopupCoordinates() {
    const viewPortWidth = $(window).width();

    if (viewPortWidth > 768 && $currentProgressItem) {
      const offset = $currentProgressItem.offset();
      const halfWidth = $currentProgressItem.width() / 2;

      $menu.css({ top: offset.top + 20, left: offset.left + halfWidth });
    } else {
      $menu.css({ top: "", left: "" });
    }
  }

  function modalHandler(e) {
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
          color: "#29200F",
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

    $menu.addClass("active");
    $reportModalContainer.css("display", "flex");
  }

  function blurHandler() {
    $menu.removeClass("active");
    $reportModalContainer.css("display", "none");
    $(".selected-period").remove();
    $(`[data-month-pos]`).removeClass("active-month");
    $currentProgressItem = null;
  }

  function scrollHandler() {
    $("*:focus").blur();
  }

  $progressItems.click(modalHandler).blur(blurHandler);

  $scrolledContainers.scroll(scrollHandler);

  drawLineCharts(data);

  // Deleting old line chart on window resize
  function deleteChart() {
    $(".chart-dot").off("blur").off("click");
    $(".line, .chart-dot").remove();
  }

  // +Throttle resize function
  let resizeTimer;
  $(window).on("resize", function (e) {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
      setPopupCoordinates();
      deleteChart();
      drawLineCharts(data);
    }, 250);
  });
  // -Throttle resize function

  //
  //
  // Schedule
});
