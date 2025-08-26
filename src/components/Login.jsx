import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // login sonrası yönlendirme için

  // Form state
  const [username, setUsername] = useState(''); // eğer backend email istiyorsa username yerine email kullanabilirsin
  const [password, setPassword] = useState('');

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password }) // backend email bekliyor
      });

      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem('token', data.token); // Token'ı sakla
        alert('Giriş başarılı!');
        navigate('/dashboard'); // opsiyonel: giriş sonrası yönlendirme
      } else {
        alert('Giriş başarısız: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Sunucu hatası!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {t("Login Panel")}
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              {t("Username or Email")}
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              {t("Password")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-gray-900 to-gray-400 text-white rounded-lg hover:from-gray-700 hover:to-blue-300 transition"
          >
            {t("Login")}
          </button>

          <p className="text-sm text-gray-600 text-center">
            {t("Don't have an account?")}{" "}
            <Link
              to="/signup"
              className="inline-block text-gray-600 font-medium hover:text-blue-500"
            >
              {t("Signup")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
