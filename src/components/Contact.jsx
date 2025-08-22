import React from 'react'
import { useTranslation } from 'react-i18next';
function Contact() {
   const { t } = useTranslation(); // i18n hook'u
  return (
    <div  className="flex justify-center items-center min-h-screen ">
    <div className='font-serif text-5xl bg-gradient-to-r from-gray-300 to-gray-800 text-transparent bg-clip-text'>{t("We are engineers in development.")}</div>
    </div>
  )
}

export default Contact