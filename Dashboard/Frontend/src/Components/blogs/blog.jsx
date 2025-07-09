import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Article, post, ytData } from "./blogData.js"

export default function Blogs() {

  return (
    <>
      {/* Main Container */}
      <div className='flex flex-row '>


        {/* BLogs Container */}
        <div className="bg-[#B8D7DE8C] rounded-md mt-4 ml-64  h-full w-[60vw]  grow">
          <h1 className="text-3xl text-emerald-900 text-shadow-md font-bold text-start ml-16 my-6">Blogs</h1>


          {/* Post Section */}
          <div className="bg-white w-[90%] mx-auto  py-5 px-2 my-8 rounded-2xl">

            <h1 className="text-2xl font-medium text-start px-8 mb-4 ">Posts</h1>

            <div className='flex flex-row h-[75%] w-[100%]  items-center '>
              {/* Card 1 */}
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                autoHeight={true}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={40}
                slidesPerView={3}
                className="w-full h-auto custom-swiper"
              >

                {post.map((item, index) => (
                  <SwiperSlide key={index}>

                    <div className="bg-white w-[320px] mb-11 mt-2 ml-16 pb-4 pt-8 px-4 rounded-[1rem]" style={{ boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.30) " }}>
                      <img src={item.image} alt="post-image" style={{ height: "190px", borderRadius: "10px" }} />

                      <p className="mt-2 mb-4">{item.title}</p>

                      <div className="text-end my-2 pb-2 pt-2">
                        <a className="text-center text-white bg-[#2D5359] rounded-md px-4 py-2" href={item.url} target="_blank">VISIT &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
              {/* WHole posts section */}
            </div>

          </div>



          {/*  video Section */}
          <div className="bg-white w-[90%] mx-auto  py-5 px-2 my-8 rounded-2xl">
            <h1 className="text-2xl font-medium text-start px-8 mb-4 ">Videos</h1>

            <div className='flex flex-row h-[75%] w-[100%]  items-center '>

              {/* Card 1 */}
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                autoHeight={true}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={40}
                slidesPerView={3}
                className="w-full h-auto custom-swiper"
              >


                {ytData.map((item, index) => (

                  <SwiperSlide key={index}>
                    <div
                      // key={index}
                      className="bg-white  h-[280px] w-[300px] ml-20 mb-9  my-6 py-4 px-4 rounded-[1rem]"
                      style={{ boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.30) " }}
                    >
                      <div className="mb-6">
                        <div className=" h-[55%] flex flex-col">
                          <iframe
                            src={`${item.videoId}`}

                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
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


          {/* Article Section */}
          <div className="bg-white w-[85%] h-[470px] mx-auto my-8 px-4 py-2 rounded-2xl overflow-y-auto">

            <h1 className='text-2xl  font-medium text-start px-8 mb-4 pt-4 '>Article</h1>

            {/* Cards Container — no overflow, let the page scroll */}
            <div className="flex flex-col h-[75%] w-[100%] items-center  px-2 space-y-4 ">

              {/* CARD 1 */}
              {Article.map((item, index) => (

                <div key={index} className="flex flex-row border  w-full border h-[100%] rounded-md p-2">

                  <div className="border h-full w-[30%]">
                    <iframe
                      src={`${item.url}`}
                      title={item.title}

                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>

                  <div className="  text-start px-4 w-[60%]">
                    <a href="">{item.title}
                    </a>
                  </div>

                </div>
              ))}
            </div>


          </div>


          {/*whole blogs part*/}
        </div>
      </div>


    </>
  )
}