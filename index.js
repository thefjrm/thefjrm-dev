let themeDots = document.getElementsByClassName("theme-dot");
let theme = localStorage.getItem("theme");

if (theme === null) {
  setTheme("light");
} else {
  setTheme(theme);
}

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "css/style.css";
  } else if (mode === "blue") {
    document.getElementById("theme-style").href = "css/blue.css";
  } else if (mode === "green") {
    document.getElementById("theme-style").href = "css/green.css";
  } else if (mode === "purple") {
    document.getElementById("theme-style").href = "css/purple.css";
  }
  localStorage.setItem("theme", mode);
}
