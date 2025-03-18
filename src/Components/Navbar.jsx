import React from 'react'

function Navbar() {
  return (
    <header className='flex justify-between px-3 bg-gray-400 h-[70px] items-center'>
      <div className='text-lg font-bold'><span className='text-purple-600'>Alex's </span>Hair Studio</div>
      <ul className='menu flex justify-end items-center gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Navbar
