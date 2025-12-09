let index = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");


slides.forEach((_, i) => {
  let d = document.createElement("span");
  d.onclick = () => goToSlide(i);
  dotsContainer.appendChild(d);
});

function updateSlider() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "left", "right");

    if (i === index) slide.classList.add("active");
    else if (i === (index - 1 + slides.length) % slides.length) slide.classList.add("left");
    else if (i === (index + 1) % slides.length) slide.classList.add("right");
  });

  document.querySelectorAll(".dots span").forEach((d, i) =>
    d.classList.toggle("active", i === index)
  );
}

function goToSlide(i) {
  index = i;
  updateSlider();
}

setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 8000);

updateSlider();
