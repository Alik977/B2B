const images = [
  [
    "./pictures/Realphoto/tamara.jpg",
    "./pictures/Realphoto/mexri wine.jpg",
    "./pictures/Realphoto/limonad.jpg",
    "./pictures/Realphoto/shine1.jpg",
    "./pictures/Realphoto/222-1.jpg",
    "./pictures/Realphoto/monolit.jpg",
    "./pictures/luxury skincare product.png",
    "./pictures/Realphoto/zero99-1.jpg"
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
