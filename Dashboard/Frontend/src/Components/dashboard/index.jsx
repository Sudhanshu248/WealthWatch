import { useEffect, useState } from "react";
import { TotalExpence, CurrentFoodExpence, CurrentTransportExpence, CurrentPersonalExpence, CurrentHousingExpence, CurrentSavingExpence, } from "../data/CalCurrentMonthExpence.js";
import AddDailyRecord from "./AddDailyRecord.jsx";
import MonthlyChart from "./MonthlyChart.jsx";

export default function Dashboard() {
    const [isDismissed, setIsDismissed] = useState(false);
    const [Balance, setBalance] = useState(0);
    const [Spended, setSpended] = useState(0);
    const [totalExpence, setTotalExpence] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const [Foodpercentage, setFoodpercentage] = useState(0);
    const [TransportPercentage, setTransportPercentage] = useState(0);
    const [Personal_percentage, setPersonal_percentage] = useState(0);
    const [Housing_percentage, setHousing_percentage] = useState(0);
    const [Saving_percentage, setSaving_percentage] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const budget = await TotalExpence();
            setTotalExpence(budget.TotalBudget);
            setSpended(budget.Spended);
            setPercentage(budget.TotalExpence_percentage.toFixed(1));
            setBalance(budget.TotalBudget - budget.Spended);

            const food = await CurrentFoodExpence();
            const transport = await CurrentTransportExpence();
            const personal = await CurrentPersonalExpence();
            const saving = await CurrentSavingExpence();
            const housing = await CurrentHousingExpence();

            setFoodpercentage(food?.Foodpercentage.toFixed(1) || 0);
            setTransportPercentage(transport?.TransportPercentage.toFixed(1) || 0);
            setPersonal_percentage(personal?.Personal_percentage.toFixed(1) || 0);
            setSaving_percentage(saving?.Saving_percentage.toFixed(1) || 0);
            setHousing_percentage(housing?.Housing_percentage.toFixed(1) || 0);
        };

        loadData();
    }, []);

    const overused = [];
    if (Foodpercentage > percentage * 0.5) overused.push("Food");
    if (TransportPercentage > percentage * 0.5) overused.push("Transport");
    if (Personal_percentage > percentage * 0.5) overused.push("Personal");
    if (Saving_percentage > percentage * 0.5) overused.push("Saving");
    if (Housing_percentage > percentage * 0.5) overused.push("Housing");

    const overusedCategoryText = overused.length
        ? ` High usage in: ${overused.join(", ")}.`
        : "";

    useEffect(() => {
        const dismissedTime = localStorage.getItem("anomalyDismissedAt");
        if (dismissedTime) {
            const now = Date.now();
            const elapsed = now - parseInt(dismissedTime, 10);
            const ONE_DAY_MS = 24 * 60 * 60 * 1000;

            if (elapsed < ONE_DAY_MS) {
                setIsDismissed(true);
            } else {
                setIsDismissed(false);
                localStorage.removeItem("anomalyDismissedAt");
            }
        }
    }, []);

    const handleDismiss = () => {
        setIsDismissed(true);
        localStorage.setItem("anomalyDismissedAt", Date.now().toString());
    };

    const ProgressBar = () => (
        <div
            className="h-full bg-emerald-900 rounded-full"
            style={{ width: `${percentage}%` }}
        ></div>
    );

    return (
        <>
            <div className="flex flex-row">
                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64 h-[100vh] w-full py-6 px-4">
                    <h1 className="text-3xl text-emerald-900 font-bold ml-2">Dashboard</h1>

                    <div className="flex flex-row gap-4 mt-2">
                        <div className="w-[70%] h-[400px] flex flex-col justify-between gap-5 py-2">
                            <div className="bg-white w-full h-[40%] rounded-2xl px-12 py-4">
                                <div className="flex flex-row justify-between my-2">
                                    <h1 className="text-[1.5rem] font-semibold">Balance</h1>
                                    <h1 className="text-[1.5rem] font-semibold">Spended</h1>
                                </div>

                                <div className="flex flex-row justify-between">
                                    <h1 className="text-[1rem] font-medium">&#8377;{Balance}</h1>
                                    <h1 className="text-[1rem] font-medium">
                                        &#8377;{Spended}/{totalExpence}
                                    </h1>
                                </div>

                                <div className="h-[10px] w-full bg-gray-200 my-4 rounded-full">
                                    {ProgressBar()}
                                </div>
                            </div>

                            <AddDailyRecord />
                        </div>

                        <MonthlyChart />
                    </div>

                    {/* Anomaly Detection */}
                    <div className="flex flex-col bg-white w-full rounded-2xl mt-4 px-12 py-4">

                        <h1 className="text-[1.1rem] font-medium">Anomaly Detected</h1>
                        <p className="text-gray-600">
                            Our system analyzes your past spending habits to identify
                            significant deviations. We will alert you to expenses that are
                            higher than your average or appear to be unusual, ensuring you
                            stay informed about your financial activity.
                        </p>

                        <div className="flex flex-row justify-between items-center w-full mt-4">
                            {!isDismissed &&
                                (percentage > 90 ? (
                                    <div className="bg-red-100 text-red-800 border border-red-300 rounded-2xl p-4 w-full flex justify-between items-center">
                                        <p>🚨 You've used {percentage}% of your budget!</p>
                                        <button
                                            onClick={handleDismiss}
                                            className="text-red-600 font-bold hover:underline"
                                        >
                                            Dismiss
                                        </button>
                                    </div>
                                ) : percentage > 50 || overused.length > 0 ? (
                                    <div className="bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-2xl p-4 w-full flex justify-between items-center">
                                        {overused.length > 0 && <p>
                                            ⚠️ You've used {percentage}% of your budget.
                                            {overusedCategoryText}
                                        </p>}

                                        {percentage > 50 && overused.length === 0 && <p>🚨 You've used {percentage}% of your budget!</p>}
                                        <button
                                            onClick={handleDismiss}
                                            className="text-yellow-600 font-bold hover:underline"
                                        >
                                            Dismiss
                                        </button>
                                    </div>
                                ) : null)}
                        </div>


                    </div>

                    {/* AI Recommendation */}
                    <div className="flex flex-col gap-5 bg-white w-full rounded-2xl mt-4 px-12 py-4">
                        <div className="flex flex-row gap-4 items-center">
                            <h1 className="text-[1.1rem] font-medium">
                                Budget Recommendations
                            </h1>
                            <div className="flex flex-row items-center px-3 bg-black rounded-md">
                                <p className="text-blue-600 text-2xl">&#9733;</p>
                                <h1 className="text-white font-bold ml-1">AI</h1>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center text-start w-full">
                            <p className="text-gray-600">
                                Reduce your Travel expenses to save money.
                            </p>
                            <a href="/blogs" className="text-blue-700">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
