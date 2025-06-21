import "./style.css"
import { useNavigate } from 'react-router-dom';
export default function Navbar() {

    const navigate = useNavigate();

    const handleclick = () => {
        navigate("/login");
    }

    return (
        <>
            <nav className="sticky top-0  h-[100px]  shadow-md z-50 align-middle" style={{ backgroundColor: "#a2d2ff", width: "100vw" }}>

                <div className="max-w-7xl mx-auto px-2 flex items-center align-middle justify-between h-full ">
                  
                    <div className=" w-1/4 ">
                  <img src="/logo.png" className="" alt="" />
                    </div>

                    <div className="col-2 flex  align-middle items-center justify-center gap-6">
                        <a href="/aboutus" className="hover:bg-sky-200 hover:font-bold w-full  text-center  px-5 py-2  font-sm  rounded-md ">AboutUs</a>
                        <a href="/support" className="hover:bg-sky-200 hover:font-bold w-full  text-center  px-5 py-2  font-sm  rounded-md ">Support</a>
                        <button className="w-full  text-center  px-5 py-2 font-bold font-sm text-white rounded-md hover:scale-105" style={{ backgroundColor: "#023e8a" }} onClick={handleclick}>Login</button>
                    </div>
                </div>

            </nav>
        </>
    )
}