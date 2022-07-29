import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Main from '../Main/Main';
import Skillset from '../Skillset/Skillset';
import Process from '../Process/Process';
import Project from '../Projects/Project';

const Header = () => {
    return (
        <div className='lg:px-0 pl-1'>
            <div className='h-20'>
                <div className='w-full fixed top-0 pt-14 pb-2 bg-gradient-to-b from-black via-black z-0 '>

                </div>
                <div className='inline-flex lg:mx-72 mt-4 py-2 fixed top-0 z-50'>
                    <img src={logo} alt="" className='w-12 z-50' />
                </div>
            </div>
            <div className='max-w-[940px] mx-auto '>
                <Main></Main>
                <Skillset></Skillset>
                <Process></Process>
            </div>
        </div>
    );
};

export default Header;