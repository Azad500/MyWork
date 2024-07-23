document.addEventListener("DOMContentLoaded", function () {
  function getCarIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  const carId = getCarIdFromUrl();
  if (carId) {
    updateCarDetails(carId);
  } else {
    console.log("No car ID found in the URL.");
  }
});

function updateCarDetails(carId, callback) {
  const key = `cardInfo-${carId}`;

  const carDataString = localStorage.getItem(key);

  if (carDataString) {
    const carData = JSON.parse(carDataString);

    const category = document.querySelector(".category-kind h3:first-child");
    const kind = document.querySelector(".category-kind h3:last-child");
    const jobName = document.querySelector(".jobname-company h2:first-child");
    const company = document.querySelector(".jobname-company h4:last-child");
    const salary = document.querySelector(".salary span");
    const age = document.querySelector(
      ".about-work-up-side .left-side li .age"
    );
    const experience = document.querySelector(
      ".about-work-up-side .left-side li .experience"
    );
    const startTime = document.querySelector(
      ".about-work-up-side .left-side li .start-time"
    );
    const endTime = document.querySelector(
      ".about-work-up-side .left-side li .end-time"
    );
    const education = document.querySelector(
      ".about-work-up-side .right-side li .education"
    );
    const contact = document.querySelector(
      ".about-work-up-side .right-side li .contact"
    );
    const phone = document.querySelector(
      ".about-work-up-side .right-side li .phone"
    );
    const email = document.querySelector(
      ".about-work-up-side .right-side li .email"
    );
    const text1 = document.querySelector(
      ".about-work-down-side .left-side li .one"
    );
    const text2 = document.querySelector(
      ".about-work-down-side .left-side li .two"
    );
    const text3 = document.querySelector(
      ".about-work-down-side .left-side li .three"
    );
    const text4 = document.querySelector(
      ".about-work-down-side .left-side li .four"
    );
    const text5 = document.querySelector(
      ".about-work-down-side .left-side li .five"
    );
    const text6 = document.querySelector(
      ".about-work-down-side .left-side li .six"
    );
    const text7 = document.querySelector(
      ".about-work-down-side .left-side li .seven"
    );
    const text8 = document.querySelector(
      ".about-work-down-side .left-side li .eight"
    );
    const text9 = document.querySelector(
      ".about-work-down-side .left-side li .nine"
    );
    const text10 = document.querySelector(
      ".about-work-down-side .left-side li .ten"
    );
    const demand1 = document.querySelector(
      ".about-work-down-side .right-side li .one"
    );
    const demand2 = document.querySelector(
      ".about-work-down-side .right-side li .two"
    );
    const demand3 = document.querySelector(
      ".about-work-down-side .right-side li .three"
    );
    const demand4 = document.querySelector(
      ".about-work-down-side .right-side li .four"
    );
    const demand5 = document.querySelector(
      ".about-work-down-side .right-side li .five"
    );
    const demand6 = document.querySelector(
      ".about-work-down-side .right-side li .six"
    );
    const demand7 = document.querySelector(
      ".about-work-down-side .right-side li .seven"
    );
    const demand8 = document.querySelector(
      ".about-work-down-side .right-side li .eight"
    );
    const demand9 = document.querySelector(
      ".about-work-down-side .right-side li .nine"
    );
    const demand10 = document.querySelector(
      ".about-work-down-side .right-side li .ten"
    );

    category.textContent = carData.category;
    kind.textContent = carData.kind;
    jobName.textContent = carData.jobName;
    company.textContent = carData.companyName;
    salary.textContent = carData.price;
    age.textContent = carData.age;
    experience.textContent = carData.staj;
    startTime.textContent = carData.startTime;
    endTime.textContent = carData.endTime;
    education.textContent = carData.education;
    contact.textContent = carData.contact;
    phone.textContent = carData.phoneNumber;
    email.textContent = carData.email;
    text1.textContent = carData.text1;
    text2.textContent = carData.text2;
    text3.textContent = carData.text3;
    text4.textContent = carData.text4;
    text5.textContent = carData.text5;
    text6.textContent = carData.text6;
    text7.textContent = carData.text7;
    text8.textContent = carData.text8;
    text9.textContent = carData.text9;
    text10.textContent = carData.text10;
    demand1.textContent = carData.demand1;
    demand2.textContent = carData.demand2;
    demand3.textContent = carData.demand3;
    demand4.textContent = carData.demand4;
    demand5.textContent = carData.demand5;
    demand6.textContent = carData.demand6;
    demand7.textContent = carData.demand7;
    demand8.textContent = carData.demand8;
    demand9.textContent = carData.demand9;
    demand10.textContent = carData.demand10;

    if (typeof callback === "function") {
      callback();
    }
  } else {
    console.log(`No data found for ${key}`);
  }
}
