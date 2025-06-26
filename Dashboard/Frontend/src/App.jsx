import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BlogPage from './Components/blogs/index.jsx'
import Dashboard from './Components/dashboard/index.jsx'
import Navbar from './Components/navbar/navbar.jsx'
import Sidebar from './Components/sidebar/sidebar.jsx'
import HistoryPage from './Components/history/index.jsx'
import CashflowPage from './Components/cashflow/index.jsx'
import GoalsPage from './Components/goals/index.jsx'
import IndividualData from './Components/history/individual_Data.jsx'
 

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='fixed  left-0 h-[100%] px-2 bg-[#B8D7DE8C] rounded-md mt-4   w-[16vw]'>
          <Sidebar />
        </div>

        <Routes>
        
          <Route path='/blogs' element={<BlogPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/history/:urlId' element={<IndividualData />} />
          <Route path='/goals' element={<GoalsPage />} />
          <Route path='/cashflow' element={<CashflowPage />} />
          <Route path='/cashflow/:urlId' element={<CashflowPage />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
