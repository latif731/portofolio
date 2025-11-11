import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import id from "./locales/id/translation.json";
import ko from "./locales/ko/translation.json";

i18n
  .use(LanguageDetector) // deteksi otomatis bahasa dari browser
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
      ko: { translation: ko },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import HttpApi from "i18next-http-backend";

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['id', 'en', 'ko'],
//     fallbackLng: 'id',
//     detection: {
//       order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
//       caches: ['localStorage', 'cookie'],
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json',
//     },
//   });

// export default i18n;
