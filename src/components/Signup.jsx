import React from 'react';
import '../css/signup.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Signup() {
  const { t } = useTranslation(); // i18n hook'u

  return (
    <div className='signup'>
      <h3>{t("Signup Panel")}</h3>
      <div className='signup-form'>
        <div>
          <label>{t("Name")}</label>
          <input type="text" />
        </div>
        <div>
          <label>{t("Surname")}</label>
          <input type="text"/>
        </div>
        <div>
          <label>{t("Email")}</label>
          <input type="text"/>
        </div>
        <div>
          <label>{t("Username")}</label>
          <input type="text"/>
        </div>
        <div>
          <label>{t("Password")}</label>
          <input type="password"/>
        </div>

        <button>{t("Signup")}</button>
        <p>
          {t("Already have an account?")}{" "}
          <Link to="/login">{t("Login")}</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
