import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "./locales/en/translation.json";

const fallbackLng = ['pt'];
const availableLanguages = ['pt', 'en'];

const resources = {
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
    fallbackLng: fallbackLng,
    debug: false,

    detection: {
      checkWhitelist: true,
    },

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;