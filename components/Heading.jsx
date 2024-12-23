import React from 'react'

const Heading = ({ text }) => {
  return (
    <div className='flex items-center justify-center h-20 mt-10'>
      <h2 className="text-2xl text-center font-semibold">{text}</h2>
    </div>
  )
}

export default Heading