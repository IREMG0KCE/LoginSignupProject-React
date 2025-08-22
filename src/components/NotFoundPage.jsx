import React from 'react'
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
    const { t } = useTranslation(); // i18n hook'u
  return (
    <div  className='font-serif text-5xl bg-gradient-to-r from-gray-300 to-gray-800 text-transparent bg-clip-text'>{t("NotFoundPage")}</div>
  )
}

export default NotFoundPage