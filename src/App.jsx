import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFoundPage from "./components/NotFoundPage";
import PublicLayout from "./layouts/PublicLayout";
import Dashboard from "./adminLayouts/dashboard";
import Customers from "./pages/customers";
import CustomerUpdate from "./pages/customerUpdate";
import AuthPage from "./pages/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRegister from "./pages/userRegister";
import ProtectedAdminRoute from "./components/AdminRoute";
import AdminLayout from "./adminLayouts/dashboard";
function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* Public Layout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/anasayfa" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/biz-kimiz" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Private Layout (dashboard) */}
     {/* Private Layout (dashboard) */}
<Route element={<ProtectedAdminRoute />}>
  <Route path="/admin/dashboard" element={<AdminLayout />} />
  <Route path="/admin/profil" element={<div>Profil sayfası</div>} />
  <Route path="/admin/musteriler" element={<Customers />} />
  <Route path="/admin/hakkimda" element={<div>Hakkımda sayfası</div>} />
  <Route path="/admin/auth" element={<AuthPage />} />
  <Route path="/admin/customers/update/:id" element={<CustomerUpdate />} />
  <Route path="/admin/userregister" element={<UserRegister />} />
</Route>



        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
