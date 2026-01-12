document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langToggle");

  let currentLang = localStorage.getItem("lang") || "hy";

  const translations = {
    hy: {
      home: "ԳԼԽԱՎՈՐ",
      about: "ՄԵՐ ՄԱՍԻՆ",
      services: "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ",
      portfolio: "ՊՈՐՏՖՈԼԻՈ",
      blog: "ԲԼՈԳ",
      contact: "ԿԱՊ",
      heroText: "Մենք ստեղծագործական դիզայն գործակալություն ենք, որը համագործակցում է բիզնեսների հետ՝ ձևավորելով նրանց բրենդային ինքնությունը։",
      more: "Ավելին",
      aboutTitle: "ՄԵՐ ՄԱՍԻՆ",
      aboutText: "Մենք ստեղծագործական դիզայն գործակալություն ենք, որը համագործակցում է բիզնեսների հետ՝ ստեղծելով ռազմավարական և վիզուալ լուծումներ։",
      portfolioTitle: "ՊՈՐՏՖՈԼԻՈ",
      seeMore: "Տեսնել Ավելին",
      servicesTitle: "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ",
      servicesText: "Ձեր բրենդը արժանի է ավելիին։ Ընտրեք ծառայությունը, որը կբարձրացնի ձեր ազդեցությունը։",
      customers: "ՄԵՐ ՀԱՃԱԽՈՐԴՆԵՐԸ",
      contactTitle: "ԿԱՊ",
      contactInfo: "Կոնտակտային Տվյալներ",
      address: "Հասցե",
      workHours: "Աշխատանքային ժամեր",
    },
    en: {
      home: "HOME",
      about: "ABOUT US",
      services: "SERVICES",
      portfolio: "PORTFOLIO",
      blog: "BLOG",
      contact: "CONTACT",
      heroText: "We are a creative design agency working with businesses to build strong brand identities.",
      more: "Learn More",
      aboutTitle: "ABOUT US",
      aboutText: "We are a creative design agency providing strategic and visual solutions for businesses.",
      portfolioTitle: "PORTFOLIO",
      seeMore: "See More",
      servicesTitle: "SERVICES",
      servicesText: "Your brand deserves more. Choose the service that elevates your impact.",
      customers: "OUR CLIENTS",
      contactTitle: "CONTACT",
      contactInfo: "Contact Information",
      address: "Address",
      workHours: "Working Hours",
    },
  };

  function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
  }

  changeLanguage(currentLang);
  langBtn.textContent = currentLang === "hy" ? "Հայ" : "EN";

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "hy" ? "en" : "hy";
    localStorage.setItem("lang", currentLang);
    langBtn.textContent = currentLang === "hy" ? "Հայ" : "EN";
    changeLanguage(currentLang);
  });
});
