//store images in array
const bulbImages = ["img/lightbulb-off.png", "img/lightbulb-on.png"];

//get image element
const img = document.getElementById("images");

//get paragraph element
const para = document.getElementById("description");

//toggle
let toggle = false;

img.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    img.src = bulbImages[1];
    para.innerHTML = "ON";
  } else {
    img.src = bulbImages[0];
    para.innerHTML = "OFF";
  }
});
