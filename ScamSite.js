function Scam()
{
  var x = document.getElementById("input").value;
  var y = document.getElementById("input1").value;
  var z = document.getElementById("input2").value;
  var d = document.getElementById("input3").value;
  x = "<h1>Is The Info Below Correct</h1><hr>" + "First Name: " + x + "<br>Last Name: "
  + y + "<br>Age: " + z + "<br>Email: " + d + "<hr>" +   "<input type = 'button' value = 'yes' onclick = 'scam()'>"
  +  "<input type = 'button' value = 'no' onclick = 'noscam()'>";
  document.getElementById("output").innerHTML = x;
}
function scam()
{
  alert("You have been scammed!!!")
}
function noscam()
{
  alert("Please enter your information in again")
}
