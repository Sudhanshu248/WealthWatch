import { useNavigate } from "react-router-dom";
import { MonthData } from "./cashflow"
import { Link } from "react-router-dom"
import LastMonth from "./lastMonth.jsx";
import ThisMonth from "./ThisMonth.jsx";
import SixMonth from "./SixMonth.jsx";
import CompareTwoMonth from "./CompareTwoMonth.jsx";

export default function CashflowPage() {


    const navigate = useNavigate();


    const handleClick = (e) => {
        const value = e.target.value;
        navigate(`/cashflow${value}`)
    }


    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>


                {/* Cashflow Container */}
                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64 px-8 py-4  h-fit w-[60vw]  grow ">


                    {/* Heading */}
                    <div>

                        <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-2  mt-6 mb-2.5">Cashflow</h1>

                        <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start  mb-6 mt-3">Cashflow</h1>

                    </div>


                    {/* Button for changing data list */}
                    <div className="text-start flex flex-row gap-4 bg-white w-full h-fit  rounded-2xl px-8 py-4">
                        {MonthData.map((item) => (

                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={handleClick}
                                className={`rounded-full px-5 py-1 border ${location.pathname === item.href ? "bg-gray-300" : ""}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>



                    {location.pathname === "/cashflow/thisMonth" || location.pathname === "/cashflow" ? (
                        <>
                            <ThisMonth />
                        </>
                    ) : ""}

                    {location.pathname === "/cashflow/lastMonth" && (
                        <>
                            <LastMonth />
                        </>
                    )}


                    {location.pathname === "/cashflow/SixMonth" && (
                        <>
                            <SixMonth />
                        </>
                    )}

                    {location.pathname === "/cashflow/CompareLastMonth" && (
                        <>
                            <CompareTwoMonth />
                        </>
                    )}



                    {/*  */}
                </div>
            </div>
        </>
    )
}