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

          <h1 className="text-3xl text-emerald-900 text-shadow-md font-medium text-start ml-16 my-6">Blogs</h1>

          {/* Post Section */}

          <div className=" h-[470px] border bg-white w-[85%] mx-auto  my-8 rounded-md">

            <h1 className="text-2xl font-medium text-start px-8 mb-4 pt-4">Posts</h1>


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

                    <div className="bg-white   h-[100%] w-[300px] mx-6 my-6 pb-4 pt-8 px-4 rounded-[1rem]" style={{ boxShadow: " rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 1px, rgba(0, 0, 0, 0.07) 0px 4px 2px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.0) 0px 0px 32px, rgba(0, 0, 0, 0.0) 0px 32px 12px " }}>

                      <div className="border w-[100%] h-[100%]  flex flex-col">
                        <iframe
                          src={`${item.url}`}
                          title={item.title}

                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>

                      <div className="mx-auto w-[100%] mt-2 ">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${item.url}`}
                          className="text-black "
                        >
                          {item.title}
                        </a>
                      </div>

                      <div className="text-end my-2 pb-2 pt-2">
                        <a className="text-center text-white bg-[#2D5359] rounded-md px-4 py-2" >VISIT &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                      </div>

                    </div>
                  </SwiperSlide>

                ))}
              </Swiper>

              {/* WHole posts section */}
            </div>

          </div>



          {/*  video Section */}

          <div className=" h-[470px] border bg-white w-[85%] mx-auto  my-8 rounded-md ">

            <h1 className="text-2xl font-medium text-start px-8 mb-4 pt-4">Videos</h1>
            
            <div className='flex flex-row h-[75%] w-[100%] items-center '>

              {/* Card 1 */}
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                autoHeight={true}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={40}
                slidesPerView={2}
                className="w-full h-auto"

              >

                {ytData.map((item, index) => (

                  <SwiperSlide key={index}>
                    <div
                      // key={index}
                      className="bg-white h-full w-[400px] mx-6 my-6 py-4 px-4 rounded-[1rem]"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 1px, rgba(0, 0, 0, 0.07) 0px 4px 2px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.0) 0px 0px 32px, rgba(0, 0, 0, 0.0) 0px 32px 12px",
                      }}
                    >
                      <div className="mb-6">
                        <div className="border w-full h-[55%] flex flex-col">
                          <iframe
                            src={`${item.videoId}`}
                            title={item.title}

                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
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
          <div className="border bg-white w-[85%] h-[470px] mx-auto my-8 px-4 py-2 rounded-md  overflow-y-auto">

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