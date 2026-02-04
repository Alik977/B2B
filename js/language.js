const langDropdown = document.querySelector(".lang-dropdown");
const langSelected = document.getElementById("langSelected");
const translations = {
  hy: {
    menu_home: "ԳԼԽԱՎՈՐ",
    menu_about: "ՄԵՐ ՄԱՍԻՆ",
    menu_services: "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ",
    menu_portfolio: "ՊՈՐՏՖՈԼԻՈ",
    menu_blog: "ԲԼՈԳ",
    menu_contact: "ԿԱՊ",
    menu_click: "Ավելին",
menu_paragraph: "Մենք ստեղծագործական դիզայնի գործակալություն ենք, որը համագործակցում է ընկերությունների հետ՝ նրանց ռազմավարական բրենդինգը և վիզուալ հաղորդակցությունը զարգացնելու համար: Մեր թիմը համատեղում է ստեղծագործական մտածողությունը բիզնես տրամաբանության հետ՝ իմաստալից և արդյունավետ լուծումներ ստեղծելու համար: Մենք հավատում ենք, որ լավ դիզայնը վստահություն է ներշնչում, կապում է ապրանքանիշերը մարդկանց հետ և արագացնում աճը:",
  },
  en: {
    menu_home: "HOME",
    menu_about: "ABOUT US",
    menu_services: "SERVICES",
    menu_portfolio: "PORTFOLIO",
    menu_blog: "BLOG",
    menu_contact: "CONTACT",
     menu_click: "More",
     menu_paragraph: "We are a creative design agency that partners with businesses to shape their strategic branding and visual communications. Our team combines creative thinking with business logic to create meaningful and impactful solutions. We believe that good design builds trust, connects brands with people, and accelerates growth."
  },
  ru: {
    menu_home: "ГЛАВНАЯ",
    menu_about: "О НАС",
    menu_services: "УСЛУГИ",
    menu_portfolio: "ПОРТФОЛИО",
    menu_blog: "БЛОГ",
    menu_contact: "КОНТАКТЫ",
     menu_click: "Подробнее",
     menu_paragraph: "Мы — креативное дизайн-агентство, которое сотрудничает с компаниями для формирования их стратегического брендинга и визуальных коммуникаций. Наша команда сочетает креативное мышление с бизнес-логикой для создания значимых и эффективных решений. Мы верим, что хороший дизайн укрепляет доверие, связывает бренды с людьми и ускоряет рост.."
  },
  fr: {
    menu_home: "MAISON",
    menu_about: "À PROPOS DE NOUS",
    menu_services: "SERVICES",
    menu_portfolio: "PORTEFEUILLE",
    menu_blog: "BLOGUE",
    menu_contact: "CONTACTS",
     menu_click: "Plus",
     menu_paragraph: "Nous sommes une agence de design créatif qui accompagne les entreprises dans le développement de leur stratégie de marque et de leur communication visuelle. Notre équipe allie créativité et sens des affaires pour concevoir des solutions pertinentes et efficaces. Nous sommes convaincus qu'un design de qualité renforce la confiance, crée du lien entre les marques et leur public, et accélère la croissance."
  },
  ger: {
    menu_home: "STARTSEITE",
    menu_about: "ÜBER UNS",
    menu_services: "DIENSTLEISTUNGEN",
    menu_portfolio: "PORTFOLIO",
    menu_blog: "BLOG",
    menu_contact: "KONTAKT",
     menu_click: "Mehr",
     menu_paragraph: "Wir sind eine Kreativagentur, die Unternehmen bei der Gestaltung ihrer strategischen Markenbildung und visuellen Kommunikation unterstützt. Unser Team verbindet kreatives Denken mit betriebswirtschaftlichem Know-how, um sinnvolle und effektive Lösungen zu entwickeln. Wir sind überzeugt, dass gutes Design Vertrauen schafft, Marken mit Menschen verbindet und Wachstum beschleunigt.."
  },
};

langSelected.addEventListener("click", () => {
  langDropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!langDropdown.contains(e.target)) {
    langDropdown.classList.remove("open");
  }
});
function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function setLanguage(code, label, flag) {
  localStorage.setItem("lang", code);

  langSelected.innerHTML = `
    <img src="${flag}" />
    <span>${label}</span>
    <i class="fa-solid fa-chevron-down"></i>
  `;

  translatePage(code);
  langDropdown.classList.remove("open");
}

// page load
const savedLang = localStorage.getItem("lang") || "hy";

if (savedLang === "en") {
  setLanguage("en", "EN", "./pictures/flag/usa.png");
} else if (savedLang === "ru") {
  setLanguage("ru", "RU", "./pictures/flag/rus.png");
} else if (savedLang === "fr") {
  setLanguage("fr", "FR", "./pictures/flag/france.png");
} else if (savedLang === "ger") {
  setLanguage("ger", "Ger", "./pictures/flag/german.png");
} else {
  setLanguage("hy", "Հայ", "./pictures/flag/arm.png");
}