const closeButton = document.querySelector(".close-button");
const menuButton = document.querySelector(".menu-button");
const hiddenMenu = document.querySelector(".hidden-menu");

menuButton.addEventListener('click', () => {
  hiddenMenu.style.width = '100%';
});

closeButton.addEventListener('click', () => {
  hiddenMenu.style.width = "0";
});
