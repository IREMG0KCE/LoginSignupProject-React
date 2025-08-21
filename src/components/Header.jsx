import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/anasayfa">{t("Home")}</Link>
        <Link to="/hakkimizda">{t("About")}</Link>
        <Link to="/biz-kimiz">{t("Contact")}</Link>
        <Link to="/login">{t("Login")}</Link>
        <Link to="/signup">{t("Signup")}</Link>
        <select 
          onChange={handleLanguageChange} 
          value={i18n.language} 
          style={{ marginLeft: "10px" }}
        >
          <option value="tr">TR</option>
          <option value="en">EN</option>
        </select>
      </nav>

      {/* Dil seçme butonları */}
     
    </div>
  );
}

export default Header;
