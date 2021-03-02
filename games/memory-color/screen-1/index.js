$( function() {  
  $("#slots svg path" ).each(function() {
    console.log($(this))
    $(this).on('dragover',function(ev) {
      ev.originalEvent.preventDefault();
    }).on('drop',function(ev) {
    
      console.log('drop ======> 222 ')
      // $(this).removeClass();
      // $(this).addClass('color-fill-' + ev.originalEvent.dataTransfer.getData('text/plain'));
    });
  });

  $( "#options > div > span" ).each(function() {
    $(this).on('dragstart',function(ev) {
      const clone = $(this).find('svg')
      // clone.css('transform', 'rotate(45deg)')

      console.log(clone[0])
      ev.originalEvent.dataTransfer.setDragImage(clone[0], 0, 0)
      // $(this).animate({'opacity': 0.3});
      // ev.originalEvent.dataTransfer.setData('text/plain',$(this).data('color'));
    }).on('dragend',function(ev) {
      // $(this).animate({'opacity': 1});
      // console.log('Drag end')
    });
  });




  $('#info-modal').attr( "open",function(index, attr){
    return attr ? false : true;
  } )

  $('#info-modal').find('.closeButton').click(function(){

    console.log('Click')
$(this).attr( "open", false)
  })
} );