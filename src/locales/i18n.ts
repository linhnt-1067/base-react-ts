import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import { convertLanguageJsonToObject } from './translations';

export const translationsJson = {
  en: {
    translation: en,
  },
};

convertLanguageJsonToObject(en);

i18next.use(initReactI18next).use(LanguageDetector).init({
  resources: translationsJson,
  fallbackLng: 'en',
  keySeparator: '.',
});

export default i18next;
