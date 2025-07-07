import FirstPie from "./pie/OneMonthpie.jsx"
import SecondPie from "./pie/secMonthpie.jsx";
import ThirdPie from "./pie/thirdMonthpie.jsx";
import ForthPie from "./pie/forthMonthpie.jsx";
import FifthPie from "./pie/fifthMonthpie.jsx";
import SixthPie from "./pie/sixthMonthpie.jsx";


import { useEffect } from "react";

export default function SixMonth() {

 
 
    return (
        <>
            
 <div className="grid grid-cols-2 gap-3 mt-8 w-full h-fit">
               
  <div className="bg-white w-full h-[300px] rounded-2xl p-5 ">
    
                  <FirstPie/>
                  
                </div>
  <div className="bg-white w-full h-[300px] rounded-2xl p-5 ">
    
                  <SecondPie/>
                  
                </div>
  <div className="bg-white w-full h-[300px] rounded-2xl p-5 ">
                  <ThirdPie/>
                  
                </div>
  <div className="bg-white w-full h-[300px] rounded-2xl p-5 ">
                  <ForthPie/>
                  
                </div>
  <div className="bg-white w-full h-[300px] rounded-2xl p-5 ">
                  <FifthPie/>
                  
                </div>
  <div className="bg-white w-full h-[300px] rounded-2xl p-5 ">
                  <SixthPie/>
                  
                </div>

 </div>

           
        </>
    )
}
