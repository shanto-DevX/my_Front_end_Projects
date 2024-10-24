# project releted DOM

## Project Link

[click here]()

# solution code

## project 1

```html
<div class="main">
  <h1>Color scheme switcher</h1>
  <span class="button" id="gray"></span>
  <span class="button" id="white"></span>
  <span class="button" id="blue"></span>
  <span class="button" id="yellow"></span>
  <span class="button" id="purple"></span>
  <h2>
    Try clicking on one of the colors above
    <span> to change the background color of the page </span>
  </h2>
</div>
```

```javascript
const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);

    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
