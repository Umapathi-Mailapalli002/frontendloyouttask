"use client"
import React, { useState, useEffect } from 'react'
import { HiBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Sidebar from './Sidebar';
import { useMediaQuery } from 'react-responsive';
import { useBodyScrollLock } from '../../../hooks/index';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLocked, toggle] = useBodyScrollLock()
    const handleSideBar = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
      if (isOpen) {
        // Lock body scroll when sidebar is open
        if (!isLocked) {
          toggle();
        }
      } else {
        // Unlock body scroll when sidebar is closed
        if (isLocked) {
          toggle();
        }
      }
    }, [isOpen, isLocked, toggle]);
  
    const isSmallScreen = useMediaQuery({maxWidth : 770})
  return (
    <div>
        <nav className='bg-cyan-200 h-16 flex justify-between'>
           {isSmallScreen ? ( <button onClick={handleSideBar} className='ml-3 sm:ml-5 h-16 flex items-center'>
            {!isOpen ? (<HiBars2 className='absolute size-10 text-black dark:text-white'/>) :
            (<RxCross2 className='absolute size-10 text-black dark:text-white'/>)}
            </button>) : (<Sidebar/>)}
            {/* enabling dark mode and light mode button */}

            <button>
            <MdDarkMode className='aboslute mr-3 sm:mr-8 text-black size-8' />
            <CiLight className='aboslute hidden text-white size-8'/>
            </button>
        </nav>
        {(isOpen && isLocked) && (<Sidebar/>)}
    </div>
  )
}

export default Navbar
