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
    menu_about1:
      "Բարի գալուստ BtoB Design Studio–ին՝ ստեղծարարության և տեխնոլոգիայի հանդիպման վայր: Մենք ձգտում ենք տալ մեր հաճախորդներին ոչ միայն գեղեցիկ դիզայն, այլ նաև գործնական ու արդյունավետ լուծումներ, որոնքիրականացնում են ձեր բիզնեսի տեսլականը:",
    menu_about2:
      "Մեր թիմը համատեղում է ստեղծագործ մոտեցումը, ժամանակակից վիզուալ ստանդարտները և բիզնեսի պահանջները՝ ստեղծելով դիզայն, որը հիշվող է, էֆեկտիվ և հարմարավետ օգտագործման համար:",
    menu_about3:
      " BtoB Design Studio–ում մենք հավատում ենք, որ յուրաքանչյուր պրոյեկտ յուրահատուկ է, և յուրաքանչյուր դիզայն պատմություն է պատմելու: Մենք  վստահ ենք, որ լավ դիզայնը ոչ միայն աչքի է ընկնում, այլև բիզնեսին աճ ապահովում:",
    menu_paragraph:
      "BtoB Design Studio —որտեղ գաղափարները ձև են ստանում,գույները խոսում են,իսկ դիզայնը դառնում է արվեստ։Մենք կառուցում ենք բրենդներ,որոնք չեն մոռացվում։",
    menu_info:
      "BtoB Design-ը ժամանակակից դիզայն ստուդիա է, որը օգնում է բիզնեսներին ունենալ ուժեղ, վստահելի և գրավիչ տեսք թվային միջավայրում։ Մենք ստեղծում ենք մաքուր, մտածված և ֆունկցիոնալ դիզայն լուծումներ՝ սկսած վեբ կայքերից ու բրենդինգից մինչև օգտատիրոջ համար հարմար ինտերֆեյսներ։BtoB Design-ի նպատակն է ոչ միայն գեղեցիկ դիզայն ստեղծել, այլև օգնել բիզնեսին աճել, առանձնանալ մրցակիցներից և վստահություն ներշնչել իր հաճախորդներին",
    menu_brand:
      "Ձեր բրենդը պարզապես բիզնես չէ — այն պատմություն է, ոճ և արժեք։Մենք օգնում ենք այդ պատմությունը դարձնել տեսանելի, ազդեցիկ և հիշվող։Ընտրեք այն ծառայությունը, որը կբարձրացնի ձեր բրենդի ուժը, կուժեղացնի ձեր ներկայությունը շուկայում և կստեղծի վստահություն ձեր հաճախորդների մոտ։Մենք ստեղծում ենք դիզայն, որը ոչ միայն գեղեցիկ է, այլև աշխատում է ձեր հաջողության համար։✨ Պատրա՞ստ եք բարձրացնել ձեր բրենդը նոր մակարդակի։Կապվեք մեզ հետ այսօր և ստացեք անվճար խորհրդատվություն։",
    menu_nameing: "ԱՆՎԱՆԱԿՈՉՈՒՄ",
    menu_logo: "ԼՈԳՈՅԻ ԴԻԶԱՅՆ",
    menu_branding: "ԲՐԵՆԴԱՎՈՐՈՒՄ",
    menu_packing: "ՓԱԹԵԹԱՎՈՐՈՒՄ",
    menu_brandunder: "ՎԵՐԱԲՐԵՆԴԱՎՈՐՈՒՄ ԵՎ ՎԵՐԱՁԵԱՎՈՐՈՒՄ",
    menu_uiux: "UI/UX ԴԻԶԱՅՆ",
    menu_friendfirma: "ՄԵՐ ՀԱՃԱԽՈՐԴՆԵՐԸ",
    menu_call: "ԿԱՊ",
    menu_contact1: "Կոնտակտային Տվյալներ",
    menu_contact2: "Հասցե․",
    menu_contact3:
      "ՀՀ, Կոտայքի մարզ, գ Քասախ, Վահան Տերյանի 13-րդ փողոց տուն 1",
    menu_contact4: "Հեռ․",
    menu_contact5: "Էլ․հասցե",
    menu_contact6: "Դիզայն, որը ձևավորում է հաջողությունը",
    menu_menu: "Մենյու",
    menu_contact1: "Կապ մեզ հետ",
    menu_hours: "Աշխատանքային ժամեր",
    menu_hours1: "Երկուշաբթի - Ուրբաթ",
    menu_hours2: "Ընդմիջում 13։00-14։00",
    copyright: "© 2025 BtoB.am Բոլոր իրավունքները պաշտպանված են։",
    menu_day: "Օրակարգային Ստեղծում",
    menu_day1: "Մասնագիտական Խորհրդատվություն",
    menu_day2: "Համակարգված փորձարկում",
    menu_day3: "Արդյունքերի Վերլուծում",
    menu_day4: "Երկարաժամկետ Համագործակցություն",
    menu_day5: "Ժամանակակից Մեթոդաբանություն",
    menu_day6: "Ճկուն և Արագ Իրականացում",
    menu_team:
      "Մեր թիմը բաղկացած է փորձառու մասնագետներից, որոնք յուրաքանչյուրը տիրապետում է իր ոլորտին և միասին ապահովում են համալիր լուծումներ՝ ժամանակին և բարձր որակով։",
    menu_team1: "Թիմ",
    menu_team2: "Ինչու՞ ընտրել մեզ",
    menu_team3:
      " Մենք չենք ստեղծում միայն գեղեցիկ դիզայն. Մենք ստեղծում ենք        պատմություններ, որոնք հնչում են, հիշվում և խթանում են ձեր բիզնեսի աճը.        Յուրաքանչյուր նախագիծ մեր համար բացառիկ է. մենք ուսումնասիրում ենք ձեր    տեսլականը, լսում ձեր նպատակները և կյանքի ենք կոչում գաղափարները, որոնք        առանձնանում են և աչքի են ընկնում շուկայում. Մեր թիմը համատեղում է       ստեղծարարություն, նորարարություն և ժամանակակից տեխնոլոգիաներ՝ ստեղծելով        դիզայն, որը միավորում է գեղեցկությունն ու գործնականությունը. Մենք        կենտրոնացած ենք յուրաքանչյուր մանրամասնության վրա, քանի որ գիտենք, որ        մեծ տպավորությունը սկսվում է փոքր իրերից. Ընտրելով BtoB Design Studio         դուք ստանում եք ոչ միայն պրոֆեսիոնալ դիզայն, այլև վստահելի գործընկեր,       որը անմիջապես հասկանում է ձեր բիզնեսի խնդիրները և առաջարկում լուծումներ,  որոնք գործում են: Մենք հավատում ենք, որ լավ դիզայնը փոխում է percept-ի,        ստեղծում արժեք և ապահովում երկարաժամկետ հաջողություն:",
    menu_interier: "ԻՆՏԵՐԻԵՐ ԴԻԶԱՅՆ",
    menu_grafik: "Գրաֆիկական դիզայներներ",
    menu_dev: "Ծրագրավորող",
    menu_devname: "Ալիկ Հակոբյան",
    menu_servicesall:
      "Մեր ծառայությունները ստեղծված են՝ օգնելու բիզնեսներին աճել,առանձնանալ  և կառուցել վստահելի բրենդային ներկայություն։",
    menu_allservice: "ԲՈԼՈՐԸ",
    menu_work:
      "Մեր աշխատանքները ներկայացնում են մեր փորձը, մեր մոտեցումը և մեր կատարած յուրաքանչյուր նախագծի նկատմամբ ունեցած պատասխանատվությունը։",
  menu_contactme:"Կապ մեզ հետ",
    menu_sms:"Թողնել հաղորդագրություն",
    menu_phone:"Հեռախոսահամար",
    menu_send:"Ուղարկել",
    },

  en: {
    menu_home: "HOME",
    menu_about: "ABOUT US",
    menu_services: "SERVICES",
    menu_portfolio: "PORTFOLIO",
    menu_blog: "BLOG",
    menu_contact: "CONTACT",
    menu_click: "More",
    menu_about1:
      "Welcome to BtoB Design Studio, a place where creativity and technology meet. We strive to provide our clients with not only beautiful design, but also practical and effective solutions that realize your business vision.",
    menu_about2:
      "Our team combines a creative approach, modern visual standards, and business requirements to create a design that is memorable, effective, and user-friendly.",
    menu_about3:
      "At BtoB Design Studio, we believe that every project is unique and every design has a story to tell. We believe that good design not only stands out, but also drives business growth.",
    menu_paragraph:
      "BtoB Design Studio — where ideas take shape, colors speak, and design becomes art. We build brands that are not forgotten.",
    menu_info:
      "BtoB Design is a modern design studio that helps businesses have a strong, credible and attractive appearance in the digital environment. We create clean, thoughtful and functional design solutions, from websites and branding to user-friendly interfaces.BtoB Design’s goal is not only to create beautiful design, but also to help businesses grow, stand out from the competition and inspire trust in their customers.",
    menu_brand:
      "Your brand is not just a business — it is a story, a style, and a value. We help make that story visible, impactful, and memorable. Choose the service that will increase the power of your brand, strengthen your presence in the market, and build trust with your customers. We create designs that are not only beautiful, but also work for your success. ✨ Are you ready to take your brand to the next level? Contact us today for a free consultation.",
    menu_nameing: "Brand naming",
    menu_logo: "LOGO DESIGN",
    menu_branding: "BRANDING",
    menu_packing: "PACKAGING",
    menu_brandunder: "REBRANDING AND REDESIGNING",
    menu_uiux: "UI/UX DESIGN",
    menu_friendfirma: "OUR CUSTOMERS",
    menu_call: "CONTACT",
    menu_contact1: "Contact Information",
    menu_contact2: "Address:",
    menu_contact3:
      "RA, Kotayk region, village Kasakh, Vahan Teryan 13th street house 1",
    menu_contact4: "Tel.",
    menu_contact5: "Email address",
    menu_contact6: "Design that shapes success",
    menu_menu: "Menu",
    menu_contact: "Contact us",
    menu_hours: "Working hours",
    menu_hours1: "Monday - Friday",
    menu_hours2: "Break 13:00-14:00",
    copyright: "© 2025 BtoB.am All rights reserved.",
    menu_day: "Agenda Creation",
    menu_day1: "Professional Consulting",
    menu_day2: "Systematic testing",
    menu_day3: "Results Analysis",
    menu_day4: "Long-term Cooperation",
    menu_day5: "Modern Methodology",
    menu_day6: "Flexible and Fast Implementation",
    menu_team:
      "Our team consists of experienced specialists, each of whom is proficient in their field and together provide comprehensive solutions, timely and of high quality.",
    menu_team1: "Team",
    menu_team2: "Why choose us?",
    menu_team3:
      "We don't just create beautiful designs. We create stories that resonate, are remembered, and drive your business growth. Each project is unique to us. We study your vision, listen to your goals, and bring to life ideas that stand out and stand out in the market. Our team combines creativity, innovation, and modern technologies to create designs that combine beauty and practicality. We focus on every detail, because we know that a big impression starts with small things. By choosing BtoB Design Studio, you get not only professional design, but also a trusted partner who immediately understands your business problems and offers solutions that work. We believe that good design changes perception, creates value, and ensures long-term success.",
    menu_interier: "INTERIOR DESIGN",
    menu_grafik: "Graphic designers",
    menu_dev: "Programmer",
    menu_devname: "Alik Hakobyan",
    menu_servicesall:
      "Our services are designed to help businesses grow, stand out, and build a trusted brand presence.",
    menu_allservice: "Everyone",
    menu_work:
      "Our work represents our experience, our approach, and the responsibility we take for each project we undertake.",
  menu_contactme:"Contact us",
    menu_sms:"Leave a message",
    menu_phone:"Phone number",
    menu_send:"Send",
    },
  ru: {
    menu_home: "ГЛАВНАЯ",
    menu_about: "О НАС",
    menu_services: "УСЛУГИ",
    menu_portfolio: "ПОРТФОЛИО",
    menu_blog: "БЛОГ",
    menu_contact: "КОНТАКТЫ",
    menu_click: "Подробнее",
    menu_about1:
      "Добро пожаловать в BtoB Design Studio, место, где встречаются творчество и технологии. Мы стремимся предоставлять нашим клиентам не только красивый дизайн, но и практичные и эффективные решения, которые помогут воплотить в жизнь видение вашего бизнеса.",
    menu_about2:
      "Наша команда сочетает творческий подход, современные визуальные стандарты и требования бизнеса для создания запоминающегося, эффективного и удобного для пользователя дизайна.",
    menu_about3:
      "В BtoB Design Studio мы считаем, что каждый проект уникален и каждый дизайн рассказывает свою историю. Мы убеждены, что хороший дизайн не только выделяется, но и способствует росту бизнеса.",
    menu_paragraph:
      "BtoB Design Studio — где идеи обретают форму, цвета говорят сами за себя, а дизайн становится искусством. Мы создаём бренды, которые не забываются.",
    menu_info:
      "BtoB Design — это современная дизайн-студия, которая помогает компаниям создать сильный, заслуживающий доверия и привлекательный образ в цифровой среде. Мы разрабатываем лаконичные, продуманные и функциональные дизайн-решения, от веб-сайтов и брендинга до удобных пользовательских интерфейсов.Цель BtoB Design — не только создавать красивый дизайн, но и помогать компаниям расти, выделяться среди конкурентов и внушать доверие своим клиентам.",
    menu_brand:
      "Ваш бренд — это не просто бизнес, это история, стиль и ценность. Мы помогаем сделать эту историю видимой, впечатляющей и запоминающейся. Выберите услугу, которая повысит силу вашего бренда, укрепит ваше присутствие на рынке и завоюет доверие ваших клиентов. Мы создаем дизайны, которые не только красивы, но и работают на ваш успех. ✨ Готовы вывести свой бренд на новый уровень? Свяжитесь с нами сегодня для бесплатной консультации.",
    menu_nameing: "Нейминг",
    menu_logo: "ДИЗАЙН ЛОГОТИПА",
    menu_branding: "БРЕНДИНГ",
    menu_packing: "УПАКОВКА",
    menu_brandunder: "Ребрендинг и редизайн",
    menu_uiux: "UI/UX ДИЗАЙН",
    menu_friendfirma: "НАШИ КЛИЕНТЫ",
    menu_call: "КОНТАКТ",
    menu_contact1: "Контактная информация",
    menu_contact2: "Адрес:",
    menu_contact3:
      "РА, Котайкская область, село Касах, улица Вагана Теряна 13 дом 1",
    menu_contact4: "Тел.",
    menu_contact5: "Адрес электронной почты",
    menu_contact6: "Дизайн, определяющий успех",
    menu_menu: "Меню",
    menu_contact: "Связаться с нами",
    menu_hours: "Рабочее время",
    menu_hours1: "Понедельник - пятница",
    menu_hours2: "Перерыв 13:00-14:00",
    copyright: "© 2025 BtoB.am Все права защищены.",
    menu_day: "Создание повестки дня",
    menu_day1: "Профессиональные консультации",
    menu_day2: "Систематическое тестирование",
    menu_day3: "Анализ результатов",
    menu_day4: "Долгосрочное сотрудничество",
    menu_day5: "Современная методология",
    menu_day6: "Гибкая и быстрая реализация",
    menu_team:
      "Наша команда состоит из опытных специалистов, каждый из которых является профессионалом в своей области, и вместе мы предоставляем комплексные решения, своевременно и качественно.",
    menu_team1: "Команда",
    menu_team2: "Почему стоит выбрать именно нас?",
    menu_team3:
      "Мы не просто создаём красивые дизайны. Мы создаём истории, которые находят отклик, запоминаются и способствуют росту вашего бизнеса. Каждый проект для нас уникален. Мы изучаем ваше видение, прислушиваемся к вашим целям и воплощаем в жизнь идеи, которые выделяются и занимают особое место на рынке. Наша команда сочетает креативность, инновации и современные технологии для создания дизайнов, которые объединяют красоту и практичность. Мы уделяем внимание каждой детали, потому что знаем, что большое впечатление начинается с мелочей. Выбирая BtoB Design Studio, вы получаете не только профессиональный дизайн, но и надёжного партнёра, который сразу понимает проблемы вашего бизнеса и предлагает работающие решения. Мы верим, что хороший дизайн меняет восприятие, создаёт ценность и обеспечивает долгосрочный успех.",
    menu_interier: "ДИЗАЙН ИНТЕРЬЕРА",
    menu_grafik: "Графические дизайнеры",
    menu_dev: "Программист",
    menu_devname: "Алик Акобян",
    menu_servicesall:
      "Наши услуги призваны помочь компаниям расти, выделяться на фоне конкурентов и создавать заслуживающее доверия присутствие бренда.",
    menu_allservice: "Каждый",
    menu_work:
      "Наша работа отражает наш опыт, наш подход и ответственность, которую мы берем на себя за каждый реализуемый нами проект.",
  menu_contactme:"Связаться с нами",
  menu_sms:"Оставить сообщение",
  menu_phone:"Номер телефона",
  menu_send:"Отправлять",
    },
  fr: {
    menu_home: "MAISON",
    menu_about: "À PROPOS DE NOUS",
    menu_services: "SERVICES",
    menu_portfolio: "PORTEFEUILLE",
    menu_blog: "BLOGUE",
    menu_contact: "CONTACTS",
    menu_click: "Plus",
    menu_about1:
      "Bienvenue chez BtoB Design Studio, un lieu où créativité et technologie se rencontrent. Nous nous efforçons de fournir à nos clients non seulement un design esthétique, mais aussi des solutions pratiques et efficaces qui concrétisent leur vision d'entreprise.",
    menu_about2:
      "Notre équipe allie créativité, normes visuelles modernes et exigences commerciales pour créer un design mémorable, efficace et convivial.",
    menu_about3:
      "Chez BtoB Design Studio, nous sommes convaincus que chaque projet est unique et que chaque design raconte une histoire. Nous croyons fermement qu'un design réussi permet non seulement de se démarquer, mais aussi de stimuler la croissance de l'entreprise.",
    menu_paragraph:
      "Studio de design BtoB — où les idées prennent forme, les couleurs s'expriment et le design devient art. Nous créons des marques inoubliables.",
    menu_info:
      "BtoB Design est un studio de design moderne qui aide les entreprises à se forger une présence numérique forte, crédible et attrayante. Nous créons des solutions de design épurées, réfléchies et fonctionnelles, des sites web à l'identité visuelle en passant par les interfaces utilisateur intuitives.L'objectif de BtoB Design n'est pas seulement de créer de beaux designs, mais aussi d'accompagner les entreprises dans leur croissance, de les aider à se démarquer de la concurrence et à inspirer confiance à leurs clients.",
    menu_brand:
      "Votre marque, c'est bien plus qu'une entreprise : c'est une histoire, un style, des valeurs. Nous vous aidons à donner de la visibilité à cette histoire, à la rendre percutante et mémorable. Choisissez le service qui renforcera la puissance de votre marque, consolidera votre présence sur le marché et instaurera une relation de confiance avec vos clients. Nous créons des designs à la fois esthétiques et performants, qui contribuent à votre succès. ✨ Prêt(e) à propulser votre marque vers de nouveaux sommets ? Contactez-nous dès aujourd'hui pour une consultation gratuite.",
    menu_nameing: "Nom de marque",
    menu_logo: "CONCEPTION DE LOGO",
    menu_branding: "MARQUE",
    menu_packing: "CONDITIONNEMENT",
    menu_brandunder: "RECONVERSION DE L'IMAGE ET REPENSÉE",
    menu_uiux: "Conception UI/UX",
    menu_friendfirma: "NOS CLIENTS",
    menu_call: "CONTACT",
    menu_contact1: "Coordonnées",
    menu_contact2: "Adresse:",
    menu_contact3:
      "RA, région de Kotayk, village Kasakh, maison Vahan Teryan 13ème rue 1",
    menu_contact4: "Tél.",
    menu_contact5: "Adresse email",
    menu_contact6: "Un design qui façonne le succès",
    menu_menu: "Menu",
    menu_contact: "Contactez-nous",
    menu_hours: "Heures de travail",
    menu_hours1: "Du lundi au vendredi",
    menu_hours2: "Pause 13h00-14h00",
    copyright: "© 2025 BtoB.am Tous droits réservés.",
    menu_day: "Création de l'agenda",
    menu_day1: "Conseil professionnel",
    menu_day2: "Tests systématiques",
    menu_day3: "Analyse des résultats",
    menu_day4: "Coopération à long terme",
    menu_day5: "Méthodologie moderne",
    menu_day6: "Mise en œuvre flexible et rapide",
    menu_team:
      "Notre équipe est composée de spécialistes expérimentés, chacun expert dans son domaine, qui, ensemble, fournissent des solutions complètes, rapides et de haute qualité.",
    menu_team1: "Équipe",
    menu_team2: "Pourquoi nous choisir ?",
    menu_team3:
      "Nous ne nous contentons pas de créer de beaux designs. Nous créons des histoires qui marquent les esprits, restent gravées dans les mémoires et stimulent la croissance de votre entreprise. Chaque projet est unique. Nous étudions votre vision, nous sommes à l'écoute de vos objectifs et nous donnons vie à des idées qui se démarquent sur le marché. Notre équipe allie créativité, innovation et technologies modernes pour concevoir des designs à la fois esthétiques et fonctionnels. Nous accordons une attention particulière à chaque détail, car nous savons qu'une grande impression se forge à travers les petites attentions. En choisissant BtoB Design Studio, vous bénéficiez non seulement d'un design professionnel, mais aussi d'un partenaire de confiance qui comprend immédiatement vos problématiques et vous propose des solutions efficaces. Nous sommes convaincus qu'un bon design transforme les perceptions, crée de la valeur et garantit un succès durable.",
    menu_interier: "DESIGN D'INTÉRIEUR",
    menu_grafik: "Graphistes",
    menu_dev: "Programmeur",
    menu_devname: "Alik Hakobyan",
    menu_servicesall:
      "Nos services sont conçus pour aider les entreprises à se développer, à se démarquer et à bâtir une image de marque de confiance.",
    menu_allservice: "Tout le monde",
    menu_work:
      "Notre travail reflète notre expérience, notre approche et la responsabilité que nous assumons pour chaque projet que nous entreprenons.",
 menu_contactme:"Contactez-nous",
   menu_sms:"Laissez un message",
   menu_phone:"Numéro de téléphone",
   menu_send:"Envoyer",
    },

  ger: {
    menu_home: "STARTSEITE",
    menu_about: "ÜBER UNS",
    menu_services: "DIENSTLEISTUNGEN",
    menu_portfolio: "PORTFOLIO",
    menu_blog: "BLOG",
    menu_contact: "KONTAKT",
    menu_click: "Mehr",
    menu_about1:
      "Willkommen im BtoB Design Studio, wo Kreativität und Technologie aufeinandertreffen. Wir streben danach, unseren Kunden nicht nur ästhetisch ansprechendes Design, sondern auch praktische und effektive Lösungen zu bieten, die Ihre Geschäftsvision verwirklichen.",
    menu_about2:
      "Unser Team vereint einen kreativen Ansatz, moderne visuelle Standards und geschäftliche Anforderungen, um ein Design zu schaffen, das einprägsam, effektiv und benutzerfreundlich ist.",
    menu_about3:
      "Wir bei BtoB Design Studio sind überzeugt, dass jedes Projekt einzigartig ist und jedes Design eine Geschichte erzählt. Wir glauben, dass gutes Design nicht nur heraussticht, sondern auch das Geschäftswachstum fördert.",
    menu_paragraph:
      "BtoB Design Studio –wo Ideen Gestalt annehmen,Farben sprechen und Design zur Kunst wird.Wir schaffen Marken,die in Erinnerung bleiben.",
    menu_info:
      "BtoB Design ist ein modernes Designstudio, das Unternehmen zu einem starken, glaubwürdigen und attraktiven digitalen Auftritt verhilft. Wir entwickeln klare, durchdachte und funktionale Designlösungen – von Websites und Branding bis hin zu benutzerfreundlichen Oberflächen. Das Ziel von BtoB Design ist es, nicht nur ästhetisch ansprechende Designs zu kreieren, sondern Unternehmen auch beim Wachstum zu unterstützen, sie von der Konkurrenz abzuheben und das Vertrauen ihrer Kunden zu stärken.",
    menu_brand:
      "Ihre Marke ist mehr als nur ein Unternehmen – sie ist eine Geschichte, ein Stil und ein Wert. Wir helfen Ihnen, diese Geschichte sichtbar, wirkungsvoll und einprägsam zu machen. Wählen Sie den Service, der Ihre Marke stärkt, Ihre Marktpräsenz festigt und das Vertrauen Ihrer Kunden gewinnt. Wir entwickeln Designs, die nicht nur schön sind, sondern auch zu Ihrem Erfolg beitragen. ✨ Sind Sie bereit, Ihre Marke auf die nächste Stufe zu heben? Kontaktieren Sie uns noch heute für ein kostenloses Beratungsgespräch.",
    menu_nameing: "Markennamensgestaltung",
    menu_logo: "LOGO-DESIGN",
    menu_branding: "MARKENBILDUNG",
    menu_packing: "VERPACKUNG",
    menu_brandunder: "REBRANDING UND REDESIGNING",
    menu_uiux: "UI/UX-DESIGN",
    menu_friendfirma: "UNSERE KUNDEN",
    menu_call: "KONTAKT",
    menu_contact1: "Kontaktinformationen",
    menu_contact2: "Adresse:",
    menu_contact3:
      "RA, Region Kotayk, Dorf Kasakh, Haus in der 13. Straße von Vahan Teryan 1",
    menu_contact4: "Tel.",
    menu_contact5: "E-Mail-Adresse",
    menu_contact6: "Design, das den Erfolg prägt",
    menu_menu: "Speisekarte",
    menu_contact: "Kontaktieren Sie uns",
    menu_hours: "Arbeitszeit",
    menu_hours1: "Montag - Freitag",
    menu_hours2: "Pause 13:00-14:00",
    copyright: "© 2025 BtoB.am Alle Rechte vorbehalten.",
    menu_day: "Agendaerstellung",
    menu_day1: "Professionelle Beratung",
    menu_day2: "Systematische Prüfung",
    menu_day3: "Ergebnisanalyse",
    menu_day4: "Langfristige Zusammenarbeit",
    menu_day5: "Moderne Methodik",
    menu_day6: "Flexible und schnelle Implementierung",
    menu_team:
      "Unser Team besteht aus erfahrenen Spezialisten, die jeweils Experten auf ihrem Gebiet sind und gemeinsam umfassende, zeitnahe und qualitativ hochwertige Lösungen anbieten.",
    menu_team1: "Team",
    menu_team2: "Warum sollten Sie sich für uns entscheiden?",
    menu_team3:
      "Wir kreieren nicht nur ansprechende Designs. Wir entwickeln Geschichten, die nachwirken, im Gedächtnis bleiben und Ihr Unternehmenswachstum fördern. Jedes Projekt ist für uns einzigartig. Wir analysieren Ihre Vision, hören Ihren Zielen zu und erwecken Ideen zum Leben, die sich vom Markt abheben. Unser Team vereint Kreativität, Innovation und moderne Technologien, um Designs zu schaffen, die Schönheit und Funktionalität verbinden. Wir achten auf jedes Detail, denn wir wissen: Ein großer Eindruck entsteht durch Kleinigkeiten. Mit BtoB Design Studio erhalten Sie nicht nur professionelles Design, sondern auch einen vertrauenswürdigen Partner, der Ihre geschäftlichen Herausforderungen sofort versteht und praxiserprobte Lösungen bietet. Wir sind überzeugt: Gutes Design verändert die Wahrnehmung, schafft Mehrwert und sichert langfristigen Erfolg.",
    menu_interier: "INNENGESTALTUNG",
    menu_grafik: "Grafikdesigner",
    menu_dev: "Programmierer",
    menu_devname: "Alik Hakobyan",
    menu_servicesall:
      "Unsere Dienstleistungen sind darauf ausgelegt, Unternehmen beim Wachstum zu unterstützen, sie von der Konkurrenz abzuheben und eine vertrauenswürdige Markenpräsenz aufzubauen.",
    menu_allservice: "Alle",
    menu_work:
      "Unsere Arbeit spiegelt unsere Erfahrung, unsere Herangehensweise und die Verantwortung wider, die wir für jedes Projekt übernehmen, das wir in Angriff nehmen.",
 menu_contactme:"Kontaktieren Sie uns",
   menu_sms:"Eine Nachricht hinterlassen",
   menu_phone:"Telefonnummer",
   menu_send:"Schicken",
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
  document.querySelectorAll("[data-i18n]").forEach((el) => {
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
