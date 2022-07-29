import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import "swiper/css/bundle";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import slide1 from '../../images/1.jpg';
import slide2 from '../../images/2.jpg';
import slide3 from '../../images/3.jpg';
import slide4 from '../../images/4.jpg';
import slide5 from '../../images/5.png';
import slide6 from '../../images/6.jpg';
import { AiFillDribbbleCircle } from "react-icons/ai";

const Project = () => {
    return (
        <div className="mx-12 lg:relative md:relative static">
            <h1 className='lg:absolute md:absolute static left-60 top-20 text-5xl font-black font-sans text-white lg:ml-0 md:ml-0 ml-12'>Recent <br /> Projects <span className='text-indigo-500 text-4xl font-black'>+</span></h1>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='max-w-[940px] mx-auto'>
                        <div className='mt-20 mb-20 lg:mx-0 md:mx-0 mx-12 '>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-6'>
                                <div className="">
                                    <img src={slide1} alt="" className="rounded-md w-screen" />
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    <img src={slide2} alt="" className="rounded-md w-screen" />
                                    <img src={slide3} alt="" className="rounded-md w-screen" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='max-w-[940px] mx-auto'>
                        <div className='mt-20 mb-20 lg:mx-0 md:mx-0 mx-12 '>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-6'>
                                <div className="">
                                    <img src={slide4} alt="" className="rounded-md w-screen" />
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    <img src={slide5} alt="" className="rounded-md w-screen " />
                                    <img src={slide6} alt="" className="rounded-md w-screen " />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper >
            <div className="lg:absolute md:absolute static left-60 bottom-20 lg:ml-0 md:ml-0 ml-12">
                <button className='transition-all ease-in-out delay-150 duration-300 mt-2 border-b-2 border-indigo-600 text-xs pr-4 pb-2 pt-2 hover:bg-slate-900 '><span className='hover:ml-2 transition-all ease-in-out delay-150 duration-300 text-white tracking-wider flex items-center'>MY DRIBBLE <AiFillDribbbleCircle className="ml-10 text-2xl " /></span></button>
            </div>
        </div>
    );
};

export default Project;
