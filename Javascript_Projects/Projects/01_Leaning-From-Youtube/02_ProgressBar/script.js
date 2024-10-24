function startLoading() {
  const progress = document.querySelector(".progress");
  const progresstxt = document.querySelector(".progress-txt");
  let percent = 0;
  const interval = setInterval(updateprogress, 50);

  function updateprogress() {
    if (percent >= 100) {
      clearInterval(interval);
    } else {
      percent++;
      progress.style.width = percent + "%";
      progresstxt.textContent = percent + "%";
    }
  }
}
