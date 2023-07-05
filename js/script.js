const sliderItems = document.querySelectorAll(".review-item");
const nextSlide = document.querySelector("#next");
const prevSlide = document.querySelector("#prev");
let sliderIdx = 0;

function slideShow(action) {
  if (action === "next") {
    if (sliderIdx === sliderItems.length - 1) {
      sliderIdx = 0;
    } else {
      sliderIdx++;
    }
  } else {
    if (sliderIdx === 0) {
      sliderIdx = sliderItems.length - 1;
    } else {
      sliderIdx--;
    }
  }

  sliderItems.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (0 - sliderIdx)}%)`;
  });
}

nextSlide.addEventListener("click", function () {
  slideShow("next");
});

prevSlide.addEventListener("click", function () {
  slideShow("prev");
});

setInterval(() => {
  slideShow("next");
}, 4000);

function validateForm(element) {
  let errorCount = 0;
  element.forEach((val, i) => {
    if (document.querySelector(val).value === "") {
      document.querySelector(val).classList.add("error");
      errorCount++;
    } else {
      document.querySelector(val).classList.remove("error");
    }
  });

  if (errorCount === 0) {
    element.forEach((val, i) => {
      document.querySelector(val).classList.remove("error");
      document.querySelector(val).value = "";
    });

    document.querySelector("#success-notification").style.transition =
      "all 0.5s";
    document.querySelector(
      "#success-notification"
    ).style.transform = `translateX(0)`;

    setTimeout(() => {
      document.querySelector(
        "#success-notification"
      ).style.transform = `translateX(150%)`;
    }, 3000);
  }
}

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", () => {
  validateForm(["#name", "#email", "#phone", "#message"]);
});
