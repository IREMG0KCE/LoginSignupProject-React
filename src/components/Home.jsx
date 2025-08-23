import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
 const { t } = useTranslation(); // i18n hook'u
  return (
    <div>
    <div  className="flex justify-center items-center min-h-screen ">
       <p className='font-serif text-5xl bg-gradient-to-r from-gray-300 to-gray-800 text-transparent bg-clip-text'>{t("I'm learning React.")}</p>
    </div>
    </div>
  )
}

export default Home