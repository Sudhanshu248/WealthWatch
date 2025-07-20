// Import necessary hooks and components
import { useState, useEffect } from "react";
import BarGraph from "../pie/barGraph.jsx";
import { ThirdTotalExpence, ThirdFoodExpence, ThirdTransportExpence, ThirdPersonalExpence, ThirdHousingExpence, ThirdSavingExpence } from "../../data/CalThirdMonthExpence.js";
import ThirdMonthList from "./ThirdMonthList.jsx";
import ThirdPie from "../pie/thirdMonthpie.jsx";

export default function ThirdMonth() {

    // State variables to store different expense categories, income, and balance
    const [FoodExpences, setFoodExpences] = useState(0);
    const [TransportExpences, setTransportExpences] = useState(0);
    const [PersonalExpences, setPersonalExpences] = useState(0);
    const [HousingExpences, setHousingExpences] = useState(0);
    const [SavingExpences, setSavingExpences] = useState(0);
    const [TotalExpences, setTotalExpences] = useState(0); // Total income
    const [Spended, setSpended] = useState(0); // Total expenses
    const [Balance, setBalance] = useState(0); // Remaining balance

    // useEffect to load expense data when component mounts
    useEffect(() => {
        const loadData = async () => {
            // Fetch all expense and budget data asynchronously
            const food = await ThirdFoodExpence();
            const transport = await ThirdTransportExpence();
            const personal = await ThirdPersonalExpence();
            const saving = await ThirdSavingExpence();
            const housing = await ThirdHousingExpence();
            const total = await ThirdTotalExpence();

            // Set state values with fallback defaults
            setFoodExpences(food?.foodExpence.toFixed(1) || 0);
            setTransportExpences(transport?.transportExpence.toFixed(1) || 0);
            setPersonalExpences(personal?.personalExpence.toFixed(1) || 0);
            setSavingExpences(saving?.savingExpence.toFixed(1) || 0);
            setHousingExpences(housing?.housingExpence.toFixed(1) || 0);
            setTotalExpences(total?.TotalBudget || 0);
            setSpended(total?.Spended || 0);
            setBalance((total?.TotalBudget || 0) - (total?.Spended || 0)); // Calculate balance
        };
        loadData(); // Trigger data loading
    });

    // Display loading message if any category is not loaded yet
    if (!FoodExpences || !HousingExpences || !PersonalExpences || !SavingExpences || !TransportExpences) {
        return <p className="text-center mt-20">Loading...</p>;
    }

    // Bar chart configuration
    const labels = ['Food', 'Housing', 'Personal expenses', 'Transport', 'Saving'];
    const datas = {
        labels,
        datasets: [
            {
                type: 'bar',
                label: '', // Static label for the month
                data: [FoodExpences, HousingExpences, PersonalExpences, TransportExpences, SavingExpences],
                backgroundColor: 'rgb(130, 231, 130)' // Light green bar color
            }
        ]
    };

    return (
        <>
            {/*  Bar Chart and Income Summary Section  */}
            <div className="monthly-exp bg-white w-full mt-4 rounded-2xl py-5 px-10">
                <div className="font-medium text-xl mb-7">
                    Monthly Expenses
                </div>

                {/* Bar chart with summary cards beside it */}
                <div className="bar-graph flex justify-between">

                    {/* Left: Bar Chart */}
                    <div className="bar-graph-1 w-[60%] h-full">
                        <BarGraph data={datas} />
                    </div>

                    {/* Right: Summary info for Income, Expenses, Balance */}
                    <div className="bar-graph-2 text-center flex flex-col mb-12 mr-10 w-[24%]" style={{ justifyContent: "center" }}>
                        {/* Income box */}
                        <div className="bar-graph-2-1 w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200 mb-5">
                            <p className="text-xl">Income</p>
                            <p className="text-lg font-semibold"> &#8377; {TotalExpences} </p>
                        </div>

                        {/* Expenses box */}
                        <div className="bar-graph-2-1 w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200 mb-5">
                            <p className="text-xl">Expenses</p>
                            <p className="text-lg font-semibold" style={{ color: "rgb(255, 0, 0)" }}> &#8377; {Spended} </p>
                        </div>

                        {/* Balance box */}
                        <div className="bar-graph-2-1 w-full p-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                            <p className="text-xl">Balance</p>
                            <p className="text-lg font-semibold" style={{ color: "rgb(48, 161, 78)" }}> &#8377; {Balance} </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Pie Chart Section  */}
            <div className="c-monthlychart bg-white w-full mt-4 rounded-2xl p-5">
                <ThirdPie />
            </div>

            {/*  Detailed Monthly Expense List  */}
            <ThirdMonthList />
        </>
    )
}