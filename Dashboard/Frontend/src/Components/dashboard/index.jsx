import { useEffect, useState } from "react";
import { TotalExpence } from "../data/CalCurrentMonthExpence.js";
import AddDailyRecord from "./AddDailyRecord.jsx";
import MonthlyChart from "./MonthlyChart.jsx";
import { useNavigate } from "react-router-dom";
import { fetchGoalsFromBackend } from "../data/InputData.js";
import './style.css'

export default function Dashboard() {
    const navigate = useNavigate();

    const [isDismissed, setIsDismissed] = useState(false);
    const [Balance, setBalance] = useState(0);
    const [Spended, setSpended] = useState(0);
    const [totalExpence, setTotalExpence] = useState(0);
    const [Totalincome, setTotalincome] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const budget = await TotalExpence();
            const TotalBudget = await fetchGoalsFromBackend();

            setTotalincome(TotalBudget);
            setTotalExpence(budget.TotalBudget);
            setSpended(budget.Spended);
            setPercentage(budget.TotalExpence_percentage);
            setBalance(budget.TotalBudget - budget.Spended);
        };
        loadData();
    }, []);



    useEffect(() => {
        const dismissedTime = localStorage.getItem("anomalyDismissedAt");
        if (dismissedTime) {
            const now = new Date().getTime();
            const elapsed = now - parseInt(dismissedTime, 10);
            if (elapsed > 86400000) {
                setIsDismissed(false);
                localStorage.removeItem("anomalyDismissedAt");
            } else {
                setIsDismissed(true);
            }
        }
    }, []);

    const handleDismiss = () => {
        setIsDismissed(true);
        localStorage.setItem("anomalyDismissedAt", new Date().getTime().toString());
    };

    const handleClick = () => {
        navigate("/budgetRecommendation/ai");
    };

    const ProgressBar = () => {
        return (
            <div
                className="h-full bg-emerald-900 rounded-full"
                style={{ width: percentage + "%" }}
            ></div>
        );
    };

    return (
        <>
            <div className="flex flex-row gap-2 ">
                <div className="bg-[#B8D7DE8C] rounded-md mt-4 lg:ml-64 w-full py-6 px-4 dashboard">
                    <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-2">
                        Dashboard
                    </h1>

                    <div className=" d-1 flex flex-row   mt-2 h-fit">

                        <div className="balance-1 w-[70%]   h-[400px] flex flex-col justify-between gap-5 py-2">
                            <div className="progess-bar bg-white w-full h-[40%] rounded-2xl px-12 py-4">
                                <div className="flex flex-row justify-between h-fit w-full my-2">
                                    <h1 className="text-[1.5rem] font-semibold">Balance</h1>
                                    <h1 className="text-[1.5rem] font-semibold">Spended</h1>
                                </div>
                                <div className="flex flex-row justify-between h-fit w-full">
                                    <h1 className="text-[1rem] font-medium">&#8377;{Balance}</h1>
                                    <h1 className="text-[1rem] font-medium">
                                        &#8377;{Spended}/{Totalincome}
                                    </h1>
                                </div>
                                <div className="h-[10px] w-full bg-gray-200 my-4 rounded-full">
                                    {ProgressBar()}
                                </div>
                            </div>

                            <div className="add-daily bg-white w-full h-fit rounded-2xl  px-12 py-1 xl:mb-12 ">
                                <AddDailyRecord />
                            </div>
                        </div>

                        <div className="monthlychart xl:h-full lg:h-[28rem] grow  flex flex-col gap-2  py-2 px-2 w-fit " >
                            <MonthlyChart />
                        </div>
                    </div>

                    <div className="flex flex-col bg-white w-full h-fit rounded-2xl xl:mt-4 lg:mt-4 px-12 py-4">
                        <div className="w-full">
                            <h1 className="text-[1.1rem] font-medium mb-5">Anomaly Detected</h1>
                        </div>
                        <div className="text-start w-full">
                            <p className="text-gray-600">
                                Our system analyzes your past spending habits to identify
                                significant deviations. We will alert you to expenses that are
                                higher than your average or appear to be unusual, ensuring you
                                stay informed about your financial activity.
                            </p>
                        </div>

                        {!isDismissed && (
                            <div className="anomaly-alert flex flex-row justify-between items-center border w-full h-fit rounded-2xl mt-4 py-2 px-4">
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="flex flex-row ">
                                        <div className="text-center rounded-full h-[30px] w-[30px] bg-red-700 text-white font-bold text-xl">
                                            !
                                        </div>
                                        <h1 className="text-red-700 font-medium">
                                            Higher than usual restaurant spending.
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={handleDismiss}
                                        className="bg-[#2D5359] text-white py-2 px-4 rounded-2xl"
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 bg-white w-full h-fit rounded-2xl mt-4 px-12 py-4 mb-4">
                        <div className="w-full flex flex-row gap-4">
                            <h1 className="text-[1.1rem] font-medium">Budget Recommendations</h1>
                            <div className="flex flex-row justify-between gap-1 items-center px-3 h-fit w-fit bg-black rounded-md">
                                <p className="text-blue-600 text-2xl">&#9733;</p>
                                <h1 className="text-white font-bold">AI</h1>
                            </div>
                        </div>

                        <div className="flex flex-col items-start text-start w-full">
                            <p className="text-gray-600">
                                Ask AI for smart investment tips, savings strategies, or
                                personalized budgeting advice in simple language!
                            </p>
                            <button
                                className="bg-[#2D5359] text-white text-[19px] font-medium rounded-lg px-5 py-1 cursor-pointer"
                                onClick={handleClick}
                            >
                                Ask AI &nbsp;{" "}
                                <i className="fa-solid fa-arrow-right" style={{ color: "#fff" }}></i>
                            </button>
                        </div>
                    </div>

                   

                </div>
            </div>
        </>
    );
}
