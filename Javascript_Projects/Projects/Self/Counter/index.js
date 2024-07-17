const counter = document.getElementById("counter");
const showText = document.getElementById("show-Text");
const btnIncreace = document.getElementById("btn-count-incrace");
const btnDecreace = document.getElementById("btn-count-decrace");
const countReset = document.getElementById("counter-Reset");

const textInput = document.getElementById("input-text");
const textSubmit = document.getElementById("Submit-text");
const textReset = document.getElementById("text-Reset");

let counters = 0;
// Counter Section
btnIncreace.addEventListener("click", () => {
  /*   counter.innerHTML = `${counters++}`;
  console.log("its work"); */

  counters++;
  counter.innerHTML = `${counters}`;
  console.log("Incremented");

  if (counters > 100) {
    counter = 0;
  }

  if (counters > 0 && counters <= 33) {
    document.body.querySelector(".card").style.backgroundColor = "teal";
  } else if (counters >= 33 && counters <= 66) {
    document.body.querySelector(".card").style.backgroundColor = "green";
  } else if (counters >= 67 && counters <= 99) {
    document.body.querySelector(".card").style.backgroundColor = "blue";
  } else if (counters === 100) {
    document.body.querySelector(".card").style.backgroundColor = "purple";
  }

  // updateBackgroundColor(counters);
});

btnDecreace.addEventListener("click", () => {
  /*   if (counters < 0 || counters <= -1 || counters <= 1) {
    counter.innerHTML = `0`;
    console.log("its work");
  } else {
    counter.innerHTML = `${counters--}`;
    console.log("its work");
  } */

  if (counters > 0) {
    counters--;
    counter.innerHTML = `${counters}`;
    console.log("Decremented");
  }

  if (counters > 0 && counters <= 33) {
    document.body.querySelector(".card").style.backgroundColor = "teal";
  } else if (counters >= 34 && counters <= 66) {
    document.body.querySelector(".card").style.backgroundColor = "green";
  } else if (counters >= 67 && counters <= 99) {
    document.body.querySelector(".card").style.backgroundColor = "blue";
  } else {
    document.body.querySelector(".card").style.backgroundColor = "purple";
  }

  // updateBackgroundColor(counters);
});

countReset.addEventListener("click", () => {
  counters = 0;
  counter.innerHTML = `${counters}`;

  // updateBackgroundColor(counters);
});

textSubmit.addEventListener("click", () => {
  showText.innerHTML = `${textInput.value}`;
  console.log("Its work");
});

textReset.addEventListener("click", () => {
  showText.innerHTML = `Write your Messgae`;
  console.log("Its work");
});

/* 

function  (count) {
  if (count > 0 && count <= 33) {
    document.body.querySelector(".card").style.backgroundColor = "teal";
  } else if (count >= 34 && count <= 66) {
    document.body.querySelector(".card").style.backgroundColor = "green";
  } else if (count >= 67 && count <= 99) {
    document.body.querySelector(".card").style.backgroundColor = "blue";
  } else {
    document.body.querySelector(".card").style.backgroundColor = "purple";
  }
}

*/
