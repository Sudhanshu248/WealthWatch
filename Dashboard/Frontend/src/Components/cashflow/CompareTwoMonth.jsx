import { useState, useEffect } from "react";
import BarGraph from "./pie/barGraph.jsx";
import PieChart from "./pie/pieChart.jsx";
import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalCurrentMonthExpence.js";
import CurrentMonthList from "./MonthList/CurrentMonthList.jsx";
import SecondMonthList from "./MonthList/SecondMonthList.jsx";

export default function CompareTwoMonth() {


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


    const labels = ['Food', 'Housing', 'Personal expenses', 'Transport', 'Saving'];
    const datas = {
        labels,
        datasets: [{
            type: 'bar',
            label: 'Jan 2025',
            data: [10, 20, 30, 18, 24],
            backgroundColor: 'rgb(130, 231, 130)'
        }, {
            type: 'bar',
            label: 'Dec 2024',
            data: [15, 12, 24, 34, 35],
            backgroundColor: 'rgb(126, 209, 254)'
        }]
    };

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

            <div className='mt-6'>


                <div className="bg-white w-full h-[61%] mt-4 rounded-2xl p-5 ">
                    <div className="font-medium text-xl mb-7">
                        Monthly Expenses
                    </div>

                    <div className=" w-[60%] h-full">
                        <BarGraph data={datas} />
                    </div>

                </div>


                {/* Pie chart  */}
                <div className="flex flex-row gap-4 mt-6">
                    <div className="bg-white w-full h-[380px] rounded-2xl p-5 ">
                        <div className="font-medium text-xl mb-2">
                            Jan 2025
                        </div>

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

                        <div className="text-center flex flex-row mt-5 gap-7" style={{ justifyContent: "center" }}>

                            <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                                <p className="text-xl">Expenses</p>
                                <p className="text-lg font-semibold" style={{ color: "rgb(255, 0, 0)" }}> &#8377; 7724 </p>
                            </div>

                            <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                                <p className="text-xl">Balance</p>
                                <p className="text-lg font-semibold" style={{ color: "rgb(48, 161, 78)" }}> &#8377; 7247 </p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white w-full h-[380px] rounded-2xl p-5 ">
                        <div className="font-medium text-xl mb-2">
                            Jan 2025
                        </div>

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

                        <div className="text-center flex flex-row mt-5 gap-7" style={{ justifyContent: "center" }}>

                            <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                                <p className="text-xl">Expenses</p>
                                <p className="text-lg font-semibold" style={{ color: "rgb(255, 0, 0)" }}> &#8377; 7724 </p>
                            </div>

                            <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                                <p className="text-xl">Balance</p>
                                <p className="text-lg font-semibold" style={{ color: "rgb(48, 161, 78)" }}> &#8377; 7247 </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 mt-6">

                    <CurrentMonthList />
                    <SecondMonthList />
                </div>




            </div>
        </>
    )
}