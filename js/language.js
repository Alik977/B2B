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
menu_info: "BtoB Design-ը ժամանակակից դիզայն ստուդիա է, որը օգնում է բիզնեսներին ունենալ ուժեղ, վստահելի և գրավիչ տեսք թվային միջավայրում։ Մենք ստեղծում ենք մաքուր, մտածված և ֆունկցիոնալ դիզայն լուծումներ՝ սկսած վեբ կայքերից ու բրենդինգից մինչև օգտատիրոջ համար հարմար ինտերֆեյսներ։BtoB Design-ի նպատակն է ոչ միայն գեղեցիկ դիզայն ստեղծել, այլև օգնել բիզնեսին աճել, առանձնանալ մրցակիցներից և վստահություն ներշնչել իր հաճախորդներին",
 menu_brand:"Ձեր բրենդը արժանի է ավելիին Ընտրեք ծառայությունը, որը կբարձրացնի ձեր տեսանելիությունն ու  ազդեցությունը Կապվեք մեզ հետ՝ անվճար խորհրդատվության համար" },
  en: {
    menu_home: "HOME",
    menu_about: "ABOUT US",
    menu_services: "SERVICES",
    menu_portfolio: "PORTFOLIO",
    menu_blog: "BLOG",
    menu_contact: "CONTACT",
     menu_click: "More",
     menu_paragraph: "We are a creative design agency that partners with businesses to shape their strategic branding and visual communications. Our team combines creative thinking with business logic to create meaningful and impactful solutions. We believe that good design builds trust, connects brands with people, and accelerates growth.",
  menu_info:"BtoB Design is a modern design studio that helps businesses have a strong, credible and attractive appearance in the digital environment. We create clean, thoughtful and functional design solutions, from websites and branding to user-friendly interfaces.BtoB Design’s goal is not only to create beautiful design, but also to help businesses grow, stand out from the competition and inspire trust in their customers.",
   menu_brand:"Your brand deserves more. Choose the service that will increase your visibility and impact. Contact us for a free consultation." ,
},
  ru: {
    menu_home: "ГЛАВНАЯ",
    menu_about: "О НАС",
    menu_services: "УСЛУГИ",
    menu_portfolio: "ПОРТФОЛИО",
    menu_blog: "БЛОГ",
    menu_contact: "КОНТАКТЫ",
     menu_click: "Подробнее",
     menu_paragraph: "Мы — креативное дизайн-агентство, которое сотрудничает с компаниями для формирования их стратегического брендинга и визуальных коммуникаций. Наша команда сочетает креативное мышление с бизнес-логикой для создания значимых и эффективных решений. Мы верим, что хороший дизайн укрепляет доверие, связывает бренды с людьми и ускоряет рост..",
     menu_info:"BtoB Design — это современная дизайн-студия, которая помогает компаниям создать сильный, заслуживающий доверия и привлекательный образ в цифровой среде. Мы разрабатываем лаконичные, продуманные и функциональные дизайн-решения, от веб-сайтов и брендинга до удобных пользовательских интерфейсов.Цель BtoB Design — не только создавать красивый дизайн, но и помогать компаниям расти, выделяться среди конкурентов и внушать доверие своим клиентам.",
  menu_brand:"Ваш бренд заслуживает большего. Выберите услугу, которая повысит вашу узнаваемость и влияние. Свяжитесь с нами для бесплатной консультации." ,
    },
  fr: {
    menu_home: "MAISON",
    menu_about: "À PROPOS DE NOUS",
    menu_services: "SERVICES",
    menu_portfolio: "PORTEFEUILLE",
    menu_blog: "BLOGUE",
    menu_contact: "CONTACTS",
     menu_click: "Plus",
     menu_paragraph: "Nous sommes une agence de design créatif qui accompagne les entreprises dans le développement de leur stratégie de marque et de leur communication visuelle. Notre équipe allie créativité et sens des affaires pour concevoir des solutions pertinentes et efficaces. Nous sommes convaincus qu'un design de qualité renforce la confiance, crée du lien entre les marques et leur public, et accélère la croissance.",
  menu_info:"BtoB Design est un studio de design moderne qui aide les entreprises à se forger une présence numérique forte, crédible et attrayante. Nous créons des solutions de design épurées, réfléchies et fonctionnelles, des sites web à l'identité visuelle en passant par les interfaces utilisateur intuitives.L'objectif de BtoB Design n'est pas seulement de créer de beaux designs, mais aussi d'accompagner les entreprises dans leur croissance, de les aider à se démarquer de la concurrence et à inspirer confiance à leurs clients.",
   menu_brand:"Votre marque mérite mieux. Choisissez le service qui augmentera votre visibilité et votre impact. Contactez-nous pour une consultation gratuite." ,
},
  ger: {
    menu_home: "STARTSEITE",
    menu_about: "ÜBER UNS",
    menu_services: "DIENSTLEISTUNGEN",
    menu_portfolio: "PORTFOLIO",
    menu_blog: "BLOG",
    menu_contact: "KONTAKT",
     menu_click: "Mehr",
     menu_paragraph: "Wir sind eine Kreativagentur, die Unternehmen bei der Gestaltung ihrer strategischen Markenbildung und visuellen Kommunikation unterstützt. Unser Team verbindet kreatives Denken mit betriebswirtschaftlichem Know-how, um sinnvolle und effektive Lösungen zu entwickeln. Wir sind überzeugt, dass gutes Design Vertrauen schafft, Marken mit Menschen verbindet und Wachstum beschleunigt..",
 menu_info:"BtoB Design ist ein modernes Designstudio, das Unternehmen zu einem starken, glaubwürdigen und attraktiven digitalen Auftritt verhilft. Wir entwickeln klare, durchdachte und funktionale Designlösungen – von Websites und Branding bis hin zu benutzerfreundlichen Oberflächen. Das Ziel von BtoB Design ist es, nicht nur ästhetisch ansprechende Designs zu kreieren, sondern Unternehmen auch beim Wachstum zu unterstützen, sie von der Konkurrenz abzuheben und das Vertrauen ihrer Kunden zu stärken.",
  menu_brand:"Ihre Marke verdient mehr. Wählen Sie den Service, der Ihre Sichtbarkeit und Wirkung steigert. Kontaktieren Sie uns für ein kostenloses Beratungsgespräch." ,
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