import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../../data/CalFifthMonthExpence.js";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function FifthHistory() {

    const navigate = useNavigate();

    const [Foodpercentage, setFoodpercentage] = useState(0);
    const [TransportPercentage, setTransportPercentage] = useState(0);
    const [Personal_percentage, setPersonal_percentage] = useState(0);
    const [Housing_percentage, setHousing_percentage] = useState(0);
    const [Saving_percentage, setSaving_percentage] = useState(0);

    const [foodExpence, setFoodExpence] = useState(0);
    const [transportExpence, setTransportExpence] = useState(0);
    const [personalExpence, setPersonalExpence] = useState(0);
    const [housingExpence, setHousingExpence] = useState(0);
    const [savingExpence, setSavingExpence] = useState(0);

    useEffect(() => {
        const loadData = async () => {

            const food = await FoodExpence();
            const transport = await TransportExpence();
            const personal = await PersonalExpence();
            const saving = await SavingExpence();
            const housing = await HousingExpence();

            setFoodpercentage(food?.Foodpercentage || 0);
            setTransportPercentage(transport?.TransportPercentage || 0);
            setPersonal_percentage(personal?.Personal_percentage || 0);
            setSaving_percentage(saving?.Saving_percentage || 0);
            setHousing_percentage(housing?.Housing_percentage || 0);

            setFoodExpence(food?.foodExpence || 0);
            setTransportExpence(transport?.transportExpence || 0);
            setPersonalExpence(personal?.personalExpence || 0);
            setSavingExpence(saving?.savingExpence || 0);
            setHousingExpence(housing?.housingExpence || 0);
        }
        loadData();
    }, []);

    const handleclick = (e) => {
        const value = e.target.value;
        const path = location.pathname;
        navigate(`${path}/${value}`)
    };



    return (
        <>
            {/* History Data */}
            <div className="w-full h-[460px] bg-white rounded-2xl mt-8 px-8 py-4">

                {/* Heading */}
                <div className="font-medium text-xl ">
                    Current Month Data
                </div>




                {/* Data */}
                <div className="w-full h-fit  rounded-2xl px-8  ">

                    {/* Food */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2">
                        <div className="flex flex-row gap-2 hover:cursor-pointer" >
                            <button className="text-xl font-medium hover:cursor-pointer" value='Food' onClick={handleclick}>Food</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Foodpercentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{foodExpence}</p>
                        </div>
                    </div>

                    {/* Housing */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2 hover:cursor-pointer">
                        <div className="flex flex-row gap-2">
                            <button className="text-xl font-medium hover:cursor-pointer" value='Housing' onClick={handleclick}>Housing</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Housing_percentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{housingExpence}</p>
                        </div>
                    </div>

                    {/* Personal */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2  hover:cursor-pointer">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium hover:cursor-pointer" value='PersonalExpence' onClick={handleclick}>Personal expence</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Personal_percentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{personalExpence}</p>
                        </div>
                    </div>

                    {/* Transport */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2 hover:cursor-pointer">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium hover:cursor-pointer" value='Transport' onClick={handleclick}>Transport</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{TransportPercentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{transportExpence}</p>
                        </div>
                    </div>

                    {/* Saving */}
                    <div className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 hover:cursor-pointer">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium hover:cursor-pointer" value='Saving' onClick={handleclick}>Saving</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Saving_percentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">+ &nbsp; &#8377;{savingExpence}</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}