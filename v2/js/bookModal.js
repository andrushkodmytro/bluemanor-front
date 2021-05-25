$(function () {
  // Master quiz modal
  const $activeBtn = $(".dropdownMenuWrapper .active-btn");
  const $scrollContainer = $(".bookContent");
  let $currentDropdownMenu;
  let menuIsClosed = false;

  $activeBtn.click(function (e) {
    e.preventDefault();

    var $dl = $(this).closest("dl");

    const scrollHeight = $scrollContainer[0].scrollHeight;
    const scrollPosition = $scrollContainer[0].scrollTop;
    const elemTop = $dl.position().top;
    const elemHeight = $dl.outerHeight();
    const btnHeight = $(this).outerHeight();
    const bottomHeight = scrollHeight - scrollPosition - elemTop - elemHeight;

    if (bottomHeight < 160) {
      $dl.find(".dropdownMenu").css("top", -(153 - bottomHeight - btnHeight));
    }

    
    if ( !$(this).hasClass("active")) {
      // $(this).removeClass("active");
      $(this).addClass("active");
    } else {
      // $activeBtn.removeClass("active");
      menuIsClosed = false
      $currentDropdownMenu = null;
    }

    $currentDropdownMenu = $(this).next();
  });

  // Outside click
  $(document).mouseup((e) => {
    if (!$currentDropdownMenu) return;

    if (
      !$currentDropdownMenu.is(e.target) &&
      $currentDropdownMenu.has(e.target).length === 0
    ) {
      $currentDropdownMenu.prev().removeClass("active");
      menuIsClosed= true
    }
  });
});
