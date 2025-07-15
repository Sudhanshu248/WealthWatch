import "./style.css"
import { BASE_URL } from "../../../../backend/axiosConfig.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "./calendar";

export default function Navbar() {

    const [profileImage, setProfileImage] = useState("");
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    }

    const handleCross = () => {
        setShow(false)
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            fetchGoalsFromBackend();
        }
        else {
            console.error("No user token found.");
            return;
        }
    }, []);

    const fetchGoalsFromBackend = async () => {

        try {
            const response = await axios.get(`${BASE_URL}/getUserProfile`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });

            if (response.data?.formData) {
                setProfileImage(response.data.formData.profilePicture);
                setName(response.data.formData.name);
            }

        } catch (error) {
            console.error("Error while fetching goals:", error.message);
        }
    };

    return (
        <>
            <nav id="navbar" className="sticky top-0 px-4 max-[450px]:px-0 py-2 shadow-md z-50 align-middle" style={{ backgroundColor: "rgb(184, 215, 222)" }}>

                <div className="max-w-7xl mx-auto px-2 flex items-center align-middle justify-between">

                    {/*Page_LOGO  */}
                    <div id="logo">
                        <img src="/image/logo.png" alt="logo_image" className="h-10 w-auto"/>
                    </div>




                    {show &&
                        <div className="calendar bg-white p-5 rounded-2xl" style={{ position: "fixed", top: "100px", right: "30px", border: "3px solid rgb(184, 215, 222)", boxShadow: " 1px 1px 16px 4pxrgba(192, 192, 192, 0.2)" }}>
                            <i className="fa-solid fa-xmark fa-xl mb-4 cursor-pointer" onClick={handleCross} style={{ color: "#2D5359" }}></i>
                            <Calendar />
                        </div>
                    }

                    <div className=" flex flex-row  align-middle items-center justify-center gap-2">
                        <div className="block px-5 h-fit rounded-full m-auto cursor-pointer  max-[500px]:px-0 max-[450px]:mr-2" onClick={handleClick}>
                            <i className="fa-solid fa-calendar-days"></i>
                        </div>


                        <div className="h-[30px] w-[30px] rounded-full ">
                            <img
                                src={`${BASE_URL}/uploads/${profileImage}`}
                                alt="ProfileImage"

                                style={{ borderRadius: "50%", width: "35px", height: "30px" }}
                            />
                        </div>

                        <div>
                            <a href="/profile">{name}</a>
                        </div>
                    </div>

                </div>

            </nav>
        </>
    )
}