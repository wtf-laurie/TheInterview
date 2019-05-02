/*

function check() {
  document.written()
}

var $scrollable  = $(".scrollable"),
    $scrollbar   = $(".scrollbar"),
    height       = $scrollable.outerHeight(true),    // visible height
    scrollHeight = $scrollable.prop("scrollHeight"), // total height
    barHeight    = height * height / scrollHeight;   // Scrollbar height!

// Scrollbar drag:
$scrollbar.height( barHeight ).draggable({
  axis : "y",
  containment : "parent",
  drag: function(e, ui) {
    $scrollable.scrollTop( scrollHeight / height * ui.position.top  );
  }
});

// Element scroll:
$scrollable.on("scroll", function() {
  $scrollbar.css({top: $scrollable.scrollTop() / height * barHeight });
}); */

    $( document ).ready(function(){
      $('#screen').html(localStorage.getItem("data"));
      
    });
    function addRow(){
      var str = '<tr class = "boxType"><td>'+$('#time').val()+'</td>\
  <td>'+$('#int').val()+'</td>\
  <td>'+$('#lname').val()+'</td>\
  <td>'+$('#fname').val()+'</td>\
  <td><input type="button" value="DELETE" /></td>\
  </tr>'
      $('#screen').append(str);
      localStorage.setItem("data", $('#screen').html());
    }

        // DELETE TABLE ROW.
    $('#screen').on('click', 'input[type="button"]', function () {
    $(this).closest('tr').remove();
})