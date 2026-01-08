const images = [
  [
    "./pictures/Без названия (85).png",
    "./pictures/Упаковка для морса_ Этикетка.png",
    "./pictures/Unique & Smart AI Packaging Design Trends.png",
    "./pictures/TENGOO - Ismail Abu Elkheer ✪.png",
    "./pictures/Без названия (86).png",
    "./pictures/Без названия (87).png",
    "./pictures/luxury skincare product.png",
    "./pictures/The Perfect Beach Drink – Refresh with Darling!.png"
  ],
  [
    "./pictures/alt1.png",
    "./pictures/alt2.jpg",
    "./pictures/alt3.jpg",
    "./pictures/alt4.jpg",
    "./pictures/alt5.jpg",
    "./pictures/alt6.jpg",
    "./pictures/alt7.jpg",
    "./pictures/alt8.jpg"
  ],
  [
    "./pictures/next1.jpg",
    "./pictures/next2.jpg",
    "./pictures/next3.jpg",
    "./pictures/next4.jpg",
    "./pictures/next5.jpg",
    "./pictures/next6.jpg",
    "./pictures/next7.jpg",
    "./pictures/next8.jpg"
  ]
];
const boxes = document.querySelectorAll(".gridbox img");
let currentIndex = 0;
let isScrolling = false;

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0) {
    currentIndex++;
  } else {
    currentIndex--;
  }

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  boxes.forEach((img, i) => {
    img.style.opacity = "0";

    setTimeout(() => {
      img.src = images[currentIndex][i];
      img.style.opacity = "1";
    }, 250);
  });

  isScrolling = true;
  setTimeout(() => isScrolling = false, 700);
});
