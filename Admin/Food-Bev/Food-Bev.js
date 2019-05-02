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
      $('#food').html(localStorage.getItem("fooddata"));
      
    });
    function addRow(){
      var str = '<tr class = "boxType"><td>'+$('#dietres').val()+'</td>\
  <td>'+$('#int').val()+'</td>\<td><input type="button" value="DELETE" /></td>\
  </tr>'
      $('#food').append(str);
      localStorage.setItem("fooddata", $('#food').html());
    }

    $('#food').on('click', 'input[type="button"]', function () {
    $(this).closest('tr').remove();
})