import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalExpence";
import { useState, useEffect } from "react";
// import { holdings } from "../data/data";
import PieChart from "../cashflow/pieChart";

export default function MonthlyChart() {
    const [monthData, setMonthData] = useState([]);

    const { Foodpercentage } = FoodExpence();
    const { TransportPercentage } = TransportExpence();
    const { Personal_percentage } = PersonalExpence();
    const { Housing_percentage } = HousingExpence();
    const { Saving_percentage } = SavingExpence();

        //     useEffect(() => {
        //     axios.get("http://localhost:8080/allHoldings").then((res) => {
//       // console.log(res.data);
//       setAllHoldings(res.data);
//     });
//   }, []);

    const labels =  ['Food', 'Housing', 'Personal expenses', 'Transport', 'Saving'];
//   const labels = allHoldings.map((subArray) => subArray["name"]);


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

            <div className="h-[500px] grow  flex flex-col gap-2  py-2 px-2 w-[30%]" >
                <div className="bg-white text-center h-full w-full rounded-2xl py-4 px-6">
                    <div>
                        <h1 className="text-xl mb-3">Monthly Expence</h1>
                    </div>

                    <div className="w-[90%] m-auto">
                        <PieChart key={JSON.stringify(data)} data={data}/>
                    </div>

                    <div className=" text-start font-medium mt-4">

                        <ul>
                            <li className="flex flex-row justify-between ">
                                <div className="flex flex-row items-center gap-3 ">
                                    <div className="rounded-full h-[12px] w-[12px] bg-yellow-600"></div>
                                    <h1>Housing</h1>
                                </div>

                                <div>
                                    {Housing_percentage.toFixed(0)}%
                                </div>

                            </li>
                            <li className="flex flex-row items-center gap-3 justify-between">
                                <div className="flex flex-row items-center gap-3 ">
                                    <div className="rounded-full h-[12px] w-[12px] bg-green-900"></div>
                                    <h1>Food</h1>
                                </div>

                                <div>
                                    {Foodpercentage.toFixed(0)}%
                                </div>
                            </li>
                            <li className="flex flex-row justify-between items-center gap-3 ">
                                <div className="flex flex-row items-center gap-3 ">

                                    <div className="rounded-full h-[12px] w-[12px] bg-green-900"></div>
                                    <h1>Transport</h1>
                                </div>
                                <div>
                                    {TransportPercentage.toFixed(0)}%
                                </div>
                            </li>
                            <li className="flex flex-row justify-between items-center gap-3 ">
                                <div className="flex flex-row items-center gap-3 ">

                                    <div className="rounded-full h-[12px] w-[12px] bg-cyan-500"></div>
                                    <h1>Personal Expence</h1>
                                </div>
                                <div>
                                    {Personal_percentage.toFixed(0)}%
                                </div>

                            </li>
                            <li className="flex flex-row  justify-between items-center gap-3 ">
                                <div className="flex flex-row items-center gap-3 ">

                                    <div className="rounded-full h-[12px] w-[12px] bg-sky-900"></div>
                                    <h1>Saving</h1>
                                </div>
                                <div>

                                    {Saving_percentage.toFixed(0)}%
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}