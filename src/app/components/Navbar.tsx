"use client"
import React, { useState } from 'react'
import { HiBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Sidebar from './Sidebar';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleSideBar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <nav className='bg-cyan-200 h-16 flex justify-between'>
            <button onClick={handleSideBar} className='ml-3 h-16 flex items-center'>
            {!isOpen ? (<HiBars2 className='absolute size-10 text-black dark:text-white'/>) :
            (<RxCross2 className='absolute size-10 text-black dark:text-white'/>)}
            </button>
            {/* enabling dark mode and light mode button */}

            <button>
            <MdDarkMode className='aboslute mr-3 text-black size-8' />
            <CiLight className='aboslute hidden text-white size-8'/>
            </button>
        </nav>
        {isOpen && (<Sidebar/>)}
    </div>
  )
}

export default Navbar
