$(function () {
  var draggedElement = null;

  $("#slots svg path").each(function () {
    $(this)
      .on("dragover", function (ev) {
        ev.originalEvent.preventDefault();
      })
      .on("drop", function (ev) {
        $(this).removeClass();
        $(this).addClass(
          "color-fill-" + ev.originalEvent.dataTransfer.getData("text/plain")
        );
      })
      .on("dragenter", function (ev) {
        $(this).addClass("color-fill-hover-" + $(draggedElement).data("color"));
      })
      .on("dragleave", function (ev) {
        // Remove hover class
        $(this).removeClass(
          "color-fill-hover-" + $(draggedElement).data("color")
        );
      });
  });

  $("#options  div > span").each(function () {
    $(this)
      .on("dragstart", function (ev) {
        ev.originalEvent.dataTransfer.setData(
          "text/plain",
          $(this).data("color")
        );
        const svg = $(ev.currentTarget).find("svg")[0];

        ev.originalEvent.dataTransfer.setDragImage(svg, 12, 100);
        draggedElement = this;

        $(ev.currentTarget).addClass("draggedElem");

        $("body").addClass(".drag");
      })
      .on("dragend", function (ev) {
        draggedElement = null;
      });
  });

  $(".btn-check").click(function () {
    $(this).text("I’m ready");
    $(".timer span").removeClass("timer-clock").text("8");
    $("h3").text("Memorize the colors until the timer reaches zero.");
  });
});
