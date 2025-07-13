import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CurrentHistory from "./Monthlylist/CurrentHistory";
import SecondHistory from "./Monthlylist/SecondHistory";
import ThirdHistory from "./Monthlylist/ThirdHistory";
import ForthHistory from "./Monthlylist/ForthHistory";
import FifthHistory from "./Monthlylist/FifthHistory";
import SixthHistory from "./Monthlylist/SixthHistory";
import { fetchMonthlyData } from "../data/InputData.js";

export default function HistoryPage() {

    const location = useLocation();
    const navigate = useNavigate();

    const [MonthName, setMonthName] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        const loadAllData = async () => {
            const promises = Array.from({ length: 6 }, (_, i) => fetchMonthlyData(i));
            const results = await Promise.all(promises);
            const names = results.map((data) => data.monthName);
            setMonthName(names);


            if (location.pathname === "/historys" && names[0]) {
                setCategory(names[0]);
                navigate(`/historys/${names[0]}`);
            }
        };

        loadAllData();
    }, [location.pathname, navigate]);

    const handleChange = (e) => {
        const selectedMonth = e.target.value;
        setCategory(selectedMonth);
        navigate(`/historys/${selectedMonth}`);
    };

    // Get the selected month from the URL path
    const currentMonth = decodeURIComponent(location.pathname.replace("/historys/", ""));

    return (
        <div className="flex flex-row">
            <div className="history bg-[#B8D7DE8C] rounded-md mt-4 ml-64 h-[86.9vh] w-[60vw] grow px-8 py-4">
                <h1 className="text-3xl text-emerald-900 font-bold text-start">History</h1>

                {/* Dropdown */}
                <select
                    id="category"
                    name="category"
                    value={currentMonth}
                    onChange={handleChange}
                    className="bg-gray-300 text-gray-500 rounded-md w-[8rem] h-[40px] p-2 my-4"
                    style={{ border: "none", outline: "none" }}
                >
                    {MonthName.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </select>

                {/* Conditional Component Rendering */}
                {currentMonth === MonthName[0] && <CurrentHistory />}
                {currentMonth === MonthName[1] && <SecondHistory />}
                {currentMonth === MonthName[2] && <ThirdHistory />}
                {currentMonth === MonthName[3] && <ForthHistory />}
                {currentMonth === MonthName[4] && <FifthHistory />}
                {currentMonth === MonthName[5] && <SixthHistory />}
            </div>
        </div>
    );
}
