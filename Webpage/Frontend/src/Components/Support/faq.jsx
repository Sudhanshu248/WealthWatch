import { useState } from "react"


export default function Faq() {

    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const [hovered5, setHovered5] = useState(false);
    const [hovered6, setHovered6] = useState(false);


    return (
        <>

            {/* Heading */}
            <div className="text-center mt-32 mb-16">
                <h1 className="font-semibold text-4xl cabin-fam px-3" style={{ color: "#023e8a" }}>Frequently Asked Questions</h1>
            </div>


            {/* FAQ Question */}
            <div className="faq-box text-center px-16 py-6 mb-16 flex flex-col  gap-8">

                {/* FAQ-1 */}
                <div className="faq-outer m-auto w-[80%] h-[5rem]  rounded-full text-center flex flex-row justify-between align-item-center"
                    id={hovered1 ? "faq-outer" : ""}
                >


                    <div className="faq-inner text-center  rounded-full bg-blue-700 w-[80px] h-[80px] text-sm text-white font-semibold relative hover:scale-105 "
                        id={hovered1 ? "faq-inner" : ""}
                        onMouseEnter={() => setHovered1(true)}
                        onMouseLeave={() => setHovered1(false)}>

                        <i className="fa-solid fa-arrow-right " style={{ position: "absolute", top: "25px", left: "25px", fontSize: "35px" }}></i>

                    </div>

                    <div className="faq-text w-1/2  font-bold text-[20px] mt-4 px-6 grow">
                        {!hovered1 ? "What is WealthWatch?" : "An expense tracker is a tool or app that helps you record, categorize, and monitor your spending to manage your finances effectively."}
                    </div>

                </div>



                {/* FAQ-2 */}

                <div className="faq-outer m-auto w-[80%] h-[5rem]  rounded-full text-center flex flex-row justify-between align-item-center"
                    id={hovered2 ? "faq-outer" : ""}
                >

                    <div className="faq-text w-1/2 font-bold text-[20px] mt-4 px-6 grow">
                        {!hovered2 ? "How do I add an expense or income?" : "Go to the add transaction section, enter the details (amount, category, date), and save."}
                    </div>

                    <div className="faq-inner text-center  rounded-full bg-blue-700 w-[80px] h-[80px] text-sm text-white font-semibold relative hover:scale-105 "
                        id={hovered2 ? "faq-inner" : ""}
                        onMouseEnter={() => setHovered2(true)}
                        onMouseLeave={() => setHovered2(false)}>

                        <i className="fa-solid fa-arrow-left" style={{ position: "absolute", top: "25px", left: "25px", fontSize: "35px" }} ></i>

                    </div>



                </div>

                {/* FAQ-3 */}

                <div className="faq-outer m-auto w-[80%] h-[5rem]  rounded-full text-center flex flex-row justify-between align-item-center"
                    id={hovered3 ? "faq-outer" : ""}
                >


                    <div className="faq-inner text-white  text-center  rounded-full w-[80px] h-[80px] text-sm font-semibold relative hover:scale-105 "
                        id={hovered3 ? "faq-inner" : ""}
                        onMouseEnter={() => setHovered3(true)}
                        onMouseLeave={() => setHovered3(false)}>

                        <i className="fa-solid fa-arrow-right " style={{ position: "absolute", top: "25px", left: "25px", fontSize: "35px" }}></i>

                    </div>

                    <div className="faq-text w-1/2 font-bold text-[20px] mt-4 px-6 grow">
                        {!hovered3 ? "Is my data secure?" : "Yes, all your data is stored securely and never shared with third parties."}
                    </div>

                </div>


                {/* FAQ-4 */}
                <div className="faq-outer m-auto w-[80%] h-[5rem]  rounded-full text-center flex flex-row justify-between align-item-center"
                    id={hovered4 ? "faq-outer" : ""}
                >
                    <div className="faq-text w-1/2  font-bold text-[20px] mt-4 px-6 grow">
                        {!hovered4 ? "Can I set budgets for different categories?" : "Yes, you can set monthly budgets per category and track your progress."}
                    </div>

                    <div className="faq-inner text-white text-center  rounded-full bg-blue-700 w-[80px] h-[80px] text-sm  font-semibold relative hover:scale-105 "
                        id={hovered4 ? "faq-inner" : ""}
                        onMouseEnter={() => setHovered4(true)}
                        onMouseLeave={() => setHovered4(false)}>

                        <i className="fa-solid fa-arrow-left" style={{ position: "absolute", top: "25px", left: "25px", fontSize: "35px" }} ></i>

                    </div>



                </div>

                {/* FAQ-5 */}

                <div className="faq-outer m-auto w-[80%] h-[5rem]  rounded-full text-center flex flex-row justify-between align-item-center"
                    id={hovered5 ? "faq-outer" : ""}
                >


                    <div className="faq-inner text-white  text-center  rounded-full bg-blue-700 w-[80px] h-[80px] text-sm font-semibold relative hover:scale-105 "
                        id={hovered5 ? "faq-inner" : ""}
                        onMouseEnter={() => setHovered5(true)}
                        onMouseLeave={() => setHovered5(false)}>

                        <i className="fa-solid fa-arrow-right " style={{ position: "absolute", top: "25px", left: "25px", fontSize: "35px" }}></i>

                    </div>

                    <div className="faq-text w-1/2 font-bold text-[20px] mt-4 px-6 grow">
                        {!hovered5 ? "Is my data secure?" : "Yes, all your data is stored securely and never shared with third parties."}
                    </div>

                </div>


                {/* FAQ-6 */}
                <div className="faq-outer m-auto w-[80%] h-[5rem]  rounded-full text-center flex flex-row justify-between align-item-center"
                    id={hovered6 ? "faq-outer" : ""}
                >
                    <div className="faq-text w-1/2  font-bold text-[20px] mt-4 px-6 grow">
                        {!hovered6 ? "Can I set budgets for different categories?" : "Yes, you can set monthly budgets per category and track your progress."}
                    </div>

                    <div className="faq-inner text-white text-center  rounded-full bg-blue-700 w-[80px] h-[80px] text-sm  font-semibold relative hover:scale-105 "
                        id={hovered6 ? "faq-inner" : ""}
                        onMouseEnter={() => setHovered6(true)}
                        onMouseLeave={() => setHovered6(false)}>

                        <i className="fa-solid fa-arrow-left" style={{ position: "absolute", top: "25px", left: "25px", fontSize: "35px" }} ></i>

                    </div>



                </div>
            </div>

        </>
    )
}