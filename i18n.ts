import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my website!",
        description: "This is a multilingual website.",
        change_language: "Change Language",
      },
    },
    pt: {
      translation: {
        welcome: "Bem-vindo ao meu site!",
        description: "Este é um site multilíngue.",
        change_language: "Mudar Idioma",
      },
    },
  },
  lng: "pt", // Idioma padrão
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
