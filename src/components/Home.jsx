import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
 const { t } = useTranslation(); // i18n hook'u
  return (
    <div>
       <p>{t("I'm learning React.")}</p>
    </div>
  )
}

export default Home