import { useState } from "react";
import axios from "axios";
import { BASE_url } from "../../axios.config";

export default function AddDailyRecord() {
    const [Category, setCategory] = useState("");
    const [PaymentWay, setPaymentWay] = useState("");
    const [Date, setDate] = useState("");
    const [ProductName, setProductName] = useState("");
    const [Price, setPrice] = useState("");

    const handleSave = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log("Token:", token);
          
            const response = await axios.post(`${BASE_url}/alldata`,
                {
                    category: Category,
                    paymentMethod: PaymentWay,
                    date: Date,
                    name: ProductName,
                    value: Number(Price),
                    token
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    timeout: 5000,
                });

            if(response.data){
                console.log("Daily Record Saved Successfully", response.data);
                setCategory("");
                setPaymentWay("");
                setDate("");
                setProductName("");
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
                        <input type="text" placeholder="Product name" className="w-[40%] h-[30px] bg-gray-200 rounded-md p-5" value={ProductName} onChange={(e) => setProductName(e.target.value)} />
                        <select
                            id="category"
                            name="category"
                            value={Category}
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
                        <input type="number" min={0} placeholder="Price" className="w-[40%] h-[30px] bg-gray-200 rounded-md p-5" value={Price} onChange={(e)=> setPrice(e.target.value)}/>
                        <input type="date" placeholder="Date" className="w-[40%] text-gray-500 h-[30px] bg-gray-200 rounded-md p-5" value={Date} onChange={(e)=> setDate(e.target.value)}/>
                    </div>
                    {/* block 3 */}
                    <div className="flex flex-row justify-between my-2">
                        <select
                            id="payment_method"
                            name="payment_method"
                            value={PaymentWay}
                            onChange={(e) => setPaymentWay(e.target.value)}
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
                        <button className="bg-[#2D5359] text-white text-[20px] font-medium rounded-lg px-5 py-1" onClick={handleSave} >&nbsp;Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}