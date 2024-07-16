document.addEventListener("DOMContentLoaded", function () {
  function getCarIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  const carId = getCarIdFromUrl();
  if (carId) {
    updateCarDetails(carId, initializeCarousel);
  } else {
    console.log("No car ID found in the URL.");
  }
});

function initializeCarousel() {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  dotsContainer.innerHTML = "";

  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });

  // Ensure the first item is shown by default if there are items
  if (items.length > 0) {
    showItem(0);
  }
}

document.querySelector(".phone-container").addEventListener("click", () => {
  document.querySelector(".blur-element").style.filter = "none";
});

function updateCarDetails(carId, callback) {
  const key = `cardInfo-${carId}`;

  const carDataString = localStorage.getItem(key);

  if (carDataString) {
    const carData = JSON.parse(carDataString);

    const carMarka = document.querySelector(".cars-name p:first-child");
    const carModel = document.querySelector(".cars-name p:last-child");
    const salerName = document.querySelector(".user-elements span");
    const carsPrices = document.querySelector(".cars-prices");
    const phoneNumber = document.querySelector(".blur-element");
    const carDate = document.querySelector(".date");
    const carsMarka = document.querySelector(".cars-marka");
    const carsModel = document.querySelector(".cars-model");
    const carsYear = document.querySelector(".cars-year");
    const carsMillage = document.querySelector(".cars-millage");
    const carsEngine = document.querySelector(".cars-engine");
    const carsPowerEngine = document.querySelector(".cars-powerEngine");
    const carsBanType = document.querySelector(".cars-banType");
    const carsGearBox = document.querySelector(".cars-gearBox");
    const carsTransmission = document.querySelector(".cars-transmission");
    const carsColor = document.querySelector(".cars-color");
    const carsFuelType = document.querySelector(".cars-fuelType");
    const carsPrice = document.querySelector(".cars-price");
    const aboutCar = document.querySelector(".about-car");
    const carsId = document.querySelector(".cars-id");
    const carousel = document.querySelector(".carousel");
    const infoElementThree = document.querySelector(".info-element-three");

    carMarka.textContent = carData.marka;
    carModel.textContent = carData.model;
    salerName.textContent = carData.salerName;
    phoneNumber.textContent = carData.phoneNumber;
    carDate.textContent = carData.date;
    carsMarka.textContent = carData.marka;
    carsModel.textContent = carData.model;
    carsYear.textContent = carData.year;
    carsMillage.textContent = carData.millage;
    carsEngine.textContent = carData.engine;
    carsPowerEngine.textContent = carData.horsePower;
    carsBanType.textContent = carData.banType;
    carsGearBox.textContent = carData.gearBox;
    carsTransmission.textContent = carData.transmission;
    carsColor.textContent = carData.color;
    carsFuelType.textContent = carData.fuel;
    carsPrice.textContent = carData.price;
    carsPrices.textContent = carData.price;
    aboutCar.textContent = carData.aboutCar;
    carsId.textContent = carData.id;

    carousel.innerHTML = "";
    infoElementThree.innerHTML = "";

    Object.keys(carData).forEach((key) => {
      if (key.startsWith("image")) {
        const imageSrc = carData[key];
        const li = document.createElement("li");
        li.className = "item";
        const img = document.createElement("img");
        img.alt = `Image for ${carData.marka} ${carData.model}`;
        img.src = imageSrc;
        li.appendChild(img);
        carousel.appendChild(li);
      } else if (key.startsWith("carTool")) {
        // Populate car tools...
      }
    });

    // Initialize carousel after dynamic elements are added
    if (typeof callback === "function") {
      callback();
    }
  } else {
    console.log(`No data found for ${key}`);
  }
}
