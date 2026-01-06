document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("stepsSlider1");
  const slides = slider.querySelectorAll(".step1");

  let index = 0;

  const slideWidth = 282; 

  function moveSlider() {
    index++;

    if (index >= slides.length) {
      index = 0;
    }

    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  setInterval(moveSlider, 3000);
});
