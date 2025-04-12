import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // English translations
      welcome: "Welcome to AI Trip Planner",
      planTrip: "Plan Your Trip",
      destinations: "Destinations",
      itinerary: "Itinerary",
      budget: "Budget",
      language: "Language",
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
      profile: "Profile",
      settings: "Settings",
      help: "Help",
      contact: "Contact",
      about: "About",
    },
  },
  hi: {
    translation: {
      // Hindi translations
      welcome: "एआई ट्रिप प्लानर में आपका स्वागत है",
      planTrip: "अपनी यात्रा की योजना बनाएं",
      destinations: "गंतव्य",
      itinerary: "यात्रा कार्यक्रम",
      budget: "बजट",
      language: "भाषा",
      login: "लॉग इन",
      signup: "साइन अप",
      logout: "लॉग आउट",
      profile: "प्रोफ़ाइल",
      settings: "सेटिंग्स",
      help: "मदद",
      contact: "संपर्क",
      about: "के बारे में",
    },
  },
  mr: {
    translation: {
      // Marathi translations
      welcome: "एआई ट्रिप प्लानरमध्ये आपले स्वागत आहे",
      planTrip: "आपल्या ट्रिपची योजना करा",
      destinations: "गंतव्ये",
      itinerary: "प्रवास कार्यक्रम",
      budget: "बजेट",
      language: "भाषा",
      login: "लॉगिन",
      signup: "साइन अप",
      logout: "लॉग आउट",
      profile: "प्रोफाइल",
      settings: "सेटिंग्ज",
      help: "मदत",
      contact: "संपर्क",
      about: "विषयी",
    },
  },
  ja: {
    translation: {
      // Japanese translations
      welcome: "AI旅行プランナーへようこそ",
      planTrip: "旅行を計画する",
      destinations: "目的地",
      itinerary: "旅程",
      budget: "予算",
      language: "言語",
      login: "ログイン",
      signup: "サインアップ",
      logout: "ログアウト",
      profile: "プロフィール",
      settings: "設定",
      help: "ヘルプ",
      contact: "お問い合わせ",
      about: "について",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
