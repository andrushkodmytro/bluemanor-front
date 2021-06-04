$(function () {
  $("#coins-header").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  //Score modal
  const $scoreModal2 = $("#point-leaderboard-modal");

  $("#to-leaderboard-modal").click((e) => {
    e.preventDefault();

    $scoreModal2.css("display", "flex").find("dialog").attr("open", true);
  });

  $scoreModal2.find(".closeButton").click(() => {
    $scoreModal2.css("display", "none").find("dialog").attr("open", false);
  });
});
