import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Çıkış yapıldı");
    navigate("/login");
  };

  const linkCls = ({ isActive }) =>
    `block px-3 py-2 rounded-xl transition ${
      isActive ? "bg-white/10 font-semibold" : "hover:bg-white/5"
    }`;

  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      {/* SOL SİDEBAR */}
      <aside
        className={`hidden md:flex flex-col bg-gray-900 text-white transition-all duration-200 ${
          open ? "w-64" : "w-16"
        }`}
      >
        <div className="h-14 flex items-center justify-between px-3 border-b border-white/10">
          <span className={`text-sm font-semibold ${open ? "block" : "hidden"}`}>
            Panel
          </span>
          <button
            onClick={() => setOpen(!open)}
            className="text-xs px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {open ? "‹" : "›"}
          </button>
        </div>

        <nav className="p-3 space-y-1">
          <NavLink to="/dashboard" className={linkCls}>Dashboard</NavLink>
          <NavLink to="/profil" className={linkCls}>Profil</NavLink>
          <NavLink to="/hakkimda" className={linkCls}>Hakkımda</NavLink>
          <NavLink to="/ayarlar" className={linkCls}>Ayarlar</NavLink>
        </nav>
      </aside>

      {/* SAĞ İÇERİK */}
      <div className="flex-1 flex flex-col">
        <header className="h-14 sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between px-4">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-sm px-2 py-1 rounded-lg border"
          >
            Menü
          </button>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Hoş geldin 👋</span>
            <button
              onClick={handleLogout}
              className="text-sm px-3 py-1 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
            >
              Çıkış
            </button>
          </div>
        </header>

        {/* İçerik burada */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
