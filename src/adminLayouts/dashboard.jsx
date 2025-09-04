import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifOpen, setNotifOpen] = useState(false);
  const [user, setUser] = useState(null); // kullanıcı bilgisi

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Çıkış yapıldı");
    navigate("/login");
  };

  const linkCls = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 transition ${
      isActive ? "bg-gray-700 font-semibold" : ""
    }`;

  // 🔹 Kullanıcı bilgilerini çek
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:5000/user/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} linkCls={linkCls} />
      <div className="flex-1 flex flex-col bg-gray-50">
        <Navbar
          notifOpen={notifOpen}
          setNotifOpen={setNotifOpen}
          handleLogout={handleLogout}
          sidebarOpen={sidebarOpen}
          user={user} // 🔹 user bilgisini Navbar’a yolluyoruz
        />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
