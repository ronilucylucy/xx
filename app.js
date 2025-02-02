///selectors
const sliderBtn = document.getElementById("sliderBtn");
const body = document.querySelector(".body");

///state
const theme = localStorage.getItem("theme");

///on mount
theme && document.body.classList.add(theme);

///handlers
const handleThemeToggle = () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    localStorage.removeItem("theme");
  }
};
///events

sliderBtn.addEventListener("click", handleThemeToggle);
