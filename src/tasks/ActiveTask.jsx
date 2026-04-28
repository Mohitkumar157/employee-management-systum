import React from 'react'

function ActiveTask({task}) {
  return (
    <div className="task bg-[linear-gradient(135deg,#2678ff,#244ea8)] py-9! px-6! text-start rounded-xl">
            <h2 className='text-xl'>{task}</h2>
            <h3 className='text-xl'>Active Task</h3>
        </div>
  )
}

export default ActiveTask