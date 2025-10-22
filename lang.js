// ============ LANGUAGE TOGGLE SCRIPT ============

// Detect the language preference from localStorage or default to English
let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  en: {
    // Navbar
    home: "Home",
    about: "About",
    courses: "Courses",
    contact: "Contact",
    langBtn: "Arabic",

    // Hero Section
    heroTitle: "Professional Training & Consulting",
    heroDesc:
      "Enhancing skills in Contracts, Planning, Procurement & Project Management",
    exploreBtn: "Explore Courses",

    // Vision & Mission
    visionTitle: "Our Vision & Mission",
    visionHeading: "Vision",
    visionText:
      "To be a leading training and consultancy provider in projects, contracts, claims and procurement, delivering world-class knowledge and practical expertise to professionals across the region.",
    missionHeading: "Mission",
    missionText:
      "Empowering professionals and organizations with specialized training and consultancy services in project management, contracts, tendering, procurement, claims and FIDIC standards, aiming to enhance performance, reduce risks and achieve successful project delivery.",

    // Courses Section
    featuredCourses: "Featured Courses",
    contractTitle: "Contract Management",
    contractDesc: "Introductory course in contract management.",
    claimsTitle: "Claims Management",
    claimsDesc: "Learn the essentials of claims and dispute resolution.",
    fidicTitle: "FIDIC Contracts",
    fidicDesc: "Understanding FIDIC contract conditions and usage.",
    viewDetails: "View Details",

    // Stats Section
    statsSubtitle: "Trusted by professionals worldwide",
    statsTitle: "Our Achievements in Numbers",
    programs: "Training Programs",
    professionals: "Professionals Trained",
    experience: "Years of Experience",
    clients: "Corporate Clients",

    // Testimonials
    testimonialsTitle: "What Our Trainees Say",
    testimonial1:
      '"The course was very useful and full of practical knowledge. Highly recommended!"',
    trainee1: "- Eng. Ahmed Hassan",
    testimonial2:
      '"Eng. Mohamed Kamal explained everything clearly and with great real-life examples."',
    trainee2: "- Sara Ahmed",
    testimonial3:
      '"Excellent training experience that improved my project management skills."',
    trainee3: "- Omar Ali",

    // Footer
    footerTitle: "MK Training & Consulting",
    footerDesc:
      "Enhancing skills in Contracts, Planning, Procurement & Project Management",
    quickLinks: "Quick Links",
    footerHome: "Home",
    footerAbout: "About",
    footerCourses: "Courses",
    footerContact: "Contact",
    contactUs: "Contact Us",
    footerEmail: "Email: kembel67@gmail.com",
    footerPhone: "Phone: +47976622156 / +47936624021",
    rights: "© 2025 MK Training & Consulting. All rights reserved.",
  },

  ar: {
    // Navbar
    home: "الرئيسية",
    about: "من نحن",
    courses: "الدورات",
    contact: "تواصل معنا",
    langBtn: "English",

    // Hero Section
    heroTitle: "التدريب والاستشارات المهنية",
    heroDesc:
      "نرتقي بمهاراتك في العقود والتخطيط والمشتريات وإدارة المشاريع",
    exploreBtn: "استعرض الدورات",

    // Vision & Mission
    visionTitle: "رؤيتنا ورسالتنا",
    visionHeading: "الرؤية",
    visionText:
      "أن نكون من أبرز مزودي التدريب والاستشارات في مجالات المشاريع والعقود والمطالبات والمشتريات، مع تقديم المعرفة والخبرة العملية بمستوى عالمي للمهنيين في المنطقة.",
    missionHeading: "الرسالة",
    missionText:
      "تمكين المهنيين والمنظمات من خلال التدريب والاستشارات المتخصصة في إدارة المشاريع والعقود والعطاءات والمشتريات والمطالبات ومعايير الفيديك، بهدف رفع الأداء وتقليل المخاطر وتحقيق نجاح المشاريع.",

    // Courses Section
    featuredCourses: "الدورات المميزة",
    contractTitle: "إدارة العقود",
    contractDesc: "دورة تمهيدية في إدارة العقود.",
    claimsTitle: "إدارة المطالبات",
    claimsDesc: "تعلّم أساسيات إدارة المطالبات وتسوية النزاعات.",
    fidicTitle: "عقود الفيديك",
    fidicDesc: "فهم شروط عقود الفيديك وكيفية تطبيقها.",
    viewDetails: "عرض التفاصيل",

    // Stats Section
    statsSubtitle: "موثوق من قبل المهنيين حول العالم",
    statsTitle: "إنجازاتنا بالأرقام",
    programs: "برامج تدريبية",
    professionals: "مهنيون تم تدريبهم",
    experience: "سنوات من الخبرة",
    clients: "عملاء من الشركات",

    // Testimonials
    testimonialsTitle: "ماذا يقول متدربونا",
    testimonial1:
      "كانت الدورة مفيدة جدًا وغنية بالمعرفة العملية. أنصح بها بشدة!",
    trainee1: "- م. أحمد حسن",
    testimonial2:
      "شرح م. محمد كمال كل شيء بوضوح مع أمثلة واقعية رائعة.",
    trainee2: "- سارة أحمد",
    testimonial3:
      "تجربة تدريب ممتازة ساعدتني على تطوير مهاراتي في إدارة المشاريع.",
    trainee3: "- عمر علي",

    // Footer
    footerTitle: "إم كيه للتدريب والاستشارات",
    footerDesc:
      "نرتقي بمهاراتك في العقود والتخطيط والمشتريات وإدارة المشاريع",
    quickLinks: "روابط سريعة",
    footerHome: "الرئيسية",
    footerAbout: "من نحن",
    footerCourses: "الدورات",
    footerContact: "تواصل معنا",
    contactUs: "تواصل معنا",
    footerEmail: "البريد الإلكتروني: kembel67@gmail.com",
    footerPhone: "الهاتف: ‎+47976622156 / ‎+47936624021",
    rights: "© 2025 إم كيه للتدريب والاستشارات. جميع الحقوق محفوظة.",
  },
};

// Function to change text content
function translatePage(lang) {
  document.querySelector("html").dir = lang === "ar" ? "rtl" : "ltr";

  for (const key in translations[lang]) {
    const el = document.querySelector(`[data-key='${key}']`);
    if (el) el.textContent = translations[lang][key];
  }

  localStorage.setItem("lang", lang);
  currentLang = lang;
}

// Event listener for button click
document.addEventListener("DOMContentLoaded", () => {
  translatePage(currentLang);

  const btn = document.getElementById("lang-btn");
  if (btn) {
    btn.textContent = translations[currentLang].langBtn;
    btn.addEventListener("click", () => {
      const newLang = currentLang === "en" ? "ar" : "en";
      translatePage(newLang);
      btn.textContent = translations[newLang].langBtn;
    });
  }
});

