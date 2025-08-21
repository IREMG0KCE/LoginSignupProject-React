import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
  translation: {
    "Home": "Ana Sayfa",
    "About": "Hakkımızda",
    "Contact": "Biz Kimiz",
    "Login": "Giriş",
    "Signup": "Kayıt Ol",
    "Login Panel": "Giriş Paneli",
    "Signup Panel": "Kayıt Paneli",
    "Name": "Adınız",
    "Surname": "Soyadınız",
    "Username": "Kullanıcı Adı",
    "Password": "Şifre",
    "Email": "E-posta",
    "Already have an account?": "Zaten bir hesabınız var mı?",
    "Don't have an account?":"Henüz bir hesabınız yok mu?",
    "This is our about us page.":"Burası bizim hakkımızda sayfamızdır.",
    "We are engineers in development.":"Gelişme aşamasında olan mühendisleriz.",
    "I'm learning React.":"React öğreniyorum"
  }
},
en: {
  translation: {
    "Home": "Home",
    "About": "About",
    "Contact": "Contact",
    "Login": "Login",
    "Signup": "Signup",
    "Login Panel": "Login Panel",
    "Signup Panel": "Signup Panel",
    "Name": "Name",
    "Surname":"Surname",
    "Username": "Username",
    "Password": "Password",
    "Email": "Email",
    "Already have an account?": "Already have an account?",
    "Don't have an account?":"Don't have an account?",
    "This is our about us page.": "This is our about us page.",
    "We are engineers in development.":"We are engineers in development.",
    "I'm learning React.":"I'm learning React."
  }
}

};

i18n.use(initReactI18next).init({
  lng: "tr", // başlangıç dili
  fallbackLng: "en", // eğer çeviri bulunamazsa
  resources,
  interpolation: {
    escapeValue: false, // React zaten XSS koruması yapıyor
  },
});

export default i18n;
