let countVoteBtn = document.getElementById("countVote");

countVoteBtn.addEventListener("click", () => {
  let totalVoteIs = parseInt(document.getElementById("totalVote").value);
  let yesVoteIs = parseFloat(document.getElementById("yesVote").value);
  let noVoteIs = parseFloat(document.getElementById("noVote").value);
  let notVoteIs = parseFloat(document.getElementById("notVote").value);

  let yesVoteMsg = document.getElementById("total__yes");
  let noVoteMsg = document.getElementById("total__No");
  let notVoteMsg = document.getElementById("total__Not");

  let yesMsg = Math.round((yesVoteIs / 100) * totalVoteIs);
  let noMsg = Math.round((noVoteIs / 100) * totalVoteIs);
  let notMsg = Math.round((notVoteIs / 100) * totalVoteIs);

  let calculateTotalIs = yesMsg + noMsg + notMsg;
  let diff = totalVoteIs - calculateTotalIs;

  if (diff !== 0) {
    if (Math.abs(diff) > 0) {
      yesMsg += diff;
    }
  }

  yesVoteMsg.innerHTML = yesMsg;
  noVoteMsg.innerHTML = noMsg;
  notVoteMsg.innerHTML = notMsg;

  let pieIs = document.getElementById("pie-chart");
  new Chart(pieIs, {
    type: "pie",
    data: {
      labels: ["Yes", "No", "NoT Voted"],
      datasets: [
        {
          backgroundColor: ["#37cc8d", "red", "rgb(95, 95, 0)"],
          data: [
            parseInt(yesVoteMsg.innerHTML),
            parseInt(noVoteMsg.innerHTML),
            parseInt(notVoteMsg.innerHTML),
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "pie Chart for Vote count",
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
