import {  FoodExpence, TransportExpence, HousingExpence, SavingExpence, PersonalExpence } from "../../data/CalFifthMonthExpence";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function FifthIndividualData() {
    const navigate = useNavigate();

    
      
    const [Foodlist, setFoodlist] = useState([]);
    const [TransportListing, setTransportListing] = useState([]);
    const [PersonalListing, setPersonalListing] = useState([]);
    const [SavingListing, setSavingListing] = useState([]);
    const [HousingListing, setHousingListing] = useState([]);

const [refreshKey, setRefreshKey] = useState(0);


    useEffect(() => {
        const loadData = async () => {
            const food = await FoodExpence();
            const transport = await TransportExpence();
            const personal = await PersonalExpence();
            const saving = await SavingExpence();
            const housing = await HousingExpence();

            setFoodlist(food?.Foodlist || []);
            setTransportListing(transport?.TransportListing || []);
            setPersonalListing(personal?.PersonalListing || []);
            setSavingListing(saving?.SavingListing || []);
            setHousingListing(housing?.HousingListing || []);
        };

        loadData();
    }, [refreshKey]);


    

    const handleclick = () => {
        navigate('/cashflow/SixMonth/5')
    }

    const value = location.pathname.replace("/cashflow/SixMonth/5/", "");
  

    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>

                {/* History Data Container */}
                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-[100vh] w-[60vw]  grow px-12 py-8">

                    {/* Back Btn */}
                    <div className=" mb-8">
                        <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1" onClick={handleclick} ><i className="fa-solid fa-arrow-left"></i> &nbsp;Back</button>
                    </div>

                    {/* History data list*/}
                    <div className="bg-white w-full h-fit rounded-2xl mt-2 px-12 py-8">

                        <div className="font-medium text-[25px]">
                            <h1>{value}</h1>
                        </div>




                        {
                            location.pathname == "/cashflow/SixMonth/5/Food" && (Foodlist || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>
                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                 
                                    </div>
                                </div>

                            ))
                        }
                        
                        {
                            location.pathname == "/cashflow/SixMonth/5/Transport" && (TransportListing || []).map((item, index) => (
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
                            location.pathname == "/cashflow/SixMonth/5/Housing" && (HousingListing || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>
                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>

                                       
                                    </div>
                                </div>

                            ))
                        }
                        {
                            location.pathname == "/cashflow/SixMonth/5/Saving" && (SavingListing || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>

                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>

                                       
                                    </div>
                                </div>

                            ))
                        }
                        {
                            location.pathname == "/cashflow/SixMonth/5/Personal" && (PersonalListing || []).map((item, index) => (
                                <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                                    <div className="flex flex-row gap-2">

                                        <button className="text-xl font-medium " value=''>{item.name}</button>
                                        <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                    </div>

                                    <div className="flex flex-row gap-2">

                                        <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                       
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