import { useState, useEffect } from "react";
import BarGraph from "./pie/barGraph.jsx";
import PieChart from "./pie/pieChart.jsx";
import { TotalExpence, CurrentFoodExpence, CurrentTransportExpence, CurrentPersonalExpence, CurrentHousingExpence, CurrentSavingExpence } from "../data/CalCurrentMonthExpence.js";
import { SecTotalExpence, SecondFoodExpence, SecondTransportExpence, SecondPersonalExpence, SecondHousingExpence, SecondSavingExpence } from "../data/CalSecondMonthExpence.js";
import { fetchMonthlyData } from "../data/InputData.js";
import CurrentMonthList from "./MonthList/CurrentMonthList.jsx";
import SecondMonthList from "./MonthList/SecondMonthList.jsx";

export default function CompareTwoMonth() {


    const [CurrFoodpercentage, setCurrFoodpercentage] = useState([]);
    const [CurrTransportPercentage, setCurrTransportPercentage] = useState([]);
    const [CurrPersonal_percentage, setCurrPersonal_percentage] = useState([]);
    const [CurrHousing_percentage, setCurrHousing_percentage] = useState([]);
    const [CurrSaving_percentage, setCurrSaving_percentage] = useState([]);
    const [CurrFoodExpences, setCurrFoodExpences] = useState(0);
    const [CurrTransportExpences, setCurrTransportExpences] = useState(0);
    const [CurrPersonalExpences, setCurrPersonalExpences] = useState(0);
    const [CurrHousingExpences, setCurrHousingExpences] = useState(0);
    const [CurrSavingExpences, setCurrSavingExpences] = useState(0);

    const [Foodpercentage, setFoodpercentage] = useState(0);
    const [TransportPercentage, setTransportPercentage] = useState(0);
    const [Personal_percentage, setPersonal_percentage] = useState(0);
    const [Housing_percentage, setHousing_percentage] = useState(0);
    const [Saving_percentage, setSaving_percentage] = useState(0);
    const [FoodExpences, setFoodExpences] = useState(0);
    const [TransportExpences, setTransportExpences] = useState(0);
    const [PersonalExpences, setPersonalExpences] = useState(0);
    const [HousingExpences, setHousingExpences] = useState(0);
    const [SavingExpences, setSavingExpences] = useState(0);

    const [CurrTotalExpence, setCurrTotalExpence] = useState(0);
    const [CurrSpended, setCurrSpended] = useState(0);
    const [CurrBalance, setCurrBalance] = useState(0);

    const [SecondTotalExpence, setSecondTotalExpence] = useState(0);
    const [SecondSpended, setSecondSpended] = useState(0);
    const [SecondBalance, setSecondBalance] = useState(0);

     const [MonthName, setMonthName] = useState([]);
    
        useEffect(() => {
            const loadAllData = async () => {
                const promises = Array.from({ length: 6 }, (_, i) => fetchMonthlyData(i));
                const results = await Promise.all(promises);
                const name = Array.from({ length: 6 }, (_, i) => results[i].monthName);
                setMonthName(name);
            };
    
            loadAllData();
        }, []);


    useEffect(() => {
        const loadData = async () => {
            const Currfood = await CurrentFoodExpence();
            const Currtransport = await CurrentTransportExpence();
            const Currpersonal = await CurrentPersonalExpence();
            const Currsaving = await CurrentSavingExpence();
            const Currhousing = await CurrentHousingExpence();
            const food = await SecondFoodExpence();
            const transport = await SecondTransportExpence();
            const personal = await SecondPersonalExpence();
            const saving = await SecondSavingExpence();
            const housing = await SecondHousingExpence();
            const Currtotalbudget = await TotalExpence();
            const Secondtotalbudget = await SecTotalExpence();

            setCurrTotalExpence(Currtotalbudget?.TotalBudget || 0)
            setCurrSpended(Currtotalbudget?.Spended);
            setCurrBalance(Currtotalbudget?.TotalBudget - Currtotalbudget?.Spended);


            setSecondTotalExpence(Secondtotalbudget?.TotalBudget || 0)
            setSecondSpended(Secondtotalbudget?.Spended);
            setSecondBalance(Secondtotalbudget?.TotalBudget - Secondtotalbudget?.Spended);

            setCurrFoodpercentage(Currfood?.Foodpercentage.toFixed(1) || 0);
            setCurrTransportPercentage(Currtransport?.TransportPercentage.toFixed(1) || 0);
            setCurrPersonal_percentage(Currpersonal?.Personal_percentage.toFixed(1) || 0);
            setCurrSaving_percentage(Currsaving?.Saving_percentage.toFixed(1) || 0);
            setCurrHousing_percentage(Currhousing?.Housing_percentage.toFixed(1) || 0);
            setCurrFoodExpences(Currfood?.foodExpence || 0);
            setCurrTransportExpences(Currtransport?.transportExpence || 0);
            setCurrPersonalExpences(Currpersonal?.personalExpence || 0);
            setCurrSavingExpences(Currsaving?.savingExpence || 0);
            setCurrHousingExpences(Currhousing?.housingExpence || 0);


            setFoodpercentage(food?.Foodpercentage.toFixed(1) || 0);
            setTransportPercentage(transport?.TransportPercentage.toFixed(1) || 0);
            setPersonal_percentage(personal?.Personal_percentage.toFixed(1) || 0);
            setSaving_percentage(saving?.Saving_percentage.toFixed(1) || 0);
            setHousing_percentage(housing?.Housing_percentage.toFixed(1) || 0);
            setFoodExpences(food?.foodExpence.toFixed(1) || 0);
            setTransportExpences(transport?.transportExpence.toFixed(1) || 0);
            setPersonalExpences(personal?.personalExpence.toFixed(1) || 0);
            setSavingExpences(saving?.savingExpence.toFixed(1) || 0);
            setHousingExpences(housing?.housingExpence.toFixed(1) || 0);

        }
        loadData();
    });


    const labels = ['Food', 'Housing', 'Personal expenses', 'Transport', 'Saving'];
    const datas = {
        labels,
        datasets: [{
            type: 'bar',
            label: 'Jan 2025',
            data: [CurrFoodExpences, CurrHousingExpences, CurrPersonalExpences, CurrTransportExpences, CurrSavingExpences],
            backgroundColor: 'rgb(130, 231, 130)'
        }, {
            type: 'bar',
            label: 'Dec 2024',
            data: [FoodExpences, HousingExpences, PersonalExpences, TransportExpences, SavingExpences],
            backgroundColor: 'rgb(126, 209, 254)'
        }]
    };

    const Currdata = {
        labels,
        datasets: [{
            label: 'My First Dataset',
            data: [CurrFoodExpences, CurrHousingExpences, CurrPersonalExpences, CurrTransportExpences, CurrSavingExpences],
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
    const data = {
        labels,
        datasets: [{
            label: 'My First Dataset',
            data: [FoodExpences, HousingExpences, PersonalExpences, TransportExpences, SavingExpences],
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
                           {MonthName[5]}
                        </div>

                        <div className="flex justify-between ">
                            <div className="w-[40%] ">
                                <PieChart key={JSON.stringify(data)} data={Currdata} />
                            </div>

                            <div className="w-[45%] flex items-center pr-2 mb-5">
                                <ul className="w-full">
                                    <li className="flex justify-between">
                                        <div className="flex flex-row items-center gap-3 ">
                                            <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(66, 133, 244)' }}></div>
                                            <h1>Housing</h1>
                                        </div>

                                        <div>
                                            {CurrHousing_percentage}%
                                        </div>

                                    </li>
                                    <li className="flex justify-between">
                                        <div className="flex flex-row items-center gap-3 ">
                                            <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(59, 192, 95)' }}></div>
                                            <h1>Food</h1>
                                        </div>

                                        <div>
                                            {CurrFoodpercentage}%
                                        </div>
                                    </li>
                                    <li className="flex justify-between ">
                                        <div className="flex flex-row items-center gap-3 ">

                                            <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(251, 188, 5)' }}></div>
                                            <h1>Transport</h1>
                                        </div>
                                        <div>
                                            {CurrTransportPercentage}%
                                        </div>
                                    </li>
                                    <li className="flex justify-between ">
                                        <div className="flex flex-row items-center gap-3 ">

                                            <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(116, 180, 228)' }}></div>
                                            <h1>Personal Expence</h1>
                                        </div>
                                        <div>
                                            {CurrPersonal_percentage}%
                                        </div>

                                    </li>
                                    <li className="flex justify-between">
                                        <div className="flex flex-row items-center gap-3 ">

                                            <div className="rounded-full h-[12px] w-[12px] " style={{ backgroundColor: 'rgb(11, 209, 235)' }}></div>
                                            <h1>Saving</h1>
                                        </div>
                                        <div>

                                            {CurrSaving_percentage}%
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="text-center flex flex-row mt-5 gap-7" style={{ justifyContent: "center" }}>

                            <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                                <p className="text-xl">Expenses</p>
                                <p className="text-lg font-semibold" style={{ color: "rgb(255, 0, 0)" }}> &#8377;{CurrTotalExpence} </p>
                            </div>

                            <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                                <p className="text-xl">Balance</p>
                                <p className="text-lg font-semibold" style={{ color: "rgb(48, 161, 78)" }}> &#8377; {CurrBalance} </p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white w-full h-[380px] rounded-2xl p-5 ">
                        <div className="font-medium text-xl mb-2">
                                  {MonthName[4]}
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
                                <p className="text-lg font-semibold" style={{ color: "rgb(255, 0, 0)" }}> &#8377;{SecondTotalExpence}</p>
                            </div>

                            <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
                                <p className="text-xl">Balance</p>
                                <p className="text-lg font-semibold" style={{ color: "rgb(48, 161, 78)" }}> &#8377; {SecondBalance}</p>
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