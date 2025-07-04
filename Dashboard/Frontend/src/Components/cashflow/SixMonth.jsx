import { useState, useEffect } from "react";
// import { holdings } from "../data/data";
import PieChart from "./pieChart.jsx";
import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalExpence";


export default function SixMonth() {
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
            {/* Main Container */}
            <div className='grid grid-cols-2 gap-3 mt-8 w-full h-fit'>

                <div className="bg-white w-full h-[300px] rounded-2xl p-5 ">
                    <div className="font-medium text-xl mb-2">
                        Jan 2025
                    </div>

                    <div className="flex justify-between ">
                        <div className="w-[40%] ">
                            <PieChart key={JSON.stringify(data)} data={data}/>
                        </div>

                        <div className="w-[45%] flex items-center pr-2 mb-5">
                            <ul className="w-full">
                                <li className="flex justify-between">
                                    <div className="flex flex-row items-center gap-3 ">
                                        <div className="rounded-full h-[12px] w-[12px] " style={{backgroundColor: 'rgb(66, 133, 244)'}}></div>
                                        <h1>Housing</h1>
                                    </div>

                                    <div>
                                        {Housing_percentage.toFixed(0)}%
                                    </div>

                                </li>
                                <li className="flex justify-between">
                                    <div className="flex flex-row items-center gap-3 ">
                                        <div className="rounded-full h-[12px] w-[12px] " style={{backgroundColor: 'rgb(59, 192, 95)'}}></div>
                                        <h1>Food</h1>
                                    </div>

                                    <div>
                                        {Foodpercentage.toFixed(0)}%
                                    </div>
                                </li>
                                <li className="flex justify-between ">
                                    <div className="flex flex-row items-center gap-3 ">

                                        <div className="rounded-full h-[12px] w-[12px] " style={{backgroundColor:  'rgb(251, 188, 5)'}}></div>
                                        <h1>Transport</h1>
                                    </div>
                                    <div>
                                        {TransportPercentage.toFixed(0)}%
                                    </div>
                                </li>
                                <li className="flex justify-between ">
                                    <div className="flex flex-row items-center gap-3 ">

                                        <div className="rounded-full h-[12px] w-[12px] " style={{backgroundColor: 'rgb(116, 180, 228)'}}></div>
                                        <h1>Personal Expence</h1>
                                    </div>
                                    <div>
                                        {Personal_percentage.toFixed(0)}%
                                    </div>

                                </li>
                                <li className="flex justify-between">
                                    <div className="flex flex-row items-center gap-3 ">

                                        <div className="rounded-full h-[12px] w-[12px] " style={{backgroundColor: 'rgb(11, 209, 235)'}}></div>
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
                <div className="bg-white w-full h-[250px] rounded-2xl"></div>
                <div className="bg-white w-full h-[250px] rounded-2xl"></div>
                <div className="bg-white w-full h-[250px] rounded-2xl"></div>
                <div className="bg-white w-full h-[250px] rounded-2xl"></div>
                <div className="bg-white w-full h-[250px] rounded-2xl"></div>


            </div>
        </>
    )
}