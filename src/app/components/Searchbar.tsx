import React from 'react'

interface SearchbarProps {
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Searchbar({value, change}:SearchbarProps) {
  return (
    <div>
      <input className='h-10 p-3 w-full sm:w-64  rounded-xl border-stone-300 border dark:border-cyan-500 dark:text-white dark:bg-slate-800' type="text" placeholder='enter the course' value={value} onChange={change}/>
    </div>
  )
}

export default Searchbar
