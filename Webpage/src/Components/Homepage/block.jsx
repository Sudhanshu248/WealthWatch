export default function Block(){
    return(
        <>
        <div className="text-center">

        <div  className="text-center flex flex-row mx-auto mt-24 justify-evenly align-item-center max-[750px]:flex-col text-center gap-12 my-auto mx-auto py-6 w-full flex-wrap">

            
            <div id="home-block" className="text-center m-auto w-1/6   h-48 p-2 text-2xl font-semibold  bg-sky-100 hover:scale-105 bounce-1s " style={{borderRadius:"30px"}}>  
         <img src="/image//shield.png" alt="" style={{height:"65px" , width:"80px", margin:"auto"}}/>
            <h3 className="mt-2">100%</h3>
            <h3 className=""> Secured data</h3>
             </div>


            <div id="home-block" className="text-center m-auto w-1/6 h-48  text-2xl font-semibold p-4 bg-sky-100 hover:scale-105  bounce-2s"  style={{borderRadius:"30px"}}>  
 <img src="/image//savings-plan.png" alt="" style={{height:"65px" , width:"80px", margin:"auto"}}/>
            <h3 className="mt-6">Saving plan</h3>
             </div>

            <div id="home-block" className="text-center m-auto w-1/6  h-48  text-2xl font-semibold p-4 bg-sky-100 hover:scale-105 bounce-3s"  style={{borderRadius:"30px"}}>  
       <img src="/image//ai.png" alt="" style={{height:"65px" , width:"80px", margin:"auto"}}/>
            <h3 className="mt-2">Advance AI Tech</h3>
             </div>
          
          
         
          
        </div>
        </div>
        </>
    )
}