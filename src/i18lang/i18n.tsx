import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from '@/i18lang/resource'
import { initReactI18next } from "react-i18next";

// lng: "fr",

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng:"pl",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;