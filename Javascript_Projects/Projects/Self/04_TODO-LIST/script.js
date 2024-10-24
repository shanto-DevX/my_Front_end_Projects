let MainList = document.getElementById("list");
let check = document.getElementById("check");
let lisTtitle = document.getElementById("title");

MainList.addEventListener("click", () => {
  check.checked = !check.checked;
});
