import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faUsers,
  faInfoCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ sidebarOpen, setSidebarOpen, linkCls }) => {
  return (
    <aside
      className={`bg-gradient-to-r from-gray-900 to-gray-400 text-white flex flex-col p-4 transition-all duration-300 ${
        sidebarOpen ? "w-60" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold ${sidebarOpen ? "block" : "hidden"}`}>
          <NavLink to="/profil" className={linkCls}>
          <img
            src="/images/avatar.png"
            alt="avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
           </NavLink>
        </h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-xl font-bold"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <NavLink to="/adminLayouts/dashboard" className={linkCls}>
        <FontAwesomeIcon icon={faHome} />
        {sidebarOpen && "Dashboard"}
      </NavLink>
      <NavLink to="/profil" className={linkCls}>
        <FontAwesomeIcon icon={faUser} />
        {sidebarOpen && "Profil"}
      </NavLink>
      <NavLink to="/musteriler" className={linkCls}>
  <FontAwesomeIcon icon={faUsers} />
  {sidebarOpen && "Müşteriler"}
</NavLink>

      <NavLink to="/hakkimda" className={linkCls}>
        <FontAwesomeIcon icon={faInfoCircle} />
        {sidebarOpen && "Hakkımda"}
      </NavLink>
      <NavLink to="/auth" className={linkCls}>
        <FontAwesomeIcon icon={faCog} />
        {sidebarOpen && "Yetkilendirme"}
      </NavLink>
    </aside>
  );
};

export default Sidebar;
