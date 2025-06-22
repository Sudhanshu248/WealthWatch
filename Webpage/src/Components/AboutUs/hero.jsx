import "./style.css"; 

export default function Hero() {
    return (
        <>
            <div className='container'>

                <div className="text-left pt-60 p-30">
                    <h1 className='text-5xl font-semibold mb-4 ' style={{color: "#023e8a"}}>About Us</h1>

                    <p className='text-left'>
                        We help you to take control of your finances effortlessly. 
                        <br />
                        Tracking every expense and building a clearer path to your financial goals.
                    </p>
                </div>

            </div>
        </>
    );
}