import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import { navItem } from "./sidebar.js";
export default function Sidebar() {

    const location = useLocation();
    const [Active, setActive] = useState("");

    useEffect(() => {
        const currItem = navItem.find((item) => item.href === location.pathname);
        if (currItem) {
            setActive(currItem.name);
        }
        else {
            setActive("");
        }
    }, [location.pathname]);


    return (
        <>
            <div className="flex flex-col justify-center items-center text-center h-[45%] space-y-1 text-[20px] capitalize">
                {navItem.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setActive(item.name)}
                        className={`block w-[150px] h-fit rounded-full m-auto ${Active === item.name && item.href === location.pathname
                            ? "bg-white text-[#2D5359] font-bold py-2 w-[140px]"
                            : "font-normal"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

        </>
    )
}