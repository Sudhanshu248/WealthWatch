import { DASHBOARD_URL } from '../../../../backend/axiosConfig';
import './style.css';
import { Link } from "react-router-dom";

export default function PhoneBar() {
    return (
        <>
            {/* PhoneBar: A horizontal navigation bar with icons for mobile view */}
            <div className="phone-bar flex flex-row justify-evenly items-center text-white text-[20px] w-full h-full">

                {/* Dashboard Link */}
                <Link to={`${DASHBOARD_URL}/dashboard`}>

                    <i className="fa-solid fa-house-user"></i>

                </Link>

                {/* Cashflow Page Link */}
                <Link to={`${DASHBOARD_URL}/cashflow`}>

                    <i className="fa-solid fa-money-bill"></i>

                </Link>

                {/* Goals Page Link */}
                <Link to={`${DASHBOARD_URL}/goals`}>

                    <i className="fa-brands fa-goodreads-g"></i>

                </Link>

                {/* History Page Link */}
                <Link to={`${DASHBOARD_URL}/historys`}>

                    <i className="fa-solid fa-clock-rotate-left"></i>

                </Link>

                {/* Blogs Page Link */}
                <Link to={`${DASHBOARD_URL}/blogs`}>

                    <i className="fa-solid fa-blog"></i>

                </Link>
            </div>
        </>
    );
}
