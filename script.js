
var textValue;
var backUpValue;
function textA() {
  clearInterval(textValue);
 clearInterval(backUpValue);
  var box1 = document.getElementById("first").value;


 textValue =  setInterval(function(){ 
  
var firstbox = document.getElementById("first").value;

var enteredChar = firstbox.charAt(0);
var box2 = document.getElementById('second').value;
var char = box2 + enteredChar;
 
document.getElementById('second').value = char;
var finalResult = firstbox.slice(1);
document.getElementById('first').value = finalResult;

}, 300);
}

function textB() {
clearInterval(textValue);
clearInterval(backUpValue);
  var box2 = document.getElementById("second").value;

backUpValue =  setInterval(function(){ 
  
var secondbox1 = document.getElementById("second").value;

var passchar = secondbox1.charAt(secondbox1.length-1);

var box1 = document.getElementById('first').value;
var char = passchar + box1;
document.getElementById('first').value = char;
var finalResult = secondbox1.slice(0,-1);
document.getElementById('second').value = finalResult;

}, 300);
}

function pauseText() {
 clearInterval(textValue);
 clearInterval(backUpValue);
}