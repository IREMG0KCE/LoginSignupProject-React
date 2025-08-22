import React from 'react'
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
    const { t } = useTranslation(); // i18n hook'u
  return (
    <div>{t("NotFoundPage")}</div>
  )
}

export default NotFoundPage