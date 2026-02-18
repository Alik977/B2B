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
    menu_about1:"Բարի գալուստ BtoB Design Studio–ին՝ ստեղծարարության և տեխնոլոգիայի հանդիպման վայր: Մենք ձգտում ենք տալ մեր հաճախորդներին ոչ միայն գեղեցիկ դիզայն, այլ նաև գործնական ու արդյունավետ լուծումներ, որոնքիրականացնում են ձեր բիզնեսի տեսլականը:",
     menu_about2:"Մեր թիմը համատեղում է ստեղծագործ մոտեցումը, ժամանակակից վիզուալ ստանդարտները և բիզնեսի պահանջները՝ ստեղծելով դիզայն, որը հիշվող է, էֆեկտիվ և հարմարավետ օգտագործման համար:",
     menu_about3:" BtoB Design Studio–ում մենք հավատում ենք, որ յուրաքանչյուր պրոյեկտ յուրահատուկ է, և յուրաքանչյուր դիզայն պատմություն է պատմելու: Մենք  վստահ ենք, որ լավ դիզայնը ոչ միայն աչքի է ընկնում, այլև բիզնեսին աճ ապահովում:",
menu_paragraph: "BtoB Design Studio —որտեղ գաղափարները ձև են ստանում,գույները խոսում են,իսկ դիզայնը դառնում է արվեստ։Մենք կառուցում ենք բրենդներ,որոնք չեն մոռացվում։",
menu_info: "BtoB Design-ը ժամանակակից դիզայն ստուդիա է, որը օգնում է բիզնեսներին ունենալ ուժեղ, վստահելի և գրավիչ տեսք թվային միջավայրում։ Մենք ստեղծում ենք մաքուր, մտածված և ֆունկցիոնալ դիզայն լուծումներ՝ սկսած վեբ կայքերից ու բրենդինգից մինչև օգտատիրոջ համար հարմար ինտերֆեյսներ։BtoB Design-ի նպատակն է ոչ միայն գեղեցիկ դիզայն ստեղծել, այլև օգնել բիզնեսին աճել, առանձնանալ մրցակիցներից և վստահություն ներշնչել իր հաճախորդներին",
 menu_brand:"Ձեր բրենդը պարզապես բիզնես չէ — այն պատմություն է, ոճ և արժեք։Մենք օգնում ենք այդ պատմությունը դարձնել տեսանելի, ազդեցիկ և հիշվող։Ընտրեք այն ծառայությունը, որը կբարձրացնի ձեր բրենդի ուժը, կուժեղացնի ձեր ներկայությունը շուկայում և կստեղծի վստահություն ձեր հաճախորդների մոտ։Մենք ստեղծում ենք դիզայն, որը ոչ միայն գեղեցիկ է, այլև աշխատում է ձեր հաջողության համար։✨ Պատրա՞ստ եք բարձրացնել ձեր բրենդը նոր մակարդակի։Կապվեք մեզ հետ այսօր և ստացեք անվճար խորհրդատվություն։" },
  en: {
    menu_home: "HOME",
    menu_about: "ABOUT US",
    menu_services: "SERVICES",
    menu_portfolio: "PORTFOLIO",
    menu_blog: "BLOG",
    menu_contact: "CONTACT",
     menu_click: "More",
     menu_about1:"Welcome to BtoB Design Studio, a place where creativity and technology meet. We strive to provide our clients with not only beautiful design, but also practical and effective solutions that realize your business vision.",
     menu_about2:"Our team combines a creative approach, modern visual standards, and business requirements to create a design that is memorable, effective, and user-friendly.",
     menu_about3:"At BtoB Design Studio, we believe that every project is unique and every design has a story to tell. We believe that good design not only stands out, but also drives business growth.",
     menu_paragraph: "BtoB Design Studio — where ideas take shape, colors speak, and design becomes art. We build brands that are not forgotten.",
  menu_info:"BtoB Design is a modern design studio that helps businesses have a strong, credible and attractive appearance in the digital environment. We create clean, thoughtful and functional design solutions, from websites and branding to user-friendly interfaces.BtoB Design’s goal is not only to create beautiful design, but also to help businesses grow, stand out from the competition and inspire trust in their customers.",
   menu_brand:"Your brand is not just a business — it is a story, a style, and a value. We help make that story visible, impactful, and memorable. Choose the service that will increase the power of your brand, strengthen your presence in the market, and build trust with your customers. We create designs that are not only beautiful, but also work for your success. ✨ Are you ready to take your brand to the next level? Contact us today for a free consultation." ,
},
  ru: {
    menu_home: "ГЛАВНАЯ",
    menu_about: "О НАС",
    menu_services: "УСЛУГИ",
    menu_portfolio: "ПОРТФОЛИО",
    menu_blog: "БЛОГ",
    menu_contact: "КОНТАКТЫ",
     menu_click: "Подробнее",
menu_about1:"Добро пожаловать в BtoB Design Studio, место, где встречаются творчество и технологии. Мы стремимся предоставлять нашим клиентам не только красивый дизайн, но и практичные и эффективные решения, которые помогут воплотить в жизнь видение вашего бизнеса.",
     menu_about2:"Наша команда сочетает творческий подход, современные визуальные стандарты и требования бизнеса для создания запоминающегося, эффективного и удобного для пользователя дизайна.",
     menu_about3:"В BtoB Design Studio мы считаем, что каждый проект уникален и каждый дизайн рассказывает свою историю. Мы убеждены, что хороший дизайн не только выделяется, но и способствует росту бизнеса.",
     menu_paragraph: "BtoB Design Studio — где идеи обретают форму, цвета говорят сами за себя, а дизайн становится искусством. Мы создаём бренды, которые не забываются.",
     menu_info:"BtoB Design — это современная дизайн-студия, которая помогает компаниям создать сильный, заслуживающий доверия и привлекательный образ в цифровой среде. Мы разрабатываем лаконичные, продуманные и функциональные дизайн-решения, от веб-сайтов и брендинга до удобных пользовательских интерфейсов.Цель BtoB Design — не только создавать красивый дизайн, но и помогать компаниям расти, выделяться среди конкурентов и внушать доверие своим клиентам.",
  menu_brand:"Ваш бренд — это не просто бизнес, это история, стиль и ценность. Мы помогаем сделать эту историю видимой, впечатляющей и запоминающейся. Выберите услугу, которая повысит силу вашего бренда, укрепит ваше присутствие на рынке и завоюет доверие ваших клиентов. Мы создаем дизайны, которые не только красивы, но и работают на ваш успех. ✨ Готовы вывести свой бренд на новый уровень? Свяжитесь с нами сегодня для бесплатной консультации." ,
    },
  fr: {
    menu_home: "MAISON",
    menu_about: "À PROPOS DE NOUS",
    menu_services: "SERVICES",
    menu_portfolio: "PORTEFEUILLE",
    menu_blog: "BLOGUE",
    menu_contact: "CONTACTS",
     menu_click: "Plus",
          menu_about1:"Bienvenue chez BtoB Design Studio, un lieu où créativité et technologie se rencontrent. Nous nous efforçons de fournir à nos clients non seulement un design esthétique, mais aussi des solutions pratiques et efficaces qui concrétisent leur vision d'entreprise.",
     menu_about2:"Notre équipe allie créativité, normes visuelles modernes et exigences commerciales pour créer un design mémorable, efficace et convivial.",
     menu_about3:"Chez BtoB Design Studio, nous sommes convaincus que chaque projet est unique et que chaque design raconte une histoire. Nous croyons fermement qu'un design réussi permet non seulement de se démarquer, mais aussi de stimuler la croissance de l'entreprise.",
     menu_paragraph: "Studio de design BtoB — où les idées prennent forme, les couleurs s'expriment et le design devient art. Nous créons des marques inoubliables.",
  menu_info:"BtoB Design est un studio de design moderne qui aide les entreprises à se forger une présence numérique forte, crédible et attrayante. Nous créons des solutions de design épurées, réfléchies et fonctionnelles, des sites web à l'identité visuelle en passant par les interfaces utilisateur intuitives.L'objectif de BtoB Design n'est pas seulement de créer de beaux designs, mais aussi d'accompagner les entreprises dans leur croissance, de les aider à se démarquer de la concurrence et à inspirer confiance à leurs clients.",
   menu_brand:"Votre marque, c'est bien plus qu'une entreprise : c'est une histoire, un style, des valeurs. Nous vous aidons à donner de la visibilité à cette histoire, à la rendre percutante et mémorable. Choisissez le service qui renforcera la puissance de votre marque, consolidera votre présence sur le marché et instaurera une relation de confiance avec vos clients. Nous créons des designs à la fois esthétiques et performants, qui contribuent à votre succès. ✨ Prêt(e) à propulser votre marque vers de nouveaux sommets ? Contactez-nous dès aujourd'hui pour une consultation gratuite." ,
},
  ger: {
    menu_home: "STARTSEITE",
    menu_about: "ÜBER UNS",
    menu_services: "DIENSTLEISTUNGEN",
    menu_portfolio: "PORTFOLIO",
    menu_blog: "BLOG",
    menu_contact: "KONTAKT",
     menu_click: "Mehr",
     menu_about1:"Willkommen im BtoB Design Studio, wo Kreativität und Technologie aufeinandertreffen. Wir streben danach, unseren Kunden nicht nur ästhetisch ansprechendes Design, sondern auch praktische und effektive Lösungen zu bieten, die Ihre Geschäftsvision verwirklichen.",
     menu_about2:"Unser Team vereint einen kreativen Ansatz, moderne visuelle Standards und geschäftliche Anforderungen, um ein Design zu schaffen, das einprägsam, effektiv und benutzerfreundlich ist.",
     menu_about3:"Wir bei BtoB Design Studio sind überzeugt, dass jedes Projekt einzigartig ist und jedes Design eine Geschichte erzählt. Wir glauben, dass gutes Design nicht nur heraussticht, sondern auch das Geschäftswachstum fördert.",
     menu_paragraph: "BtoB Design Studio –wo Ideen Gestalt annehmen,Farben sprechen und Design zur Kunst wird.Wir schaffen Marken,die in Erinnerung bleiben.",
 menu_info:"BtoB Design ist ein modernes Designstudio, das Unternehmen zu einem starken, glaubwürdigen und attraktiven digitalen Auftritt verhilft. Wir entwickeln klare, durchdachte und funktionale Designlösungen – von Websites und Branding bis hin zu benutzerfreundlichen Oberflächen. Das Ziel von BtoB Design ist es, nicht nur ästhetisch ansprechende Designs zu kreieren, sondern Unternehmen auch beim Wachstum zu unterstützen, sie von der Konkurrenz abzuheben und das Vertrauen ihrer Kunden zu stärken.",
  menu_brand:"Ihre Marke ist mehr als nur ein Unternehmen – sie ist eine Geschichte, ein Stil und ein Wert. Wir helfen Ihnen, diese Geschichte sichtbar, wirkungsvoll und einprägsam zu machen. Wählen Sie den Service, der Ihre Marke stärkt, Ihre Marktpräsenz festigt und das Vertrauen Ihrer Kunden gewinnt. Wir entwickeln Designs, die nicht nur schön sind, sondern auch zu Ihrem Erfolg beitragen. ✨ Sind Sie bereit, Ihre Marke auf die nächste Stufe zu heben? Kontaktieren Sie uns noch heute für ein kostenloses Beratungsgespräch." ,
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