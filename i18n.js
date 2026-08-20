let currentLanguage = localStorage.getItem("language");

const supportedLanguages = ["fr", "en"];

if (!supportedLanguages.includes(currentLanguage)) {
    const browserLanguage = navigator.language.split("-")[0];

    currentLanguage = supportedLanguages.includes(browserLanguage)
        ? browserLanguage
        : "fr";
}

export function setLanguage(language) {
    if (!supportedLanguages.includes(language)) {
        language = "fr";
    }

    currentLanguage = language;
    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;

        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });
}

export function t(value) {
    if (typeof value === "string") {
        return value;
    }

    return value?.[currentLanguage] ?? value?.fr ?? "";
}

const translations = {
    fr: {
        portfolio: "Portfolio",
        search: "Rechercher par titre, ou technologie...",
        all: "Tous",
        reset: "Réinitialiser",

        student: "Étudiant · Master Informatique",

        bio: "Passionné d’informatique, je développe des projets variés : principalement du web et des applications mobiles. Curieux et polyvalent, je m’investis dans des projets personnels pour approfondir mes compétences et relever de nouveaux défis techniques.",

        filters: "Filtres",

        details: "Détails",

        team: "Équipe",
        participant: "participant",
        participants: "participants",

        languages: "Langages utilisés",
        tools: "Outils utilisés",

        projectImage: "Image du projet",

        noProjects: "Aucun projet trouvé — essayez d'enlever des filtres."
    },

    en: {
        portfolio: "Portfolio",
        search: "Search by title or technology...",
        all: "All",
        reset: "Reset",

        student: "Student · Master's Degree in Computer Science",

        bio: "Passionate about computer science, I develop various projects, mainly web applications and mobile applications. Curious and versatile, I work on personal projects to deepen my skills and take on new technical challenges.",

        filters: "Filters",

        details: "Details",

        team: "Team",
        participant: "participant",
        participants: "participants",

        languages: "Languages used",
        tools: "Tools used",

        projectImage: "Project image",

        noProjects: "No projects found — try removing some filters."
    }
};

export function getCurrentLanguage() {
    return currentLanguage;
}