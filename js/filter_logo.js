const imageSets = {
     allpic: [
    "pictures/all/1.png",
    "pictures/all/16.jpg",
    "pictures/all/3.jpg",
    "pictures/all/4.jpg",
    "pictures/all/5.jpg",
    "pictures/all/6.jpg",
    "pictures/all/8.png",
    "pictures/all/7.jpg",
    "pictures/all/9.png",
    "pictures/all/10.png",
    "pictures/all/11.jpg",
    "pictures/all/12.jpg",
    "pictures/all/13.jpg",
    "pictures/all/14.jpg",
    "pictures/all/15.png",
     "pictures/all/2.png",
  ],
  packaging: [
    "pictures/Realphoto/panda.jpg",
    "pictures/Realphoto/Gemini_Generated_Image_gs6va1gs6va1gs6v 1.png",
    "pictures/Realphoto/limonad1.jpg",
    "pictures/Realphoto/valex.jpg",
    "pictures/Realphoto/tamara.jpg",
    "pictures/Realphoto/glovo.jpg",
    "pictures/Realphoto/Gemini_Generated_Image_7gxbmy7gxbmy7gxb 1.png",
    "pictures/Realphoto/Gemini_Generated_Image_ki69nuki69nuki69 2.png",
    "pictures/Realphoto/ttvik1.jpg",
    "pictures/Realphoto/sugar.jpg",
    "pictures/Realphoto/Group 255.png",
    "pictures/Realphoto/hamov mexr.jpg",
    "pictures/Realphoto/image_1_1772098205922 1.png",
    "pictures/Realphoto/Gemini_Generated_Image_xvjss0xvjss0xvjs 1.png",
    "pictures/Realphoto/ChatGPT Image 26 февр. 2026 г., 13_11_47 1.png",
    
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
    "pictures/Realphoto/DARBINYAMC GROUP 1.png",
    "pictures/logo/3.jpg",
    "pictures/logo/12.jpg",
    "pictures/logo/13.jpg",
    "pictures/Realphoto/ttvik.jpg",
    "pictures/logo/4.jpg",
    "pictures/Realphoto/Group 163.png",
    "pictures/Realphoto/logo.png",
    "pictures/logo/10.jpg",
    "pictures/logo/11.jpg",
    "pictures/logo/7.jpg",
    "pictures/logo/5.jpg",
    "pictures/Realphoto/Group 165.png",
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
       Interier: [
    "pictures/Interier/1.jpg",
    "pictures/Interier/16.jpg",
    "pictures/Interier/3.jpg",
    "pictures/Interier/4.png",
    "pictures/Interier/5.jpg",
    "pictures/Interier/6.jpg",
    "pictures/Interier/8.png",
    "pictures/Interier/7.png",
    "pictures/Interier/9.jpg",
    "pictures/Interier/10.jpg",
    "pictures/Interier/11.jpg",
    "pictures/Interier/12.jpg",
    "pictures/Interier/13.jpg",
    "pictures/Interier/14.jpg",
    "pictures/Interier/15.jpg",
     "pictures/Interier/2.jpg",
  ],
  
};

const buttons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".slot img");

// initial load
loadImages("allpic");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    loadImages(btn.dataset.category);
  });
});

function loadImages(category) {
  const selectedImages = imageSets[category];

  images.forEach((img, index) => {
    if (selectedImages[index]) {
      img.src = selectedImages[index];
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const savedCategory = localStorage.getItem("portfolioCategory");

  if (savedCategory) {
    const button = document.getElementById(savedCategory);
    if (button) {
      button.click();
    }

    localStorage.removeItem("portfolioCategory");
  }
});