import React from 'react'

interface cardsPropTypes  {
name: string,
description: string,
cta: string,
tech: string
}

function FeatureCard({name, description, cta, tech}:cardsPropTypes) {
  return (
    <div className='flex justify-center mt-4'>
      <div className='card-container w-11/12 md:w-11/12 md:ml-8 bg-orange-300 sm:w-80 h-56 rounded-3xl p-3'>
            <h1 className='font-bold text-2xl font-roboto text-center h-14'>
                {name}
            </h1>
            <p className='text-stone-500 h-10 my-2'>
{description}
            </p>
            <span>&lt;/&gt;</span><span>{tech}</span>
            <div className='flex justify-center mt-2'>
            <button className='bg-red-400 shadow-[#4b474783] shadow-xl  text-white font-mono font-bold py-2 w-56 rounded-2xl'><a href={cta}>Click Here</a></button>

            </div>
      </div>
    </div>
  )
}

export default FeatureCard
