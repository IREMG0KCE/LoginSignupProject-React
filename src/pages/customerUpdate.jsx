import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CustomerUpdate() {
  const { id } = useParams(); // url'den customer id al
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    companyName: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/customers/${id}`)
      .then(res => {
        const c = res.data;
        setFormData({
          name: c.User?.name || "",
          surname: c.User?.surname || "",
          email: c.User?.email || "",
          phone: c.phone || "",
          address: c.address || "",
          companyName: c.companyName || "",
        });
      });
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/customers/${id}`, formData);
    navigate("/musteriler"); // kaydettikten sonra müşteri listesine dön
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Müşteri Güncelle</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Ad" className="w-full p-2 border rounded" />
        <input name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyad" className="w-full p-2 border rounded" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" className="w-full p-2 border rounded" />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Adres" className="w-full p-2 border rounded" />
        <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Şirket" className="w-full p-2 border rounded" />
        <button type="submit"  className="w-full py-2 bg-gradient-to-r from-gray-900 to-gray-400 text-white rounded-lg hover:from-gray-700 hover:to-blue-300 transition">Güncelle</button>
      </form>
    </div>
  );
}
