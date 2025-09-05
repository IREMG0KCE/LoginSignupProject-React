// src/pages/Customers.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/customers/getAllCustomers")
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteCustomer = async (id) => {
    await axios.delete(`http://localhost:5000/customers/${id}`);
    setCustomers(customers.filter((c) => c.id !== id));
  };
 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Müşteriler</h1>
      <div className="flex justify-end mb-4">
    <button
      onClick={() => navigate("/customers/create")}
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
    >
      + Yeni Müşteri Kayıt
    </button>
  </div>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gradient-to-r from-gray-900 to-gray-500 text-white">
            <tr>
            
              <th className="px-4 py-2 text-left">Ad</th>
              <th className="px-4 py-2 text-left">Soyad</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Telefon</th>
              <th className="px-4 py-2 text-left">Şirket</th>
              <th className="px-4 py-2 text-center">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, index) => (
              <tr
                key={c.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-2 hidden">{c.id}</td>
                <td className="px-4 py-2">{c.User?.name}</td>
                <td className="px-4 py-2">{c.User?.surname}</td>
                <td className="px-4 py-2">{c.User?.email}</td>
                <td className="px-4 py-2">{c.phone || "-"}</td>
                <td className="px-4 py-2">{c.companyName || "-"}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => deleteCustomer(c.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow"
                  >
                    Sil
                  </button>
   <button
  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg shadow"
  onClick={() => navigate(`/customers/update/${c.id}`)}
>
  Güncelle
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
