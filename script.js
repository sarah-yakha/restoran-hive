import "./style.css";
import img from "./img/sadik.jpg";
import { getAbout } from "./about";
import { MenuItem } from "./menu";
import { getMenu } from "./menu";
import { getContact } from "./contact";

let body = document.querySelector("body");
body.classList.add("container");
body.className = "container";
const header = document.createElement("header");
header.classList.add("header");
body.append(header);
const h1 = document.createElement("h1");
h1.textContent = "Добро пожаловать в наш ресторан!";
h1.classList.add("h1");
header.append(h1);

const firstDiv = document.createElement("div");
firstDiv.className = "firstDiv";
header.append(firstDiv);
const aboutBtn = document.createElement("button");
aboutBtn.className = "aboutBtn";

aboutBtn.textContent = "О нас";
aboutBtn.classList.add("about");
const menuBtn = document.createElement("button");
menuBtn.className = "menuBtn";
menuBtn.textContent = "Меню";

const contactBtn = document.createElement("button");
contactBtn.className = "contactBtn";
contactBtn.textContent = "Контакты";
const resetBtn = document.createElement("button");
resetBtn.classList.add("close-button");
resetBtn.textContent = "Закрыть";
firstDiv.append(aboutBtn, menuBtn, contactBtn, resetBtn);

resetBtn.addEventListener("click", () => {
  location.reload();
});

const pageObj = {
  aboutBtn: getAbout,
  menuBtn: getMenu,
  contactBtn: getContact,
};

const getBtnArray = [
  { btn: aboutBtn, page: "aboutBtn" },
  { btn: menuBtn, page: "menuBtn" },
  { btn: contactBtn, page: "contactBtn" },
];

function renderPage(page) {
  if (pageObj[page]) {
    body.textContent = "";
    body.append(header);
    body.append(pageObj[page]());
  }
}

getBtnArray.forEach(({ btn, page }) => {
  btn.addEventListener("click", () => {
    renderPage(page);
  });
});
