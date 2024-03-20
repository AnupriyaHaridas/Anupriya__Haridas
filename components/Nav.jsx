'use client';
import Link from 'next/link';
import Image from 'next/image';
import menu from '/public/icons/menu.svg';
import check from '/public/icons/check.svg'
import { useState } from 'react';
const Nav = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
  
    return (
        <nav className='mb-4 pt-3'>
        {/*Desktop navigation*/}
        <div className='hidden h-16 min-h-16 sm:flex m-6'>
            <div className='flex w-full'>  
                <a href='/' className='relative flex'>
                    <div className='h-6 w-6 rounded-full relative bg-orange-500'></div>
                    <div className='ml-3 text-2xl'>Anupriya Haridas</div>
                </a>
            </div>
            <div className='w-full flex fixed pr-12 justify-end gap-3 md:gap-4'>
                <a href='/'
                className='border-r border-black pr-3'>
                    Home
                </a>
                <a href='/resume'
                className='border-r border-black pr-3'>
                    Resume
                </a>
                {/* <a href='/projects'
                className='border-r border-black pr-3'>
                    Projects
                </a> */}
                <a href='/contact'
                className='pr-3'>
                    Contact
                </a>
            </div>
        </div>
        {/*Mobile navigation*/}
        <div className='flex sm:hidden m-6 relative'>
            <div className='flex'>
                <svg onClick={() => setToggleDropdown((prev) => !prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {toggleDropdown && (
                    <div className='dropdown absolute flex w-28 flex-col bg-slate-50 rounded-md gap-2'>
                        <a href='/'
                        className='w-full p-3 hover:bg-slate-300'
                        onClick={()=>setToggleDropdown(false)}>
                            Home
                        </a>
                        <a href='/resume'
                        className='w-full p-3 hover:bg-slate-300'
                        onClick={() => setToggleDropdown
                        (false)}>
                            Resume
                        </a>
                        <a href='/contact'
                        className='w-full p-3 hover:bg-slate-300'
                        onClick={() => setToggleDropdown
                        (false)}>
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Nav