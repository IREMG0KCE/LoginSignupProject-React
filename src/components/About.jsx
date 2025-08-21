import React from 'react'
import { useTranslation } from 'react-i18next';
export default function About() {
   const { t } = useTranslation(); // i18n hook'u
  return (
    <div>
      <p>{t("This is our about us page.")}</p>
    </div>
  )
}
