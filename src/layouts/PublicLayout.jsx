import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const PublicLayout = () => {
  return (
    <div  className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/background.jpg')" }}>
     
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
