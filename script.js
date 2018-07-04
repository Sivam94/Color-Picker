var redValue, greenValue, blueValue;

//Gets the input from ranges
function rangeInputs(){
  redValue = document.querySelector("#redSlider").value;
  greenValue = document.querySelector("#greenSlider").value;
  blueValue = document.querySelector("#blueSlider").value;
}

//Calculates the hex value
function calculateHexValue(){
  rangeInputs();
  var hex = "#" + decimalToHex(redValue) + decimalToHex(greenValue) + decimalToHex(blueValue);
  document.querySelector("#hexCode").innerHTML = hex;
  document.querySelector("#preview").style.backgroundColor = hex;
}

//Convert decimal to hex 
function decimalToHex(decimal){
  var hex = Number(decimal).toString(16);
  if(hex.length < 2){
    hex = "0" + hex;
  }
  return hex;
}