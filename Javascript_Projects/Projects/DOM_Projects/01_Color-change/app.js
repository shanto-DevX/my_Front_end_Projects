/* const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);

    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
 */

// ================================

/* const buttons = document.querySelectorAll(".button");
const bodys = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "gray":
        bodys.style.backgroundColor = e.target.id;
        break;
      case "white":
        bodys.style.backgroundColor = e.target.id;
        break;
      case "blue":
        bodys.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        bodys.style.backgroundColor = e.target.id;
        break;
      case "purple":
        bodys.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  });
}); */

/* 

   if (e.target.id === "gray") {
      bodys.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      bodys.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      bodys.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      bodys.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      bodys.style.backgroundColor = e.target.id;
    } 

buttons.forEach(function (button) {
  button.addEventListener(function (e) {
    console.log(e);
    console.log(e.target);
  });
});

*/

const buttons = document.querySelectorAll(".button");
const bodys = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "gray") {
      bodys.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      bodys.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      bodys.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      bodys.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      bodys.style.backgroundColor = e.target.id;
    }
  });
});
