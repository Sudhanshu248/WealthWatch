import "./style.css"
import { useNavigate } from 'react-router-dom';
export default function Navbar() {

    const navigate = useNavigate();

    const handleclick = () => {
        navigate("/login");
    }

    return (
        <>
            <nav id="navbar" className="sticky top-0  h-[100px] max-w-full shadow-md z-50 align-middle" style={{ backgroundColor: "#a2d2ff" }}>

                <div className="max-w-7xl mx-auto px-2 flex items-center align-middle justify-between h-full ">
                  
                  {/*Page_LOGO  */}
                    <div className=" w-1/4 ">
                  <img src="/logo.png" alt="logo_image" />
                    </div>

                    <div className="col-2 flex  align-middle items-center justify-center gap-6">

                        <a href="/aboutus" id="nav-about" className="hover:bg-sky-200 hover:font-bold w-full  text-center  px-5 py-2  font-sm  rounded-md ">AboutUs</a>
                        <a href="/support" id="nav-support" className="hover:bg-sky-200 hover:font-bold w-full  text-center  px-5 py-2  font-sm  rounded-md ">Support</a>

                        <button className="w-full  text-center  px-5 py-2 font-bold font-sm text-white rounded-md hover:scale-105" style={{ backgroundColor: "#023e8a" }} onClick={handleclick}>Login</button>

                    </div>
                </div>

            </nav>
        </>
    )
}