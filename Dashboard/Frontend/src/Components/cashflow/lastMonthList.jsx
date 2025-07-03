import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalLastMonthExpence.js";

export default function LastMonthList() {

    const { Foodpercentage, foodExpence } = FoodExpence();
    const { TransportPercentage, transportExpence } = TransportExpence();
    const { Personal_percentage, personalExpence } = PersonalExpence();
    const { Housing_percentage, housingExpence } = HousingExpence();
    const { Saving_percentage, savingExpence } = SavingExpence();




    return (
        <>
            {/* History Data */}
            <div className="w-full h-[460px] bg-white rounded-2xl mt-8 px-8 py-4">

                {/* Heading */}
                <div className="font-medium text-xl ">
                    Last Month Data
                </div>


                {/* Data */}
                <div className="w-full h-fit  rounded-2xl mt-2 px-8 py-4 ">

                    {/* Food */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2">
                        <div className="flex flex-row gap-2 hover:cursor-pointer" >
                            <button className="text-xl font-medium hover:cursor-pointer" value='Food'>Food</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Foodpercentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{foodExpence}</p>
                        </div>
                    </div>

                    {/* Housing */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2 hover:cursor-pointer">
                        <div className="flex flex-row gap-2">
                            <button className="text-xl font-medium hover:cursor-pointer" value='Housing' >Housing</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Housing_percentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{housingExpence}</p>
                        </div>
                    </div>

                    {/* Personal */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2  hover:cursor-pointer">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium hover:cursor-pointer" value='PersonalExpence' >Personal expence</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Personal_percentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{personalExpence}</p>
                        </div>
                    </div>

                    {/* Transport */}
                    <div className="flex flex-row justify-between mt-4 border-b  pt-4 pb-2 pl-2 hover:cursor-pointer">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium hover:cursor-pointer" value='Transport' >Transport</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{TransportPercentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{transportExpence}</p>
                        </div>
                    </div>

                    {/* Saving */}
                    <div className="flex flex-row justify-between mt-4 border-b pt-4 pb-2 pl-2 hover:cursor-pointer">
                        <div className="flex flex-row gap-2">

                            <button className="text-xl font-medium hover:cursor-pointer" value='Saving' >Saving</button>
                            <p className="text-[12px] mt-2 font-medium text-gray-800">{Saving_percentage.toFixed(1)}%</p>
                        </div>
                        <div>

                            <p className="text-[15px] mt-1">- &nbsp; &#8377;{savingExpence}</p>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}