import "./style.css"
import { useNavigate } from 'react-router-dom';

import { useState } from "react";

export default function Navbar() {

    const navigate = useNavigate();

  

    return (
        <>
            <nav id="navbar" className="sticky top-0 bg-[#B8D7DE8C] h-[80px] max-w-full shadow-md z-50 align-middle">

                <div className="max-w-7xl mx-auto px-2 flex items-center align-middle justify-between h-full ">

                    {/*Page_LOGO  */}
                    <div className=" w-1/4 ">
                        <img src="/image/logo.png" alt="logo_image" />
                    </div>


               <div  className="col-2 flex  align-middle items-center justify-center gap-6">
                        <div className="h-[30px] w-[30px] rounded-full ">
                            <img className="rounded-full " src="/image/profile.png" alt="" />
                        </div>

                        <div>
                            <a href="/profile">username</a>
                        </div>
                    </div>
             
                </div>

            </nav>
        </>
    )
}