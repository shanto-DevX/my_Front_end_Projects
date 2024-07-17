let buttons = document.querySelectorAll(".btn");

let bodys = document.querySelector("body");
let selectText = document.querySelector("h1");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "gray") {
      bodys.style.backgroundColor = e.target.id;
      selectText.style.color = "white";
    }
    if (e.target.id === "purple") {
      bodys.style.backgroundColor = e.target.id;
      selectText.style.color = "white";
    }
    if (e.target.id === "pink") {
      bodys.style.backgroundColor = e.target.id;
      selectText.style.color = "purple";
    }
    if (e.target.id === "yellow") {
      bodys.style.backgroundColor = e.target.id;
      selectText.style.color = "gray";
    }
    if (e.target.id === "orange") {
      bodys.style.backgroundColor = e.target.id;
      selectText.style.color = "gray";
    }
  });
});
