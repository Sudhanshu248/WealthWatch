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
  const location = useLocation();

  const hideLayout = ['/login', '/signup', '/form'];
  const shouldHideLayout = hideLayout.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/form' element={<Form />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/support' element={<Support />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
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
