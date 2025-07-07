import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../backend/axiosConfig.js";

export default function AddDailyRecord() {
    const [category, setCategory] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
 
    const handleSave = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log("Token:", token);
            if (!token) {
                console.log("Error")
                return;
            }

            const response = await axios.post(`${BASE_URL}/dashboard`,
                {
                    category,
                    paymentMethod,
                    date,
                    name,
                    price
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token,
                    },
                    timeout: 5000,
                });

            if(response.data){
                console.log("Daily Record Saved Successfully", response.data);
                setCategory("");
                setPaymentMethod("");
                setDate("");
                setName("");
                setPrice("");
            }
        } catch (error) {
            console.error("Error saving daily record:", error);
            alert("Failed to save daily record. Please try again.");
        }
    }

    return (
        <>
            {/* Add Daily  Record box */}
            <div className="bg-white w-full h-full rounded-2xl  px-12 ">
                <div className=" flex flex-col   h-fit w-full  my-2">
                    {/* Heading */}
                    <div className="w-full mb-5">
                        <h1 className="text-[1.2rem] text-start text-shadow-sm font-medium text-start ">Add Daily Record</h1>
                    </div>
                    {/* block 1 */}
                    <div className="flex flex-row justify-between my-2">
                        <input type="text" placeholder="Enter Product name" value={name} className="w-[40%] h-[30px] bg-gray-200 rounded-md p-5" onChange={(e) => setName(e.target.value)} />
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-gray-200 text-gray-500 rounded-md w-[40%] h-[40px] p-2"
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
                        <input type="number" min={0} placeholder="Price" value={price} className="w-[40%] h-[30px] bg-gray-200 rounded-md p-5"  onChange={(e)=> setPrice(e.target.value)}/>
                        <input type="date" placeholder="Date" value={date} className="w-[40%] text-gray-500 h-[30px] bg-gray-200 rounded-md p-5" onChange={(e)=> setDate(e.target.value)}/>
                    </div>
                    {/* block 3 */}
                    <div className="flex flex-row justify-between my-2">
                        <select
                            id="payment_method"
                            name="payment_method"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="bg-gray-200 text-gray-500 rounded-md w-[40%] h-[40px] p-2"
                            style={{ border: "none", outline: "none" }}
                        >
                            <option value="" disabled>Payment Method</option>
                            <option value="UPI">UPI</option>
                            <option value="Cash">Cash</option>
                            <option value="Card">CARD</option>
                        </select>
                    </div>
                    {/* Saved Button */}
                    <div className=" my-2 ">
                        <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1 cursor-pointer"  onClick={handleSave} >&nbsp;Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}