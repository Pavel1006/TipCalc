let totalbill = document.getElementById("Total.bill").value;
let myRate = document.getElementById("myService").value;
let people = document.getElementById("nrPeople").value;
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
function TipAmoung() {
  if (
    people === "" ||
    people === 0 ||
    totalbill === "" ||
    totalbill === 0 ||
    myRate === "" ||
    myRate === 0
  ) {
    alert("enter the value pls");
  } else {
    if (people === 1) {
      let tip = (totalbill / people) * myRate;
      document.getElementById("results").innerHTML =
        " TIP AMOUNG $" + financial(tip);
    } else {
      let tip = (totalbill / people) * myRate;
      document.getElementById("results").innerHTML =
        "TIP AMOUNG $" + financial(tip) + " each";
    }
  }
}
document.getElementById("button").onclick = function calculate() {
  TipAmoung();
};
