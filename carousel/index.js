let stepSize = 0;
let currentIndex = 0;
const indicatorContainer = document.getElementById("indicator-container");

const indicatorBtns = document.querySelectorAll(".indicator-btn");
function updateActiveIndicator(index) {
  indicatorBtns.forEach((btn) => {
    if (btn.dataset.index == index) {
      btn.textContent = "●";
    } else {
      btn.textContent = "○";
    }
  });
}

const totalSlides = indicatorContainer.children.length;
const imageStrip = document.getElementById("image-strip");
function changeSlide(target) {
  if (target === "next") {
    currentIndex = (currentIndex + 1) % totalSlides;
  } else if (target === "prev") {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  } else {
    currentIndex = target;
  }
  stepSize = currentIndex * 800;
  imageStrip.style.transform = `translateX(-${stepSize}px)`;
  updateActiveIndicator(currentIndex);
}

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => changeSlide("next"));

const prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", () => changeSlide("prev"));

indicatorContainer.addEventListener("click", (e) => {
  if (e.target === indicatorContainer) return;
  index = Number(e.target.dataset.index);
  changeSlide(index);
});

let autoSlide = setInterval(() => changeSlide("next"), 4000);
const imageFrame = document.getElementById("image-frame");
imageFrame.addEventListener("mouseenter", () => clearInterval(autoSlide));
imageFrame.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => changeSlide("next"), 4000);
});
