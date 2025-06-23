import "./style.css"; 

export default function Hero() {
    return (
        <>
            <div className='container'>

                <div className="text-left pt-60 p-30">
                    <h1 className='text-5xl font-semibold mb-4' style={{color: "#023e8a"}}>About US</h1>

                    <p className='text-left pr-160'>
                        We help you to take control of your finances effortlessly. 
                        <br />
                        Tracking every expense and building a clearer path to your financial goals.
                        WealthWatch is an easy-to-use website that helps you keep track of all your money. 
                        It lets you record what you spend, see where your money is going, and set goals for saving.
                    </p>
                </div>

            </div>
        </>
    );
}