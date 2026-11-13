const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
});
