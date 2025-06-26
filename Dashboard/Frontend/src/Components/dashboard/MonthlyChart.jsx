import { FoodExpence, TransportExpence, PersonalExpence, HousingExpence, SavingExpence } from "../data/CalExpence";

export default function MonthlyChart() {

    const { Foodpercentage } = FoodExpence();
    const { TransportPercentage } = TransportExpence();
    const { Personal_percentage } = PersonalExpence();
    const { Housing_percentage } = HousingExpence();
    const { Saving_percentage } = SavingExpence();

    return (
        <>

            <div className="h-[400px] grow  flex flex-col gap-2  py-2 px-2 " >
                <div className="bg-white text-center h-full w-full rounded-2xl py-4 px-6">
                    <div>
                        <h1 className="text-xl">Monthly Expence</h1>
                    </div>

                    <div className="">

                    </div>

                    <div className=" text-start font-medium">
                        <ul>
                            <li className="flex flex-row justify-between ">
                                <div className="flex flex-row items-center gap-3 ">
                                    <div className="rounded-full h-[12px] w-[12px] bg-yellow-600"></div>
                                    <h1>Housing</h1>
                                </div>

                                <div>
                                    {Housing_percentage.toFixed(0)}%
                                </div>

                            </li>
                            <li className="flex flex-row items-center gap-3 justify-between">
                                <div className="flex flex-row items-center gap-3 ">
                                    <div className="rounded-full h-[12px] w-[12px] bg-green-900"></div>
                                    <h1>Food</h1>
                                </div>

                                <div>
                                    {Foodpercentage.toFixed(0)}%
                                </div>
                            </li>
                            <li className="flex flex-row justify-between items-center gap-3 ">
                                <div className="flex flex-row items-center gap-3 ">

                                    <div className="rounded-full h-[12px] w-[12px] bg-green-900"></div>
                                    <h1>Transport</h1>
                                </div>
                                <div>
                                    {TransportPercentage.toFixed(0)}%
                                </div>
                            </li>
                            <li className="flex flex-row justify-between items-center gap-3 ">
                                <div className="flex flex-row items-center gap-3 ">

                                    <div className="rounded-full h-[12px] w-[12px] bg-cyan-500"></div>
                                    <h1>Personal Expence</h1>
                                </div>
                                <div>
                                    {Personal_percentage.toFixed(0)}%
                                </div>

                            </li>
                            <li className="flex flex-row  justify-between items-center gap-3 ">
                                <div className="flex flex-row items-center gap-3 ">

                                    <div className="rounded-full h-[12px] w-[12px] bg-sky-900"></div>
                                    <h1>Saving</h1>
                                </div>
                                <div>

                                    {Saving_percentage.toFixed(0)}%
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}