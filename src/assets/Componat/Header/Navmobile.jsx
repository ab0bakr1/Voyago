import { AnimatePresence,motion } from 'framer-motion';
import React, { useState } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Navmobile = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='md:hidden'>
        <button
        className="text-2xl p-2 rounded-md text-orange-600"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <AnimatePresence>
        {open && (
            <motion.div initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -200, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute top-16 left-0 w-full bg-indigo-900 flex flex-col items-center gap-4 z-20 py-4 md:hidden">
                <nav className='flex'>
                  <ul className='flex flex-col justify-between align-center gap-6 text-lg font-medium text-white pb-5'>
                      <li><Link to="/" className='active'>Home</Link></li>
                      <li><Link to="/List">tour</Link></li>
                      <li><Link to="/destination" href="#destination">destination</Link></li>
                      <li><Link to="/activities" >activities</Link></li>
                      <li><Link to="/pages">pages</Link></li>
                      <li><Link to="/contact">contact</Link></li>
                  </ul>
                </nav>
                <div className="auth-buttons flex justify-center items-center gap-7 text-lg font-medium text-white">
                  <form action="money">
                      <select name="money" id="money" className='bg-transparent'>
                          <option value="usd">USD</option>
                          <option value="SAR">SAR</option>
                          <option value="OMR">OMR</option>
                          <option value="EUR">EUR</option>
                          <option value="EGP">EGP</option>
                      </select>
                  </form>
                  <button className="help-btn">help</button>
                  <button className="login-btn">Log in</button>
                  <button className="singup-btn">sing up</button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navmobile