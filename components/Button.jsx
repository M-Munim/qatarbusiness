import React from 'react'

const Button = ({ text, className }) => {
  return (
    <>
      {/* <button className='w-36 rounded-full h-10 bg-white text-theme capitalize font-semibold'>{text}</button> */}
      <button className={`${className} capitalize font-semibold rounded-full h-11`} type="submit">{text}</button>
    </>
  )
}

export default Button