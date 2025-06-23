import "./style.css"
import { useNavigate } from 'react-router-dom';
export default function Navbar() {

    const navigate = useNavigate();

    const handleclick = () => {
        navigate("/signup");
    }

    const handleAction = () =>{
        navigate("/")
    }

    return (
        <>
            <nav id="navbar" className="sticky top-0 p-9  h-[10px] shadow-md z-50 align-middle" style={{ backgroundColor: "#a2d2ff"}}>

                <div className="px-2 flex items-center align-middle justify-between h-full ">
                  
                  {/*Page_LOGO  */}
                    <div className=" w-1/4 p-8 " onClick={handleAction} >
                        <img src="/logo.png" alt="logo_image" className="cursor-pointer" style={{height: "fit-content"}}/>
                    </div>

                    <div className="col-2 flex  align-middle items-center justify-center gap-6">

                        <a href="/aboutus" id="nav-about" className="hover:bg-sky-200 hover:font-bold   text-center  px-5 py-2  font-sm  rounded-md ">About US</a>
                        <a href="/support" id="nav-support" className="hover:bg-sky-200 hover:font-bold  text-center  px-5 py-2  font-sm  rounded-md ">Support</a>

                        <button className="text-center  px-5 py-2 font-bold font-sm text-white rounded-md hover:scale-105" style={{ backgroundColor: "#023e8a" }} onClick={handleclick}>Sign up</button>

                    </div>
                </div>

            </nav>
        </>
    )
}