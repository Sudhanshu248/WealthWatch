import { useEffect, useState } from "react";

import { TotalExpence, FoodExpence } from "../data/CalExpence.js";
import AddDailyRecord from "./AddDailyRecord.jsx";
import MonthlyChart from "./MonthlyChart.jsx";

export default function Dashboard({ }) {


    const [isDismissed, setIsDismissed] = useState(false);

    const { TotalBudget } = FoodExpence();
    const { TotalExpence_percentage, RemaningBalance } = TotalExpence();



    useEffect(() => {
        const dismissedTime = localStorage.getItem('anomalyDismissedAt');

        if (dismissedTime) {
            const now = new Date().getTime();
            const elapsed = now - parseInt(dismissedTime, 10);

            // 24 hours = 86,400,000 ms
            if (elapsed > 86400000) {
                setIsDismissed(false);
                localStorage.removeItem('anomalyDismissedAt');
            } else {
                setIsDismissed(true);
            }
        }
    }, []);

    const handleDismiss = () => {
        setIsDismissed(true);
        localStorage.setItem('anomalyDismissedAt', new Date().getTime().toString());
    };



    // Balance Bar
    const ProgressBar = () => {
        return (

            <div
                className=" h-full bg-emerald-900 rounded-full"
                style={{ width: `${TotalExpence_percentage}%` }}
            ></div>
        );
    };




    return (
        <>
            {/* Main Container */}

            <div className="flex flex-row ">
                <div className=" bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-[100vh] w-full   py-6 px-4">
                    <h1 className=" text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-2">Dashboard</h1>


                    <div className=" flex flex-row gap-4 mt-2">


                        {/* Balance and Add Daily Expence Boxes */}
                        <div className=" w-[70%] h-[400px] flex flex-col justify-between gap-5  py-2">


                            {/* Balance update box */}
                            <div className="bg-white w-full h-[40%] rounded-2xl  px-12 py-4">

                                <div className=" flex flex-row  justify-between h-fit w-full  my-2">

                                    <h1 className="text-[1.5rem] text-start text-shadow-sm font-semibold text-start ">Balance</h1>
                                    <h1 className="text-[1.5rem] text-start text-shadow-sm font-semibold text-start ">Spended</h1>

                                </div>

                                <div className=" flex flex-row  justify-between h-fit w-full ">

                                    <h1 className="text-[1rem] text-start  font-medium text-start ">&#8377;{RemaningBalance} </h1>
                                    <h1 className="text-[1rem] text-start  font-medium text-start ">&#8377;{TotalBudget - RemaningBalance}/{TotalBudget}</h1>

                                </div>

                                <div className="h-[10px] w-full bg-gray-200 my-4 rounded-full">

                                    {ProgressBar()}
                                </div>

                            </div>

                            {/* Add daily record Box */}
                            <AddDailyRecord />
                        </div>


                        {/* Monthly expence Chart box */}

                        <MonthlyChart />

                    </div>

                    {/* Anomaly Detection */}
                    <div className="flex flex-col bg-white w-full h-fit rounded-2xl mt-4 px-12 py-4 ">

                        {/* Heading */}
                        <div className="w-full">
                            <h1 className="text-[1.1rem] text-start text-shadow-sm font-medium text-start ">Anomaly Detected</h1>
                        </div>

                        {/* Paragraph */}
                        <div className="text-start w-full">
                            <p className="text-gray-600">Our system analyzes your past spending habits to identify significant deviations. We will alert you to expenses
                                that are higher than your average or appear to be unusual, ensuring you stay informed about your financial
                                activity.</p>
                        </div>

                        {/* Detector */}
                        {RemaningBalance > 750 ?
                            <div className={`flex flex-row justify-between items-center border w-full h-fit rounded-2xl mt-4 py-2 px-4 ${isDismissed == true ? 'hidden' : 'text-red-500'}`}>

                                <div className="flex flex-row gap-4 items-center ">
                                    <div className="text-center rounded-full h-[30px] w-[30px] bg-red-700 text-white font-bold text-xl">!</div>
                                    <h1 className="text-red-700 font-medium"> Higher than usual restaurant spending.</h1>
                                </div>

                                <div >
                                    <button onClick={handleDismiss} className="bg-[#2D5359] text-white py-2 px-4 rounded-2xl">Dismiss</button>
                                </div>


                            </div> : <div></div>
                        }


                    </div>


                    {/* Building AI  */}

                    <div className="flex flex-col gap-5 bg-white w-full h-fit rounded-2xl mt-4 px-12 py-4 ">

                        {/* Heading */}
                        <div className="w-full flex flex-row gap-4">

                            <h1 className="text-[1.1rem] text-start text-shadow-sm font-medium text-start ">Budget Recommendations</h1>

                            <div className="flex flex-row justify-between gap-2 items-center px-3  h-fit w-fit bg-black rounded-md  ">
                                <p className="text-blue-600 text-2xl">&#9733;</p>
                                <h1 className="text-white font-bold">AI</h1>
                            </div>

                        </div>

                        {/* Paragraph */}
                        <div className="flex flex-row justify-between gap-2 items-center text-start w-full">
                            <p className="text-gray-600">Reduce your Travel expenses to save money.</p>
                            <a href="/blogs" className="text-blue-700">Learn More</a>
                        </div>




                    </div>




                </div>
            </div>
        </>
    )
}