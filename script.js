
const langToggle = document.getElementById("langToggle");

let currentLang = "en";

const translations = {
    en: {
        nav: ["Home", "About", "Skills", "Services", "Projects", "Contact"],
        welcome: "AVAILABLE FOR PROJECTS",
        greeting: "Hi, I'm",
        role: "Programming & Web Developer",
        description: "I build modern, responsive websites that turn ideas into clear and engaging digital experiences.",
        explore: "Explore My Work ↗",
        contact: "Contact Me"
    },

    ar: {
        nav: ["الرئيسية", "من أنا", "مهاراتي", "خدماتي", "مشاريعي", "تواصل"],
        welcome: "متاح لتنفيذ المشاريع",
        greeting: "أهلاً، أنا",
        role: "مطور برمجيات ومواقع ويب",
        description: "أنفذ مواقع ويب حديثة ومتجاوبة، وأحوّل الأفكار إلى تجارب رقمية واضحة وجذابة.",
        explore: "شاهد مشاريعي ↗",
        contact: "تواصل معي"
    }
};

function changeLanguage() {

    currentLang = currentLang === "en" ? "ar" : "en";

    const lang = translations[currentLang];

    document.documentElement.lang = currentLang;

    document.documentElement.dir =
        currentLang === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle(
        "ar",
        currentLang === "ar"
    );

    langToggle.textContent =
        currentLang === "en" ? "عربي" : "English";

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link, index) => {
        link.textContent = lang.nav[index];
    });

    document.querySelector(".welcome").textContent =
        lang.welcome;

    document.querySelector(".hero h1").innerHTML =
        `${lang.greeting}<br><span>Ahmed Hosny</span>`;

    document.querySelector(".hero h2").textContent =
        lang.role;

    document.querySelector(".description").textContent =
        lang.description;

    document.querySelector(".primary").textContent =
        lang.explore;

    document.querySelector(".secondary").textContent =
        lang.contact;
}

langToggle.addEventListener("click", changeLanguage);

document.getElementById("year").textContent =
    new Date().getFullYear();
