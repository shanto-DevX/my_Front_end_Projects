let amountIs = document.getElementById("amount");
let parcentIs = document.getElementById("parcent");
let ResultBTN = document.getElementById("ResultBTN");
let parcentOFF = document.getElementById("parcentOFF");
let afterParcent = document.getElementById("afterParcent");

function Calculate() {
  let totalResult = (amountIs.value * parcentIs.value) / 100;

  parcentOFF.innerHTML = `Your Total Off : ${parseFloat(totalResult).toFixed(
    2
  )} taka`;

  afterParcent.innerHTML = `Total after Parcentage : ${parseFloat(
    amountIs.value - totalResult
  ).toFixed(2)} taka`;
}

ResultBTN.addEventListener("click", Calculate);

amountIs.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    // Call the calculate function
    Calculate();
  }
});
parcentIs.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    // Call the calculate function
    Calculate();
  }
});

/* 
let amountIs = document.getElementById("amount");
let parcentIs = document.getElementById("parcent");
let ResultBTN = document.getElementById("ResultBTN");
let parcentOFF = document.getElementById("parcentOFF");
let afterParcent = document.getElementById("afterParcent");




ResultBTN.addEventListener("click", () => {
  let totalResult = (amountIs.value * parcentIs.value) / 100;

  parcentOFF.innerHTML = `Your Total Off : ${parseFloat(totalResult).toFixed(
    2
  )} taka`;
  afterParcent.innerHTML = `Total after Parcentage : ${
    amountIs.value - totalResult
  } taka`;
});


*/

/* let amountIs = document.getElementById("amount");
let parcentIs = document.getElementById("parcent");
let ResultBTN = document.getElementById("ResultBTN");
let parcentOFF = document.getElementById("parcentOFF");
let afterParcent = document.getElementById("afterParcent");

ResultBTN.addEventListener("click", () => {
  let amount = parseFloat(amountIs.value);
  let parecent = parseFloat(parcentIs.value);
  let totalResult = (amount * parecent) / 100;

  parcentOFF.innerHTML = `Your Total Off : ${totalResult.toFixed(2)}`;
  afterParcent.innerHTML = `Total after Parcentage : ${amount - totalResult}`;
}); */
