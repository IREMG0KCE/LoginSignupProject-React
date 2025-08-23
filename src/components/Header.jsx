import React from 'react';
//import '../css/Header.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
  <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-400 text-white shadow-md z-50">
  <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
    <div className="flex space-x-4">
      <Link to="/anasayfa" className="hover:text-gray-300">{t("Home")}</Link>
      <Link to="/hakkimizda" className="hover:text-gray-300">{t("About")}</Link>
      <Link to="/biz-kimiz" className="hover:text-gray-300">{t("Contact")}</Link>
      <Link to="/login" className="hover:text-gray-300">{t("Login")}</Link>
      <Link to="/signup" className="hover:text-gray-300">{t("Signup")}</Link>
    </div>
    <select 
      onChange={handleLanguageChange} 
      value={i18n.language} 
      className="text-white bg-gradient-to-r from-gray-900 to-gray-400 rounded-full px-2 py-1 border-dashed"
    >
      <option className=" text-black bg-white " value="tr">TR</option>
      <option  className=" text-black bg-white " value="en">EN</option>
    </select>
  </nav>
  
</div>

  );
}

export default Header;
