import { useState, useEffect, useMemo } from "react";
import BarGraph from "./pie/barGraph.jsx";
import PieChart from "./pie/pieChart.jsx";
import { TotalExpence,CurrentFoodExpence,CurrentTransportExpence,CurrentPersonalExpence,CurrentHousingExpence,CurrentSavingExpence,
} from "../data/CalCurrentMonthExpence.js";
import {SecTotalExpence,SecondFoodExpence,SecondTransportExpence,SecondPersonalExpence,SecondHousingExpence,SecondSavingExpence,
} from "../data/CalSecondMonthExpence.js";
import { fetchMonthlyData } from "../data/InputData.js";
import CurrentMonthList from "./MonthList/CurrentMonthList.jsx";
import SecondMonthList from "./MonthList/SecondMonthList.jsx";

const pieColors = {
  food: "rgb(59, 192, 95)",
  housing: "rgb(66, 133, 244)",
  personal: "rgb(116, 180, 228)",
  transport: "rgb(251, 188, 5)",
  saving: "rgb(11, 209, 235)",
};

const labelColors = [pieColors.food, pieColors.housing, pieColors.personal, pieColors.transport, pieColors.saving];
const labels = ["Food", "Housing", "Personal expenses", "Transport", "Saving"];

export default function CompareTwoMonth() {
  const [monthNames, setMonthNames] = useState([]);
  const [currentData, setCurrentData] = useState(null);
  const [secondData, setSecondData] = useState(null);

  useEffect(() => {
    const loadMonthNames = async () => {
      const results = await Promise.all(Array.from({ length: 6 }, (_, i) => fetchMonthlyData(i)));
      setMonthNames(results.map((r) => r.monthName));
    };
    loadMonthNames();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const [
        currFood,
        currTransport,
        currPersonal,
        currSaving,
        currHousing,
        currTotal,
        secFood,
        secTransport,
        secPersonal,
        secSaving,
        secHousing,
        secTotal,
      ] = await Promise.all([
        CurrentFoodExpence(),
        CurrentTransportExpence(),
        CurrentPersonalExpence(),
        CurrentSavingExpence(),
        CurrentHousingExpence(),
        TotalExpence(),
        SecondFoodExpence(),
        SecondTransportExpence(),
        SecondPersonalExpence(),
        SecondSavingExpence(),
        SecondHousingExpence(),
        SecTotalExpence(),
      ]);

      setCurrentData({
        percentages: [
          currFood?.Foodpercentage ?? 0,
          currHousing?.Housing_percentage ?? 0,
          currPersonal?.Personal_percentage ?? 0,
          currTransport?.TransportPercentage ?? 0,
          currSaving?.Saving_percentage ?? 0,
        ],
        expenses: [
          currFood?.foodExpence ?? 0,
          currHousing?.housingExpence ?? 0,
          currPersonal?.personalExpence ?? 0,
          currTransport?.transportExpence ?? 0,
          currSaving?.savingExpence ?? 0,
        ],
        total: currTotal?.TotalBudget ?? 0,
        balance: (currTotal?.TotalBudget ?? 0) - (currTotal?.Spended ?? 0),
      });

      setSecondData({
        percentages: [
          secFood?.Foodpercentage ?? 0,
          secHousing?.Housing_percentage ?? 0,
          secPersonal?.Personal_percentage ?? 0,
          secTransport?.TransportPercentage ?? 0,
          secSaving?.Saving_percentage ?? 0,
        ],
        expenses: [
          secFood?.foodExpence ?? 0,
          secHousing?.housingExpence ?? 0,
          secPersonal?.personalExpence ?? 0,
          secTransport?.transportExpence ?? 0,
          secSaving?.savingExpence ?? 0,
        ],
        total: secTotal?.TotalBudget ?? 0,
        balance: (secTotal?.TotalBudget ?? 0) - (secTotal?.Spended ?? 0),
      });
    };

    fetchData();
  }, []);

  const barData = useMemo(() => {
    if (!currentData || !secondData) return null;

    return {
      labels,
      datasets: [
        {
          type: "bar",
          label: monthNames[5],
          data: currentData.expenses,
          backgroundColor: "rgb(130, 231, 130)",
        },
        {
          type: "bar",
          label: monthNames[4],
          data: secondData.expenses,
          backgroundColor: "rgb(126, 209, 254)",
        },
      ],
    };
  }, [currentData, secondData, monthNames]);

  const renderPieCard = (title, pieData, percentages, total, balance) => (
    <div className="bg-white w-full h-[380px] rounded-2xl p-5">
      <div className="font-medium text-xl mb-2">{title}</div>
      <div className="flex justify-between">
        <div className="w-[40%]">
          <PieChart key={JSON.stringify(pieData)} data={pieData} />
        </div>
        <div className="w-[45%] flex items-center pr-2 mb-5">
          <ul className="w-full">
            {labels.map((label, idx) => (
              <li key={label} className="flex justify-between">
                <div className="flex flex-row items-center gap-3">
                  <div className="rounded-full h-[12px] w-[12px]" style={{ backgroundColor: labelColors[idx] }}></div>
                  <h1>{label}</h1>
                </div>
                <div>{percentages[idx].toFixed(1)}%</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-row mt-5 gap-7 justify-center">
        <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
          <p className="text-xl">Expenses</p>
          <p className="text-lg font-semibold text-red-600">&#8377;{total}</p>
        </div>

        <div className="w-full py-3 rounded-xl border-1 flex px-4 justify-between bg-gray-200">
          <p className="text-xl">Balance</p>
          <p className="text-lg font-semibold text-green-600">&#8377;{balance}</p>
        </div>
      </div>
    </div>
  );

  if (!currentData || !secondData || !barData) return <p className="text-center mt-20">Loading...</p>;

  const currPieData = {
    labels,
    datasets: [
      {
        label: "Current Month",
        data: currentData.expenses,
        backgroundColor: labelColors,
        hoverOffset: 3,
      },
    ],
  };

  const secondPieData = {
    labels,
    datasets: [
      {
        label: "Second Month",
        data: secondData.expenses,
        backgroundColor: labelColors,
        hoverOffset: 3,
      },
    ],
  };

  return (
    <div className="mt-6">
      <div className="bg-white w-full h-[61%] mt-4 rounded-2xl p-5">
        <div className="font-medium text-xl mb-7">Monthly Expenses</div>
        <div className="w-[60%] h-full">
          <BarGraph data={barData} />
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-6">
        {renderPieCard(monthNames[5], currPieData, currentData.percentages, currentData.total, currentData.balance)}
        {renderPieCard(monthNames[4], secondPieData, secondData.percentages, secondData.total, secondData.balance)}
      </div>

      <div className="flex flex-row gap-4 mt-6">
        <CurrentMonthList />
        <SecondMonthList />
      </div>
    </div>
  );
}
