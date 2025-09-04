import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ notifOpen, setNotifOpen, handleLogout, sidebarOpen, user}) => {
  return (
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
         {sidebarOpen && (
  <span className="text-gray-600">
    Hoş geldin,  {user?.name || 'Misafir'}!
  </span>
)}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-900 to-gray-400 text-white rounded  hover:from-gray-700 hover:to-blue-300 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            Çıkış
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
