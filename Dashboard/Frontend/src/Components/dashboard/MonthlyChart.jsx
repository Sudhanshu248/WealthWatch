import {
    CurrentFoodExpence, CurrentTransportExpence, CurrentPersonalExpence, CurrentHousingExpence, CurrentSavingExpence
} from "../data/CalCurrentMonthExpence";
import { useState, useEffect } from "react";
import PieChart from "../cashflow/pie/pieChart";

export default function MonthlyChart() {
    const [monthData, setMonthData] = useState([]);
    const [loading, setLoading] = useState(true);

    const backgroundColors = [
        'rgb(59, 192, 95)',
        'rgb(66, 133, 244)',
        'rgb(116, 180, 228)',
        'rgb(251, 188, 5)',
        'rgb(11, 209, 235)',
    ];

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const food = await CurrentFoodExpence();
                const transport = await CurrentTransportExpence();
                const personal = await CurrentPersonalExpence();
                const saving = await CurrentSavingExpence();
                const housing = await CurrentHousingExpence();

                setMonthData([
                    { name: 'Food', value: food.foodExpence, percentage: food.Foodpercentage },
                    { name: 'Transport', value: transport.transportExpence, percentage: transport.TransportPercentage },
                    { name: 'Personal', value: personal.personalExpence, percentage: personal.Personal_percentage },
                    { name: 'Housing', value: housing.housingExpence, percentage: housing.Housing_percentage },
                    { name: 'Saving', value: saving.savingExpence, percentage: saving.Saving_percentage }
                ]);
            } catch (error) {
                console.error("Failed to load expense data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const labels = monthData.map((item) => item.name);
    const values = monthData.map((item) => item.value);

    const data = {
        labels,
        datasets: [{
            label: 'Monthly Expenses',
            data: values,
            backgroundColor: backgroundColors,
            hoverOffset: 3
        }]
    };

    return (
        <div className="monthchart-1 bg-white text-center xl:h-full md:h-[28rem] w-full rounded-2xl py-4 px-6">
            <h1 className="text-xl mb-3">Monthly Expense</h1>


            <div className="monthchart-2">

                <div className="piechart-1 w-[90%] m-auto">
                    <PieChart key={JSON.stringify(data)} data={data} />
                </div>

                {loading ? (
                    <p className="text-center mt-20">Loading...</p>
                ) : (
                    <div className="text-start font-medium mt-4">
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
                )}
            </div>

        </div>
    );
}
