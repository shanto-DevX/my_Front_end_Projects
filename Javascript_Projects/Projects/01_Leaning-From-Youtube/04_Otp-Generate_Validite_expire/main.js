let generatedOTP;
const otpExpireElem = document.getElementById("otp-expiers-id");

function expireOTP() {
  let interval = 1000;
  let totlaTime = 15000;
  let slice = totlaTime / interval;

  const intervalId = setInterval(function () {
    otpExpireElem.innerText = `OTP Will Expire in ${slice} Seconds`;
    slice = slice - 1;
  }, interval);

  setTimeout(function () {
    otpExpireElem.innerText = `OTP  Expire`;
    clearInterval(intervalId);
    generateOTP();
  }, totlaTime);
}

function tackleOTPBoxes() {
  const boxed = document.getElementById("otp-box-list-id");
  boxed.addEventListener("input", function (e) {
    const target = e.target;
    const value = target.value;

    if (isNaN(value)) {
      target.value = "";
      return;
    }

    const nextElement = target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }

    validateOTP();
  });
}

function generateOTP() {
  generatedOTP = Math.floor(1000 + Math.random() * 9000);
  const otpElem = document.getElementById("generated-otp-id");
  otpElem.innerText = `Your OTP : ${generatedOTP}`;

  expireOTP();
}

function validateOTP() {
  let typedNumber = "";
  const boxListElem = document.getElementById("otp-box-list-id");
  [...boxListElem.children].forEach((elem) => {
    typedNumber = typedNumber + elem.value;
  });

  const result = generatedOTP === parseInt(typedNumber, 10);
  const resultElem = document.getElementById("result-id");
  if (result) {
    resultElem.innerText = "OTP has Been Validate Succesfully";

    resultElem.classList.remove("fail");
    resultElem.classList.add("success");
  } else {
    resultElem.innerText = "OTP is Invalid";
    resultElem.classList.remove("success");
    resultElem.classList.add("fail");
  }
}

function init() {
  console.log("HGEllo JS");
  tackleOTPBoxes();
  setTimeout(generateOTP, 2000);
}

init();

/*
 * array like Object :- html Collection Is Array Like Object
 */
