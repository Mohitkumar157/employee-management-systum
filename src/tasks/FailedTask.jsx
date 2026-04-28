import React from 'react'

function FailedTask({task}) {
  return (
     <div className="task bg-[linear-gradient(135deg,#cf4646,#c32828)] py-9! px-6! text-start rounded-xl">
            <h2 className='text-xl'>{task}</h2>
            <h3 className='text-xl'>Failed Task</h3>
        </div>
  )
}

export default FailedTask