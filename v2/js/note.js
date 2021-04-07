$(function () {
  var icons = Quill.import('ui/icons');
  icons['bold'] = '<span class="hasIcon--bold" aria-hidden="true"></span>';
  icons['italic'] = '<span class="hasIcon--italic" aria-hidden="true"></span>';
  icons['underline'] = '<span class="hasIcon--underline" aria-hidden="true"></span>';


  var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
      ]
    },
    placeholder: 'Enter note...',
    theme: 'snow'  // or 'bubble'
  });
});
