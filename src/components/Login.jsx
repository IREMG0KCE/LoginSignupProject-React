import React from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation(); // i18n hook'u

  return (
    <div className='login'>
      <h3>{t("Login Panel")}</h3>
      <div className='login-form'>
        <div>
          <label>{t("Username")}</label>
          <input type="text" />
        </div>
        <div>
          <label>{t("Password")}</label>
          <input type="password" />
        </div>

        <button>{t("Login")}</button>
        <p>
          {t("Don't have an account?")}{" "}
          <Link to="/signup">{t("Signup")}</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
