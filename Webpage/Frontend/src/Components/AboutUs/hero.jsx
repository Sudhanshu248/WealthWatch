export default function Hero() {
    return (
        <div className="hero-container">
            {/* Left Side: Text */}
            <div className="hero-text">
                <h1 className='text-5xl font-semibold mb-4' style={{ color: "#023e8a" }}>About US</h1>
                <p>
                    We help you to take control of your finances effortlessly.
                    Tracking every expense and building a clearer path to your financial goals.
                    WealthWatch is an easy-to-use website that helps you keep track of all your money.
                    It lets you record what you spend, see where your money is going, and set goals for saving.
                </p>
            </div>

            {/* Right Side: Image */}
            <div className="hero-image">
                <img src="/image/about-background.png" alt="About Us" />
            </div>
        </div>
    );
}
