import React from 'react'

const Navbar = () => {
  return (
    <nav className='md:flex hidden'>
        <ul className='flex justify-between align-center lg:gap-10 gap-4 lg:text-lg md:text-md text-sm font-medium'>
            <li><a className='active' href="#home">Home</a></li>
            <li><a href="#tour">tour</a></li>
            <li><a href="#destination">destination</a></li>
            <li><a href="#activities">activities</a></li>
            <li><a href="#pages">pages</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar