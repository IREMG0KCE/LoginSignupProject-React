import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role?.toLowerCase() !== "admin") {
    return <Navigate to="/Login" replace />; // admin değilse login sayfasına yönlendir
  }

  return <Outlet />; // adminse nested route’ları göster
}
