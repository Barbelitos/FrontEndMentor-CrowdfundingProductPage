// Navigation Menu
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

//Bookmark
var bookmark = document.querySelector(".project-bookmark");
var bookmarkCircle = document.getElementById("svg-circle");
var bookmarkPath = document.getElementById("svg-path");

bookmark.onclick = () => {
  bookmarkCircle.classList.toggle("bookmark-circle");
  bookmarkPath.classList.toggle("bookmark-path");
};

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

var enterFirst = document.getElementById("enter-first");
var enterSecond = document.getElementById("enter-second");
var enterThird = document.getElementById("enter-third");

var firstPledge = document.getElementById("first-pledge");
var secondPledge = document.getElementById("second-pledge");
var thirdPledge = document.getElementById("third-pledge");

// Radio Buttons
var radioCheck1 = document.getElementById("option-1");
var radioCheck2 = document.getElementById("option-2");
var radioCheck3 = document.getElementById("option-3");

// Click radio buttons
radioCheck1.onclick = () => {
  firstPledge.classList.add("highlight");
  enterFirst.classList.add("show-pledge");
};

radioCheck2.onclick = () => {
  secondPledge.classList.add("highlight");
  enterSecond.classList.add("show-pledge");
};

radioCheck3.onclick = () => {
  thirdPledge.classList.add("highlight");
  enterThird.classList.add("show-pledge");
};

// Click outside the pledge cards
document.addEventListener("click", (event) => {
  var firstCard = firstPledge.contains(event.target);
  var secondCard = secondPledge.contains(event.target);
  var thirdCard = thirdPledge.contains(event.target);
  if (!firstCard) {
    firstPledge.classList.remove("highlight");
    enterFirst.classList.remove("show-pledge");
    radioCheck1.checked = false;
  }

  if (!secondCard) {
    secondPledge.classList.remove("highlight");
    enterSecond.classList.remove("show-pledge");
    radioCheck2.checked = false;
  }

  if (!thirdCard) {
    thirdPledge.classList.remove("highlight");
    enterThird.classList.remove("show-pledge");
    radioCheck3.checked = false;
  }
});
