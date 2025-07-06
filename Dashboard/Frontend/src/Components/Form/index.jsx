import { useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from "../../../../backend/axiosConfig";

export default function Form() {

    const navigate = useNavigate();

    const handleclick = () => {
        navigate("/signup");
    }

    // const handleDashboard = ()=>{
    //   window.location.href = 'http://localhost:5173/dashboard';
    // }

    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [income, setIncome] = useState("");
    const [error, setError] = useState("");

    const handleDashboard = async () => {
        try{
            const email = localStorage.getItem("userEmail");
            console.log(`${BASE_URL}/form`);
console.log("Payload:", { name, profession, income, email });
if (!email) {
            setError("User not found. Please sign up again.");
            return;
        }
            const respond = await axios.post( `${BASE_URL}/form`,
                {
                    name,
                    profession,
                    income,
                    email
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 5000,
                }
            );
            
            if (respond.data) {
                console.log("Form response", respond.data);
                navigate(`/dashboard`);
            }
        }catch(error){
            console.error("Form error: ", error);
            setError("Please fill all the details correctly.");
        }
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
                        {error && <div className="text-red-600 font-mediud">{error}</div>}

                        <div className="form">                                            

                            <div className="input flex p-3  rounded-xl my-7">
                                <input type="text" id="name" placeholder="Enter your name" className='p-20' 
                                onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="input flex p-3  rounded-xl my-7">

                                <input type="text" id="profession" placeholder="Enter your profession" className='p-20' 
                                onChange={(e) => setProfession(e.target.value)} />
                            </div>

                            <div className="input flex p-3  rounded-xl my-7">

                                <input type="number" id="income" placeholder="Enter your income" className='p-20' 
                                onChange={(e) => setIncome(e.target.value)} />
                            </div>

                        </div>

                        <div className="w-full text-center items-center h-[20%]">
                            <button className="m-4 w-[70%] px-5 py-2 font-bold font-sm text-white hover:scale-105 cursor-pointer"
                                style={{ backgroundColor: "#2D5359", borderRadius: "45px"  }}
                            onClick={handleDashboard} > 
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