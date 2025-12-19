const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

let current = 0;
let interval;
let startX = 0;
let isDragging = false;

/* ===== INIT ===== */
createDots();
updateSlides();
startAutoPlay();

/* ===== DOTS ===== */
function createDots() {
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      goToSlide(i);
      restartAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll("span");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[current].classList.add("active");
}

/* ===== SLIDE LOGIC ===== */
function updateSlides() {
  slides.forEach(slide =>
    slide.classList.remove("active", "left", "right")
  );

  slides[current].classList.add("active");

  const prev = (current - 1 + slides.length) % slides.length;
  const next = (current + 1) % slides.length;

  slides[prev].classList.add("left");
  slides[next].classList.add("right");

  updateDots();
}

function goToSlide(index) {
  current = index;
  updateSlides();
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
}

/* ===== AUTO PLAY ===== */
function startAutoPlay() {
  interval = setInterval(nextSlide, 3500); 
}

function restartAutoPlay() {
  clearInterval(interval);
  startAutoPlay();
}

/* ===== DRAG (MOUSE) ===== */
slider.addEventListener("mousedown", e => {
  isDragging = true;
  startX = e.clientX;
  clearInterval(interval);
});

window.addEventListener("mouseup", e => {
  if (!isDragging) return;
  isDragging = false;

  const diff = e.clientX - startX;
  if (diff > 80) prevSlide();
  else if (diff < -80) nextSlide();

  startAutoPlay();
});

/* ===== TOUCH (MOBILE) ===== */
slider.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
  clearInterval(interval);
});

slider.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startX;

  if (diff > 80) prevSlide();
  else if (diff < -80) nextSlide();

  startAutoPlay();
});
