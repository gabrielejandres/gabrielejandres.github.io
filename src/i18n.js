import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "./assets/data/en/translation.json";
import translationPT from "./assets/data/pt/translation.json";

const availableLanguages = ['pt', 'en'];

const resources = {
  pt: {
    translation: translationPT,
  },
  en: {
    translation: translationEN,
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;