$('.simditor').each(function () {
  var $me = $(this);
  var editor = new Simditor({
    textarea: $me
  });
  $me.data('editor', editor);
});
