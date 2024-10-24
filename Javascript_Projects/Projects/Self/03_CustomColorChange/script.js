function color() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;
  let alpha = document.getElementById("alpha").value;
  let output = document.getElementById("output");

  document.body.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;

  output.innerHTML = `rgba(${red},${green},${blue},${alpha})`;
}
