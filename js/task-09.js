function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnColor = document.querySelector(".change-color");
const colorHex = document.querySelector(".color")
const bg = document.querySelector("body")
 

btnColor.addEventListener("click", () => {
  colorHex.textContent = getRandomHexColor();
  bg.style.backgroundColor = colorHex.textContent;
});

