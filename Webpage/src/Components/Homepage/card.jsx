export default function Card() {




    return (
        <>
        <div className="px-12 py-4 mx-auto my-8">

            {/* section-1 */}
            <div className="grid grid-cols-2 px-6 py-8 my-8 mx-4 ">

                <div className="text-center ">

                    <img className="text-center rounded-md w-1/2 rounded-md justify-center ml-16 flex align-center card-shadow hover:scale-105" src="/image/home1.jpg" alt="" />
                </div>

                <div className="text-start flex flex-col gap-4">
                    <h1 className="text-start  text-5xl font-bold " style={{ color: "#023e8a" }}>Daily Bases Tracking</h1>
                    <p className="text-gray-600 ">Quickly record your daily transactions in just seconds. Easily sort them into clear categories like Food, Shopping, Salary, or Gifts.</p>
                </div>

            </div>

            {/* section-2 */}
            <div className="grid grid-cols-2 px-6 py-8 mx-4 my-8">

                <div className="text-start flex flex-col gap-4">
                    <h1 className="text-start  text-5xl font-bold " style={{ color: "#023e8a" }}>Everything in one view</h1>
                    <p className="text-gray-600">Get a full view of your spending in one easy-to-read report.Visual graphs help you understand where your money comes from and where it goes.</p>
                </div>

                <div className="text-center">
                    <img className="w-[30rem] pr-3 mr-4 justify-center flex align-center card-shadow rounded-md hover:scale-105 ml-16" src="/image/home2.png" alt="" />
                </div>

            </div>

            {/* section-3 */}
            <div className="grid grid-cols-2 px-6 py-8 mx-4 my-8">

                <div className=" w-[20rem] ml-24 justify-center flex align-center card-shadow rounded-full hover:scale-105">
                    <img className="text-center" src="/image/home3.png" alt="" />
                </div>

                <div className="text-start flex flex-col gap-4">
                    <h1 className="text-start  text-5xl font-bold " style={{ color: "#023e8a" }}>Budget recommendation</h1>
                    <p className="text-gray-600">We help you build a budget that fits your life. Based on how you spend, we suggest smart ways to manage your money and save more.</p>
                </div>

            </div>



        </div>


        </>
    )
}