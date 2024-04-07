
document.getElementById('calcWpEst').addEventListener('click', function() {
  var height = parseFloat(document.getElementById('height').value);
  var width1 = parseFloat(document.getElementById('width1').value);
  var width2 = parseFloat(document.getElementById('width2').value);
  var width3 = parseFloat(document.getElementById('width3').value);
  var width4 = parseFloat(document.getElementById('width4').value);
  var rollWidth = parseFloat(document.getElementById('rollWidth').value);
  var rollHeight = parseFloat(document.getElementById('rollHeight').value);
  var rollPrice = parseFloat(document.getElementById('rollPrice').value);

  var totalArea = height * (width1 + width2 + width3 + width4);
  var rollArea = rollWidth * rollHeight;
  var rollsNeeded = Math.ceil(totalArea / rollArea);
  var totalPrice = rollsNeeded * rollPrice;

  document.getElementById('atbilde').innerText = 'Nepieciešamie ruļļi: ' + rollsNeeded + ' Kopējā cena: ' + totalPrice.toFixed(2) + ' EUR';
});




function updateTime() {
  const time = Date.now();
  const date = new Date(time);
  const currentDate = date.toString();
  document.getElementById("currentDate").innerHTML = "" + currentDate;
}
setInterval(updateTime, 1000);
updateTime();