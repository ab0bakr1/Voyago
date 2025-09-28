import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='md:flex hidden'>
        <ul className='flex justify-between align-center lg:gap-10 gap-4 lg:text-lg md:text-md text-sm font-medium'>
            <li><Link to="/" className='active'>Home</Link></li>
            <li><Link to="/List">tour</Link></li>
            <li><Link to="/destination" href="#destination">destination</Link></li>
            <li><Link to="/activities" >activities</Link></li>
            <li><Link to="/pages">pages</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar