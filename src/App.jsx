import './App.css'
import{Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import LanguageTranslate from './components/LanguageTranslate'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFoundPage from './components/NotFoundPage'
import Header from './components/Header'

function App() {
 // javascript kodları return dışına yazılır
 
  return (
    //html kodları return içine yazılır
   <div> <Header />    <div >
        {/* Sayfa İçerikleri */}
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/anasayfa" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/biz-kimiz" element={<Contact />} />
            <Route path="/dil-cevirimi" element={<LanguageTranslate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div></div>
    
    
 
  )
}
//componenti kulanbilmek için export edilir(başka componentlerde import edip kullanabilir)
export default App
