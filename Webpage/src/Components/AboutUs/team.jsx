import "./style.css";

export default function Team() {
    return(
        <>
            <div >
                <h1 className='text-center text-5xl m-20 '>The Minds Behind this Magic</h1>

                <div className="box mx-60 flex">

                    <div className="flex-4  justify-items-center p-5" >
                        <div className="profile justify-items-center p-5 rounded-lg">
                            <img src="/image/himanshu.png" alt="" className='w-76 h-76 rounded-lg'   style={{borderRadius: "50%"}}  ></img>
                        <h3 className='text-2xl pt-5'>Himanshu Kumar</h3>
                        <p>Software Engineer</p>

                        <div className="icons mt-5 flex ">
                            <img src="/image/linkedin-icon.png" alt="" className='w-6 mr-3' />
                            <img src="/image/github-icon.png" alt=""className='w-6 mr-3' />
                            <img src="/image/gmail-icon.png" alt="" className='w-8'/>
                        </div>
                        </div>
                    </div>

                    <div className='flex-2'></div>

                  <div className="flex-4  justify-items-center p-5">
                        <div className="profile justify-items-center p-5 rounded-lg">
                            <img src="/image/sudhanshu.png" alt="" className='w-76 h-76 rounded-lg'  style={{borderRadius: "50%"}}  />
                            <h3 className='text-2xl pt-5'>Sudhanshu Saini</h3>
                            <p>Software Engineer</p>

                            <div className="icons mt-5 flex ">
                                <img src="/image/linkedin-icon.png" alt="" className='w-6 mr-3' />
                                <img src="/image/github-icon.png" alt=""className='w-6 mr-3' />
                                <img src="/image/gmail-icon.png" alt="" className='w-8'/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}