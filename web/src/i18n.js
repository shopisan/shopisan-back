import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import transEn from '../src/locales/en/translation.json';
import transFr from '../src/locales/fr/translation.json';
import langDetector from '../src/langDetector';

const languageDetector = new LanguageDetector();
languageDetector.addDetector(langDetector);

const resources = {
    en: {
        translation: transEn
    },
    fr: {
        translation: transFr
    }
}

const languages = ['en', 'fr'];

i18n
.use(languageDetector).use(initReactI18next).init({
    detection: {
        order: ['langDetector', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain']
    },
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation:{
        escapeValue: false
    },
    saveMissing: true,
    whitelist: languages
})

export default i18n;