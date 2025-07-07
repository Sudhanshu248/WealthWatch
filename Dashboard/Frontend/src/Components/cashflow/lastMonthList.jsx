import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalLastMonthExpence.js";
import { useState, useEffect } from "react";
export default function LastMonthList() {

    const [Foodpercentage, setFoodpercentage] = useState(0);
    const [TransportPercentage, setTransportPercentage] = useState(0);
    const [Personal_percentage, setPersonal_percentage] = useState(0);
    const [Housing_percentage, setHousing_percentage] = useState(0);
    const [Saving_percentage, setSaving_percentage] = useState(0);

    const [FoodExpences, setFoodExpences] = useState(0);
    const [TransportExpences, setTransportExpences] = useState(0);
    const [PersonalExpences, setPersonalExpences] = useState(0);
    const [HousingExpences, setHousingExpences] = useState(0);
    const [SavingExpences, setSavingExpences] = useState(0);


    useEffect(() => {
        const loadData = async () => {
            const food = await FoodExpence();
            const transport = await TransportExpence();
            const personal = await PersonalExpence();
            const saving = await SavingExpence();
            const housing = await HousingExpence();

            setFoodpercentage(food?.Foodpercentage.toFixed(1) || 0);
            setTransportPercentage(transport?.TransportPercentage.toFixed(1) || 0);
            setPersonal_percentage(personal?.Personal_percentage.toFixed(1) || 0);
            setSaving_percentage(saving?.Saving_percentage.toFixed(1) || 0);
            setHousing_percentage(housing?.Housing_percentage.toFixed(1) || 0);

            setFoodExpences(food?.foodExpence.toFixed(1) || 0);
            setTransportExpences(transport?.transportExpence.toFixed(1) || 0);
            setPersonalExpences(personal?.personalExpence.toFixed(1) || 0);
            setSavingExpences(saving?.savingExpence.toFixed(1) || 0);
            setHousingExpences(housing?.housingExpence.toFixed(1) || 0);
        }
        loadData();
    });


    return (
        <>
            {/* History Data */}
            <div className="w-full h-[460px] bg-white rounded-2xl mt-8 px-8 py-4">

                {/* Heading */}
                <div className="font-medium text-xl ">
                    Last Month Data
                </div>


                {/* Data */}
                <div className="w-full h-fit  rounded-2xl mt-2 px-8 py-4 ">

                    {/* Food */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2">
                        <div className="flex flex-row gap-2 " >
                            <button className="text-xl font-medium " value='Food'>Food</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Foodpercentage
                            }%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{FoodExpences}</p>
                        </div>
                    </div>

                    {/* Housing */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2 ">
                        <div className="flex flex-row gap-2">
                            <button className="text-xl font-medium " value='Housing' >Housing</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Housing_percentage}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{HousingExpences}</p>
                        </div>
                    </div>

                    {/* Personal */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2  ">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium " value='PersonalExpence' >Personal expence</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Personal_percentage}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{PersonalExpences}</p>
                        </div>
                    </div>

                    {/* Transport */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2 ">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium " value='Transport' >Transport</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{TransportPercentage}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{TransportExpences}</p>
                        </div>
                    </div>

                    {/* Saving */}
                    <div className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 ">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium " value='Saving' >Saving</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Saving_percentage}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{SavingExpences}</p>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}