import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from '@/i18lang/resource'
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "pl",
        resources,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;