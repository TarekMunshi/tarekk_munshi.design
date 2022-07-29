import React from 'react';

const Skillset = () => {
    return (
        <div className='mt-20 mb-20 lg:mx-0 md:mx-0 mx-12'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                <div className='flex flex-column justify-center items-center lg:justify-start md:justify-start lg:items-start md:items-start mb-10'>
                    <h1 className='font-black text-sm tracking-wider text-sky-600 mb-4'>MY SKILLSET</h1>
                    <h1 className='text-white text-5xl font-black'>Graphic Design, Interface Design &
                        User Experience</h1>
                    <button className='transition-all ease-in-out delay-150 duration-300 mt-2 border-b-2 border-indigo-600 text-xs pr-4 pb-2 pt-2 hover:bg-slate-900'><span className='hover:ml-2 transition-all ease-in-out delay-150 duration-300 text-white tracking-wider'>MY PROCESS</span></button>
                </div>
                <div className=''>
                    <p className=' text-neutral-400 text-lg font-extralight '>I specialize in building complex web applications, leading front-end teams, digital product design and developing visual design systems. I enjoy creating effortless user experience and designing delightful digital products. The entire process of going from a concept to release and gathering user’s feedback on either client’s or my own products is what makes me wake up everyday!
                        I worked with numerous clients from all around the world from early startups to well-established companies. I always seek new opportunities for cooperation on projects around interesting dashboards, design systems or landing pages. Let’s create something awesome together.</p>
                </div>
            </div>
        </div>
    );
};

export default Skillset;