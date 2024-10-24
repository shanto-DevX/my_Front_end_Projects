const getColor = () => {
  // hex Code
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomHax = "#" + randomNumber.toString(16);
  //   console.log(randomNumber);
  //   console.log(randomHax);

  // * ->  add color in body
  document.body.style.backgroundColor = randomHax;
  // * ->  add color Code in html
  document.getElementById("Color-Code").innerText = randomHax;

  // * -> Copy in clipboard
  navigator.clipboard.writeText(`${randomHax}`);
};

//* Event call -> Work on CLikc
document.getElementById("btn").addEventListener("click", getColor);

//* initial Call --> Work on pageLoad
getColor();
