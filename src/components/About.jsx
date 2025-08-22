import React from 'react'
// import '../index.css';  << Tailwind burada import ediliyor

import { useTranslation } from 'react-i18next';
export default function About() {
   const { t } = useTranslation(); // i18n hook'u
  return (
    <div className="flex justify-center items-center min-h-screen ">
      
     <p className='font-serif text-5xl bg-gradient-to-r from-gray-300 to-gray-800 text-transparent bg-clip-text'>{t("This is our about us page.")}</p> 
    </div>
  )
}
