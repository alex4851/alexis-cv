import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About Me",
      "experience": "Experience",
      "education": "Education",
      "contact": "Contact",
      "greeting": "Hello, I'm Alexis BELIGNE, a French student and I am passionate by coding and cybersecurity",
      "about_p" : "I have always loved coding and working on various problems",
      //Partie formation
      "formation" : "Education",
      "bac" : "1ere (equivalence Grade 11) in Europeen section",
      "spe" : "Maths, Physics and Computer Science speciality",
      "first" : "English : B2 level",
      "psc1" : "Level 1 State Diploma in Prevention and Civic Relief",
      //Partie expérience
      "sopra" : "Observation internship in Sopra Steria, the second biggest ESN in Europe",
      "ai_liberty" : "Creation of a complete website allowing you to find the AI that meets your needs by answering a questionnaire",
      "ad" : "One-week observation internship in the IT department of a group that takes care of school campuses",
      //Footer
      "cv" : "Get my resume",
    }
  },
  fr: {
    translation: {
      "home": "Accueil",
      "about": "À propos de moi",
      "experience": "Expérience",
      "education": "Éducation",
      "contact": "Contact",
      "greeting": "Bonjour, je suis Alexis BELIGNE, un étudient français et je suis passionné par le développement et la cybersécurité",
      "about_p" : "J'ai toujours aimé coder et travailler sur des problèmes.",
      //Partie formation
      "formation" : "Formation",
      "bac" : "1ere en séction Européenne",
      "spe" : "Spécialité Maths, Physique et NSI",
      "first" : "Anglais : niveau B2",
      "psc1" : "Diplôme d'Etat de Prévention et de Secours Civiques de niveau 1",
      //Partie expérience
      "sopra" : "Stage d'observation d'une semaine à Sopra Steria, la deuxième plus grande ESN d'Europe",
      "ai_liberty" : "Création d'un site web complet permettant de trouver l'IA qui correspond à votre besoin en répondant à un questionnaire",
      "ad" : "Stage d'observation d'une semaine dans la DSI d'un groupe qui s'occupe de campus scolaires",
      //Footer
      "cv" : "Télécharger mon cv",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
