import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: {
      translation: {
        hero: {
          contactLink: "Me Contacter",
          role: "Développeur Web",
        },
        projectCard: {
          title: "Mes projets",
          desc: "Quelques-uns de mes travaux récents. Section qui sera mise à jour régulièrement.",
        },
        aboutCard: {
          title: "Qui suis-je ?",
          desc: "Actuellement étudiant en 2ème année à l'IUT de Metz en BUT informatique, je me spécialise dans le développement web et mobile. Passionné par la création de solutions numériques innovantes, je cherche constamment à améliorer mes compétences techniques et à explorer les dernières tendances du secteur.\n\nJ'aime relever des défis et travailler sur des projets qui ont un impact réel en combinant créativité, technique et accessibilité.",
        },
        linkCard: {
          title: "Mes liens",
          desc: "Ci-dessous quelques liens vers mes profiles et moyen de contact.",
        },
        technoCard: {
          title: "Mes technologies",
          desc: "Liste des technologies et outils que j'utilise principalement pour développer mes projets.",
        },
        contactSection: {
          title: "Me contacter",
          desc: "Formulaire de contact actuellement désactivé. N'hésitez pas à me contacter via les liens ci-dessus.",
          emailLabel: "Votre email",
          emailPH: "prenom.nom@gmail.com",
          subjectLabel: "Objet",
          subjectPH: "Comment puis-je vous aider ?",
          messageLabel: "Votre message",
          messagePH: "Laissez votre message ici...",
          sendButton: "Envoyer",
        },
        projects: {
          title: "Mes projets",
          viewProject: "Voir le projet",
          viewCode: "Code source",
          project1: {
            title: "Portfolio",
            desc: "Un portfolio moderne et réactif construit avec React, TypeScript et Tailwind CSS. Inclut des animations fluides avec Framer Motion et l'anglais en plus du français.",
          },
          project2: {
            title: "Just Park It",
            desc: "Application permettant de trouver des places de parking en temps réel grâce à l'intégration de Leaflet pour la cartographie et d'un backend PHP/MySQL pour la gestion des profil. Le but est de se faire guider à la place de parking disponible la plus proche de l'utilisateur suivant ses critères (PMR, vehicule électrique, etc.).",
          },
        },
      },
    },
    en: {
      translation: {
        hero: {
          contactLink: "Contact Me",
          role: "Web Developer",
        },
        projectCard: {
          title: "My projects",
          desc: "Some of my recent works. Section that will be updated regularly.",
        },
        aboutCard: {
          title: "Who am I?",
          desc: "Currently a second-year student at IUT de Metz in BUT computer science, I specialize in web and mobile development. Passionate about creating innovative digital solutions, I constantly seek to improve my technical skills and explore the latest industry trends.\n\nI enjoy taking on challenges and working on projects that have a real impact by combining creativity, technology, and accessibility.",
        },
        linkCard: {
          title: "My links",
          desc: "Below are some links to my profiles and contact methods.",
        },
        technoCard: {
          title: "My technologies",
          desc: "List of technologies and tools that I mainly use to develop my projects.",
        },
        contactSection: {
          title: "Contact Me",
          desc: "Contact form currently disabled. Feel free to contact me through the links above.",
          emailLabel: "Your email",
          emailPH: "name.surname@gmail.com",
          subjectLabel: "Subject",
          subjectPH: "How can I help you?",
          messageLabel: "Your message",
          messagePH: "Leave your message here...",
          sendButton: "Send",
        },
        projects: {
          title: "My projects",
          viewProject: "View project",
          viewCode: "Source code",
          project1: {
            title: "Portfolio",
            desc: "A modern and responsive portfolio built with React, TypeScript and Tailwind CSS. Features smooth animations with Framer Motion and English in addition to French.",
          },
          project2: {
            title: "Just Park It",
            desc: "Application that allows you to find parking spots in real time thanks to the integration of Leaflet for mapping and a PHP/MySQL backend for profile management. The goal is to be guided to the nearest available parking space according to the user's criteria (PRM, electric vehicle, etc.).",
          },
        },
      },
    },
  },
});

export default i18n;
