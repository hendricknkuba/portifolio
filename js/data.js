// Data for the portfolio
const portfolioData = {
    hero: {
        title: "Hendrick Nkuba",
        subtitle: "Web Developer",
        description: "Building modern, responsive and user-centric web applications with clean code and thoughtful design."
    },
    about: {
        text1: "I'm a passionate full-stack developer with 3+ years of experience creating digital solutions that solve real problems. My approach combines technical excellence with user-centered design principles.",
        text2: "Specializing in JavaScript ecosystems, I build everything from small business websites to complex web applications. Committed to continuous learning and clean code practices."
    },
    skills: [
        {
            category: "Frontend",
            icon: "bi-code-square",
            items: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Bootstrap", "Tailwind CSS", ]
        },
        {
            category: "Backend",
            icon: "bi-server",
            items: ["PHP", "Node.js", "Laravel", "MySQL", "PostgreSQL", "REST APIs", "JSON:API"]
        },
        {
            category: "Tools & More",
            icon: "bi-tools",
            items: ["Git & GitHub", "Docker", "VS Code", "Figma", "PhpStorm", "MVC", "Linux"]
        }
    ],
    projects: [
        {
            title: "MoneyMinder API",
            description: "API that allows users to record, view, and manage their financial transactions. Features include transaction management, authentication, transactions filters and many more.",
            tags: ["Laravel", "PostgreSQL", "JSON:API", "Postman"],
            link: "https://github.com/hendricknkuba/moneyminder-api"
        },
        {
            title: "Course Management System",
            description: "web-based system designed to streamline the management of short-duration courses. It provides an intuitive platform for administrators to efficiently organize, monitor, and administer short courses.",
            tags: ["Vue.js", "Inertia.js", "Laravel", "MySQL", "Tailwind CSS"],
            link: "#"
        },
        {
            title: "Weather App",
            description: "Real-time weather information with 5-day forecast using the OpenWeather API. Features geolocation and city search.",
            tags: ["Vue.js", "API Integration", "API Integration", "Tailwind CSS"],
            link: "https://weather-ds.netlify.app/"
        },
        {
            title: "Portfolio",
            description: "A responsive portfolio built with Bootstrap 5 and Sass, featuring modern design and smooth animations.",
            tags: ["Bootstrap 5", "SASS", "JavaScript"],
            link: "#"
        }
    ],
    footer: {
        text: `© ${new Date().getFullYear()} Hendrick Nkuba. All rights reserved.`
    }
};

function applyAnimations() {
    // Aplica efeitos a todos os elementos que devem animar
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .card, img');
    elements.forEach((el, index) => {
        el.setAttribute('data-aos', 'fade-up');
        el.setAttribute('data-aos-delay', Math.min(index * 50, 300));
    });

    // Efeito especial para a imagem de perfil
    document.querySelector('.profile-image').setAttribute('data-aos', 'fade-left');
}

applyAnimations();