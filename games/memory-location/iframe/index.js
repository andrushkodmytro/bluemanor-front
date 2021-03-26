$(function () {
  $("#slots span").click(function () {
    $(this).toggleClass("answer");
  });

  var clickCount = 0;
  var sizeSlots = 3;

  $(".btn-check").click(function () {
    $(this).text("I’m ready");
    $(".timer span").removeClass("timer-clock").text("8");
    $("h3").text(
      "Memorize which ones are darker until the timer reaches zero."
    );

    if (clickCount && sizeSlots < 8) {
      const $slots = $("#slots ");

      var newCellsCount = sizeSlots * sizeSlots - $slots.find("li").length;

      $slots.removeClass().addClass("slots-" + sizeSlots * sizeSlots);

      for (var i = 1; i <= newCellsCount; i++) {
        $slots.append("<li><span/></li>");
      }
    }

    clickCount += 1;
    sizeSlots += 1;
  });
});
