function colors() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;
  let alpha = document.getElementById("alpha").value;

  document.body.style.backgroundColor = `rgb(${red},${green},${blue},${alpha})`;

  document.getElementById(
    "output"
  ).innerHTML = `rgb(${red},${green},${blue},${alpha})`;
}
