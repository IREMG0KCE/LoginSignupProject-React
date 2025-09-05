import { useEffect, useState } from "react";
import axios from "axios";

export default function AuthPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/customers/getAllCustomers");
      setCustomers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const promote = async (userId) => {
    try {
      await axios.patch(`http://localhost:5000/users/promote/${userId}`);
      setCustomers(customers.filter(c => c.User.id !== userId));
    } catch (err) {
      console.error(err);
    }
  };

  const demote = async (userId) => {
    try {
      await axios.patch(`http://localhost:5000/users/demote/${userId}`, {
        phone: "",
        address: "",
        companyName: "",
      });
      fetchCustomers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800"> Yetkilendirme</h1>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gradient-to-r from-gray-900 to-gray-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Ad</th>
              <th className="px-4 py-2 text-left">Soyad</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Telefon</th>
              <th className="px-4 py-2 text-left">Rol</th>
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
                <td className="px-4 py-2">{c.User?.name}</td>
                <td className="px-4 py-2">{c.User?.surname}</td>
                <td className="px-4 py-2">{c.User?.email}</td>
                <td className="px-4 py-2">{c.phone || "-"}</td>
                <td className="px-4 py-2">{c.User?.role || "-"}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  {c.User?.role === "customer" ? (
                    <button
                      onClick={() => promote(c.User.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg shadow"
                    >
                      Admin Yap
                    </button>
                  ) : (
                    <button
                      onClick={() => demote(c.User.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg shadow"
                    >
                      Müşteri Yap
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
