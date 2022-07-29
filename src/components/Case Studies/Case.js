import React from 'react';
import case1 from '../../images/7.png';
import case2 from '../../images/8.png';

const Case = () => {
    return (
        <div className='max-w-[940px] mx-auto'>
            <div className=' mt-40 lg:mx-0 md:mx-0 mx-12'>
                <div className='flex items-center justify-between mb-12'>
                    <h1 className=' text-5xl font-black font-sans text-white tracking-wider'>Case Studies <span className='text-indigo-500 text-4xl font-black'>+</span></h1>

                </div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-7 z-50'>
                    <div>
                        <img src={case1} alt="" className='w-screen h-72 rounded-md ' />
                    </div>
                    <div>
                        <img src={case2} alt="" className='w-screen h-72 rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;