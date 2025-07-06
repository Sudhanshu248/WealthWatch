import { useNavigate } from 'react-router-dom';
import { DASHBOARD_URL } from '../../../../../Dashboard/backend/axiosConfig';

export default function Home(){
  const navigate = useNavigate();

    const handleClick = () => {
      window.location.href = `${DASHBOARD_URL}/signup`;
    };

    return (        
<>
<div id="home-text" className="text-center text-5xl">


    <div  className="text-center px-4 pt-4 mx-8 my-4 font-bold text-sky-400"> Track your <span style={{color:"#023e8a"}}>every Spending,</span></div>
    <div  className="text-center px-4 py-1 mx-4 my-2  font-bold text-sky-400"> Master your <span style={{color:"#023e8a"}}>Money</span>
    </div>

</div>
  
  <div className="flex align-middle  justify-center items-center mt-16"> 
    <button id="home-btn"  className=" text-center p-3 font-bold text-[20px] text-white rounded-full bg-[#023e8a] hover:scale-105 cursor-pointer" style={{width:"310px"}} onClick={handleClick}>Get Started &nbsp; &nbsp; <i className="fa-solid fa-arrow-right"></i></button>

  </div>
</>

    )
}