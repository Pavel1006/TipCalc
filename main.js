function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
function TipAmoung() {
  let totalbill = document.getElementById("Total.bill").value;
  let myRate = document.getElementById("myService").value;
  let people = document.getElementById("nrPeople").value;
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

console.log(TipAmoung());
