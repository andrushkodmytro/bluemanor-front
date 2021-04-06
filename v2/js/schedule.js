$(function () {
  const $scheduleModal = $("#schedule-modal");
  const $daysSchedule = $(".day");
  const $reportModalContainer = $(".schedule-page .modal");
  const $cancelBtn = $("#cancel-btn");

  let $currentDay = null;
  function setPopupCoordinates() {
    const viewPortWidth = $(window).width();

    const $calendarBody = $(".calendar-body");

    const modalDelta =
      $currentDay.offset().left +
      $scheduleModal.outerWidth() / 2 +
      $currentDay.outerWidth() / 2 -
      ($calendarBody.offset().left + $calendarBody.outerWidth());

    if (viewPortWidth >= 768 && $currentDay) {
      const offset = $currentDay.offset();
      const halfDayHeight = $currentDay.outerHeight() / 2;
      const halfDayWidth = $currentDay.outerWidth() / 2;

      if (modalDelta > 0) {
        $scheduleModal.css({
          top: offset.top + halfDayHeight,
          left:
            offset.left +
            halfDayWidth -
            $scheduleModal.outerWidth() / 2 -
            modalDelta,
        });
      } else {
        $scheduleModal.css({
          top: offset.top + halfDayHeight,
          left: offset.left + halfDayWidth - $scheduleModal.outerWidth() / 2,
        });
      }
    } else {
      $scheduleModal.css({ top: "", left: "" });
    }
  }

  function closeScheduleModal() {
    $scheduleModal.removeClass("active");
    $reportModalContainer.css("display", "none");

    if ($currentDay && $currentDay.length) {
      $currentDay.removeClass("selected-day");
    }
  }

  function scheduleModalHandler(e) {
    e.preventDefault();

    $currentDay = $(this);

    const data = $currentDay.data();

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        $(`#${key}`).val(data[key] || "");
      }
    }

    setPopupCoordinates();

    $currentDay.addClass("selected-day");
    $scheduleModal.addClass("active");
    $reportModalContainer.css("display", "flex");
  }

  // Outside click
  $(document).mouseup((e) => {
    if (
      !$scheduleModal.is(e.target) &&
      $scheduleModal.has(e.target).length === 0
    ) {
      closeScheduleModal();
    }
  });

  $cancelBtn.click(closeScheduleModal);

  $daysSchedule.click(scheduleModalHandler);

  // +Throttle resize function
  let resizeTimer;
  $(window).on("resize", function (e) {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
      setPopupCoordinates();
    }, 250);
  });
  //
  //
  //
  // Period
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
    
    let newCurrentMonth = dateNew.toLocaleString("default", { month: "long" });
    $(".month-name").text(newCurrentMonth);
  });
});
