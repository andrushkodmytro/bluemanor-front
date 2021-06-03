var images = [{ src: "./../assets/img/book.jpg", title: "Kohila mill" }];

var timerFunction;
var currentImage = images[Math.floor(Math.random() * images.length)];

var imagePuzzle = {
  stepCount: 0,
  startTime: new Date().getTime(),
  previewImage: function(){
    $('.category-container').hide();
    $('#preview-image').show();

    $("#actualImage").attr("src", currentImage.src);
  },
  startGame: function (images, gridSize) {
    $('#preview-image').hide();

    this.setImage(images, gridSize);
    $("#puzzle-container").show();
    $("#puzzle-container").randomize();
    this.enableSwapping("#puzzle-container li");
    this.stepCount = 0;
    this.startTime = new Date().getTime();
    this.tick();
  },

  tick: function () {
    var now = new Date().getTime();
    var elapsedTime = parseInt((now - imagePuzzle.startTime) / 1000, 10);
    $("#timerPanel").text(elapsedTime);
    timerFunction = setTimeout(imagePuzzle.tick, 1000);
  },

  enableSwapping: function (elem) {
    $(elem).draggable({
      snap: "#droppable",
      snapMode: "outer",
      revert: "invalid",
      helper: "clone",
    });
    $(elem).droppable({
      drop: function (event, ui) {
        var $dragElem = $(ui.draggable).clone().replaceAll(this);
        $(this).replaceAll(ui.draggable);

        currentList = $("#puzzle-container > li").map(function (i, el) {
          return $(el).attr("data-value");
        });
        if (isSorted(currentList)){
        alert('Finish')
          $("#preview-image").empty().html($("#gameOver").html());}
        else {
          var now = new Date().getTime();
          imagePuzzle.stepCount++;
          $(".stepCount").text(imagePuzzle.stepCount);
          $(".timeCount").text(
            parseInt((now - imagePuzzle.startTime) / 1000, 10)
          );
        }

        imagePuzzle.enableSwapping(this);
        imagePuzzle.enableSwapping($dragElem);
      },
    });
  },

  setImage: function (images, gridSize) {
    const gridSizeX = 4;
    const gridSizeY = 3;
    var percentageX = 100 / (gridSizeX - 1);
    var percentageY = 100 / (gridSizeY - 1);
    var image = images[Math.floor(Math.random() * images.length)];

    // $("#actualImage").attr("src", currentImage.src);
    $("#puzzle-container").empty();
    for (var i = 0; i < gridSizeX * gridSizeY; i++) {
      var xpos = percentageX * (i % gridSizeX) + "%";
      var ypos = percentageY * Math.floor(i / gridSizeX) + "%";
      var li = $('<li class="item" data-value="' + i + '"></li>').css({
        "background-image": "url(" + currentImage.src + ")",
        "background-size": gridSizeX * 100 + "%" + gridSizeY * 100 + "%",
        "background-position": xpos + " " + ypos,
        width: 600 / gridSizeX,
        height: 450 / gridSizeY,
      });
      $("#puzzle-container").append(li);
    }
    $("#puzzle-container").randomize();
  },
};

function isSorted(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] != i) return false;
  }
  return true;
}
$.fn.randomize = function (selector) {
  var $elems = selector ? $(this).find(selector) : $(this).children(),
    $parents = $elems.parent();

  $parents.each(function () {
    $(this)
      .children(selector)
      .sort(function () {
        return Math.round(Math.random()) - 0.5;
      })
      .remove()
      .appendTo(this);
  });
  return this;
};

$(function () {
  var gridSize = $("#levelPanel :radio:checked").val();

  // $("#newPhoto").click(function () {
  //   var gridSize = $("#levelPanel :radio:checked").val();
  //   imagePuzzle.startGame(images, gridSize);
  // });

  $("#levelPanel :radio").change(function (e) {
    var gridSize = $(this).val();
    imagePuzzle.startGame(images, gridSize);
  });

  $(".category-item").click(function (e) {
    e.preventDefault();

    imagePuzzle.previewImage(images, gridSize);
    
  });

  $('.btn-check').click(function(){
    console.log('Click')
    imagePuzzle.startGame(images, gridSize);
  })
});
