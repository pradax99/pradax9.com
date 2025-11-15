// script.js

// Многоязычный контент
const translations = {
    ru: {
        // Навигация
        "nav-about": "Обо мне",
        "nav-skills": "Навыки",
        "nav-portfolio": "Портфолио",
        "nav-reviews": "Отзывы",
        "nav-contact": "Контакты",
        
        // Герой секция
        "hero-title": "Привет, меня зовут <span class='highlight'>Вася</span>",
        "hero-subtitle": "Вебдизайнер и IT-специалист",
        "hero-description": "Опыт более 5 лет. Имею большой стаж, работал много раз. Создаю современные и функциональные решения.",
        "hero-portfolio-btn": "Мои работы",
        "hero-contact-btn": "Связаться",
        
        // Обо мне
        "about-title": "Обо мне",
        "about-text1": "Я вебдизайнер и IT-специалист с более чем 5-летним опытом работы. За это время я успел поработать над множеством проектов различной сложности.",
        "about-text2": "Специализируюсь на создании современных веб-сайтов и приложений. Разрабатываю как фронтенд, так и бэкенд части проектов.",
        "about-text3": "Имею опыт работы с различными технологиями и фреймворками, что позволяет мне подбирать оптимальные решения для каждой задачи.",
        "stat-years": "Лет опыта",
        "stat-projects": "Проектов",
        "stat-clients": "Клиентов",
        
        // Навыки
        "skills-title": "Навыки",
        "skills-webdev": "Веб-разработка",
        "skills-python": "Python",
        "skills-design": "Дизайн",
        
        // Портфолио
        "portfolio-title": "Портфолио",
        "portfolio-insurance": "Сайты страхования",
        "portfolio-insurance-desc": "Разработал 3 сайта для разных клиентов в сфере страхования с адаптивным дизайном и функциональными формами.",
        "portfolio-crypto": "Криптовалютные платформы",
        "portfolio-crypto-desc": "Создал несколько сайтов, посвященных криптовалютам, с интеграцией API и интерактивными графиками.",
        "portfolio-planner": "Планировщик задач",
        "portfolio-planner-desc": "Разработал планировщик задач на Python с графическим интерфейсом и функциями напоминаний.",
        "portfolio-calculator": "Калькулятор",
        "portfolio-calculator-desc": "Создал многофункциональный калькулятор на Python с поддержкой сложных математических операций.",
        "portfolio-casino": "Игровое казино",
        "portfolio-casino-desc": "Разработал симулятор казино на Python с несколькими играми и системой виртуальной валюты.",
        "portfolio-ecommerce": "Интернет-магазин",
        "portfolio-ecommerce-desc": "Создал полнофункциональный интернет-магазин с системой оплаты и управления заказами.",
        
        // Отзывы
        "reviews-title": "Отзывы клиентов",
        "review1-text": "Вася создал для нас потрясающий сайт страхования. Работа была выполнена быстро и качественно. Рекомендую!",
        "review1-role": "Директор страховой компании",
        "review2-text": "Отличная работа над криптовалютной платформой. Все функции работают безупречно, дизайн современный и удобный.",
        "review2-role": "Основатель крипто-стартапа",
        "review3-text": "Планировщик задач, созданный Васей, значительно упростил нашу работу. Интерфейс интуитивно понятный, функционал богатый.",
        "review3-role": "Менеджер проекта",
        "review4-text": "Казино-симулятор получился очень увлекательным. Код хорошо структурирован, легко вносить изменения и добавлять новые игры.",
        "review4-role": "Разработчик игр",
        "review5-text": "Сайт, созданный Васей, помог нам привлечь новых клиентов. Дизайн современный, адаптивный, все работает быстро и без сбоев.",
        "review5-role": "Владелец бизнеса",
        "review6-text": "Калькулятор с расширенными функциями идеально подошел для наших нужд. Интерфейс удобный, расчеты точные.",
        "review6-role": "Финансовый аналитик",
        
        // Контакты
        "contact-title": "Свяжитесь со мной",
        "contact-info-title": "Информация для связи",
        "contact-email": "Email",
        "contact-phone": "Телефон",
        "contact-location": "Местоположение","contact-location-text": "Abu Dhabi , U.A.E",
        "form-name": "Имя",
        "form-email": "Email",
        "form-message": "Сообщение",
        "form-submit": "Отправить сообщение",
        
        // Футер
        "footer-text": "© 2025 prada x 9. Все права защищены."
    },
    en: {
        // Navigation
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-portfolio": "Portfolio",
        "nav-reviews": "Reviews",
        "nav-contact": "Contact",
        
        // Hero section
        "hero-title": "Hi, my name is <span class='highlight'>Vasya</span>",
        "hero-subtitle": "Web Designer & IT Specialist",
        "hero-description": "Over 5 years of experience. Extensive background, worked multiple times. Creating modern and functional solutions.",
        "hero-portfolio-btn": "My Works",
        "hero-contact-btn": "Contact Me",
        
        // About
        "about-title": "About Me",
        "about-text1": "I am a web designer and IT specialist with over 5 years of experience. During this time, I have worked on numerous projects of varying complexity.",
        "about-text2": "I specialize in creating modern websites and applications. I develop both frontend and backend parts of projects.",
        "about-text3": "I have experience with various technologies and frameworks, which allows me to select optimal solutions for each task.",
        "stat-years": "Years of Experience",
        "stat-projects": "Projects",
        "stat-clients": "Clients",
        
        // Skills
        "skills-title": "Skills",
        "skills-webdev": "Web Development",
        "skills-python": "Python",
        "skills-design": "Design",
        
        // Portfolio
        "portfolio-title": "Portfolio",
        "portfolio-insurance": "Insurance Websites",
        "portfolio-insurance-desc": "Developed 3 websites for different clients in the insurance industry with responsive design and functional forms.",
        "portfolio-crypto": "Cryptocurrency Platforms",
        "portfolio-crypto-desc": "Created several websites dedicated to cryptocurrencies with API integration and interactive charts.",
        "portfolio-planner": "Task Planner",
        "portfolio-planner-desc": "Developed a Python task planner with a graphical interface and reminder functions.",
        "portfolio-calculator": "Calculator",
        "portfolio-calculator-desc": "Created a multifunctional calculator in Python with support for complex mathematical operations.",
        "portfolio-casino": "Casino Game",
        "portfolio-casino-desc": "Developed a casino simulator in Python with multiple games and a virtual currency system.",
        "portfolio-ecommerce": "E-commerce Store",
        "portfolio-ecommerce-desc": "Created a fully functional online store with payment system and order management.",
        
        // Reviews
        "reviews-title": "Client Reviews",
        "review1-text": "Vasya created an amazing insurance website for us. The work was done quickly and with high quality. I recommend!",
        "review1-role": "Insurance Company Director",
        "review2-text": "Excellent work on the cryptocurrency platform. All functions work flawlessly, the design is modern and user-friendly.",
        "review2-role": "Crypto Startup Founder",
        "review3-text": "The task planner created by Vasya significantly simplified our work. The interface is intuitive, the functionality is rich.",
        "review3-role": "Project Manager",
        "review4-text": "The casino simulator turned out to be very entertaining. The code is well-structured, easy to modify and add new games.",
        "review4-role": "Game Developer",
        "review5-text": "The website created by Vasya helped us attract new customers. The design is modern, responsive, everything works quickly and without failures.",
        "review5-role": "Business Owner",
        "review6-text": "The calculator with advanced functions perfectly suited our needs. The interface is convenient, calculations are accurate.","review6-role": "Financial Analyst",
        
        // Contact
        "contact-title": "Contact Me",
        "contact-info-title": "Contact Information",
        "contact-email": "Email",
        "contact-phone": "Phone",
        "contact-location": "Location",
        "contact-location-text": "Moscow, Russia",
        "form-name": "Name",
        "form-email": "Email",
        "form-message": "Message",
        "form-submit": "Send Message",
        
        // Footer
        "footer-text": "© 2023 Vasya. All rights reserved."
    },
    de: {
        // Navigation
        "nav-about": "Über mich",
        "nav-skills": "Fähigkeiten",
        "nav-portfolio": "Portfolio",
        "nav-reviews": "Bewertungen",
        "nav-contact": "Kontakt",
        
        // Hero section
        "hero-title": "Hallo, mein Name ist <span class='highlight'>Vasya</span>",
        "hero-subtitle": "Webdesigner & IT-Spezialist",
        "hero-description": "Mehr als 5 Jahre Erfahrung. Umfangreicher Hintergrund, mehrfach gearbeitet. Erstelle moderne und funktionale Lösungen.",
        "hero-portfolio-btn": "Meine Arbeiten",
        "hero-contact-btn": "Kontakt aufnehmen",
        
        // About
        "about-title": "Über mich",
        "about-text1": "Ich bin Webdesigner und IT-Spezialist mit mehr als 5 Jahren Erfahrung. In dieser Zeit habe ich an zahlreichen Projekten unterschiedlicher Komplexität gearbeitet.",
        "about-text2": "Ich spezialisiere mich auf die Erstellung moderner Websites und Anwendungen. Ich entwickle sowohl Frontend- als auch Backend-Teile von Projekten.",
        "about-text3": "Ich habe Erfahrung mit verschiedenen Technologien und Frameworks, was mir ermöglicht, für jede Aufgabe optimale Lösungen auszuwählen.",
        "stat-years": "Jahre Erfahrung",
        "stat-projects": "Projekte",
        "stat-clients": "Kunden",
        
        // Skills
        "skills-title": "Fähigkeiten",
        "skills-webdev": "Webentwicklung",
        "skills-python": "Python",
        "skills-design": "Design",
        
        // Portfolio
        "portfolio-title": "Portfolio",
        "portfolio-insurance": "Versicherungswebsites",
        "portfolio-insurance-desc": "Entwickelte 3 Websites für verschiedene Kunden in der Versicherungsbranche mit responsivem Design und funktionalen Formularen.",
        "portfolio-crypto": "Kryptowährungsplattformen",
        "portfolio-crypto-desc": "Erstellte mehrere Websites zu Kryptowährungen mit API-Integration und interaktiven Diagrammen.",
        "portfolio-planner": "Aufgabenplaner",
        "portfolio-planner-desc": "Entwickelte einen Python-Aufgabenplaner mit grafischer Oberfläche und Erinnerungsfunktionen.",
        "portfolio-calculator": "Rechner",
        "portfolio-calculator-desc": "Erstellte einen multifunktionalen Rechner in Python mit Unterstützung für komplexe mathematische Operationen.",
        "portfolio-casino": "Casino-Spiel",
        "portfolio-casino-desc": "Entwickelte einen Casino-Simulator in Python mit mehreren Spielen und einem virtuellen Währungssystem.",
        "portfolio-ecommerce": "E-Commerce-Shop",
        "portfolio-ecommerce-desc": "Erstellte einen voll funktionsfähigen Online-Shop mit Zahlungssystem und Bestellverwaltung.",
        
        // Reviews
        "reviews-title": "Kundenbewertungen",
        "review1-text": "Vasya hat eine großartige Versicherungswebsite für uns erstellt. Die Arbeit wurde schnell und in hoher Qualität erledigt. Ich empfehle!",
        "review1-role": "Direktor der Versicherungsgesellschaft",
        "review2-text": "Ausgezeichnete Arbeit an der Kryptowährungsplattform. Alle Funktionen funktionieren einwandfrei, das Design ist modern und benutzerfreundlich.",
        "review2-role": "Gründer des Crypto-Startups",
        "review3-text": "Der von Vasya erstellte Aufgabenplaner hat unsere Arbeit erheblich vereinfacht. Die Oberfläche ist intuitiv, der Funktionsumfang ist reichhaltig.",
        "review3-role": "Projektmanager",
        "review4-text": "Der Casino-Simulator erwies sich als sehr unterhaltsam.Der Code ist gut strukturiert, leicht zu modifizieren und neue Spiele hinzuzufügen.",
        "review4-role": "Spieleentwickler",
        "review5-text": "Die von Vasya erstellte Website half uns, neue Kunden zu gewinnen. Das Design ist modern, responsiv, alles funktioniert schnell und ohne Ausfälle.",
        "review5-role": "Geschäftsinhaber",
        "review6-text": "Der Rechner mit erweiterten Funktionen passte perfekt zu unseren Anforderungen. Die Oberfläche ist bequem, Berechnungen sind genau.",
        "review6-role": "Finanzanalyst",
        
        // Contact
        "contact-title": "Kontaktieren Sie mich",
        "contact-info-title": "Kontaktinformationen",
        "contact-email": "E-Mail",
        "contact-phone": "Telefon",
        "contact-location": "Standort",
        "contact-location-text": "Moskau, Russland",
        "form-name": "Name",
        "form-email": "E-Mail",
        "form-message": "Nachricht",
        "form-submit": "Nachricht senden",
        
        // Footer
        "footer-text": "© 2023 Vasya. Alle Rechte vorbehalten."
    }
};

