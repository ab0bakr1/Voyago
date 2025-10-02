import React from 'react'
import "./Header.css"
import Navbar from './Navbar'
import Buttons from './Buttons'
import Navmobile from './Navmobile'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-2 lg:px-32 md:px-10 px-2 fixed top-0 left-0 right-0 z-50'>
        <div className="flex justify-center items-center lg:gap-10 gap-5">
            <div className="logo">
                <h1>Voyago</h1>
            </div>
            <Navbar />
        </div>
        
        <Buttons />
        <Navmobile />
        
    </header>
  )
}

export default Header