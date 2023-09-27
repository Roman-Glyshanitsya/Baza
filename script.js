const icon = document.querySelector("[dark-theme]");
const text = document.querySelector(".dark-theme__text");

icon.onclick = function () {
  document.body.classList.toggle("dark__theme__mode");

  if (document.body.classList.contains("dark__theme__mode")) {
    text.textContent = "Lights On";
  } else {
    text.textContent = "Lights Off";
  }
};
