let buttons = document.querySelectorAll(".btn");

let text = document.querySelector(".text-area");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      e.target.id === "gray" ||
      e.target.id === "purple" ||
      e.target.id === "pink" ||
      e.target.id === "yellow" ||
      e.target.id === "orange"
    ) {
      text.style.color = e.target.id;
    }
  });
});
