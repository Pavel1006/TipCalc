function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
function TipAmoung() {
  let totalbill = document.getElementById("total_bill").value;
  let myRate = document.getElementById("myService").value;
  let people = document.getElementById("nrPeople").value;
  if (
    people === "" ||
    people === 0 ||
    totalbill === "" ||
    totalbill === 0 ||
    myRate === 0
  ) {
    return alert("enter the value pls");
  } else {
    if (people === 1) {
      let tip = (totalbill / people) * myRate;
      return (document.getElementById("results").innerHTML =
        " TIP AMOUNG $" + financial(tip));
    } else {
      let tip = (totalbill / people) * myRate;
      return (document.getElementById("results").innerHTML =
        "TIP AMOUNG $" + financial(tip) + " each");
    }
  }
}
document.getElementById("button").onclick = TipAmoung;
