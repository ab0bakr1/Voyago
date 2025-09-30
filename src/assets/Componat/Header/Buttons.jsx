import React from 'react'

const Buttons = () => {
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
        <button onClick={() => window.location.href = '/Login'} className="login-btn">Log in</button>
        <button onClick={() => window.location.href = '/SingUp'} className="singup-btn">sing up</button>
    </div>
  )
}

export default Buttons