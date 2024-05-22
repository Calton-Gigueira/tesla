import { menuButtons } from "./menu-items.js";

const closeButton = document.querySelector(".close-button");
const menuButton = document.querySelector(".menu-button");
const hiddenMenu = document.querySelector(".hidden-menu");

menuButton.addEventListener('click', () => {
  hiddenMenu.style.width = '100%';
  closeButton.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  hiddenMenu.style.width = "0";
  closeButton.style.display = "none";
});


const menu = document.querySelector("#menu-items");

function renderMenuItems(menuButtons) {
  let html;

  menuButtons.map((el) => {
    html = `
      <button>
        <span class="material-symbols-outlined ic"
          style="display: ${
            el.name === "United States" || el.name === "Account"
              ? "block"
              : "none"
          }"
        >
          ${el.icon}
        </span>
        <span class="name ${el.name === "United States" ? "us" : ""} 
          ${el.name === "Account" ? "acc" : ""}
        ">${el.name} </span>
        <span class="material-symbols-outlined arrow"
          style="display: ${
            el.name === "Shop" || el.name === "Support" || el.name === "Account"
              ? "none"
              : ""
          }"
        >
          ${el.arrow}
        </span>
      </button>
    `;

    menu.innerHTML += html;
  });
}

renderMenuItems(menuButtons);