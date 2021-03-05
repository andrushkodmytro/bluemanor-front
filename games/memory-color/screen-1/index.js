$( function() {  
  var draggedElement = null;

  $("#slots svg path" ).each(function() {
    console.log($(this))
    $(this).on('dragover',function(ev) {
      ev.originalEvent.preventDefault();
    }).on('drop',function(ev) {
        $(this).removeClass();
        $(this).addClass('color-fill-' + ev.originalEvent.dataTransfer.getData('text/plain'));
    })
    .on('dragenter', function(ev){
      // add hover class
      console.log('Hover')
      
      $(this).addClass('color-fill-hover-' + $(draggedElement).data('color'));

    }).on('dragleave',  function(ev){
      console.log('End hover')
      // Remove hover class
      $(this).removeClass('color-fill-hover-' + $(draggedElement).data('color'));

    })
  });

  $( "#options  div > span" ).each(function() {
    $(this).on('dragstart',function(ev) {
      ev.originalEvent.dataTransfer.setData('text/plain',$(this).data('color'));
      const svg = $(ev.currentTarget).find('svg')[0]

      ev.originalEvent.dataTransfer.setDragImage(svg, 12, 100);
      draggedElement = this

    $(ev.currentTarget).addClass('draggedElem')
    
$('body').addClass('.drag')
      
    }).on('dragend',function(ev) {
      console.log('Drag end')
      draggedElement= null
    })
  });



  // Info modal
  const $infoModal =  $('#game-info-modal');

  $('#info-btn').click(()=>{
    $infoModal.css('display', 'flex').find('dialog').attr( "open", true)
  });
    

  $infoModal.find('.closeButton').click(()=>{
    $infoModal.css('display', 'none').find('dialog').attr( "open", false)
  })






  //Score modal
  const $scoreModal =  $('#game-score-modal');

  $('#high-scores-btn').click(()=>{
    $scoreModal.css('display', 'flex').find('dialog').attr( "open", true)
  });
    

  $scoreModal.find('.closeButton').click(()=>{
    $scoreModal.css('display', 'none').find('dialog').attr( "open", false)
  })


  // Tabs init
  $( "#tabs" ).tabs();

  $('.btn-check').click(function(){
    console.log('Click')
    $(this).text('I’m ready')
    $('.timer span').removeClass('timer-clock').text('8');
    $('h3').text('Memorize the colors until the timer reaches zero.')
  })


} );