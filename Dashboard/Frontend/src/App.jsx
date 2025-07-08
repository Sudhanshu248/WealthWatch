import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import BlogPage from './Components/blogs/index.jsx'
import Dashboard from './Components/dashboard/index.jsx'
import Navbar from './Components/navbar/navbar.jsx'
import Sidebar from './Components/sidebar/sidebar.jsx'
import HistoryPage from './Components/history/index.jsx'
import CashflowPage from './Components/cashflow/index.jsx'
import GoalsPage from './Components/goals/index.jsx'
import ProfilePage from './Components/profile/index.jsx'
import Signup from './Components/SignUp/index.jsx'
import Login from './Components/Login/index.jsx'
import Form from './Components/Form/index.jsx'
import IndividualData from './Components/history/individual_Data.jsx'
import CashflowIndividual from './Components/cashflow/IndividualCashflow/CashflowIndividual.jsx'
import CurrentIndividualData from './Components/cashflow/IndividualCashflowData/CurrentIndividualData.jsx'
import SecondIndividualData from './Components/cashflow/IndividualCashflowData/SecondIndividualData.jsx'
import ThirdIndividualData from './Components/cashflow/IndividualCashflowData/ThirdIndividualData.jsx'
import ForthIndividualData from './Components/cashflow/IndividualCashflowData/ForthIndividualData.jsx'
import FifthIndividualData from './Components/cashflow/IndividualCashflowData/FifthIndividualData.jsx'
import SixthIndividualData from './Components/cashflow/IndividualCashflowData/SixthIndividualData.jsx'



function AppRoutes() {
  const location = useLocation();
  const hideLayout = ['/login', '/signup', '/form'];
  const shouldHideLayout = hideLayout.includes(location.pathname.toLowerCase());

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {!shouldHideLayout && <div className='fixed  left-0 h-[100%] px-2 bg-[#B8D7DE8C] rounded-md mt-4   w-[16vw]'>
        <Sidebar />
      </div>}


      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/form' element={<Form />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/history/:urlId' element={<IndividualData />} />
        <Route path='/goals' element={<GoalsPage />} />
        <Route path='/cashflow' element={<CashflowPage />} />
        <Route path='/cashflow/:urlId' element={<CashflowPage />} />
        <Route path='/cashflow/SixMonth/:urlId' element={<CashflowIndividual/>}/>
        <Route path='/cashflow/SixMonth/1/:id' element={<CurrentIndividualData/>}/>
        <Route path='/cashflow/SixMonth/2/:id' element={<SecondIndividualData/>}/>
        <Route path='/cashflow/SixMonth/3/:id' element={<ThirdIndividualData/>}/>
        <Route path='/cashflow/SixMonth/4/:id' element={<ForthIndividualData/>}/>
        <Route path='/cashflow/SixMonth/5/:id' element={<FifthIndividualData/>}/>
        <Route path='/cashflow/SixMonth/6/:id' element={<SixthIndividualData/>}/>



      </Routes>

    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

