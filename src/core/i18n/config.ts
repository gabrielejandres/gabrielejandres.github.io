import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../data/translations/en.json';
import pt from '../../data/translations/pt.json';
import fr from '../../data/translations/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      fr: { translation: fr },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

