
import CurrMonthData from "./CurrMonthData.jsx";

export default function HistoryPage() {


    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>

                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64 h-[86.9vh]  w-[60vw]  grow px-8 py-4 ">
                    {/* Main Heading */}
                    <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start  ">History</h1>

                     <CurrMonthData/>
                   

                </div>
            </div>
        </>
    )
}