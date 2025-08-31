import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const PublicLayout = () => {
  return (
    <div  className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      {/* Public sayfalar için üstte Header görünsün */}
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
