import { useState, useEffect } from "react";
import BarGraph from "../pie/barGraph.jsx";
import { CurrentFoodExpence, CurrentTransportExpence, CurrentPersonalExpence, CurrentHousingExpence, CurrentSavingExpence} from "../../data/CalCurrentMonthExpence.js";
import CurrentMonthList from "./CurrentMonthList.jsx";
import CurrPie from "../pie/CurrentMonthpie.jsx";
import '../style.css'

export default function CurrentMonth() {

    const [FoodExpences, setFoodExpences] = useState(0);
    const [TransportExpences, setTransportExpences] = useState(0);
    const [PersonalExpences, setPersonalExpences] = useState(0);
    const [HousingExpences, setHousingExpences] = useState(0);
    const [SavingExpences, setSavingExpences] = useState(0);

    useEffect(() => {
        const loadData = async () => {
               const food = await CurrentFoodExpence();
            const transport = await CurrentTransportExpence();
            const personal = await CurrentPersonalExpence();
            const saving = await CurrentSavingExpence();
            const housing = await CurrentHousingExpence();

            setFoodExpences(food?.foodExpence || 0);
            setTransportExpences(transport?.transportExpence || 0);
            setPersonalExpences(personal?.personalExpence || 0);
            setSavingExpences(saving?.savingExpence || 0);
            setHousingExpences(housing?.housingExpence || 0);


        }
        loadData();
    });

    if (!FoodExpences || !HousingExpences || !PersonalExpences || !SavingExpences || !TransportExpences ) return <p className="text-center mt-20">Loading...</p>;

    const labels = ['Food', 'Housing', 'Personal expenses', 'Transport', 'Saving'];
    const datas = {
        labels,
        datasets: [
            {
                type: 'bar',
                label: 'Jan 2025',
                data: [FoodExpences, HousingExpences, PersonalExpences, TransportExpences, SavingExpences],

                backgroundColor: 'rgb(130, 231, 130)'
            }
        ]
    };



    return (
        <>



            {/* Data Charts */}
            <div className="monthly-exp bg-white w-full mt-4 rounded-2xl py-5 px-10">
                <div className="font-medium text-xl mb-7">
                    Monthly Expenses
                </div>

                <div className="bar-graph flex  justify-between">
                    <div className="bar-graph-1  w-[60%] h-full">
                        <BarGraph data={datas} />
                    </div>

                    <div className="bar-graph-2 text-center flex flex-col   w-fit" style={{ justifyContent: "center" }}>
                        <div className="bar-graph-2-1 w-fit h-fit p-3 rounded-xl items-center border-1 flex justify-between  px-4 bg-gray-200 mb-5">
                            <p className="text-xl">Income</p>
                            <p className="text-lg font-semibold"> &#8377; 2477 </p>
                        </div>

                        <div className="bar-graph-2-1 w-fit h-fit p-3 rounded-xl items-center border-1 flex  justify-between px-4 bg-gray-200 mb-5">
                            <p className="text-xl">Expense</p>
                            <p className="text-lg font-semibold" style={{ color: "rgb(255, 0, 0)" }}> &#8377; 7724 </p>
                        </div>

                        <div className=" bar-graph-2-1 w-fit h-fit p-3 rounded-xl items-center border-1 flex  justify-between px-4 bg-gray-200">
                            <p className="text-xl">Balance</p>
                            <p className="text-lg font-semibold" style={{ color: "rgb(48, 161, 78)" }}> &#8377; 7247 </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Data Pie charts  */}
            <div className="c-monthlychart bg-white w-full mt-4 rounded-2xl p-5">
                <CurrPie />

            </div>


            {/*  */}
            <CurrentMonthList />

        </>
    )
}

