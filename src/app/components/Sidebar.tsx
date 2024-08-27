"use client"
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
interface Skill{
  title: string;
  percent: string;
  currentSkill: number;
};



function Sidebar() {
 const isSmallScreen = useMediaQuery({maxWidth : 770})
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (parseInt(currentSkill.percent) / 100) * circumference;
  return (
    <div className='bg-gray-200 dark:bg-cyan-950 h-[93vh] w-9/12 sm:w-5/12 md:w-3/12 lg:w-2/12 absolute md:mt-16 md:fixed lg:fixed'>
      <ul className='mt-5 leading-10 text-xl text-black dark:text-cyan-200 font-mono font-bold '>
        <a href="#"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-2xl'>Home</li></a>
        <a href="#"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-2xl'>About</li></a>
        <a href="#"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-2xl'>Contact us</li></a>
        <a href="#"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-2xl'>More</li></a>
      </ul>
      <main className="grid w-9/12 md:w-full text-gray-100 place-content-center">
        <section className="p-3 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
          {isSmallScreen ? (<div className="relative w-full mt-64 sm:mt-52 sm flex items-center justify-center ml-5">
            <svg className="transform -rotate-90 w-64 h-64">
              <circle
                cx="145"
                cy="145"
                r="100"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                className="text-gray-700"
              />
              <circle
                cx="145"
                cy="145"
                r="100"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="text-blue-500"
              />
            </svg>
            <span className="absolute text-5xl ml-8 -mt-8 dark:text-white text-black">{`${currentSkill.percent}%`}</span>
          </div>) : 
          
          (<div className="relative md:absolute md:-left-5 md:bottom-0 w-full mt-72 lg:mt-44 lg:ml-12 sm:mt-52 sm flex items-center justify-center ml-5">
            <svg className="transform -rotate-90 size-72">
              <circle
                cx="90"
                cy="145"
                r="70"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                className="text-gray-700"
              />
              <circle
               cx="90"
               cy="145"
               r="70"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="text-blue-500"
              />
            </svg>
            <span className="absolute lg:absolute lg:bottom-24 text-5xl ml-8 -mt-8 md:text-3xl md:mt-4 md:mr-5 
             dark:text-white text-black">{`${currentSkill.percent}%`}</span>
          </div>)
          
          }

          
        </section>
      </main>

    </div>

  )
}

export default Sidebar
