const sliderBtn = document.getElementById("sliderBtn");
const body = document.querySelector(".body");

sliderBtn.onclick = function () {
  document.body.classList.toggle("dark-theme");
};
