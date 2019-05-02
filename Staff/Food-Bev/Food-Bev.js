    $( document ).ready(function(){
      $('#food').html(localStorage.getItem("fooddata"));
      
    });
    function addRow(){
      var str = '<tr class = "boxType"><td>'+$('#dietres').val()+'</td>\
  <td>'+$('#int').val()+'</td>\
  </tr>'
      $('#food').append(str);
      localStorage.setItem("fooddata", $('#food').html());
    }