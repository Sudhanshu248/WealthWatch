import { useState } from "react";
export default function AddDailyRecord() {

    const [Category, setCategory] = useState("");
    const [PaymentWay, setPaymentWay] = useState("");

    return (
        <>
            {/* Add Daily  Record box */}
            <div className="bg-white w-full h-[50%] rounded-2xl  px-12 py-4">

                <div className=" flex flex-col   h-fit w-full  my-2">

                    {/* Heading */}
                    <div className="w-full">
                        <h1 className="text-[1.1rem] text-start text-shadow-sm font-medium text-start ">Add Daily Record</h1>
                    </div>

                    {/* block 1 */}
                    <div className="flex flex-row justify-between my-2">

                        <input type="text" placeholder="Product name" className="w-[40%] h-[30px] bg-gray-200 rounded-md p-2" />

                        <select
                            id="category"
                            name="category"
                            value={Category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-gray-200 text-gray-500 rounded-md w-[40%] h-[30px]"
                            style={{ border: "none", outline: "none" }}
                        >
                            <option value="" disabled>Category</option>
                            <option value="food">Food</option>
                            <option value="transport">Transport</option>
                            <option value="personal">Personal</option>
                            <option value="housing">Housing</option>
                        </select>


                    </div>


                    {/* block 2 */}
                    <div className="flex flex-row justify-between my-2">

                        <input type="number" min={0} placeholder="price" className="w-[40%] h-[30px] bg-gray-200 rounded-md p-2" />

                        <input type="date" placeholder="Date" className="w-[40%] text-gray-500 h-[30px] bg-gray-200 rounded-md p-2" />


                    </div>

                    {/* block 3 */}
                    <div className="flex flex-row justify-between my-2">
                        <select
                            id="payment_method"
                            name="payment_method"
                            value={PaymentWay}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-gray-200 text-gray-500 rounded-md w-[40%] h-[30px]"
                            style={{ border: "none", outline: "none" }}
                        >
                            <option value="" disabled>Payment Method</option>
                            <option value="food">Food</option>
                            <option value="transport">Transport</option>
                            <option value="personal">Personal</option>
                            <option value="housing">Housing</option>
                        </select>
                    </div>
                </div>


            </div>
        </>
    )
}