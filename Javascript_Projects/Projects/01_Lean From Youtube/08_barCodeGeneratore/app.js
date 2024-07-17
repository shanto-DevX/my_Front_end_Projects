let input = document.getElementById("input");
let btn = document.getElementById("btn-barcode-generator");

btn.addEventListener("click", () => {
  JsBarcode("#barcode", input.value, {
    format: "code128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#0aa",
    width: 4,
    height: 40,
  });
});

window.onload = (event) => {
  input.value = "";
};
