function () {
    $(this).closest('div').style.backgroundColor="Red";
function btnGreen() {
  document.getElementById("Div2").style.backgroundColor="Green";
}
function btnBlue() {
  document.getElementById("Div3").style.backgroundColor="Blue";
}
function btnReset() {
  document.getElementById("Div1").style.backgroundColor="Black";
  document.getElementById("Div2").style.backgroundColor="white";
  document.getElementById("Div3").style.backgroundColor="white";
}