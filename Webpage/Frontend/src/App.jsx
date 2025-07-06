import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Homepage from './Components/Homepage/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Footer from './Components/Footer/index.jsx'
import AboutUs from './Components/AboutUs/index.jsx'
import Support from './Components/Support/index.jsx'
import Signup from "../../../Dashboard/Frontend/src/Components/SignUp/index.jsx"
import Login from '../../../Dashboard/Frontend/src/Components/Login/index.jsx'
import Form from '../../../Dashboard/Frontend/src/Components/Form/index.jsx'

function AppRoutes() {

  return (
    <>
     <Navbar />

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/support' element={<Support />} />
      </Routes>

   <Footer />
    </>
  );
}



function App() {

   

  return (
    <>
      <BrowserRouter>
    <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
