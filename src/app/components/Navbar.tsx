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

  const [darkTheme, setDarkTheme] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);

	useEffect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkTheme]);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
  }
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
        <div className='bg-cyan-200 dark:bg-slate-700 h-16 flex justify-between md:fixed md:w-full md:top-0 lg:fixed lg:top-0 lg:w-full'>
           {isSmallScreen ? ( <button onClick={handleSideBar} className='ml-3 sm:ml-5 h-16 flex items-center'>
            {!isOpen ? (<HiBars2 className='absolute size-10 text-black dark:text-white'/>) :
            (<RxCross2 className='absolute size-10 text-black dark:text-white'/>)}
            </button>) : (<Sidebar />)}
            {/* enabling dark mode and light mode button */}

            <button onClick={handleChangeTheme} className='lg:absolute md:absolute md:right-0 md:top-3 lg:right-0 lg:top-3'>
            {!darkTheme ? (<MdDarkMode className='aboslute mr-3 sm:mr-8 text-black size-8' />) :
            (<CiLight className='aboslute mr-3 text-white sm:mr-8 size-8'/>)}
            </button>
        </div>
        {(isOpen && isLocked) && (<Sidebar/>)}
    </div>
  )
}

export default Navbar
