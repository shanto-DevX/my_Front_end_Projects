let notification = document.querySelector(".notifications");
let success = document.getElementById("success");
let error = document.getElementById("error");
let warning = document.getElementById("warning");
let info = document.getElementById("info");

function createToast(typo, icon, title, text) {
  let newToast = document.createElement("div");
  newToast.innerHTML = `
          <div class="toast ${typo}">
            <i class="${icon}"></i>
            <div class="content">
              <div class="title">${title}</div>
              <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
          </div>;`;
  notification.appendChild(newToast);
  newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
}

success.onclick = function () {
  let typo = "success";
  let icon = "fa-solid fa-circle-check";
  let title = "Success";
  let text = "This is a suceess Toast";

  createToast(typo, icon, title, text);
};

error.onclick = function () {
  let typo = "error";
  let icon = "fa-solid fa-circle-exclamation";
  let title = "Error";
  let text = "This is a Error Toast";

  createToast(typo, icon, title, text);
};

warning.onclick = function () {
  let typo = "warning";
  let icon = "fa-solid fa-triangle-exclamation";
  let title = "Warning";
  let text = "This is a warning Toast";

  createToast(typo, icon, title, text);
};

info.onclick = function () {
  let typo = "info";
  let icon = "fa-solid fa-circle-info";
  let title = "Info";
  let text = "This is a Info Toast";

  createToast(typo, icon, title, text);
};
