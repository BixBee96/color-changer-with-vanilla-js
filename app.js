// Create Variable

const displayHeader = document.querySelector(".display-Header");
const displayButton = document.querySelector(".display-Btn");
const displayBoxText = document.querySelector(".randomColorBoxText");
const displayBox = document.querySelector(".randomColorBox");

//Create EventListener

displayButton.addEventListener("click", ranColorGenerator);

//Create Logical Function
function ranColorGenerator() {
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  console.log(color);

  displayBox.style.backgroundColor = color;
  displayBoxText.style.backgroundColor = color;
  displayButton.style.backgroundColor = color;
  displayBoxText.innerHTML = color;
}
