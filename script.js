const link = document.querySelector("#palette");
const button = document.querySelector("#theme");
const link2 = document.querySelector("#type");
const button2 = document.querySelector("#reading");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
});

button2.addEventListener("click", function () {
  const type = link.getAttribute("href") === "reading.css";
  link.setAttribute("href", type ? "light.css" : "reading.css");
  link2.setAttribute("href", type ? "light.css" : "reading.css");
});
