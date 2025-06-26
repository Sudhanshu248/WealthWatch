import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalExpence.js";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function HistoryPage() {

    const { TotalBudget, Foodpercentage, foodExpence } = FoodExpence();
    const { TransportPercentage, transportExpence } = TransportExpence();
    const { Personal_percentage, personalExpence } = PersonalExpence();
    const { Housing_percentage, housingExpence } = HousingExpence();
    const { Saving_percentage, savingExpence } = SavingExpence();

    const navigate = useNavigate();

    const handleclick = (e) => {  
        const value = e.target.value;
        navigate(`/history/${value}`)
    }

    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>

                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-[100vh] w-[60vw]  grow px-8 py-4 ">
                    {/* Main Heading */}
                    <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start  ">History</h1>

                    {/* Pie Chart */}
                    <div className="w-full h-[220px] bg-white rounded-2xl mt-8">

                    </div>


                    {/* History Data */}
                    <div className="w-full h-[460px] bg-white rounded-2xl mt-8 px-8 py-4">

                        {/* Heading */}
                        <div className="font-medium text-xl ">
                            Current Month Data
                        </div>


                        {/* Data */}
                        <div className="w-full h-fit  rounded-2xl mt-2 px-8 py-4 ">

                            {/* Food */}
                            <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2">
                                <div className="flex flex-row gap-2 hover:cursor-pointer" >
                                   <button className="text-xl font-medium hover:cursor-pointer" value='Food' onClick={handleclick}>Food</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{Foodpercentage}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{foodExpence}</p>
                                </div>
                            </div>

                            {/* Housing */}
                            <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2 hover:cursor-pointer">
                                <div className="flex flex-row gap-2">
                                    <button className="text-xl font-medium hover:cursor-pointer" value='Housing' onClick={handleclick}>Housing</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{Housing_percentage}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{housingExpence}</p>
                                </div>
                            </div>

                            {/* Personal */}
                            <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2  hover:cursor-pointer">
                                <div className="flex flex-row gap-2">
                                  
                                    <button className="text-xl font-medium hover:cursor-pointer" value='PersonalExpence' onClick={handleclick}>Personal expence</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{Personal_percentage}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{personalExpence}</p>
                                </div>
                            </div>

                            {/* Transport */}
                            <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2 hover:cursor-pointer">
                                <div className="flex flex-row gap-2">

                                    <button className="text-xl font-medium hover:cursor-pointer" value='Transport' onClick={handleclick}>Transport</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{TransportPercentage}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{transportExpence}</p>
                                </div>
                            </div>

                            {/* Saving */}
                            <div className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 hover:cursor-pointer">
                                <div className="flex flex-row gap-2">
                                  
                                    <button className="text-xl font-medium hover:cursor-pointer" value='Saving' onClick={handleclick}>Saving</button>
                                    <p className="text-[12px] mt-2 font-medium text-gray-800">{Saving_percentage}%</p>
                                </div>
                                <div>

                                    <p className="text-[15px] mt-1">- &nbsp; &#8377;{savingExpence}</p>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}