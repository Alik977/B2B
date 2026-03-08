const imagesSets = [
  [
    "./pictures/Realphoto/tamara.jpg",
    "./pictures/Realphoto/mexri wine.jpg",
    "./pictures/Realphoto/limonad.jpg",
    "./pictures/Realphoto/shine1.jpg",
    "./pictures/Realphoto/222-1.jpg",
    "./pictures/Realphoto/monolit.jpg",
    "./pictures/Realphoto/Gemini_Generated_Image_xvjss0xvjss0xvjs 1.png",
    "./pictures/Realphoto/zero99-1.jpg"
  ],
  [
       "./pictures/Realphoto/Group 256 1.png",
    "./pictures/Realphoto/image_1_1767952117301 1.png",
    "./pictures/Realphoto/Gemini_Generated_Image_z824cfz824cfz824 1.png",
    "./pictures/Realphoto/Gemini_Generated_Image_tr9aa3tr9aa3tr9a 1.png",
    "./pictures/Realphoto/WhatsApp Image 2026-02-24 at 09.15.07 1.png",
    "./pictures/Realphoto/WhatsApp Image 2026-02-24 at 09.14.54 1.png",
    "./pictures/Realphoto/panda.jpg",
    "./pictures/Realphoto/logo.png"
  ],
  [
    "./pictures/Realphoto/glovo.jpg",
    "./pictures/Realphoto/edw.jpg",
    "./pictures/Realphoto/panda2.jpg",
    "./pictures/Realphoto/shine.jpg",
    "./pictures/Realphoto/zero99.jpg",
    "./pictures/Realphoto/xshop.jpg",
    "./pictures/Realphoto/rework.jpg",
    "./pictures/Realphoto/tamara3.jpg"
  ]
];

const images = document.querySelectorAll(".gridbox img");
const slidergrid = document.getElementById("portfolioSlider");

slidergrid.max = imagesSets.length - 1;

let currentSet = 0;

slidergrid.addEventListener("input", () => {

const newSet = parseInt(slidergrid.value);

if(newSet === currentSet) return;

images.forEach((img)=>{
img.style.transform = "translateX(-60px)";
img.style.opacity = "0";
});

setTimeout(()=>{

images.forEach((img,i)=>{

img.src = imagesSets[newSet][i];

img.style.transform = "translateX(60px)";
img.style.opacity = "0";

});

setTimeout(()=>{

images.forEach((img)=>{
img.style.transform = "translateX(0)";
img.style.opacity = "1";
});

},50);

},300);

currentSet = newSet;

const percent = (slidergrid.value / slidergrid.max) * 100;


});