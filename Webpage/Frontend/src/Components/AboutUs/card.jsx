export default function Card() {
    return (
        <>
            <h1 className='card-heading text-center text-5xl my-14'>Why we are?</h1>
            <div className='card flex gap-40 mx-50 mb-28'>
                <div className='flex-5'>
                    <img src="/image/about1.png" alt="about1.png" className='w-90 h-90 rounded-md' />
                </div>

                <div className="card-text flex-5  justify-center">
                    <p>
                        We're are here to make financial well-being accessible to everyone. Our application is designed to be intuitive, secure, and packed with features that genuinely help you reach your financial goals, whether you're saving for something big, paying down debt, or just aiming for better daily budgeting.
                    </p>
                </div>
            </div>
        </>
    );
}