import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
function Signup() {
  const { t } = useTranslation();
 const navigate = useNavigate(); 

  // Form state
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, email, username, password })
      });

      const data = await res.json();

      if (res.status === 201) {
           toast.success("Kayıt başarılı!");
            navigate('/Login');
      } else {
          toast.error('Kayıt başarısız: ' + data.error);
      }
    } catch (err) {
      console.error(err);
        toast.error('Sunucu hatası!');
    }
  };

  return (
   <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-transparent px-4 pt-17">
  <div className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
    <h3  className="text-xl font-bold text-center text-gray-800 mb-6">
      {t("Signup Panel")}
    </h3>

    <form className="space-y-3" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {t("Name")}
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {t("Surname")}
        </label>
        <input
          type="text"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {t("Email")}
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {t("Username")}
        </label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {t("Password")}
        </label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <button
  type="submit"
  className="px-12 py-3 bg-gradient-to-r from-gray-900 to-gray-400 text-white rounded-lg hover:from-gray-700 hover:to-blue-300 transition text-sm mx-auto block"
>
  {t("Signup")}
</button>

      <p className="text-sm text-gray-600 text-center">
        {t("Already have an account?")}{" "}
        <Link
          to="/login"
          className="inline-block text-gray-600 font-medium hover:text-blue-500"
        >
          {t("Login")}
        </Link>
      </p>
    </form>
  </div>
</div>

  );
}

export default Signup;
