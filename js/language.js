const langBtn = document.getElementById("langToggle");

let currentLang = "hy";

const translations = {
  hy: {
    home: "ԳԼԽԱՎՈՐ",
    about: "ՄԵՐ ՄԱՍԻՆ",
    services: "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ",
    portfolio: "ՊՈՐՏՖՈԼԻՈ",
    blog: "ԲԼՈԳ",
    contact: "ԿԱՊ",
    heroText:
      "Մենք ստեղծագործական դիզայն գործակալություն ենք, որը համագործակցում է բիզնեսների հետ։",
    more: "Ավելին",
  },
  en: {
    home: "HOME",
    about: "ABOUT US",
    services: "SERVICES",
    portfolio: "PORTFOLIO",
    blog: "BLOG",
    contact: "CONTACT",
    heroText:
      "We are a creative design agency working with businesses worldwide.",
    more: "Learn More",
  },
};

const navLinks = document.querySelectorAll(".nav ul li a");
const heroParagraph = document.querySelector(".hero-left p");
const heroBtn = document.querySelector(".hero-btn");

function changeLanguage(lang) {
  navLinks[0].textContent = translations[lang].home;
  navLinks[1].textContent = translations[lang].about;
  navLinks[2].textContent = translations[lang].services;
  navLinks[3].textContent = translations[lang].portfolio;
  navLinks[4].textContent = translations[lang].blog;
  navLinks[5].textContent = translations[lang].contact;

  heroParagraph.textContent = translations[lang].heroText;
  heroBtn.textContent = translations[lang].more;
}

langBtn.addEventListener("click", () => {
  if (currentLang === "hy") {
    currentLang = "en";
    langBtn.textContent = "EN";
  } else {
    currentLang = "hy";
    langBtn.textContent = "Հայ";
  }

  changeLanguage(currentLang);
});
