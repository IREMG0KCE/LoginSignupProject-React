import React from 'react';
//import '../css/signup.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Signup() {
  const { t } = useTranslation(); // i18n hook'u

  return (
     <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">{t("Signup Panel")}</h3>
      <div className="space-y-4">
        <div>
          <label  className="block text-sm font-medium text-gray-600 mb-1">{t("Name")}</label>
          <input  type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition" />
        </div>
        <div>
          <label  className="block text-sm font-medium text-gray-600 mb-1">{t("Surname")}</label>
          <input type="text"className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">{t("Email")}</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">{t("Username")}</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">{t("Password")}</label>
          <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"/>
        </div>

        <button   
        className="w-full py-2 bg-gradient-to-r from-gray-900 to-gray-400 text-white  rounded-lg  hover:from-gray-700 hover:to-blue-300 transition">{t("Signup")} 
        </button>
        <p className="text-sm text-gray-600 text-center">
          {t("Already have an account?")}{" "}
          <Link to="/login"
            className="inline-block text-gray-600 font-medium hover:text-blue-500"
            >{t("Login")}</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Signup;
