import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../backend/axiosConfig.js";

export default function ProfilePage() {

    const [profileImage, setProfileImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profession, setProfession] = useState("");
    const [income, setIncome] = useState("");
    const [isModelOpen, SetIsModelOpen] = useState(false);

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
                setProfession(response.data.formData.profession);
                setIncome(response.data.formData.income);
                setName(response.data.formData.name);
                setEmail(response.data.userData.email);
            }

        } catch (error) {
            console.error("Error while fetching goals:", error.message);
        }
    };

    const handleSave = () => {
        updateProfileData();
        SetIsModelOpen(false);
    };

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

    const updateProfileData = async () => {
        const userToken = localStorage.getItem("token");
        if (!userToken) {
            console.error("User not authenticated.");
            return;
        }

        try {
            await axios.post(`${BASE_URL}/updateProfileData`, {
                profession,
                income
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": userToken,
                },
            });


            alert("Profile Updated Successfully");

        } catch (error) {
            console.error("Error updating profile:", error.message);
        }
    };



    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>


                {/* Sidebar section */}


                {/* BLogs Container */}
                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64  w-[60vw]  grow">

                    <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-16 my-4">My Profile</h1>

                    <div className="flex flex-col items-center justify-center bg-white h-[37vh] w-[90%] mx-auto rounded-2xl">

                        <span className="flex flex-col items-center gap-2">
                            {profileImage && (
                                <img
                                    src={`${BASE_URL}/uploads/${profileImage}`}
                                    alt="ProfileImage"

                                    width={150}
                                    style={{ borderRadius: "50%", width: "150px", height: "170px" }}
                                />
                            )}
                            <label className="icon" style={{ cursor: 'pointer', display: 'inline-block', lineHeight: 0 }}>
                                <i className="fa-solid fa-circle-plus fa-2xl" style={{ color: "#2D5359" }}></i>
                                <input
                                    type="file"
                                    onChange={(e) => updateProfilePicture(e.target.files[0])}
                                    style={{ display: 'none', zIndex: 1 }}
                                />
                            </label>
                        </span>

                        <div className="text-center mb-0">
                            <p className="text-2xl m-0"> {name}</p>
                            <p className="" style={{ color: "rgb(50, 47, 47)" }}>{email}</p>
                        </div>

                    </div>


                    <div className="bg-white p-4 px-10 mx-auto mb-3 rounded-2xl flex items-center justify-between m-5"
                        style={{ width: "90%" }}>
                        <p className="text-2xl pt-1 font-medium">Profession</p>

                        {isModelOpen ?
                            <input
                                type="text"
                                value={profession}
                                onChange={(e) => setProfession(e.target.value)}
                                className="w-[20%] h-[30px] bg-gray-200 rounded-md p-4"
                            />
                            :
                            <p style={{ color: "rgb(50, 47, 47)" }}>{profession}</p>
                        }
                    </div>


                    <div className="bg-white p-4 px-8 mx-auto mb-3 rounded-2xl flex items-center align-middle justify-between m-5" style={{ width: "90%" }}>
                        <p className="text-2xl pt-1 font-medium">Income</p>

                        {isModelOpen ?
                            <input
                                type="number"
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                                className="w-[20%] h-[30px] bg-gray-200 rounded-md p-4"
                            />
                            :
                            <p style={{ color: "rgb(50, 47, 47)" }}>&#8377; {income}</p>
                        }
                    </div>

                    <div className="bg-white p-4 px-8 mx-auto mb-7 rounded-2xl flex items-center justify-between m-5" style={{ width: "90%" }}>
                        <p className="text-2xl pt-1 font-medium">Average Expenses</p>
                        <p style={{ color: "rgb(50, 47, 47)" }}>&#8377; 2477</p>
                    </div>

                    <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1 cursor-pointer mr-5 ml-16 mb-10" onClick={() => SetIsModelOpen(true)}>Edit</button>

                    {isModelOpen && (
                        <button
                            className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1 cursor-pointer"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    )}



                </div>
            </div>
        </>
    )
}