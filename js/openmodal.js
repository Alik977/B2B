  const images1 = document.querySelectorAll(".gridbox img");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  images1.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

