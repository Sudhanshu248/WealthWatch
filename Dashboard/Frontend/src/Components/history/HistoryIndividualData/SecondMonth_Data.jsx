import { SecondFoodExpence, SecondTransportExpence, SecondPersonalExpence, SecondHousingExpence, SecondSavingExpence } from "../../data/CalSecondMonthExpence.js";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../../../backend/axiosConfig.js";

export default function SecondHistoryIndividual() {
    const navigate = useNavigate();
    const location = useLocation();



    const [Foodlist, setFoodlist] = useState([]);
    const [TransportListing, setTransportListing] = useState([]);
    const [PersonalListing, setPersonalListing] = useState([]);
    const [SavingListing, setSavingListing] = useState([]);
    const [HousingListing, setHousingListing] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);


    useEffect(() => {
        const loadData = async () => {
            const food = await SecondFoodExpence();
            const transport = await SecondTransportExpence();
            const personal = await SecondPersonalExpence();
            const saving = await SecondSavingExpence();
            const housing = await SecondHousingExpence();

            setFoodlist(food?.Foodlist || []);
            setTransportListing(transport?.TransportListing || []);
            setPersonalListing(personal?.PersonalListing || []);
            setSavingListing(saving?.SavingListing || []);
            setHousingListing(housing?.HousingListing || []);
        };

        loadData();
    }, [refreshKey]);




    const value = location.pathname.replace("/history/:month", "");
    const category = value.charAt(0).toLowerCase() + value.slice(1);


    const handleDelete = async (name) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post(
                `${BASE_URL}/deleteData`,
                { category, name },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token,
                    },
                    timeout: 5000,
                }
            );

            if (response.data && response.data.message) {
                alert("Item deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };


    const parts = location.pathname.split("/");
    const basePath = `/${parts[1]}/${parts[2]}`;
    const name = location.pathname.replace(`${basePath}/`, "");
    const handleBack = () => {
        const parts = location.pathname.split("/");
        // ["", "historys", "June", "Food"]
        if (parts.length >= 4) {
            const basePath = `/${parts[1]}/${parts[2]}`; // "/historys/June"
            navigate(basePath);
        }
    };

    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>

                {/* History Data Container */}
                <div className="history-individual bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-[100vh] w-[60vw]  grow px-12 py-8">

                    {/* Back Btn */}
                    <div className=" mb-8">
                        <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1" onClick={handleBack} ><i className="fa-solid fa-arrow-left"></i> &nbsp;Back</button>
                    </div>

                    {/* History data list*/}
                    <div className="history-individual-1 bg-white w-full h-fit rounded-2xl mt-2 px-12 py-8">

                        <div className="font-medium text-[25px]">
                            <h1>{name}</h1>
                        </div>




                        {
                            location.pathname == `${basePath}/Food` && (Foodlist || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>
                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                        {item.name && (
                                            <button className="ml-3 cursor-pointer" onClick={() => handleDelete(item.name)}>
                                                <i className="fa-solid fa-trash text-[#2D5359]"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>

                            ))
                        }
                        {
                            location.pathname == `${basePath}/Transport` && (TransportListing || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>
                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                        {item.name && (
                                            <button className="ml-3 cursor-pointer" onClick={() => handleDelete(item.name)}>
                                                <i className="fa-solid fa-trash text-[#2D5359]"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>

                            ))
                        }
                        {
                            location.pathname == `${basePath}/Housing` && (HousingListing || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>
                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>

                                        {item.name && (
                                            <button className="ml-3 cursor-pointer" onClick={() => handleDelete(item.name)}>
                                                <i className="fa-solid fa-trash text-[#2D5359]"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>

                            ))
                        }
                        {
                            location.pathname == `${basePath}/Saving` && (SavingListing || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>

                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>

                                        {item.name && (
                                            <button className="ml-3 cursor-pointer" onClick={() => handleDelete(item.name)}>
                                                <i className="fa-solid fa-trash text-[#2D5359]"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>

                            ))
                        }
                        {
                            location.pathname == `${basePath}/PersonalExpence` && (PersonalListing || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>

                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                        {item.name && (
                                            <button className="ml-3 cursor-pointer" onClick={() => handleDelete(item.name)}>
                                                <i className="fa-solid fa-trash text-[#2D5359]"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>

                            ))
                        }




                    </div>



                </div>
            </div>
        </>
    )
}