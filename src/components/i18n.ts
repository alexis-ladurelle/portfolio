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
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        },
        aboutCard: {
          title: "Qui suis-je ?",
          desc: "Actuelluement étudiant en 2ème année à l'IUT de Metz en BUT informatique, je me spécialise dans le développement web et mobile. Passionné par la création de solutions numériques innovantes, je cherche constamment à améliorer mes compétences techniques et à explorer les dernières tendances du secteur.",
        },
        linkCard: {
          title: "Mes liens",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        },
        technoCard: {
          title: "Mes technologies",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        },
        contactSection: {
          title: "Me contacter",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, cumque.",
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
            title: "Portfolio Pro",
            desc: "Un portfolio moderne et réactif construit avec React, TypeScript et Tailwind CSS. Inclut des animations fluides avec Framer Motion et une internationalisation complète.",
          },
          project2: {
            title: "Projet 2",
            desc: "Description de votre deuxième projet avec les technologies utilisées et les fonctionnalités principales.",
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
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        },
        aboutCard: {
          title: "Who am I?",
          desc: "Currently a second-year student at IUT de Metz in BUT computer science, I specialize in web and mobile development. Passionate about creating innovative digital solutions, I constantly seek to improve my technical skills and explore the latest industry trends.",
        },
        linkCard: {
          title: "My links",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        },
        technoCard: {
          title: "My technologies",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        },
        contactSection: {
          title: "Contact Me",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, cumque.",
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
            title: "Portfolio Pro",
            desc: "A modern and responsive portfolio built with React, TypeScript and Tailwind CSS. Features smooth animations with Framer Motion and complete internationalization.",
          },
          project2: {
            title: "Project 2",
            desc: "Description of your second project with the technologies used and main features.",
          },
        },
      },
    },
  },
});

export default i18n;
