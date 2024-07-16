let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerActive = document.querySelector(".hamburger-element");
  const hamburgerClose = document.querySelector(".mobile-list");
  const xIcon = document.querySelector(".xIcon");
  hamburgerClose.style.display = "none";
  hamburgerActive.addEventListener("click", function () {
    hamburgerClose.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  xIcon.addEventListener("click", function () {
    hamburgerClose.style.display = "none";
    document.body.style.overflow = "unset";
  });
  // ---------------add-cars-----------------
  const addCars = document.querySelector(".add-cars");
  const searchCars = document.querySelector(".search-cars");
  const addCarsTexts = document.querySelector(".add-cars-texts");
  const searchInputs = document.querySelector(".input-elements");
  const heightContainer = document.querySelector(".filter-elements");
  addCarsTexts.style.display = "none";
  searchCars.addEventListener("click", function () {
    if (userButton.style.display === "flex") {
      addCarsTexts.style.display = "none";
      searchInputs.style.display = "flex";
    } else {
      addCarsTexts.style.display = "none";
      searchInputs.style.display = "flex";
    }
    searchCars.style.setProperty("--searchCars", "100%");
    addCars.style.setProperty("--addCars", "0");
    if (innerWidth < 1024) {
      heightContainer.style.height = "320px";
    }
    if (innerWidth >= 1024) {
      heightContainer.style.height = "200px";
    }
  });
  addCars.addEventListener("click", function () {
    if (userButton.style.display === "flex") {
      addCarsTexts.style.display = "none";
      searchInputs.style.display = "none";
    } else {
      addCarsTexts.style.display = "flex";
      searchInputs.style.display = "none";
    }
    addCars.style.setProperty("--addCars", "100%");
    searchCars.style.setProperty("--searchCars", "0");
    if (innerWidth < 1024) {
      heightContainer.style.height = "220px";
    }
    if (innerWidth >= 1024) {
      heightContainer.style.height = "200px";
    }
  });
});
const userProfileDesktop = document.querySelector(".user-profile-desktop");
