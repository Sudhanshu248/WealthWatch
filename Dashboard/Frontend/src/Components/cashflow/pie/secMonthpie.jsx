import { useState, useEffect } from "react";
import PieChart from "../pieChart.jsx";
import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../../data/CalLastMonthExpence.js";
import { SecondDate } from "../../data/CalLastMonthExpence.js";



export default function SecondPie() {
 const [Foodpercentage, setFoodpercentage] = useState([]);
    const [TransportPercentage, setTransportPercentage] = useState([]);
    const [Personal_percentage, setPersonal_percentage] = useState([]);
    const [Housing_percentage, setHousing_percentage] = useState([]);
    const [Saving_percentage, setSaving_percentage] = useState([]);

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


        }
        loadData();
    });

    useEffect(() => {
        const loadData = async () => {
            const date = await SecondDate();
            console.log(date);
        }
        loadData();
    }, [])


    
 const labels = ['Food', 'Housing', 'Personal expenses', 'Transport', 'Saving'];

    const data = {
        labels,
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100, 200, 43],
            backgroundColor: [
                'rgb(59, 192, 95)',
                'rgb(66, 133, 244)',
                'rgb(116, 180, 228)',
                'rgb(251, 188, 5)',
                'rgb(11, 209, 235)',

            ],
            hoverOffset: 3
        }]
    };
    return (
        <>
          

                    <div className="flex justify-between ">
                        <div className="w-[40%] ">
                            <PieChart key={JSON.stringify(data)} data={data} />
                        </div>

                        <div className="w-[45%] flex items-center pr-2 mb-5">
                            <ul className="w-full">
                                <li className="flex justify-between">
                                    <div className="flex flex-row items-center gap-3 ">
                                        <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(66, 133, 244)' }}></div>
                                        <h1>Housing</h1>
                                    </div>

                                    <div>
                                        {Housing_percentage}%
                                    </div>

                                </li>
                                <li className="flex justify-between">
                                    <div className="flex flex-row items-center gap-3 ">
                                        <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(59, 192, 95)' }}></div>
                                        <h1>Food</h1>
                                    </div>

                                    <div>
                                        {Foodpercentage}%
                                    </div>
                                </li>
                                <li className="flex justify-between ">
                                    <div className="flex flex-row items-center gap-3 ">

                                        <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(251, 188, 5)' }}></div>
                                        <h1>Transport</h1>
                                    </div>
                                    <div>
                                        {TransportPercentage}%
                                    </div>
                                </li>
                                <li className="flex justify-between ">
                                    <div className="flex flex-row items-center gap-3 ">

                                        <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(116, 180, 228)' }}></div>
                                        <h1>Personal Expence</h1>
                                    </div>
                                    <div>
                                        {Personal_percentage}%
                                    </div>

                                </li>
                                <li className="flex justify-between">
                                    <div className="flex flex-row items-center gap-3 ">

                                        <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(11, 209, 235)' }}></div>
                                        <h1>Saving</h1>
                                    </div>
                                    <div>

                                        {Saving_percentage}%
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
               
        </>
    )
}