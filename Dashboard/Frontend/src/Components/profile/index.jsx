import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../backend/axiosConfig.js";


export default function ProfilePage() {
    const formData = new FormData();
const [profileImage, setProfileImage] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
            fetchGoalsFromBackend();
        }
    }, []);

    const fetchGoalsFromBackend = async (userId) => {
        const userToken = localStorage.getItem("token");
        if (!userToken) {
            console.error("No user token found.");
            return;
        }

        try {
            const response = await axios.get(`${BASE_URL}/getUserProfile`, {
                headers: {
                    Authorization: userToken,
                },
            });

            if (response.data?.formData?.profilePicture) {
                setProfileImage(response.data.formData.profilePicture);
            }

            if (response.data) {
                console.log("Response Data = ", response.data)
            }
        } catch (error) {
            console.error("Error while fetching goals:", error.message);
        }
    };

    const handleSave = () => {

    }

    const handleUpdate = () => {

    }


    const updateProfilePicture = async (file) => {
    const formData = new FormData();
    formData.append("profileImage", file);

    const response = await axios.post(`${BASE_URL}/updateProfilePicture`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem("token"),
        },
    });

    if (response.data?.message === "Profile Picture Updated") {
        const userRes = await axios.get(`${BASE_URL}/getUserProfile`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        setProfileImage(userRes.data.formData?.profilePicture);
    }
};


    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>


                {/* Sidebar section */}


                {/* BLogs Container */} 
                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-[86.5vh] w-[60vw]  grow">

                    <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-16 my-4">My Profile</h1>

                    <div className="flex flex-col items-center justify-center bg-white h-[30vh] w-[90%] mx-auto rounded-2xl">


                        <img src="image/profile.png" alt="profile.png" style={{height: "100px"}} className="m-3"/>

                        <div className="b-5 border">
                            <input onChange={(e) => updateProfilePicture(e.target.files[0])} type="file" />
                            {profileImage && (
                                 <img
                                    src={`${BASE_URL}/uploads/${profileImage}`}
                                    alt="Profile"
                                    width={100}
                                />
                            )}
                        </div>



                        <div className="text-center">
                            <p className="text-2xl m-0">username</p>
                            <p className="" style={{color: "rgb(50, 47, 47)"}}>username@gmailcom</p>
                        </div>

                    </div>


                    <div className="bg-white p-4 px-10 mx-auto mb-3 rounded-2xl flex items-center justify-between m-5" style={{width: "90%"}}>
                        <p className="text-2xl pt-1 font-medium">Profession</p>
                        <p style={{color: "rgb(50, 47, 47)"}}>Interior Designer</p>
                    </div>

                    <div className="bg-white p-4 px-8 mx-auto mb-3 rounded-2xl flex items-center align-middle justify-between m-5" style={{width: "90%"}}>
                        <p className="text-2xl pt-1 font-medium">Income</p>
                        <p style={{color: "rgb(50, 47, 47)"}}>&#8377; 7247</p>
                    </div>

                    <div className="bg-white p-4 px-8 mx-auto mb-7 rounded-2xl flex items-center justify-between m-5" style={{width: "90%"}}>
                        <p className="text-2xl pt-1 font-medium">Average Expenses</p>
                        <p style={{color: "rgb(50, 47, 47)"}}>&#8377; 2477</p>
                    </div>

                    <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1 cursor-pointer mr-5 ml-16" onClick={handleUpdate}>Edit</button>

                    <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1 cursor-pointer" onClick={handleSave}>Save</button>


                </div>
            </div>
        </>
    )
}