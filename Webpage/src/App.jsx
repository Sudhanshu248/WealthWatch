import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Homepage/index.jsx'
import Login from './Components/loginpage/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Footer from './Components/Footer/index.jsx'
import AboutUs from './Components/AboutUs/index.jsx'
import SignUp from './Components/SignUp/index.jsx'
import Support from './Components/Support/index.jsx'
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/Support' element={<Support />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
