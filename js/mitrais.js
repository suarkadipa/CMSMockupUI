$(function () {
    var placeholder = "&#xf002 Jump to a competency, project, staff or search";
    $(".select2").select2({
      placeholder: placeholder,
      allowClear: true,
      escapeMarkup: function(m) { 
         return m; 
      }
    });
});