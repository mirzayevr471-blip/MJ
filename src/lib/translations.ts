export type Lang = "uz" | "ru" | "en";

export const translations = {
  uz: {
    // Navigation
    nav: {
      about: "Men Haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Bog'lanish",
    },
    // Hero
    hero: {
      greeting: "Salom, men",
      subtitle: "Flutter Developer • Python Developer • UI/UX Designer",
      description:
        "Men chiroyli mobil ilovalar, zamonaviy veb-saytlar, Telegram botlar, avtomatlashtirish tizimlari va aqlli IoT yechimlarini yarataman.",
      viewProjects: "Loyihalar",
      downloadResume: "Rezyume Yuklab Olish",
    },
    // About
    about: {
      title: "Men Haqimda",
      p1: "Men ixtirochi va chiroyli raqamli mahsulotlar yaratishga qiziqadigan <strong>Dasturchi va UI/UX Dizayner</strong>man.",
      p2: "Mening tajribam Flutter bilan mobil dasturlash, Python bilan backend arxitekturasi va intuitiv foydalanuvchi interfeyslarini yaratishni o'z ichiga oladi.",
      p3: "Cross-platform mobil ilova, aqlli Telegram bot yoki Arduino va ESP32 yordamida IoT yechimi bo'lsin — har bir loyihaga toza arxitektura va muammolarni hal qilish mentalitetini olib kelaman.",
      card1Title: "Mobil va Veb",
      card1Desc: "Flutter va Next.js bilan cross-platform mukammallik",
      card2Title: "Backend va Botlar",
      card2Desc: "Python bilan mustahkam API va avtomatlashtirish",
      card3Title: "IoT va Hardware",
      card3Desc: "Arduino va ESP32 bilan aqlli qurilmalar",
    },
    // Skills
    skills: {
      title: "Ko'nikmalar",
    },
    // Services
    services: {
      title: "Mening Xizmatlarim",
      learnMore: "Batafsil",
      items: [
        {
          title: "Flutter Ilova Ishlab Chiqish",
          description:
            "iOS va Android uchun chiroyli UI bilan yuqori samarali cross-platform mobil ilovalar.",
        },
        {
          title: "Python Dasturlash",
          description:
            "Mustahkam backend tizimlar, avtomatlashtirish skriptlari va ma'lumotlarni qayta ishlash yechimlari.",
        },
        {
          title: "UI/UX Dizayn",
          description:
            "Figma'da foydalanuvchi markazlashgan yondashuv bilan yaratilgan hayratlanarli va intuitiv interfeyslar.",
        },
        {
          title: "Telegram Botlar",
          description:
            "Maxsus mantiq, API integratsiyalari va xavfsiz to'lov tizimlari bilan ilg'or Telegram botlar.",
        },
        {
          title: "Arduino va IoT",
          description:
            "ESP32 va Arduino yordamida aqlli apparat yechimlari va ulangan qurilmalar.",
        },
        {
          title: "Backend va API-lar",
          description:
            "Django, FastAPI va Node.js yordamida kengaytiriladigan REST va GraphQL API-lar.",
        },
      ],
    },
    // Projects
    projects: {
      title: "Asosiy Loyihalar",
      all: "Barchasi",
      items: [
        {
          title: "E-Commerce Mobil Ilova",
          description:
            "To'lov integratsiyasi va real vaqtdagi buyurtma kuzatuvi bilan to'liq funksiyali e-commerce ilovasi.",
        },
        {
          title: "Aqlli Uy Boshqaruvi",
          description:
            "Aqlli uy jihozlarini masofadan kuzatish va boshqarish uchun IoT paneli.",
        },
        {
          title: "AI Qo'llab-quvvatlash Boti",
          description:
            "ChatGPT yordamida 24/7 mijozlarga xizmat ko'rsatadigan aqlli Telegram bot.",
        },
      ],
    },
    // Experience
    experience: {
      title: "Tajriba",
      items: [
        {
          role: "Katta Flutter Dasturchi",
          description:
            "Mobil dasturlash jamoasini boshqarish, toza arxitektura va ilg'or animatsiyalar bilan yuqori darajada kengaytiriladigan cross-platform ilovalar yaratish.",
        },
        {
          role: "Full Stack Dasturchi",
          description:
            "Mijozlar uchun bir nechta Telegram botlar, e-commerce platformalar va maxsus Python avtomatlashtirish vositalarini ishlab chiqish va joylashtirish.",
        },
        {
          role: "IoT Muhandisi (Stajyor)",
          description:
            "Aqlli uy prototiplari uchun ESP32 mikrokontrollerlar va Arduino platalarini dasturlash, real vaqtdagi aloqa uchun MQTT integratsiyasi.",
        },
      ],
    },
    // Stats
    stats: {
      title: "Raqamlar Gapiradi",
      items: [
        { label: "Tugallangan Loyihalar" },
        { label: "Mamnun Mijozlar" },
        { label: "Kod Satrlari" },
        { label: "Yil Tajriba" },
        { label: "App Nashr Etilgan" },
        { label: "Bot Ishlab Chiqilgan" },
        { label: "Dizayn Yaratilgan" },
        { label: "Qahva Ichilgan" },
      ],
    },
    // Testimonials
    testimonials: {
      title: "Mijozlar Fikri",
      items: [
        "Johongir bilan ishlash ajoyib tajriba bo'ldi. U bizning Flutter ilovamizni rekord vaqt ichida yaratib, sifat va dizayn jihatdan kutganlarimizdan ham yaxshiroq natija ko'rsatdi.",
        "Telegram botimizni ishlab chiqdi va bu biznes jarayonlarimizni avtomatlashtirdi. Juda professional va mas'uliyatli mutaxassis!",
        "ESP32 va Arduino asosidagi smart qurilmamizni loyihalashtirishda Johongir juda katta yordam berdi. Texnik bilimlari va ijodkorligi bilan ajralib turadi.",
      ],
    },
    // Contact
    contact: {
      title: "Bog'laning",
      subtitle: "Keling, birgalikda ishlaylik!",
      description:
        "Yangi loyiha, hamkorlik yoki shunchaki salom demoqchimisiz — men doim ochiqman. Xabaringizga tezda javob beraman!",
      phone: "Telefon",
      location: "Joylashuv",
      locationValue: "Toshkent, O'zbekiston",
      telegramCta: "Telegram orqali yozing",
      formName: "Ism *",
      formNamePlaceholder: "Ismingiz",
      formEmail: "Email *",
      formMessage: "Xabar *",
      formMessagePlaceholder: "Xabaringizni yozing...",
      formSend: "Xabar Yuborish",
      formSending: "Yuborilmoqda...",
      successTitle: "Xabar yuborildi!",
      successDesc:
        "Tez orada siz bilan bog'lanaman. Telegram orqali ham yozishingiz mumkin.",
      successBtn: "Yana yuborish",
      errorDefault: "Xatolik yuz berdi",
    },
    // Footer
    footer: {
      quickLinks: "Tezkor Havolalar",
      contact: "Aloqa",
      rights: "Barcha huquqlar himoyalangan.",
      scrollTop: "↑ Yuqoriga",
      links: [
        { label: "Bosh Sahifa", href: "#" },
        { label: "Men Haqimda", href: "#about" },
        { label: "Ko'nikmalar", href: "#skills" },
        { label: "Xizmatlar", href: "#services" },
        { label: "Loyihalar", href: "#projects" },
        { label: "Bog'lanish", href: "#contact" },
      ],
    },
  },

  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакт",
    },
    hero: {
      greeting: "Привет, я",
      subtitle: "Flutter Разработчик • Python Разработчик • UI/UX Дизайнер",
      description:
        "Я создаю красивые мобильные приложения, современные веб-сайты, Telegram боты, системы автоматизации и умные IoT решения.",
      viewProjects: "Проекты",
      downloadResume: "Скачать Резюме",
    },
    about: {
      title: "Обо мне",
      p1: "Я страстный <strong>Разработчик и UI/UX Дизайнер</strong> с неуёмным стремлением создавать инновационные и красивые цифровые продукты.",
      p2: "Мои навыки охватывают мобильную разработку на Flutter, backend архитектуру на Python и создание интуитивных пользовательских интерфейсов.",
      p3: "Будь то кроссплатформенное мобильное приложение, умный Telegram бот или IoT решение на Arduino и ESP32 — я привношу чистую архитектуру и мышление решателя проблем.",
      card1Title: "Мобильные и Веб",
      card1Desc: "Кроссплатформенное совершенство с Flutter и Next.js",
      card2Title: "Backend и Боты",
      card2Desc: "Надёжные API и автоматизация на Python",
      card3Title: "IoT и Железо",
      card3Desc: "Умные устройства с Arduino и ESP32",
    },
    skills: {
      title: "Навыки",
    },
    services: {
      title: "Мои Услуги",
      learnMore: "Подробнее",
      items: [
        {
          title: "Разработка Flutter Приложений",
          description:
            "Высокопроизводительные кроссплатформенные мобильные приложения для iOS и Android с красивым UI.",
        },
        {
          title: "Python Разработка",
          description:
            "Надёжные backend системы, скрипты автоматизации и решения для обработки данных.",
        },
        {
          title: "UI/UX Дизайн",
          description:
            "Потрясающие и интуитивные пользовательские интерфейсы, разработанные в Figma с пользователь-центрированным подходом.",
        },
        {
          title: "Telegram Боты",
          description:
            "Продвинутые Telegram боты с кастомной логикой, API интеграциями и безопасными платёжными системами.",
        },
        {
          title: "Arduino и IoT",
          description:
            "Умные аппаратные решения и подключённые устройства на ESP32 и Arduino.",
        },
        {
          title: "Backend и API",
          description:
            "Масштабируемые REST и GraphQL API на Django, FastAPI и Node.js.",
        },
      ],
    },
    projects: {
      title: "Избранные Проекты",
      all: "Все",
      items: [
        {
          title: "Мобильный E-Commerce",
          description:
            "Полнофункциональное e-commerce приложение с интеграцией платежей и отслеживанием заказов в реальном времени.",
        },
        {
          title: "Панель Умного Дома",
          description:
            "IoT панель для мониторинга и управления умной бытовой техникой удалённо.",
        },
        {
          title: "AI Бот Поддержки",
          description:
            "Умный Telegram бот на базе ChatGPT, предоставляющий поддержку клиентов 24/7.",
        },
      ],
    },
    experience: {
      title: "Опыт Работы",
      items: [
        {
          role: "Старший Flutter Разработчик",
          description:
            "Руководство командой мобильной разработки, создание высокомасштабируемых кроссплатформенных приложений с чистой архитектурой и продвинутыми анимациями.",
        },
        {
          role: "Full Stack Разработчик",
          description:
            "Разработка и развёртывание нескольких Telegram ботов, e-commerce платформ и кастомных Python инструментов автоматизации для клиентов.",
        },
        {
          role: "Стажёр IoT Инженер",
          description:
            "Программирование микроконтроллеров ESP32 и плат Arduino для прототипов умного дома, интеграция MQTT для коммуникации в реальном времени.",
        },
      ],
    },
    stats: {
      title: "Цифры Говорят",
      items: [
        { label: "Завершённых Проектов" },
        { label: "Довольных Клиентов" },
        { label: "Строк Кода" },
        { label: "Лет Опыта" },
        { label: "Опубликованных App" },
        { label: "Созданных Ботов" },
        { label: "Дизайнов" },
        { label: "Чашек Кофе" },
      ],
    },
    testimonials: {
      title: "Отзывы Клиентов",
      items: [
        "Работать с Джахонгиром было замечательным опытом. Он создал наше Flutter приложение в рекордные сроки, превзойдя все наши ожидания по качеству и дизайну.",
        "Разработал нашего Telegram бота, что автоматизировало наши бизнес-процессы. Очень профессиональный и ответственный специалист!",
        "Джахонгир оказал огромную помощь в проектировании нашего умного устройства на ESP32 и Arduino. Выделяется техническими знаниями и творческим подходом.",
      ],
    },
    contact: {
      title: "Связаться",
      subtitle: "Давайте работать вместе!",
      description:
        "Новый проект, сотрудничество или просто хотите поздороваться — я всегда открыт. Отвечу на ваше сообщение быстро!",
      phone: "Телефон",
      location: "Местоположение",
      locationValue: "Ташкент, Узбекистан",
      telegramCta: "Написать в Telegram",
      formName: "Имя *",
      formNamePlaceholder: "Ваше имя",
      formEmail: "Email *",
      formMessage: "Сообщение *",
      formMessagePlaceholder: "Напишите ваше сообщение...",
      formSend: "Отправить Сообщение",
      formSending: "Отправка...",
      successTitle: "Сообщение отправлено!",
      successDesc:
        "Скоро свяжусь с вами. Вы также можете написать в Telegram.",
      successBtn: "Отправить ещё",
      errorDefault: "Произошла ошибка",
    },
    footer: {
      quickLinks: "Быстрые Ссылки",
      contact: "Контакт",
      rights: "Все права защищены.",
      scrollTop: "↑ Наверх",
      links: [
        { label: "Главная", href: "#" },
        { label: "Обо мне", href: "#about" },
        { label: "Навыки", href: "#skills" },
        { label: "Услуги", href: "#services" },
        { label: "Проекты", href: "#projects" },
        { label: "Контакт", href: "#contact" },
      ],
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: "Flutter Developer • Python Developer • UI/UX Designer",
      description:
        "I design and build beautiful mobile applications, modern websites, Telegram bots, automation systems, and smart IoT solutions with clean architecture.",
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
    },
    about: {
      title: "About Me",
      p1: "I am a passionate <strong>Software Developer and UI/UX Designer</strong> with a relentless drive for building innovative and beautiful digital products.",
      p2: "My expertise spans across mobile development with Flutter, backend architecture with Python, and crafting intuitive user interfaces.",
      p3: "Whether it's a cross-platform mobile app, a smart Telegram bot, or an IoT solution using Arduino and ESP32, I bring a clean architecture and a problem-solving mindset to every project.",
      card1Title: "Mobile & Web",
      card1Desc: "Cross-platform excellence with Flutter and Next.js",
      card2Title: "Backend & Bots",
      card2Desc: "Robust APIs and automation with Python",
      card3Title: "IoT & Hardware",
      card3Desc: "Smart device programming with Arduino & ESP32",
    },
    skills: {
      title: "Skills",
    },
    services: {
      title: "My Services",
      learnMore: "Learn More",
      items: [
        {
          title: "Flutter App Development",
          description:
            "High-performance cross-platform mobile apps for iOS and Android with beautiful UIs.",
        },
        {
          title: "Python Development",
          description:
            "Robust backend systems, automation scripts, and data processing solutions.",
        },
        {
          title: "UI/UX Design",
          description:
            "Stunning and intuitive user interfaces designed in Figma with user-centric approach.",
        },
        {
          title: "Telegram Bots",
          description:
            "Advanced Telegram bots with custom logic, API integrations, and secure payment systems.",
        },
        {
          title: "Arduino & IoT",
          description:
            "Smart hardware solutions and connected devices using ESP32 and Arduino.",
        },
        {
          title: "Backend & APIs",
          description:
            "Scalable REST and GraphQL APIs using Django, FastAPI, and Node.js.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      all: "All",
      items: [
        {
          title: "E-Commerce Mobile App",
          description:
            "A full-featured e-commerce app with payment integration and real-time order tracking.",
        },
        {
          title: "Smart Home Dashboard",
          description:
            "IoT dashboard for monitoring and controlling smart home appliances remotely.",
        },
        {
          title: "AI Support Bot",
          description:
            "An intelligent Telegram bot that provides 24/7 customer support using ChatGPT.",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Senior Flutter Developer",
          description:
            "Leading the mobile development team, building highly scalable cross-platform applications with clean architecture and advanced animations.",
        },
        {
          role: "Full Stack Developer",
          description:
            "Developed and deployed multiple Telegram bots, e-commerce platforms, and custom Python automation tools for clients.",
        },
        {
          role: "IoT Engineer Intern",
          description:
            "Programmed ESP32 microcontrollers and Arduino boards for smart home prototypes, integrating MQTT for real-time communication.",
        },
      ],
    },
    stats: {
      title: "Numbers Speak",
      items: [
        { label: "Projects Completed" },
        { label: "Happy Clients" },
        { label: "Lines of Code" },
        { label: "Years Experience" },
        { label: "Apps Published" },
        { label: "Bots Built" },
        { label: "Designs Created" },
        { label: "Coffees Consumed" },
      ],
    },
    testimonials: {
      title: "Client Reviews",
      items: [
        "Working with Jahongir was an amazing experience. He built our Flutter app in record time, exceeding our expectations in both quality and design.",
        "He developed our Telegram bot which automated our business processes. A very professional and responsible specialist!",
        "Jahongir helped tremendously in designing our smart device based on ESP32 and Arduino. He stands out with his technical knowledge and creativity.",
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Work Together!",
      description:
        "New project, collaboration, or just want to say hello — I'm always open. I'll respond to your message quickly!",
      phone: "Phone",
      location: "Location",
      locationValue: "Tashkent, Uzbekistan",
      telegramCta: "Message on Telegram",
      formName: "Name *",
      formNamePlaceholder: "Your Name",
      formEmail: "Email *",
      formMessage: "Message *",
      formMessagePlaceholder: "Write your message...",
      formSend: "Send Message",
      formSending: "Sending...",
      successTitle: "Message Sent!",
      successDesc:
        "I'll get back to you soon. You can also write to me on Telegram.",
      successBtn: "Send Another",
      errorDefault: "An error occurred",
    },
    footer: {
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved.",
      scrollTop: "↑ Back to Top",
      links: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
} as const;
