import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next'

function Home() {
 const { t } = useTranslation(); // i18n hook'u

  useEffect(() => {
    fetch("http://localhost:5000/kategori") // Backend endpointine istek
      .then((res) => res.json())
      .catch((err) => console.error("API hatası:", err));
  }, []);
  return (
    <div>
    <div  className="flex justify-center items-center min-h-screen ">
       <p className='font-serif text-5xl bg-gradient-to-r from-gray-300 to-gray-800 text-transparent bg-clip-text'>{t("I'm learning React.")}</p>
   <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">Ana Sayfa</h1>
      
    </div>
    </div>
    </div>
  )
}

export default Home