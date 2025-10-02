import { AnimatePresence,motion } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navmobile = () => {
    const [open, setOpen] = useState(false);
    const account = JSON.parse(localStorage.getItem('users'));

  const LogOut = () => {
    localStorage.removeItem('users');
    window.location.href = '/';
  }
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
            <motion.div initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -200, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute top-16 left-0 w-full bg-indigo-900 flex flex-col items-center gap-4 z-50 py-4 md:hidden">
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
                  {account ? 
                  <div className="flex justify-center items-center gap-3">
                    <button onClick={() => window.location.href = '/Account'} className="login-btn">{account[0].name.length > 10 ? account[0].name.substring(0, 10) + "..." : account[0].name}</button>
                    <button onClick={LogOut} className="logout-btn border-2 border-orange-400 rounded-2xl px-3 hover:text-red-600">Log Out</button> 
                  </div>
                  : 
                  <div className="flex justify-center items-center gap-3">
                    <button onClick={() => window.location.href = '/Login'} className="login-btn">Log in</button>
                    <button onClick={() => window.location.href = '/Singup'} className="singup-btn border-2 border-orange-400 rounded-2xl px-3">sing up</button>
                  </div>
                  }
                </div>
            </motion.div>
        )}
      </AnimatePresence>
      <div className={open ? "overlay fixed top-16 left-0 right-0 bottom-0 bg-black opacity-50 z-40" : ""} onClick={() => setOpen(false)}></div>
    </div>
  )
}

export default Navmobile