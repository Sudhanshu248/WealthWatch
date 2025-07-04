export default function GoalsPage() {
    return (
        <>
            {/* Main Container */}
            <div className='flex '>

                {/* Goals Container */}
                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-[86.9vh] w-[60vw]  grow">

                    <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-16 mt-6 mb-1.5">Goals</h1>

                    <p className="ml-16 ">Set your monthly goals for different categories.</p>

                    <section className="mt-7" >
                        <div className="bg-white p-4 px-8 mx-auto mb-5 rounded-2xl flex justify-between" style={{width: "90%"}}>
                            <div className="left">
                                <p className="text-2xl pt-1 font-medium">Transportation</p>
                            </div>

                            <div className="right">
                                <span>&#8377;</span>
                                <input type="number" placeholder="Enter Price" className="pl-5 py-2 w-35 rounded-2xl ml-2" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}} />
                                <button className="text-white px-8 py-2 rounded-3xl ml-6 cursor-pointer" style={{backgroundColor: "rgba(45, 83, 89, 1)"}}>Save</button>
                            </div>
                        </div>


                        <div className="bg-white p-4 px-8 mx-auto mb-5 rounded-2xl flex justify-between" style={{width: "90%"}}>
                            <div className="left">
                                <p className="text-2xl pt-1  font-medium">Housing</p>
                            </div>

                            <div className="right">
                                <span>&#8377;</span>
                                <input type="number" placeholder="Enter Price" className="pl-5 py-2 w-35 rounded-2xl ml-2" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}} />
                                <button className="text-white px-8 py-2 rounded-3xl ml-6 cursor-pointer" style={{backgroundColor: "rgba(45, 83, 89, 1)"}}>Save</button>
                            </div>
                        </div>


                        <div className="bg-white p-4 px-8 mx-auto mb-5 rounded-2xl flex justify-between" style={{width: "90%"}}>
                            <div className="left">
                                <p className="text-2xl pt-1  font-medium">Food</p>
                            </div>

                            <div className="right">
                                <span>&#8377;</span>
                                <input type="number" placeholder="Enter Price" className="pl-5 py-2 w-35 rounded-2xl ml-2" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}} />
                                <button className="text-white px-8 py-2 rounded-3xl ml-6 cursor-pointer" style={{backgroundColor: "rgba(45, 83, 89, 1)"}}>Save</button>
                            </div>
                        </div>


                        <div className="bg-white p-4 px-8 mx-auto mb-5 rounded-2xl flex justify-between" style={{width: "90%"}}>
                            <div className="left">
                                <p className="text-2xl pt-1  font-medium">Personal Expenses</p>
                            </div>

                            <div className="right">
                                <span>&#8377;</span>
                                <input type="number" placeholder="Enter Price" className="pl-5 py-2 w-35 rounded-2xl ml-2" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}} />
                                <button className="text-white px-8 py-2 rounded-3xl ml-6 cursor-pointer" style={{backgroundColor: "rgba(45, 83, 89, 1)"}}>Save</button>
                            </div>
                        </div>

                        <div className="bg-white p-4 px-8 mx-auto mb-5 rounded-2xl flex justify-between" style={{width: "90%"}}>
                            <div className="left">
                                <p className="text-2xl pt-1 font-medium">Debt, Saving & Investment</p>
                            </div>

                            <div className="right">
                                <span>&#8377;</span>
                                <input type="number" placeholder="Enter Price" className="pl-5 py-2 w-35 rounded-2xl ml-2" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}} />
                                <button className="text-white px-8 py-2 rounded-3xl ml-6 cursor-pointer" style={{backgroundColor: "rgba(45, 83, 89, 1)"}}>Save</button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}