const bottom = document.querySelector(".bottom");
const main = document.querySelector(".top");
const bumper = document.querySelector(".bumper");
const color = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const bumpercolor = document.querySelector(".bumpercolor");
const customize = document.querySelector(".edit");
const closeBtn = document.querySelector(".close");
const editBtn = document.querySelector(".customizebtn button");
const pauseBtn = document.querySelector(".Pausebtn button");
const car = document.getElementById("car");

function carColor() {
  main.style.background = color.value;
}
function carColor2() {
  bottom.style.background = color2.value;
}
function bumperColor() {
  bumper.style.background = bumpercolor.value;
}

function closetab() {
  customize.style.transform = "translateX(600px)";
}

function opentab() {
  customize.style.transform = "translateX(0)";
  car.style.animationPlayState = "paused";
}

function Animation() {
  if (car.style.animationPlayState == "paused") {
    car.style.animationPlayState = "running";
    pauseBtn.textContent = "Pause";
  } else {
    car.style.animationPlayState = "paused";
    pauseBtn.textContent = "Play ";
  }
}

color.addEventListener("input", carColor);
color2.addEventListener("input", carColor2);
bumpercolor.addEventListener("input", bumperColor);
closeBtn.addEventListener("click", closetab);
editBtn.addEventListener("click", opentab);
pauseBtn.addEventListener("click", Animation);
