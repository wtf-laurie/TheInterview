window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Get the modal
/* var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
    var colors = [rgb(129, 247, 129), rgb(247, 129, 129)];

    var colorIndex = 0;
  function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    } */

var color = [rgb(129, 247, 129), rgb(247, 129, 129)];
var i = 0;
document.querySelector("button").addEventListener("click"),
  function(){
    i = i < color.length ? ++i : 0;
document.querySelector("body").style.background =  color[i]
  }