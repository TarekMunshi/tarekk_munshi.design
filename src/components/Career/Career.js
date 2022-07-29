import React from 'react';
import { AiFillFileText } from "react-icons/ai";
const Career = () => {
    return (
        <div className='max-w-[940px] mx-auto'>
            <div className=' mt-32 lg:mx-0 md:mx-0 mx-12'>
                <div className='flex items-center justify-between mb-12'>
                    <h1 className=' text-5xl font-black font-sans text-white tracking-wider'>Career <span className='text-indigo-500 text-4xl font-black'>+</span></h1>
                    <button className='transition-all ease-in-out delay-150 duration-300 border-b-2 border-indigo-600 text-xs pr-4 pb-2  hover:bg-slate-900 '><span className='hover:ml-2 transition-all ease-in-out delay-150 duration-300 text-white tracking-wider flex items-center'>GET CV <AiFillFileText className="ml-10 text-2xl " /></span></button>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-y-10 gap-x-10'>
                    <div className='border-l-2 border-indigo-600 h-8'>
                        <div className='ml-4'>
                            <h5 className='text-white text-2xl font-black mb-0 tracking-wider '> DriveMe Fleets</h5>
                            <p className='text-white text-lg'>Ux Consult / Designer</p>
                            <p className='text-neutral-400 text-lg'>Mar 2019 - Present</p>
                        </div>
                    </div>
                    <div className='border-l-2 border-indigo-600 h-8'>
                        <div className='ml-4'>
                            <h5 className='text-white text-2xl font-black mb-0 tracking-wider '>Meaninfulgigs</h5>
                            <p className='text-white text-lg'>Creative Director</p>
                            <p className='text-neutral-400 text-lg'>Dec 2017 - Present</p>
                        </div>
                    </div>
                    <div className='border-l-2 border-indigo-600 h-8'>
                        <div className='ml-4'>
                            <h5 className='text-white text-2xl font-black mb-0 tracking-wider '> AlatbyWema</h5>
                            <p className='text-white text-lg'>Product Designer</p>
                            <p className='text-neutral-400 text-lg'>Feb 2017 - Mar 2018</p>
                        </div>
                    </div>
                    <div className='border-l-2 border-indigo-600 h-8 mb-40'>
                        <div className='ml-4'>
                            <h5 className='text-white text-2xl font-black mb-0 tracking-wider '>Mckinsey</h5>
                            <p className='text-white text-lg'>Ui Designer</p>
                            <p className='text-neutral-400 text-lg'>Aug 2016 - Feb 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;