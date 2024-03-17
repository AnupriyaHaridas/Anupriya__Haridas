'use client';
import Link from 'next/link';
import Image from 'next/image';
import menu from '/public/icons/menu.svg';
import { useState } from 'react';
import image from "/public/assets/author.png";
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
        <div className='flex sm:hidden relative'>
            <div className='flex'>
                <Image 
                    src={image}
                    width={37} 
                    height={37}
                    onClick={() => setToggleDropdown((prev) => !prev)} 
                    alt='' 
                    className='w-auto h-auto'/>
                    {toggleDropdown && (
                        <div className='dropdown'>
                            <a href='/'
                            className='dropdown_link'
                            onClick={()=>setToggleDropdown(false)}>
                                Home
                            </a>
                            <a href='/resume'
                            className='dropdown_link'
                            onClick={() => setToggleDropdown
                            (false)}>
                                Resume
                            </a>
                            <a href='/contact'
                            className='dropdown_link'
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