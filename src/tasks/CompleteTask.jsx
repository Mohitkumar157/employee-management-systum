import React from 'react'

function CompleteTask({task}) {
  return (
    <div className="task bg-[linear-gradient(135deg,#32e373,#217942)] py-9! px-6! text-start rounded-xl">
            <h2 className='text-xl'>{task}</h2>
            <h3 className='text-xl'>Completed task</h3>
    </div>
  )
}

export default CompleteTask