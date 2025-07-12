export default function Card() {
    return (
        <>
            <div className="px-12 py-4 mx-auto my-8">

                {/* section-1 */}
                <div className="grid grid-cols-2 px-6 py-8 my-8 mx-4 max-[744px]:grid-cols-1 max-[744px]:text-center">

                    <div className="text-center ">

                        <img className="text-center m-auto rounded-md w-1/2 rounded-md justify-center flex align-center card-shadow hover:scale-105" src="/image/home1.jpg" alt="" />
                    </div>

                    <div className="text-start max-[744px]:text-center flex flex-col gap-4 mt-4">
                        <h1 className="  text-5xl font-bold max-[840px]:text-3xl " style={{ color: "#023e8a" }}>Daily Bases Tracking</h1>
                        <p className="text-gray-600 ">Quickly record your daily transactions in just seconds. Easily sort them into clear categories like Food, Shopping, Salary, or Gifts.</p>
                    </div>

                </div>

                {/* section-2 */}
                <div className="grid grid-cols-2 px-6 py-8 mx-4 my-8 max-[744px]:grid-cols-1 max-[744px]:text-center ">

                    <div className="text-start order-1 max-[744px]:order-2 mt-2 max-[744px]:text-center flex flex-col gap-4">
                        <h1 className="text-start max-[744px]:text-center text-5xl font-bold max-[840px]:text-3xl " style={{ color: "#023e8a" }}>Everything in one view</h1>
                        <p className="text-gray-600">Get a full view of your spending in one easy-to-read report.Visual graphs help you understand where your money comes from and where it goes.</p>
                    </div>

                    <div className="text-center order-2 max-[744px]:order-1">
                        <img className="w-[30rem] pr-3 mr-4 justify-center flex align-center card-shadow rounded-md hover:scale-105 ml-16" src="/image/home2.png" alt="" />
                    </div>

                </div>

                {/* section-3 */}
                <div className="grid grid-cols-2 px-6 py-8 mx-4 my-8 gap-4 max-[744px]:grid-cols-1 max-[744px]:text-center ">

                    <div className=" w-1/2 m-auto justify-center flex align-center card-shadow rounded-full hover:scale-105">
                        <img className="text-center m-auto" src="/image/home3.png" alt="" />
                    </div>

                    <div className="text-start max-[744px]:text-center flex flex-col gap-4">
                        <h1 className="text-start max-[744px]:text-center text-5xl font-bold max-[840px]:text-3xl " style={{ color: "#023e8a" }}>Budget </h1>
                        <p className="text-gray-600">We help you build a budget that fits your life. Based on how you spend, we suggest smart ways to manage your money and save more.</p>
                    </div>

                </div>



            </div>


        </>
    )
}