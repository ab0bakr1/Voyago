import React from 'react'

const Buttons = () => {
  const account = JSON.parse(localStorage.getItem('users'));

  const LogOut = () => {
    localStorage.removeItem('users');
    window.location.href = '/';
  }
  return (
    <div className="auth-buttons md:flex hidden justify-batween items-center gap-3 lg:text-lg md:text-sm text-sm font-medium">
        <form action="money">
            <select name="money" id="money" className='bg-transparent cursor-pointer'>
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
  )
}

export default Buttons