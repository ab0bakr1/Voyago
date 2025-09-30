import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const ToHome = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // استرجاع البيانات من الlocal storage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            setSuccess('Login successful!');
            setError(''); // اعادة تعيين الحقول
            setEmail('');
            setPassword('');
            ToHome("/")
        } else {
            setError('Invalid email or password!');
            setSuccess(''); // اعادة تعيين الحقول
            setEmail('');
            setPassword('');
        }
    }
  return (
    <section className='Login w-full h-svh flex justify-center items-center relative'>
        <div className='w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5' >
            <h1 className='text-center text-3xl font-bold mb-5 uppercase text-orange-600'>Login</h1>
            <form className='flex flex-col justify-center items-center gap-5 w-full' action="">
                <label htmlFor="email">
                    <input type="email" placeholder='' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />   
                    <span>email</span> 
                </label>
                <label htmlFor="password">
                    <input type="password" placeholder='' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />    
                    <span>password</span>
                </label>
                {error && <p className="error text-red-500 text-xl capitalize">{error}</p>}
                <button type="submit" className='px-5 py-2 rounded-lg bg-orange-600 text-white font-bold uppercase' onClick={handleSubmit}>Login</button>
                {success && <p className="success text-green-500 text-xl capitalize">{success}</p>}
            </form>
        </div>
    </section>
  )
}

export default Login