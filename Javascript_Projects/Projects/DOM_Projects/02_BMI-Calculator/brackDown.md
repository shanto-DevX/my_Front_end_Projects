# BMI Calculator

- প্রথমে form সিলেক্ট করতে হবে, কারন form এর মধ্যে সব ডাটা আছে
- এবার form.addEventListener দিয়ে সাবমিট বাটনকে ধরতে হবে
- এবারঃ height / weight / results কে সেলেক্ট করতে হবে querySelector দিয়ে
- এবার height / weight এর কন্ডিশন চেক করবে এবং else এর মধ্যে BMI কেল্কুলেক্ট করবে এবং results.innerHTML এ সেট করবে

## HTML COde

```
    <div class="container">
      <h1>BMI Calculator</h1>
      <form action="#">
        <p>
          <label for="#">Height in CM:</label>
          <input type="text" name="#" id="height" />
        </p>
        <p>
          <label for="#">Weight in KG:</label>
          <input type="text" name="#" id="weight" />
        </p>
        <button>Calculate</button>
        <div id="result"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less then 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Grater Then 24.9</p>
        </div>
      </form>
    </div>

```

## Javascript Code

```Javascript

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a Valid Weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${BMI}</span>`;
  }
});

```
