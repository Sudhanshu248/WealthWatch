import "./style.css";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../../../backend/axiosConfig";
import { WEBPAGE_URL } from "../../../../backend/axiosConfig";

export default function Signup() {

    const navigate = useNavigate();

    const handleclick = () => {
        window.location.href = `${WEBPAGE_URL}`;
    }

    const handleAction = () => {
        navigate("/login");
    }

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        try {
            setLoading(true);
            setError("");

            console.log("Sending signup request:", {username, email, password });
// src={`${BASE_URL}/uploads/${user?.userId?.profilePicture}`} 
            const response = await axios.post(`${BASE_URL}/signup`, {
                username: username,
                email: email,
                password: password,
            }, {
                headers: {
                'Content-Type': 'application/json'
                },
                timeout: 5000 // 5 second timeout
            });

            console.log("Signup response:", response.data);

            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("userEmail", email); // Save email locally
                navigate("/form"); // Go to form page

            }

        } catch (error) {

            console.error("Signup error:", error);
            setError("Please fill all the details correctly.");

        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="page" style={{backgroundColor: "rgba(0, 0, 0, 0.4)", height: "100vh"}}>
                <button className="text-center m-4  px-5 py-2 font-bold font-sm text-white rounded-md hover:scale-105 cursor-pointer" 
                    style={{ backgroundColor: "#023e8a" }} onClick={handleclick}> 
                    <i className="fa-solid fa-arrow-left" style={{color: "#fff"}}></i> &nbsp; 
                    Back
                </button>

                <div className="box">
                    <button className="text-center m-4 w-30 p-3 px-0 font-bold font-sm rounded-md" style={{ border: "2px solid #023e8a" }}> Sign up</button>
                    {error && <div className="text-red-600 font-mediud">{error}</div>}

                    <div className="w-[90%]">

                        <div className="username flex pt-5 pb-1" style={{ borderBottom: "2px solid rgba(0, 0, 0, 0.2"}}>
                            <img src="/image/signUp-user.png" alt="signUp-user.png" className='w-9 h-9 p-2'/>
                            <input type="name" id="username" placeholder='Enter your username'className='p-6 ml-1'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="email flex pt-5 pb-1" style={{ borderBottom: "2px solid rgba(0, 0, 0, 0.2"}}>
                            <img src="/image/signUp-email.png" alt="signUp-email.png" className='w-9 h-9 p-2'/>
                            <input type="email" id="email" placeholder='Enter your email'className='p-6 ml-1'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="password flex pt-5 pb-1" style={{ borderBottom: "2px solid rgba(0, 0, 0, 0.2"}}>
                            <img src="/image/signUp-password.png" alt="signUp-password.png" className='w-10 h-10 p-2'/>
                            <input type="password" id="password" placeholder='Enter your password'className='p-6 ml-1'
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>

                    </div>

                    <div className="button w-full text-center items-center h-[30%] flex flex-col justify-between">
                        <button className="text-center m-4 w-[70%] px-5 py-2 font-bold font-sm text-white hover:scale-105 cursor-pointer" 
                        style={{ backgroundColor: "#023e8a", borderRadius: "45px" }}
                        onClick={handleSignUp} disabled={loading}
                        > 
                            Sign up
                        </button>

                        <div className="p-4 w-full text-center pb-0" style={{ borderTop: "2px solid rgba(0, 0, 0, 0.1"}}>
                            <p>Already have an account?
                                &nbsp; 
                                <a href="" className='text-blue-900 font-bold' onClick={handleAction}>Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}