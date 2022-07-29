import React from 'react';
import { AiFillMail } from "react-icons/ai";
import printer from '../../images/printer.png';

const Footer = () => {
    return (
        <div className='lg:relative md:relative'>
            <div className='absolute top-40 z-0'>
                <img src={printer} alt="" className='w-96 opacity-50' />
            </div>
            <div className='max-w-[940px] mx-auto pb-8 absolute left-72'>
                <div className='mt-40 lg:mx-0 md:mx-0 mx-12'>
                    <div className='flex flex-column justify-center items-center mb-10'>
                        <h1 className='font-black text-sm tracking-wider text-sky-600 mb-4 '>MY SKILLSET</h1>
                        <h1 className='text-white text-5xl font-black text-center'>Lets work together.</h1>
                        <p className='text-neutral-400 text-lg font-extralight text-center mt-8'>If you'd like to talk about a project you want help with or need an advice about product design, just drop me a message at nathan@ojieame.design
                            I'm currently Available for any design systems projects, dashboard designs or landing pages gigs.</p>
                        <button className='transition-all ease-in-out delay-150 duration-300 mt-2 border-b-2 border-indigo-600 text-xs pr-4 pb-2 pt-2 hover:bg-slate-900'><span className='hover:ml-2 transition-all ease-in-out delay-150 duration-300 text-white tracking-wider flex'>WRITE ME AN EMAIL <AiFillMail className='text-lg ml-8' /></span></button>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1 className=' text-neutral-400 text-sm font-bold tracking-widest'>BUILT FROM SCRATCH BY ME :)</h1>
                        <p className=' text-white text-lg font-black'>Tarek Munshi</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;