const images = [
  [
    "./pictures/Realphoto/tamara.jpg",
    "./pictures/Realphoto/mexri wine.jpg",
    "./pictures/Realphoto/limonad.jpg",
    "./pictures/Realphoto/shine1.jpg",
    "./pictures/Realphoto/222-1.jpg",
    "./pictures/Realphoto/monolit.jpg",
    "./pictures/Realphoto/Gemini_Generated_Image_xvjss0xvjss0xvjs 2.png",
    "./pictures/Realphoto/zero99-1.jpg"
  ],
  [
       "./pictures/Realphoto/Group 256 1.png",
    "./pictures/Realphoto/image_1_1767952117301 1.png",
    "./pictures/Realphoto/image_1_1772098684794 2.png",
    "./pictures/Realphoto/Gemini_Generated_Image_ym13hqym13hqym13 2.png",
    "./pictures/Realphoto/image_1_1772098205922 2.png",
    "./pictures/Realphoto/WhatsApp Image 2026-02-24 at 09.14.54 1.png",
    "./pictures/Realphoto/panda.jpg",
    "./pictures/Realphoto/logo.png"
  ],
  /*[
    /*"./pictures/next1.jpg",
    "./pictures/next2.jpg",
    "./pictures/next3.jpg",
    "./pictures/next4.jpg",
    "./pictures/next5.jpg",
    "./pictures/next6.jpg",
    "./pictures/next7.jpg",
    "./pictures/next8.jpg"
  ]*/
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
