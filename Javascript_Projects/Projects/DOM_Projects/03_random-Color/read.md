# Random Color Genarator
***

**Project Info in Details**

1. প্রথমে একটা ফাংশন নিয়ে সেইটার মধ্যে
    1. প্রথমে ভেরিএবলঃ randomNumber এর মধ্যে নাম্বার জেনারেট করা হলো
        * Math.random() 
        * Math.random() * 16777215
        * Math.floor(Math.random() * 16777215)
    2. এবার randomNumber কে Hex এ রূপান্তর করা হলো
        * "#" + randomNumber.toString(16)
        * 


``` javascript

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

```