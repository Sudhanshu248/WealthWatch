export default function ProfilePage() {
        const formData = new FormData();

    return (
        <>
            {/* Main Container */}
            <div className='flex flex-row '>


                {/* Sidebar section */}


                {/* BLogs Container */} 
                <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-[86.5vh] w-[60vw]  grow">

                    <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-16 my-6">My Profile</h1>

                    <div className="flex flex-col items-center justify-center bg-white h-[32vh] w-[90%] mx-auto rounded-2xl">
                        <img src="image/profile.png" alt="profile.png" style={{height: "100px"}} className="m-3"/>
                        <div className="text-center">
                            <p className="text-2xl m-0">username</p>
                            <p className="" style={{color: "rgb(50, 47, 47)"}}>username@gmailcom</p>
                        </div>

                    </div>


                    <div className="bg-white p-4 px-10 mx-auto mb-5 rounded-2xl flex items-center justify-between m-5" style={{width: "90%"}}>
                        <p className="text-2xl pt-1 font-medium">Profession</p>
                        <p style={{color: "rgb(50, 47, 47)"}}>Interior Designer</p>
                    </div>

                    <div className="bg-white p-4 px-8 mx-auto mb-5 rounded-2xl flex items-center align-middle justify-between m-5" style={{width: "90%"}}>
                        <p className="text-2xl pt-1 font-medium">Income</p>
                        <p style={{color: "rgb(50, 47, 47)"}}>&#8377; 7247</p>
                    </div>

                    <div className="bg-white p-4 px-8 mx-auto mb-5 rounded-2xl flex items-center justify-between m-5" style={{width: "90%"}}>
                        <p className="text-2xl pt-1 font-medium">Average Expenses</p>
                        <p style={{color: "rgb(50, 47, 47)"}}>&#8377; 2477</p>
                    </div>

                </div>
            </div>
        </>
    )
}