import {TotalExpence, FoodExpence, TransportExpence  , HousingExpence , SavingExpence , PersonalExpence} from "../data/CalExpence.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";  
import { useState, useEffect } from "react";
export default function IndividualData(){


const { Foodlist} = FoodExpence();
const { TransportListing} = TransportExpence();
const { PersonalListing} = PersonalExpence();
const { SavingLisitng} = SavingExpence();
const { HousingListing} = HousingExpence();

const navigate = useNavigate();

const handleclick = ()=>{
    navigate('/history/')
}

const value = location.pathname.replace("/history/" , "");


// useEffect(()=>{
//     axios.get(`http://localhost:3001/api/individual/${value}`);
// })

    return(
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
                            location.pathname == "/history/Food" && Foodlist.map((item , index) => (                           
                             <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 hover:cursor-pointer">
                                <div className="flex flex-row gap-2">

                                    <button className="text-xl font-medium hover:cursor-pointer" value=''>{item.name}</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                </div>
                            </div>

                        ))
                        }
                        {
                            location.pathname == "/history/Transport" && TransportListing.map((item , index) => (                           
                             <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 hover:cursor-pointer">
                                <div className="flex flex-row gap-2">

                                    <button className="text-xl font-medium hover:cursor-pointer" value=''>{item.name}</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                </div>
                            </div>

                        ))
                        }
                        {
                            location.pathname == "/history/Housing" && HousingListing.map((item , index) => (                           
                             <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 hover:cursor-pointer">
                                <div className="flex flex-row gap-2">

                                    <button className="text-xl font-medium hover:cursor-pointer" value=''>{item.name}</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                </div>
                            </div>

                        ))
                        }
                        {
                            location.pathname == "/history/Saving" && SavingLisitng.map((item , index) => (                           
                             <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 hover:cursor-pointer">
                                <div className="flex flex-row gap-2">

                                    <button className="text-xl font-medium hover:cursor-pointer" value=''>{item.name}</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{item.value}</p>
                                </div>
                            </div>

                        ))
                        }
                        {
                            location.pathname == "/history/PersonalExpence" && PersonalListing.map((item , index) => (                           
                             <div key={index} className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 hover:cursor-pointer">
                                <div className="flex flex-row gap-2">

                                    <button className="text-xl font-medium hover:cursor-pointer" value=''>{item.name}</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{item.percentage.toFixed(1)}%</p>
                                </div>
                                <div>

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