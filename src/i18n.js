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
      "bac" : "Terminale in Europeen section",
      "spe" : "Maths, Physics and Computer Science speciality; advenced mathematics option",
      "first" : "English : C1 level",
      "psc1" : "Level 1 State Diploma in Prevention and Civic Relief",
      //Partie expérience
      "sopra" : "Observation internship in Sopra Steria, the second biggest ESN in Europe",
      "ai_liberty" : "Creation of a complete website allowing you to find the AI that meets your needs by answering a questionnaire",
      "ad" : "One-week observation internship in the IT department of a group that takes care of school campuses",
      "fbg" : "Creation of a react website to sell books",
      'techno' : "Used technologies",
      'stage' : 'Internships',
      'site' : 'Websites conception',
      //Footer
      "cv" : "Get my resume",
      "scoutisme" : 'A few years of scoutism',
    }
  },
  fr: {
    translation: {
      "home": "Accueil",
      "about": "À propos de moi",
      "experience": "Expérience",
      "education": "Éducation",
      "contact": "Contact",
      "greeting": "Bonjour, je suis Alexis BELIGNE, un étudiant français et je suis passionné par le développement et la cybersécurité",
      "about_p" : "J'ai toujours aimé coder et travailler sur des problèmes.",
      //Partie formation
      "formation" : "Formation",
      "bac" : "Terminale en séction Européenne",
      "spe" : "Spécialité Maths, Physique et NSI avec option maths expertes",
      "first" : "Anglais : niveau C1",
      "psc1" : "Diplôme d'Etat de Prévention et de Secours Civiques de niveau 1",
      //Partie expérience
      "sopra" : "Stage d'observation d'une semaine à Sopra Steria, la deuxième plus grande ESN d'Europe",
      "ai_liberty" : "Création d'un site web complet permettant de trouver l'IA qui correspond à votre besoin en répondant à un questionnaire",
      "ad" : "Stage d'observation d'une semaine dans la DSI d'un groupe qui s'occupe de campus scolaires",
      "fbg" : "Création d'un site web pour vente de livres en ligne",
      'techno' : "Technologies utilisées",
      'stage' : 'Stages',
      'site' : 'Conception de site webs ',

      //Footer
      "cv" : "Télécharger mon cv",
      "scoutisme" : 'Plusieurs années de scoutisme',

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
