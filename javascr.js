let totalbill = document.getElementById("Total.bill").value;
let myRate = document.getElementById("myService").value;
let people = document.getElementById("nrPeople").value;
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
document.getElementById("button").onclick = function TipAmoung() {
  if (people === 1) {
    let tip = (totalbill / people) * myRate;
    return " TIP AMOUNG $" + financial(tip);
  } else {
    let tip = (totalbill / people) * myRate;
    return "TIP AMOUNG $" + financial(tip) + " each";
  }
};
document.getElementById("results") = TipAmoung();
