import React from 'react';
import img from '../../images/man.jpg'

const Main = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center'>
            <div className=''>
                <h1 className='lg:absolute md:absolute top-56 text-8xl font-bold font-sans lg:z-0 md:z-0 text-zinc-900 hidden lg:inline-block md:inline-block'>Product <br /> Designer</h1>
                <div className='lg:relative md:relative lg:z-10 md:10'>
                    <h3 className='text-white font-extrabold text-3xl'>Hello, it's me</h3>
                    <h1 className='text-white text-8xl font-extrabold'>Ojieame<span className=' text-indigo-500'>.</span></h1>
                    <p className=' text-neutral-400 text-lg  font-extralight'>An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world.</p>
                    <button className='transition-all ease-in-out delay-150 duration-300 mt-2 border-b-2 border-indigo-600 text-xs pr-4 pb-2 pt-2 hover:bg-slate-900'><span className='hover:ml-2 transition-all ease-in-out delay-150 duration-300 text-white tracking-wider'>SCROLL FOR MORE</span></button>
                </div>
            </div>
            <div className=''>
                <img src={img} alt="" className='w-screen' />
            </div>
        </div>
    );
};

export default Main;