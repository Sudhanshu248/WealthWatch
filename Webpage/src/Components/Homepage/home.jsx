export default function Home(){
    return (        
<>
<div id="home-text" className="text-center text-5xl">


    <div  className="text-center px-4 pt-4 mx-8 my-4 font-bold text-sky-400"> Track your <span style={{color:"#023e8a"}}>every Spending,</span></div>
    <div  className="text-center px-4 py-1 mx-4 my-2  font-bold text-sky-400"> Master your <span style={{color:"#023e8a"}}>Money</span>
    </div>

</div>
  
  <div className="flex align-middle  justify-center items-center mt-16"> 
    <button id="home-btn"  className=" text-center px-3 py-3 font-bold text-[20px] text-white rounded-full bg-[#023e8a] transform transition delay-150 duration-300 ease-in-out hover:scale-105" style={{width:"310px"}}>Get Started<i class="fa-solid fa-arrow-right"></i></button>

  </div>
</>

    )
}