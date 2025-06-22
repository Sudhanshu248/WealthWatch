import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testomonial.css"; // Assuming you have additional custom styles

const testimonialsData = [
  {
    image: "/image/people1.jpg",
    text: `"I used to dread looking at my bank statements, but this WealthWatch changed everything! It's incredibly user-friendly and helps me categorize my spending effortlessly. Now I actually understand where my money goes, and I've been able to cut down on unnecessary expenses without feeling deprived. It's truly been a game-changer for my financial peace of mind."`,
    author: "— Priya S., Marketing Professional",
  },
  {
    image: "/image/people2.png",
    text: `"My partner and I were constantly arguing about money, but this WealthWatch has brought so much transparency to our joint finances. We can both log our spending, see shared categories, and work towards common goals. It's incredibly helpful for splitting bills and ensuring we're on the same page financially. Our money talks are much more productive now!"`,
    author: "— Vivek D., Software Engineer",
  },
  {
    image: "/image/people3.png",
    text: `"The security and privacy features really stand out. I was initially hesitant about putting all my financial data into an app, but knowing my information is protected gives me great confidence. Beyond that, the features are robust, and the ability to set custom categories means it perfectly adapts to my unique spending. It’s an essential tool for modern financial management."`,
    author: "— Smita K., Business Owner",
  },
  {
    image: "/image/people4.png",
    text: `"As a freelancer, my income and expenses can be pretty erratic. This tracker has become my financial co-pilot. I can quickly log every transaction on the go, and the reports give me clear insights into my business spending versus personal. It's streamlined my budgeting process, and tax season will be so much easier this year. Highly recommend for anyone with a variable income!"`,
    author: "— Rohan M., Graphic Designer",
  },
  {
    image: "/image/people5.png",
    text: `"I've tried numerous budgeting apps over the years, and this is by far the most intuitive and effective. The interface is clean, and adding expenses takes seconds. What I love most are the visual breakdowns; they make understanding my habits so much easier than just looking at numbers. I've finally hit my savings goals, thanks to the clarity this tracker provides."`,
    author: "— Anjali R., Teacher",
  },
  {
    image: "/image/people6.png",
    text: `"This tracker isn't just about logging expenses; it's about building better financial habits. The nudges and insights I receive have genuinely made me more mindful of my purchases. It’s helped me identify subscriptions I didn't need and make smarter choices daily. I feel more in control and less stressed about money than ever before. Thank you!"`,
    author: "— Jayesh P., Student",
  },
];

const Testimonials = () => {
  return (
    <div className="my-5 mx-40 p-20 w-[30]vw h-[10]vh">
      <h1 className="text-5xl text-center mb-2">Loved By People</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        autoHeight={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testominals flex items-center m-20">
              <img src={testimonial.image} alt="Testimonial" className="w-80 h-90 rounded-xl" />
              <div className="pl-30">
                <p className="mb-10">{testimonial.text}</p>
                <p className="font-bold">{testimonial.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;


// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./testomonial.css";

// const Testimonials = () => {
//   return (
//     <>
//         <div className="testi m-10 ">
//           <Swiper modules={[Navigation, Pagination]} id="swiper" loop={true} autoHeight={true} navigation={{
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             }}
//             pagination={{ clickable: true }} simulateTouch={true} touchRatio={0.1} touchAngle={20}
//           >
//             <SwiperSlide id="swiper-slide">
//               <div className="wrapper m-40">
//                 <div className="thumbail">
//                   <img src="/image/people2.png" alt="" className="w-120"/>
//                 </div>
//                 <div className="aside">
//                   <div className="name">
//                     <h4>Priya</h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                       Velit, cupiditate corporis? Nobis modi vitae molestias
//                       ullam recusandae quisquam mollitia aliquid tempore sunt
//                       eaque quam excepturi non, nulla enim esse porro!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="wrapper">
//                 <div className="thumbail">
//                   <img src="/image/people1.jpg" alt="" />
//                 </div>
//                 <div className="aside">
//                   <div className="name">
//                     <h4>Priya</h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                       Velit, cupiditate corporis? Nobis modi vitae molestias
//                       ullam recusandae quisquam mollitia aliquid tempore sunt
//                       eaque quam excepturi non, nulla enim esse porro!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="wrapper">
//                 <div className="thumbail">
//                   <img src="/image/people2.png" alt="" />
//                 </div>
//                 <div className="aside">
//                   <div className="name">
//                     <h4>Priya</h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                       Velit, cupiditate corporis? Nobis modi vitae molestias
//                       ullam recusandae quisquam mollitia aliquid tempore sunt
//                       eaque quam excepturi non, nulla enim esse porro!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           <div className="swiper-button-prev"></div>
//           <div className="swiper-button-next"></div>
//           </Swiper>
//         </div>
//       </>
//   );
// };

// export default Testimonials;