// Текущий язык
let currentLanguage = 'ru';

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация переключателя темы
    initThemeToggle();
    
    // Инициализация переключателя языка
    initLanguageSelector();
    
    // Инициализация анимаций навыков
    initSkillsAnimation();
    
    // Инициализация формы
    initContactForm();
    
    // Плавная прокрутка для навигации
    initSmoothScroll();
});

// Инициализация переключателя темы
function initThemeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Инициализация переключателя языка
function initLanguageSelector() {
    const languageSelect = document.getElementById('language-select');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        languageSelect.value = savedLanguage;
    }
    
    languageSelect.addEventListener('change', function() {
        currentLanguage = this.value;
        localStorage.setItem('language', currentLanguage);
        updateContent();
    });
    
    updateContent();
}

// Обновление контента на выбранном языке
function updateContent() {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.innerHTML = translations[currentLanguage][key];
            }
        }
    });
}

// Инициализация анимации навыков
function initSkillsAnimation() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.getAttribute('data-width');
                progress.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillProgresses.forEach(progress => {
        observer.observe(progress);
    });
}

// Инициализация формы обратной связи
function initContactForm() {
    const contactForm = document.getElementById('contactForm');contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь должна быть логика отправки формы
        // Для демонстрации просто покажем сообщение
        alert(currentLanguage === 'ru' ? 'Сообщение отправлено!' : 
              currentLanguage === 'en' ? 'Message sent!' : 
              'Nachricht gesendet!');
        
        contactForm.reset();
    });
}

// Инициализация плавной прокрутки
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Добавление динамических эффектов
function addDynamicEffects() {
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Применяем к секциям
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Инициализация динамических эффектов
document.addEventListener('DOMContentLoaded', addDynamicEffects);