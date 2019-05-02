    $( document ).ready(function(){
      $('#screen').html(localStorage.getItem("data"));
      
    });


    function addRow(){
      var str = '<tr class = "boxType"><td>'+$('#time').val()+'</td>\
  <td>'+$('#int').val()+'</td>\
  <td>'+$('#lname').val()+'</td>\
  <td>'+$('#fname').val()+'</td>\
  </tr>'
      $('#screen').append(str);
      localStorage.setItem("data", $('#screen').html());
    }