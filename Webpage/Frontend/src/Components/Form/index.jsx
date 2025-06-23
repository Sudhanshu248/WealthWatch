import "./style.css";
import { useNavigate } from 'react-router-dom';

export default function Form() {

    const navigate = useNavigate();

    const handleclick = () => {
        navigate("/");
    }

    return(
        <> <div className="page">

            <button className="text-center m-4  px-5 py-2 font-bold font-sm text-white rounded-md hover:scale-105 cursor-pointer" 
                    style={{ backgroundColor: "#2D5359" }} onClick={handleclick}> 
                    <i className="fa-solid fa-arrow-left" style={{color: "#fff"}}></i> &nbsp; 
                    Back
            </button>

            <div className="box m-120">
                        <button className="text-center m-4 w-50 p-3 px-0 font-bold font-lg rounded-md" style={{ border: "3px solid #2D5359" }}> User Details</button>

                        <div className="form">                                            

                            <div className="input flex p-3  rounded-xl my-7">
                                <input type="text" id="name" placeholder="Enter your name" className='p-20' style={{border: "1px solid rbga(0, 0, 0, 0.1)"}}/>
                            </div>

                            <div className="input flex p-3  rounded-xl my-7">

                                <input type="text" id="profession" placeholder="Enter your profession" className='p-20' style={{border: "1px solid rbga(0, 0, 0, 0.1)"}}/>
                            </div>

                            <div className="input flex p-3  rounded-xl my-7">

                                <input type="number" id="income" placeholder="Enter your income" className='p-20' style={{border: "1px solid rbga(0, 0, 0, 0.1)"}}/>
                            </div>

                        </div>

                        <div className="w-full text-center items-center h-[20%]">
                            <button className="m-4 w-[70%] px-5 py-2 font-bold font-sm text-white hover:scale-105 cursor-pointer"
                                style={{ backgroundColor: "#2D5359", borderRadius: "45px"  }}
                            > 
                                Go to Dashboard 
                                &nbsp; &nbsp;
                                <i className="fa-solid fa-arrow-right" style={{color: "#fff"}}></i> &nbsp; 
                            </button>

                        </div>
                    </div>
        </div>
            
        </>
    );
}