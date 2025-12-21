const slider1 = document.getElementById("stepsSlider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const stepWidth = 258 + 25; 
const visibleCount = 4;
const totalSteps = slider1.children.length;

let index = 0;
const maxIndex = totalSteps - visibleCount;

next.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    slider1.style.transform =
      `translateX(-${index * stepWidth}px)`;
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    slider1.style.transform =
      `translateX(-${index * stepWidth}px)`;
  }
});
