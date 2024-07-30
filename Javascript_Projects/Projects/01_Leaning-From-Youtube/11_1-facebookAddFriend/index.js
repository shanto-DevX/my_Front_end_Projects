/* const istatus = document.querySelector("p");
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");

addBtn.addEventListener("click", function () {
  istatus.innerHTML = "Send Friend Request";
  istatus.style.color = "green";
});

removeBtn.addEventListener("click", function () {
  istatus.innerHTML = "Remove Friend Request";
  istatus.style.color = "red";
}); */

// ----------------------------

const istatus = document.querySelector("p");
const addBtn = document.querySelector("#add");
let check = 0;

addBtn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Send Friend Request";

    addBtn.innerHTML = "Remove Friend";
    addBtn.style.background = "#ddd";
    addBtn.style.color = "#201f25";

    istatus.style.color = "green";
    check = 1;
  } else {
    istatus.innerHTML = "Remove Friend Request";
    addBtn.innerHTML = "Add Friend";
    addBtn.style.background = "#6543ef";
    addBtn.style.color = "#fff";

    istatus.style.color = "red";
    check = 0;
  }
});
