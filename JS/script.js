var menuToggler = document.querySelector(".menu-toggler");
var menuClose = document.querySelector(".menu-close");
var navMenu = document.querySelector(".navbar-menu");
var darkness = document.querySelector(".darkness");

menuToggler.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
  menuToggler.style.display = "none";
  menuClose.style.display = "block";
  darkness.style.display = "block";
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
  menuToggler.style.display = "block";
  menuClose.style.display = "none";
  darkness.style.display = "none";
});

// Modals
var backModal = document.getElementById("back-modal");
var backModalOpen = document.querySelector(".back-button");
var closeModal = document.querySelector(".close-modal");

backModalOpen.onclick = () => {
  backModal.style.display = "block";
};

closeModal.onclick = () => {
  backModal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == backModal) {
    backModal.style.display = "none";
  }
};
