import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../backend/axiosConfig.js";
import { TotalExpence } from "../data/CalCurrentMonthExpence.js";
export default function ProfilePage() {

    const [profileImage, setProfileImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profession, setProfession] = useState("");
    const [income, setIncome] = useState("");
    const [AverageExpences, setAverageExpences] = useState("");
    const [isModelOpen, SetIsModelOpen] = useState(false);
    const [Error, setError] = useState(false);
    const [FileError, setFileError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const CurrentData = await TotalExpence();
            setAverageExpences(CurrentData?.AverageExpence)
        };
        loadData();
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            fetchProfileFromBackend();
        }
        else {
            console.error("No user token found.");
            return;
        }
    }, []);

    const fetchProfileFromBackend = async () => {

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
        try {
            const formData = new FormData();
            formData.append("profileImage", file);
            const response = await axios.post(`${BASE_URL}/updateProfilePicture`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem("token"),
                },
            });

            if (!response.data) {
                setError(true)
                setTimeout(() => {
                    setError(false);
                }, 5000);
            }

            if (response.data?.message === "Profile Picture Updated") {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
                const userRes = await axios.get(`${BASE_URL}/getUserProfile`, {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });
                setProfileImage(userRes.data.formData?.profilePicture);

            }
        } catch (error) {
            setFileError(true);
            setTimeout(() => {
                setFileError(false);
            }, 5000);
            console.error("Error while updating profile picture:", error.message);
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

    const handleSuccess = () => {
        setSuccess(false)
    }
    const handleError = () => {
        setError(false)
    }
    const handleFileError = () => {
        setFileError(false)
    }





    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>

                {/* BLogs Container */}
                <div className="profile bg-[#B8D7DE8C] rounded-md mt-4 ml-64  w-[60vw]  grow">

                    <h1 className="profile-text text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-16 my-4">My Profile</h1>

                    {success && <div className="flex flex-row mx-auto justify-between w-[90%]" style={{
                        backgroundColor: "#d4edda",
                        border: "1px solid #c3e6cb",
                        color: "#155724",
                        padding: "10px",
                        borderRadius: "5px",
                        marginTop: "10px"
                    }}>
                        <div> Profile Picture Successfully Recorded !</div>
                        <button onClick={handleSuccess}><i className="fa-solid fa-xmark"></i></button>
                    </div>}

                    {Error && (
                        <div
                            className="flex flex-row m-auto justify-between w-full"
                            style={{
                                backgroundColor: "#efb0abff",
                                border: "1px solid #d48377ff",
                                color: "#c10000ff",
                                padding: "10px",
                                borderRadius: "5px",
                                marginTop: "10px",
                            }}
                        >
                            <div>Your image must be larger than 4MB.</div>
                            <button onClick={handleError}><i className="fa-solid fa-xmark"></i></button>

                        </div>
                    )}
                    {(FileError &&
                        <div
                            className="flex flex-row mx-auto justify-between w-[90%]"
                            style={{
                                backgroundColor: "#efb0abff",
                                border: "1px solid #d48377ff",
                                color: "#c10000ff",
                                padding: "10px",
                                borderRadius: "5px",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        >

                            <div>Only image files are allowed.</div>
                            <button onClick={handleFileError}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                    )}


                    <div className="flex flex-col items-center justify-center bg-white h-[37vh] w-[90%] mx-auto rounded-2xl">

                        <span className="flex flex-col items-center gap-2">
                            {profileImage && (
                                <img
                                    src={`${BASE_URL}/uploads/${profileImage}`}
                                    alt="ProfileImage"
                                    style={{ borderRadius: "50%", width: "170px", height: "170px" }}
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


                    <div className="goal-1 bg-white p-4 px-10 mx-auto mb-3 rounded-2xl flex items-center justify-between m-5"
                        style={{ width: "90%" }}>
                        <p className="text-2xl pt-1 font-medium">Profession</p>

                        {isModelOpen ?
                            <input
                                type="text"
                                value={profession}
                                onChange={(e) => setProfession(e.target.value)}
                                className="w-[30%] h-[30px] bg-gray-200 rounded-md p-4"
                            />
                            :
                            <p style={{ color: "rgb(50, 47, 47)" }}>{profession}</p>
                        }
                    </div>


                    <div className="goal-1 bg-white p-4 px-8 mx-auto mb-3 rounded-2xl flex items-center align-middle justify-between m-5" style={{ width: "90%" }}>
                        <p className="text-2xl pt-1 font-medium">Income</p>

                        {isModelOpen ?
                            <input
                                type="number"
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                                className="w-[30%] h-[30px] bg-gray-200 rounded-md p-4"
                            />
                            :
                            <p style={{ color: "rgb(50, 47, 47)" }}>&#8377; {income}</p>
                        }
                    </div>

                    <div className="goal-1 bg-white p-4 px-2 sm:px-8 mx-auto mb-7 rounded-2xl flex items-center justify-between m-5" style={{ width: "90%" }}>
                        <p className="text-2xl pt-1 font-medium">Average Expenses</p>
                        <p style={{ color: "rgb(50, 47, 47)" }}>&#8377; {AverageExpences}</p>
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