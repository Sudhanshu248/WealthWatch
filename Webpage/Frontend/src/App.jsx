import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Homepage from './Components/Homepage/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Footer from './Components/Footer/index.jsx'
import AboutUs from './Components/AboutUs/index.jsx'
import Support from './Components/Support/index.jsx'
import NotFound from './Components/NotFound.jsx'

function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/support' element={<Support />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </>
  );
}


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
