"use client"
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
type Skill = {
  title: string;
  percent: string;
};

const skills: Skill[] = [
  { title: 'HTML', percent: '95' },
  { title: 'CSS', percent: '70' },
  { title: 'Tailwind CSS', percent: '90' },
  { title: 'JavaScript', percent: '70' },
  { title: 'Alpine JS', percent: '80' },
  { title: 'PHP', percent: '65' },
  { title: 'Laravel', percent: '75' }
];

function Sidebar() {
  const [currentSkill, setCurrentSkill] = useState<Skill>(skills[0]);
 const isSmallScreen = useMediaQuery({maxWidth : 770})
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (parseInt(currentSkill.percent) / 100) * circumference;
  return (
    <div className='bg-gray-200 h-[93vh] w-9/12 sm:w-5/12 md:w-3/12 absolute md:mt-16'>
      <ul className='ml-5 mt-5 leading-10 text-xl font-mono font-bold'>
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Contact us</li></a>
        <a href="#"><li>More</li></a>
      </ul>
      <main className="grid w-9/12 md:w-full  text-gray-100 place-content-center">
        <section className="p-3 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
          {/* <div className="grid grid-cols-2 gap-6">
            {skills.map(skill => (
            <button
              key={skill.title}
              className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700 ${
                currentSkill.title === skill.title ? 'font-bold ring-2 ring-gray-100' : ''
              }`}
              onClick={() => setCurrentSkill(skill)}
            >
              {skill.title}
            </button>
          ))}
          </div>
         */}
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
          
          (<div className="relative md:absolute md:-left-5 w-full mt-72 sm:mt-52 sm flex items-center justify-center ml-5">
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
            <span className="absolute text-5xl ml-8 -mt-8 md:text-3xl md:mt-4 md:mr-5 dark:text-white text-black">{`${currentSkill.percent}%`}</span>
          </div>)
          
          }

          
        </section>
      </main>

    </div>

  )
}

export default Sidebar
