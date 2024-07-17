const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};  

let intervalId;

const startChangingCOlor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 3000);
  }

  function changeColor() {
    document.body.style.backgroundColor = randomColor();
    let showColorCode = document.querySelector(".show-color-code");
    showColorCode.innerText = randomColor();
  }
};

const stopChangingCOlor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingCOlor);
document.querySelector("#end").addEventListener("click", stopChangingCOlor);
