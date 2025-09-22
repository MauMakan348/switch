//togle box//
const themetoggle = document.getElementById("theme-toggle");

function toggletheme() {
  const currenttheme = document.documentElement.getAttribute("data-theme");
  if (currenttheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themetoggle.checked = true;
} else {
  document.documentElement.setAttribute("data-theme", "light");
  themetoggle.checked = false;
}
