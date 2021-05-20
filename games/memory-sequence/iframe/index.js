$(function () {
  $(".btn-check").click(function () {
    $(".timer span").removeClass("timer-clock").text("8");
    if ($(".game").hasClass("pending-state")) {
      $(this).text("I’m ready");
      $("h3").text("Memorize shapes until the timer reaches zero.");
      $(".game").removeClass("pending-state").addClass("memoize-state");
    } else if ($(".game").hasClass("memoize-state")) {
      $(this).text("Check");
      $("h3").text(
        "Choose the right shape for each space from variants below."
      );
      var x = $(".game")
        .removeClass("memoize-state")
        .addClass("choice-state")
        .find(".slots-list [data-choice]");
      x.attr("data-choice", "");
      $(x[0]).addClass("active");

      addListener1();
      addListener2();
    }
  });

  var addListener1 = function () {
    $(".choice-state .variant-item").click(function () {
      $(".choice-state .variant-item").removeClass("selected");
      $(this).addClass("selected");
      const dataValue = $(this).data("choice");
      $(".active").attr("data-choice", dataValue);
      $(".choice-state .slot-item").eq(2).addClass("error");
    });
  };

  var addListener2 = function () {
    $(".choice-state .slot-item").click(function () {
      $(".choice-state .slot-item").removeClass("active");
      $(".choice-state .variant-item").removeClass("selected");

      $(this).addClass("active");
      const dataValue = $(this).data("choice");
    });
  };

  // Scroll functionality
  const $scrollContainer = $(".variant");

  $(".scroll-next").click(function (e) {
    e.preventDefault();

    const scrollPos = $scrollContainer.scrollLeft();
    const elemWidth = $('.variant-item-container').outerWidth()
 
    console.log(elemWidth)
    $scrollContainer.animate(
      {
        scrollLeft: scrollPos + elemWidth,
      },
      "slow"
    );
  });

  $(".scroll-prev").click(function (e) {
    e.preventDefault();

    const scrollPos = $scrollContainer.scrollLeft();
    const elemWidth = $('.variant-item-container').outerWidth()

    $scrollContainer.animate(
      {
        scrollLeft: scrollPos - elemWidth,
      },
      "slow"
    );
  });
});
