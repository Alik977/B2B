const imageSets = {
  packaging: [
    "pictures/Realphoto/panda.jpg",
    "pictures/Realphoto/limonad1.jpg",
    "pictures/Realphoto/valex.jpg",
    "pictures/Realphoto/tamara.jpg",
    "pictures/Realphoto/glovo.jpg",
    "pictures/pack/16.jpg",
    "pictures/pack/7.jpg",
    "pictures/Realphoto/ttvik1.jpg",
    "pictures/Realphoto/sugar.jpg",
    "pictures/pack/10.jpg",
    "pictures/Realphoto/hamov mexr.jpg",
    "pictures/pack/12.jpg",
    "pictures/pack/13.jpg",
    "pictures/pack/14.jpg",
    "pictures/pack/15.jpg",
     "pictures/Realphoto/salt.jpg",
  ],

  branding: [
    "pictures/brand/1.jpg",
    "pictures/brand/2.jpg",
    "pictures/brand/3.jpg",
    "pictures/brand/4.jpg",
    "pictures/brand/5.jpg",
    "pictures/brand/6.jpg",
    "pictures/brand/7.jpg",
    "pictures/brand/8.jpg",
    "pictures/brand/9.jpg",
    "pictures/brand/10.jpg",
    "pictures/brand/11.jpg",
    "pictures/brand/12.jpg",
    "pictures/brand/13.jpg",
    "pictures/brand/14.jpg",
    "pictures/brand/15.jpg",
    "pictures/brand/16.jpg",
  ],

  rebranding: [
    "pictures/rebrand/1.jpg",
    "pictures/rebrand/2.jpg",
    "pictures/rebrand/3.jpg",
    "pictures/rebrand/4.jpg",
    "pictures/rebrand/5.jpg",
    "pictures/rebrand/6.jpg",
    "pictures/rebrand/7.jpg",
    "pictures/rebrand/8.jpg",
    "pictures/rebrand/9.jpg",
    "pictures/rebrand/10.jpg",
    "pictures/rebrand/11.jpg",
    "pictures/rebrand/12.jpg",
    "pictures/rebrand/13.jpg",
    "pictures/rebrand/14.jpg",
    "pictures/rebrand/15.jpg",
     "pictures/rebrand/16.jpg",
  ],
   naming: [
    "pictures/naming/1.jpg",
    "pictures/naming/2.jpg",
    "pictures/naming/3.jpg",
    "pictures/naming/4.jpg",
    "pictures/naming/5.jpg",
    "pictures/naming/6.jpg",
    "pictures/naming/7.jpg",
    "pictures/naming/8.jpg",
    "pictures/naming/9.jpg",
    "pictures/naming/10.jpg",
    "pictures/naming/11.jpg",
    "pictures/naming/12.jpg",
    "pictures/naming/13.jpg",
    "pictures/naming/14.jpg",
    "pictures/naming/15.jpg",
    "pictures/naming/16.jpg",
  ],
   logo: [
    "pictures/Realphoto/222.jpg",
    "pictures/logo/2.jpg",
    "pictures/logo/3.jpg",
    "pictures/logo/12.jpg",
    "pictures/logo/13.jpg",
    "pictures/Realphoto/ttvik.jpg",
    "pictures/logo/4.jpg",
    "pictures/logo/8.jpg",
    "pictures/logo/9.jpg",
    "pictures/logo/10.jpg",
    "pictures/logo/11.jpg",
    "pictures/logo/7.jpg",
    "pictures/logo/5.jpg",
    "pictures/logo/14.jpg",
    "pictures/logo/15.jpg",
    "pictures/Realphoto/rework.jpg",
  ],
     UI: [
    "pictures/UI/1.jpg",
    "pictures/UI/16.jpg",
    "pictures/UI/3.jpg",
    "pictures/UI/4.jpg",
    "pictures/UI/5.jpg",
    "pictures/UI/6.jpg",
    "pictures/UI/8.jpg",
    "pictures/UI/7.jpg",
    "pictures/UI/9.jpg",
    "pictures/UI/10.jpg",
    "pictures/UI/11.jpg",
    "pictures/UI/12.jpg",
    "pictures/UI/13.jpg",
    "pictures/UI/14.jpg",
    "pictures/UI/15.jpg",
     "pictures/UI/2.jpg",
  ],
};

const buttons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".slot img");

// initial load
loadImages("packaging");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    loadImages(btn.dataset.category);
  });
});

function loadImages(category) {
  images.forEach((img, index) => {
    img.src = imageSets[category][index];
  });
}
