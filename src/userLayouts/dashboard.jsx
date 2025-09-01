import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faInfoCircle,
  faCog,
  faBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar aç/kapa
  const [notifOpen, setNotifOpen] = useState(false); // Bildirim dropdown

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Çıkış yapıldı");
    navigate("/login");
  };

  const linkCls = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 transition ${
      isActive ? "bg-gray-700 font-semibold" : ""
    }`;

  return (
    <div className="flex min-h-screen">
      {/* Sol sidebar */}
      <aside
        className={`bg-gray-900 text-white flex flex-col p-4 transition-all duration-300 ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${sidebarOpen ? "block" : "hidden"}`}>
             <img
                src="/images/avatar.png"
                alt="avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
          </h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white text-xl font-bold"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <NavLink to="/userLayouts/dashboard" className={linkCls}>
          <FontAwesomeIcon icon={faHome} />
          {sidebarOpen && "Dashboard"}
        </NavLink>
        <NavLink to="/profil" className={linkCls}>
          <FontAwesomeIcon icon={faUser} />
          {sidebarOpen && "Profil"}
        </NavLink>
        <NavLink to="/hakkimda" className={linkCls}>
          <FontAwesomeIcon icon={faInfoCircle} />
          {sidebarOpen && "Hakkımda"}
        </NavLink>
        <NavLink to="/ayarlar" className={linkCls}>
          <FontAwesomeIcon icon={faCog} />
          {sidebarOpen && "Ayarlar"}
        </NavLink>
      </aside>

      {/* Sağ içerik */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Üst yönetim/profil bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 relative">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Ara..."
              className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* Bildirim Dropdown */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative text-gray-600 hover:text-gray-800"
              >
                <FontAwesomeIcon icon={faBell} size="lg" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <ul className="divide-y divide-gray-200">
                    <li className="p-3 hover:bg-gray-100 cursor-pointer">
                      Yeni mesajınız var 📩
                    </li>
                  </ul>
                  <div className="text-center p-2 text-sm text-blue-600 cursor-pointer hover:bg-gray-100 rounded-b-lg">
                    Tümünü Gör
                  </div>
                </div>
              )}
            </div>

            {/* Kullanıcı / Logout */}
            <div className="relative flex items-center gap-2">
              <img
                src="/images/avatar.png"
                alt="avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              {sidebarOpen && <span className="text-gray-600">Hoş geldin, Kullanıcı!</span>}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Çıkış
              </button>
            </div>
          </div>
        </header>

        {/* Ana içerik */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
