/* const formSelect = document.querySelector("form");

formSelect.addEventListener("submit", (elements) => {
  elements.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Plese Enter Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Plese Enter Valid Weight ${weight}`;
  } else {
    const BMI_Calculate = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<h2>${BMI_Calculate}</h2>`;
  }
});
 */

const form = document.querySelector("form");

form.addEventListener("submit", (eleemnt) => {
  eleemnt.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter VAlid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter Valid Weight ${weight}`;
  } else {
    const BMI_Calculator = (weight / ((height * height) / 10000)).toFixed(2);
    let rs = (results.innerHTML = `<h1>${BMI_Calculator}</h1>`);

    if (BMI_Calculator < 18.6) {
      results.innerHTML = `${rs}<h3>Under Weight = Less then 18.6</h3>`;
    } else if (BMI_Calculator > 18.6 && BMI_Calculator < 24.9) {
      results.innerHTML = `${rs}<h3>Normal Range = 18.6 and 24.9</h3>`;
    } else {
      results.innerHTML = `${rs}<h3>Overweight = Grater Then 24.9</h3>`;
    }
  }
});
