import React from 'react'

function DropDown() {
  return (
    <div className=''>
      <select className='border-2 border-stone-700 dark:border-cyan-200 dark:text- text-black rounded-md p-1' name="courses" id="courses">
        <option value="course catagories">--Courses--</option>
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
