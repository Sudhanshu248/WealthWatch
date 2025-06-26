import CurrMonthData from "../history/CurrMonthData";
import LastMonth from "./lastMonth";
import LastMonthList from "./lastMonthList";
import ThisMonth from "./ThisMonth";
import ThisMonthList from "./ThisMonthList";

export default function CompareTwoMonth() {
    return (
        <>
            {/* Main Container */}
            <div className='mt-6'>

                {/*Compare  charts */}
                <div className="bg-white w-full h-[300px] rounded-2xl">

                </div>


                {/* Pie chart  */}
                <div className="flex flex-row gap-4 mt-6">
                    <div className="bg-white w-full h-[300px] rounded-2xl"></div>
                    <div className="bg-white w-full h-[300px] rounded-2xl"></div>
                </div>

                <div className="flex flex-row gap-4 mt-6">

                    <ThisMonthList />
                    <LastMonthList />
                </div>




            </div>
        </>
    )
}