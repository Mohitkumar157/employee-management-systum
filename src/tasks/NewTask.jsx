import React from 'react'

function NewTask({task}) {
  return (
    <div className="task bg-[linear-gradient(135deg,#374151,#1F2937)] py-9! px-6! text-start rounded-xl">
            <h2 className='text-xl'>{task}</h2>
            <h3 className='text-xl'>All task</h3>
        </div>
  )
}

export default NewTask