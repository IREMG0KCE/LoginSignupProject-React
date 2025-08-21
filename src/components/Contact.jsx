import React from 'react'
import { useTranslation } from 'react-i18next';
function Contact() {
   const { t } = useTranslation(); // i18n hook'u
  return (
    <div>{t("We are engineers in development.")}</div>
  )
}

export default Contact