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
}, 3000);
