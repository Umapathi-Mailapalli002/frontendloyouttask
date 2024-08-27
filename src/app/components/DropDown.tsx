import React from 'react'

interface DropDownProps {
  onCategoryChange: (category: string) => void;
}
function DropDown({ onCategoryChange }:DropDownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };
  return (
    <div className=''>
      <select className='h-10 border border-stone-700 dark:border-cyan-500 dark:text-white dark:bg-slate-800 text-black rounded-md p-1' name="courses" id="courses" onChange={handleChange}>
        <option value="">--Courses--</option>
        <option value="Web Development">Web Development</option>
        <option value="App Development">App Development</option>
        <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Data Science">Data Science</option>
        <option value="Block Chain">Block Chain</option>
      </select>
    </div>
  )
}

export default DropDown
