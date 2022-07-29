import React from 'react';
import scope from '../../images/scope.png'

const Process = () => {
    return (
        <div className=' mt-32 mb-20 lg:mx-0 md:mx-0 mx-12'>
            <h1 className='mb-12 text-5xl font-bold font-sans text-white tracking-wider'>Process <span className='text-indigo-500 text-4xl'>+</span></h1>
            <div className='absolute right-0'>
                <img src={scope} alt="" className='w-96 opacity-50' />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-y-10 gap-x-10'>
                <div className='relative'>
                    <h1 className='absolute lg:text-8xl md:text-8xl text-7xl font-bold font-sans text-zinc-900 -left-12 -top-8'>01</h1>
                    <div className='relative'>
                        <h3 className='text-white font-extrabold lg:text-3xl md:text-3xl text-2xl'>Pre-Process</h3>
                        <p className='text-white font-extralight lg:text-lg md:text-lg text-sm mt-4 leading-loose'>
                            Collect Informations <br />
                            Personas <br />
                            SetUp Goals <br />
                            Project Folder + Moodboard <br />
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <h1 className='absolute  lg:text-8xl md:text-8xl text-7xl font-bold font-sans  text-zinc-900 -left-12 -top-8'>02</h1>
                    <div className='relative  '>
                        <h3 className='text-white font-extrabold lg:text-3xl md:text-3xl text-2xl'>Low Fidelity</h3>
                        <p className='text-white font-extralight lg:text-lg md:text-lg text-sm mt-4 leading-loose'>
                            Whiteboard <br />
                            Maps Screen Info <br />
                            Possible States <br />
                            First Diagram <br />
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <h1 className='absolute  lg:text-8xl md:text-8xl text-7xl font-bold font-sans  text-zinc-900 -left-12 -top-8'>03</h1>
                    <div className='relative '>
                        <h3 className='text-white font-extrabold lg:text-3xl md:text-3xl text-2xl'>Work/ Design</h3>
                        <p className='text-white font-extralight lg:text-lg md:text-lg text-sm mt-4 leading-loose'>
                            Moodboard <br />
                            First Diagram <br />
                            Write your copy <br />
                            Intern Test <br />
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <h1 className='absolute  lg:text-8xl md:text-8xl text-7xl font-bold font-sans  text-zinc-900 -left-12 -top-8'>04</h1>
                    <div className='relative '>
                        <h3 className='text-white font-extrabold lg:text-3xl md:text-3xl text-2xl'>Assets & Delivery</h3>
                        <p className='text-white font-extralight lg:text-lg md:text-lg text-sm mt-4 leading-loose'>
                            Specifications <br />
                            Diagram <br />
                            Final Prototype <br />
                            Video x Notes <br />
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <h1 className='absolute lg:text-8xl md:text-8xl text-7xl font-bold font-sans  text-zinc-900 -left-12 -top-8'>05</h1>
                    <div className='relative'>
                        <h3 className='text-white font-extrabold lg:text-3xl md:text-3xl text-2xl'>Final & Test</h3>
                        <p className='text-white font-extralight lg:text-lg md:text-lg text-sm mt-4 leading-loose'>
                            Inspectlet x hotjar <br />
                            Mixpanel <br />
                            Google Analytics <br />
                            Intercom <br />
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <h1 className='absolute  lg:text-8xl md:text-8xl text-7xl font-bold font-sans  text-zinc-900 -left-12 -top-8'>06</h1>
                    <div className='relative'>
                        <h3 className='text-white font-extrabold lg:text-3xl md:text-3xl text-2xl'>After Design</h3>
                        <p className='text-white font-extralight lg:text-lg md:text-lg text-sm mt-4 leading-loose'>
                            Goals <br />
                            Workspace <br />
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Process;