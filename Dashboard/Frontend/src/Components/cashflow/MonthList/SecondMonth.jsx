import { useState, useEffect } from "react";
import BarGraph from "../pie/barGraph.jsx";
import { SecondFoodExpence, SecondTransportExpence, SecondPersonalExpence, SecondHousingExpence, SecondSavingExpence } from "../../data/CalSecondMonthExpence.js";
import SecondMonthList from "./SecondMonthList.jsx";
import SecondPie from "../pie/SecondMonthpie.jsx";

export default function SecondMonth() {
    const [FoodExpences, setFoodExpences] = useState(0);
    const [TransportExpences, setTransportExpences] = useState(0);
    const [PersonalExpences, setPersonalExpences] = useState(0);
    const [HousingExpences, setHousingExpences] = useState(0);
    const [SavingExpences, setSavingExpences] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const food = await SecondFoodExpence();
            const transport = await SecondTransportExpence();
            const personal = await SecondPersonalExpence();
            const saving = await SecondSavingExpence();
            const housing = await SecondHousingExpence();


            setFoodExpences(food?.foodExpence.toFixed(1) || 0);
            setTransportExpences(transport?.transportExpence.toFixed(1) || 0);
            setPersonalExpences(personal?.personalExpence.toFixed(1) || 0);
            setSavingExpences(saving?.savingExpence.toFixed(1) || 0);
            setHousingExpences(housing?.housingExpence.toFixed(1) || 0);


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
                label: 'Dec 2024',
                data: [FoodExpences, HousingExpences, PersonalExpences, TransportExpences, SavingExpences],

                backgroundColor: 'rgb(130, 231, 130)'
            }
        ]
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

                    <div className="text-center flex flex-col mb-12 mr-10 w-[24%]" style={{ justifyContent: "center" }}>
                        <div className="w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200 mb-5">
                            <p className="text-xl">Income</p>
                            <p className="text-lg font-semibold"> &#8377; 2477 </p>
                        </div>

                        <div className="w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200 mb-5">
                            <p className="text-xl">Expenses</p>
                            <p className="text-lg font-semibold" style={{ color: "rgb(255, 0, 0)" }}> &#8377; 7724 </p>
                        </div>

                        <div className="w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                            <p className="text-xl">Balance</p>
                            <p className="text-lg font-semibold" style={{ color: "rgb(48, 161, 78)" }}> &#8377; 7247 </p>
                        </div>
                    </div>
                </div>


            </div>


            {/* Data Pie charts  */}
            <div className="bg-white w-full mt-4 rounded-2xl p-5">

                <SecondPie />

            </div>

            {/*  */}
            <SecondMonthList />

        </>
    )
}