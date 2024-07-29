let card = document.querySelector(".card");
let icon = document.querySelector("i");

/* card.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = 0.9;

  setTimeout(function () {
    icon.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);

}); */

card.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = 0.9;

  setTimeout(function () {
    icon.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    icon.style.transform = "translate(-50%, -50%) scale(0.9)";
  }, 2000);
});
