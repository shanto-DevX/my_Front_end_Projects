const clocks = document.getElementById("clock");
const dates = document.getElementById("dates");

setInterval(function () {
  const clock = new Date();
  clocks.innerHTML = clock.toLocaleTimeString();

  const dateIs = new Date();
  dates.innerHTML = dateIs.getFullYear();
}, 10);
