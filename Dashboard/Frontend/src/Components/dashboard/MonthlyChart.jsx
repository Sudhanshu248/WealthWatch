import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalCurrentMonthExpence";
import { useState, useEffect } from "react";
import PieChart from "../cashflow/pie/pieChart";

export default function MonthlyChart() {
    const [monthData, setMonthData] = useState([]);

    const backgroundColors = [
        'rgb(59, 192, 95)',
        'rgb(66, 133, 244)',
        'rgb(116, 180, 228)',
        'rgb(251, 188, 5)',
        'rgb(11, 209, 235)',
    ];


    useEffect(() => {
        const loadData = async () => {
            const food = await FoodExpence();
            const transport = await TransportExpence();
            const personal = await PersonalExpence();
            const saving = await SavingExpence();
            const housing = await HousingExpence();

            setMonthData([
                { name: 'Food', value: food.foodExpence, percentage: food.Foodpercentage },
                { name: 'Transport', value: transport.transportExpence, percentage: transport.TransportPercentage },
                { name: 'Personal', value: personal.personalExpence, percentage: personal.Personal_percentage },
                { name: 'Housing', value: housing.housingExpence, percentage: housing.Housing_percentage },
                { name: 'Saving', value: saving.savingExpence, percentage: saving.Saving_percentage }
            ]);
        };
        loadData();
    }, []);

    // console.log(monthData);
    const labels = ['Food', 'Housing', 'Personal expenses', 'Transport', 'Saving'];


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
                        <PieChart key={JSON.stringify(data)} data={data} />
                    </div>

                    <div className=" text-start font-medium mt-4">

                        <ul>
                            {monthData.map((item, index) => (
                                <li key={index} className="flex flex-row items-center gap-3 justify-between">
                                    <div className="flex flex-row items-center gap-3">
                                        <div
                                            className="rounded-full h-[12px] w-[12px]"
                                            style={{ backgroundColor: backgroundColors[index] }}
                                        ></div>
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div>{item.percentage.toFixed(1)}%</div>
                                </li>
                            ))}

                        </ul>


                    </div>

                </div>
            </div>
        </>
    )
}