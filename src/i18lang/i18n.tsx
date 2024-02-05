import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from '@/i18lang/resource'

// lng: "fr",

i18n
    .use(LanguageDetector)
    .init({
        debug: true,
        resources,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;