import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Homepage from './Components/Homepage/index.jsx'
import Login from './Components/loginpage/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Footer from './Components/Footer/index.jsx'
import AboutUs from './Components/AboutUs/index.jsx'
import SignUp from './Components/SignUp/index.jsx'
import Support from './Components/Support/index.jsx'

function AppRoutes() {
  const location = useLocation();

  const hideLayout = ['/login', '/signup'];
  const shouldHideLayout = hideLayout.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
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
