import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { tips, articles, ytData } from "./blogData.js"

export default function Blogs() {

  return (
    <>
      {/* Main Container */}
      <div className='flex flex-row '>


        {/* BLogs Container */}
        <div className="blogs bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-full w-[60vw]  grow">
          <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-16 my-6">Blogs</h1>


          {/*  Article Section */}
          <div className=" bg-white w-[90%] mx-auto  py-5 px-2 my-8 rounded-2xl">

            <h1 className="text-2xl font-medium text-start px-8 mb-4 ">Money guides</h1>

            <div className='flex flex-row h-[75%] w-[100%]  items-center '>
              {/* Card 1 */}
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                autoHeight={true}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={40}
                breakpoints={{
                  0: { slidesPerView: 1 },       // Default for all screen widths
                  700: { slidesPerView: 2 },       // Default for all screen widths
                  1330: { slidesPerView: 3 },    // Override when width is 1330px or more
                }}


                className="w-full h-auto custom-swiper"
              >

                {articles.map((item, index) => (
                  <SwiperSlide key={index}>

                    <div className="blog-slider w-[320px] mb-11 mt-2 ml-16 pb-4 pt-4 px-4 rounded-[1rem]" style={{ boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.30) ", backgroundColor: "rgba(173, 216, 230, 0.15)" }}>
                      <img src={item.image} alt="post-image" style={{ height: "190px", borderRadius: "10px" }} />

                      <p className="mt-2 mb-4">{item.title}</p>

                      <div className="text-end my-2 pb-2 pt-2">
                        <a className="text-center text-white bg-[#2D5359] rounded-md px-4 py-2" href={item.url} target="_blank">VISIT &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
              {/* Whole articles section */}
            </div>

          </div>



          {/*  video Section */}
          <div className="bg-white w-[90%] mx-auto  py-5 px-2 my-8 rounded-2xl">
            <h1 className="text-2xl font-medium text-start px-8 mb-4 ">Finance clips</h1>

            <div className='flex flex-row h-[75%] w-[100%]  items-center '>

              {/* Card 1 */}
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                autoHeight={true}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={40}
                breakpoints={{
                  0: { slidesPerView: 1 },       // Default for all screen widths
                  700: { slidesPerView: 2 },       // Default for all screen widths
                  1330: { slidesPerView: 3 },    // Override when width is 1330px or more
                }}
                className="w-full h-auto custom-swiper"
              >


                {ytData.map((item, index) => (

                  <SwiperSlide key={index}>
                    <div
                      // key={index}
                      className="blog-slider bg-white  h-[300px] w-[300px] ml-20 mb-11  my-6 py-4 px-4 rounded-[1rem]"
                      style={{ boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.30) ", backgroundColor: "rgba(173, 216, 230, 0.15)" }}
                    >
                      <div className="mb-6">
                        <div className=" h-[60%] flex flex-col">
                          <iframe
                            src={`${item.videoId}`}

                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg mb-3"
                          ></iframe>
                        </div>

                        <div className="mx-auto w-full mt-2">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`${item.videoId}`}
                            className="text-black "
                          >
                            {item.title}
                          </a>
                        </div>
                      </div>
                    </div>

                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>


          {/* Tips Section */}
          <div className="bg-white w-[90%] mx-auto  py-5 px-2 my-8 rounded-2xl">

            <h1 className="text-2xl font-medium sm:text-start  px-8 mb-4 ">Ways to Achieve Financial Freedom </h1>

            <div className='flex flex-row  w-[100%]  items-center '>
              {/* Card 1 */}
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                autoHeight={true}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={40}
                breakpoints={{
                  0: { slidesPerView: 1 },       // Default for all screen widths
                  700: { slidesPerView: 2 },       // Default for all screen widths
                  1330: { slidesPerView: 3 },    // Override when width is 1330px or more
                }}
                className="w-full h-auto custom-swiper"
              >

                {tips.map((item, index) => (
                  <SwiperSlide key={index}>

                    <div className="blog-slider bg-white w-[320px] h-[460px] mb-12 mt-2 ml-16 pb-4 pt-4 px-4 rounded-[1rem]"
                      style={{ boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.30) ", backgroundColor: "rgba(173, 216, 230, 0.15)" }}>

                      <img src={item.image} className="w-full mb-4" alt="post-image" style={{ height: "350px", borderRadius: "10px" }} />

                      <p className="mt-2 mb-4">{item.title}</p>

                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
              {/* Whole tips section */}
            </div>

          </div>


        </div>
      </div>


    </>
  )
}