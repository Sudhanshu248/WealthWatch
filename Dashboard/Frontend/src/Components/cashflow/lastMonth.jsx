import LastMonthList from "./lastMonthList.jsx";
import { useState, useEffect } from "react";
// import { holdings } from "../data/data";
import BarGraph from "./barGraph.jsx";
import PieChart from "./pieChart.jsx";
import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalExpence";

export default function LastMonth() {
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


    const datas = {
        labels,
        datasets: [
            {
                type: 'bar',
                label: 'Dec 2024',
                data: [10, 22, 30, 18, 24],
                // data: allHoldings.map((stock) => stock.price),
                backgroundColor: 'rgb(130, 231, 130)'
            }
        ]
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

            {/* Data Charts */}
            <div className="bg-white w-full mt-4 rounded-2xl p-5 ">
                <div className="font-medium text-xl mb-7">
                    Monthly Expenses
                </div>

                 <div className="flex justify-between">
                    <div className=" w-[60%] h-full">
                        <BarGraph data={datas} />
                    </div>

                    <div className="text-center flex flex-col mb-12 mr-10 w-[24%]" style={{justifyContent: "center"}}>
                        <div className="w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200 mb-5">
                            <p className="text-xl">Income</p> 
                            <p className="text-lg font-semibold"> &#8377; 2477 </p>
                        </div>

                        <div className="w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200 mb-5">
                            <p className="text-xl">Expenses</p> 
                            <p className="text-lg font-semibold" style={{color: "rgb(255, 0, 0)"}}> &#8377; 7724 </p>
                        </div>

                        <div className="w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                            <p className="text-xl">Balance</p>
                            <p className="text-lg font-semibold" style={{color: "rgb(48, 161, 78)"}}> &#8377; 7247 </p>
                        </div>
                    </div>
                </div>
                                
                
            </div>


            {/* Data Pie charts  */}
            <div className="bg-white w-full mt-4 rounded-2xl p-5">
                <div className="font-medium text-xl mb-3">
                    Dec 2024
                </div>

                <div className="flex mr-20">
                    <div className=" flex-[0.3]">
                        <PieChart key={JSON.stringify(data)} data={data}/>
                    </div>

                    <div className="flex-[0.3]"></div> 

                    <div className="flex-[0.4] flex items-center " >
                        <ul className="w-[70%]">
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


            {/*  */}
            <LastMonthList />

        </>
    )
}