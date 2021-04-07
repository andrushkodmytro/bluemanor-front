$(function () {
  // Info modal
  const $infoModal = $("#add-note-modal");

  $(".edit-btn").click(() => {
    $infoModal.css("display", "flex").find("dialog").attr("open", true);
  });

  $infoModal.find(".closeButton").click(() => {
    $infoModal.css("display", "none").find("dialog").attr("open", false);
  });

  var icons = Quill.import('ui/icons');
  icons['bold'] = '<span class="hasIcon--bold" aria-hidden="true"></span>';
  icons['italic'] = '<span class="hasIcon--italic" aria-hidden="true"></span>';
  icons['underline'] = '<span class="hasIcon--underline" aria-hidden="true"></span>';


  var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
      ],
      clipboard: {
        matchVisual: false
    }
    },
    placeholder: 'Enter note...',
    theme: 'snow'  // or 'bubble'
  });
});
