import React, { useEffect, useState, useRef } from "react";
import "./style.css"; 
import Testimonials from "./testimonial.jsx";
import Hero from "./hero.jsx"; 
import Record from "./record.jsx";
import Card from "./card.jsx";
import Team from "./team.jsx";

export default function AboutUs(){

  return (
        <>
            <Hero />
            <Record />
            <Card />
            <Team />
{/* 
<div className="my-20 mx-30 h-150 p-20 " >
                <h1 className='text-5xl text-center m-10'>Loved By People</h1>

                <div className="testominals 1 flex">
                    <img src="/image/people1.jpg" alt=""  className='w-90 h-100 rounded-xl'/>
                    <div className='pl-30'>
                        
                        <p className='mb-10'>"I used to dread looking at my bank statements, but this WealthWatch changed everything! It's incredibly user-friendly and helps me categorize my spending effortlessly. Now I actually understand where my money goes, and I've been able to cut down on unnecessary expenses without feeling deprived. It's truly been a game-changer for my financial peace of mind."</p>
                        <p className='font-bold' >— Priya S., Marketing Professional</p>
                    </div>
                </div>

                <div className="testominals 2 flex">
                    <img src="/image/people2.png" alt=""  className='w-90 h-100 rounded-xl'/>
                    <div className='pl-30'>
                
                        <p className='mb-10'>"My partner and I were constantly arguing about money, but this WealthWatch has brought so much transparency to our joint finances. We can both log our spending, see shared categories, and work towards common goals. It's incredibly helpful for splitting bills and ensuring we're on the same page financially. Our money talks are much more productive now!"</p>
                        <p className='font-bold' >— Vivek D., Software Engineer</p>
                    </div>
                </div>

                <div className="testominals 3 flex">
                    <img src="/image/people3.png" alt=""  className='w-90 h-100 rounded-xl'/>
                    <div className='pl-30'>
                        
                        <p className='mb-10'>"The security and privacy features really stand out. I was initially hesitant about putting all my financial data into an app, but knowing my information is protected gives me great confidence. Beyond that, the features are robust, and the ability to set custom categories means it perfectly adapts to my unique spending. It’s an essential tool for modern financial management."</p>
                        <p className='font-bold' >— Smita K., Business Owner</p>
                    </div>
                </div>

                <div className="testominals 4 flex">
                    <img src="/image/people4.png" alt=""  className='w-90 h-100 rounded-xl'/>
                    <div className='pl-30'>
                        
                        <p className='mb-10'>"As a freelancer, my income and expenses can be pretty erratic. This tracker has become my financial co-pilot. I can quickly log every transaction on the go, and the reports give me clear insights into my business spending versus personal. It's streamlined my budgeting process, and tax season will be so much easier this year. Highly recommend for anyone with a variable income!"</p>
                        <p className='font-bold' >— Rohan M., Graphic Designer</p>
                    </div>
                </div>

                <div className="testominals 5 flex">
                    <img src="/image/people5.png" alt=""  className='w-90 h-100 rounded-xl'/>
                    <div className='pl-30'>
                        
                        <p className='mb-10'>"I've tried numerous budgeting apps over the years, and this is by far the most intuitive and effective. The interface is clean, and adding expenses takes seconds. What I love most are the visual breakdowns; they make understanding my habits so much easier than just looking at numbers. I've finally hit my savings goals, thanks to the clarity this tracker provides."</p>
                        <p className='font-bold' >— Anjali R., Teacher</p>
                    </div>
                </div>

                <div className="testominals 6 flex">
                    <img src="/image/people6.png" alt=""  className='w-90 h-100 rounded-xl'/>
                    <div className='pl-30'>
                        
                        <p className='mb-10'>"This tracker isn't just about logging expenses; it's about building better financial habits. The nudges and insights I receive have genuinely made me more mindful of my purchases. It’s helped me identify subscriptions I didn't need and make smarter choices daily. I feel more in control and less stressed about money than ever before. Thank you!"</p>
                        <p className='font-bold' >— Jayesh P., Student</p>
                    </div>
                </div>


</div>  */}

               <Testimonials/>


        </>
  );
};
