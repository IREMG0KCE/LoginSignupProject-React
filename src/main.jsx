import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import i18n from './utils/i18n.js' 
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next';

//react dom aktif çalışması için browserrouter componenti ile
//   app componentini sarmak gerekmektedir
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <I18nextProvider i18n={i18n}>
  <App />
  </I18nextProvider>
  </BrowserRouter>
    

)
