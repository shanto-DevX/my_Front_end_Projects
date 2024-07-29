const btns = document.querySelector(".pricing__time");
const month = document.querySelector("#month");
const years = document.querySelector("#year");

const p1 = document.querySelector("#price-1");
const p2 = document.querySelector("#price-2");
const p3 = document.querySelector("#price-3");
let count = 0;

btns.addEventListener("click", () => {
  if (count == 0) {
    years.style.background = "#ff845d";
    years.style.color = "#fff";

    month.style.background = "#f4f6f6";
    month.style.color = "#072032";
    count = 1;
  } else {
    month.style.background = "#ff845d";
    month.style.color = "#fff";
    years.style.background = "#f4f6f6";
    years.style.color = "#072032";
    count = 0;
  }
});

month.addEventListener("click", () => {
  p1.innerHTML = "$19.00";
  p2.innerHTML = "$29.00";
  p3.innerHTML = "$39.00";
});
years.addEventListener("click", () => {
  p1.innerHTML = "$199.00";
  p2.innerHTML = "$299.00";
  p3.innerHTML = "$399.00";
});

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //   cursorOutline.style.left = `${posX}px`;
  //   cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

$(document).ready(function () {
  $("a").click(function () {
    $("[href = #]");
    return false;
  });
});
