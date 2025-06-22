import "./style.css";

export default function Card() {
    return(
        <>
            <div className='flex mx-40'>
                <div className='flex-5 py-20 pl-25'>
                    <img src="/image/about1.png" alt="" className='w-90 h-90 rounded-md' />
                </div>


                <div className="flex-5 pr-20 py-35  justify-center">
                    <h1 className='text-5xl mb-10'>Why we are?</h1>
                    <p>
                        We're are here to make financial well-being accessible to everyone. Our application is designed to be intuitive, secure, and packed with features that genuinely help you reach your financial goals, whether you're saving for something big, paying down debt, or just aiming for better daily budgeting.
                    </p>
                </div>
            </div>
        </>
    );
}