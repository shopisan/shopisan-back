import i18n from "i18next";
import Backend from "i18next-http-backend";
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import transEn from '../src/locales/en/translation.json';
import transFr from '../src/locales/fr/translation.json';


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
//.use(Backend)
.use(languageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation:{
        escapeValue: false
    },
    saveMissing: true,
    whitelist: languages,
    //defaultNS: "translations",
    //ns: "translations"
   
})

export default i18n;