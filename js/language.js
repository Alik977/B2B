const langDropdown = document.querySelector(".lang-dropdown");
const langSelected = document.getElementById("langSelected");

langSelected.addEventListener("click", () => {
  langDropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!langDropdown.contains(e.target)) {
    langDropdown.classList.remove("open");
  }
});

function setLanguage(code, label, flag) {
  localStorage.setItem("lang", code);

  langSelected.innerHTML = `
    <img src="${flag}" />
    <span>${label}</span>
    <i class="fa-solid fa-chevron-down"></i>
  `;

  langDropdown.classList.remove("open");

  console.log("Selected language:", code);
}

// page load
const savedLang = localStorage.getItem("lang");
if (savedLang === "en") {
  setLanguage("en", "EN", "../pictures/flag/usa.png");
} else if (savedLang === "ru") {
  setLanguage("ru", "RU", "./pictures/flag/rus.png");
} else {
  setLanguage("hy", "Հայ", "./pictures/flag/arm.png");
}
