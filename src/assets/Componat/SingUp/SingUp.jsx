import React, { useState } from 'react'
import './SingUp.css'
import { useNavigate } from 'react-router-dom'
const SingUp = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const ToLogin = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // ارسال البيانات للlocal storage
        const user = { name, email, password };

        // استرجاع البيانات من الlocal storage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        
        if (!name || !email || !password || !Cpassword) {
            setError('All fields are required!');
            setSuccess('');
            return;
        }
        else if (password !== Cpassword) {
            setError('Passwords do not match!');
            setSuccess('');
            return;
        }
        else if (users.find((u) => u.email === email)) {
            setError('Email already exists!');
            setSuccess('');
            return;
        }
        else {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            setSuccess('Sing Up successful!');
            // اعادة تعيين الحقول
            setName('');
            setEmail('');
            setPassword('');
            setCPassword('');
            setError('');
        }
    }
  return (
    <section className='SingUp w-full h-svh flex justify-center items-center relative'>
        <div className='w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5' >
            <h1 className='text-center text-3xl font-bold mb-5 uppercase text-orange-600'>Sing Up</h1>
            <form className='flex flex-col justify-center items-center gap-5 w-full' action="">
                <label htmlFor="name">
                    <input type="text" placeholder='' id='name' value={name} onChange={(e) => setName(e.target.value)} required />    
                    <span>name</span>
                </label>
                <label htmlFor="email">
                    <input type="email" placeholder='' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />   
                    <span>email</span> 
                </label>
                <label htmlFor="password">
                    <input type="password" placeholder='' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />    
                    <span>password</span>
                </label>
                <label htmlFor="confirm password">
                    <input type="password" placeholder='' id='confirm password' value={Cpassword} onChange={(e) => setCPassword(e.target.value)} required />  
                    <span>confirm password</span>  
                </label>

                {error && <p className="error text-red-500 text-xl capitalize">{error}</p>}
                <button type="submit" className='px-5 py-2 rounded-lg bg-orange-600 text-white font-bold uppercase' onClick={handleSubmit}>Sing Up</button>
                {success && <p className="success text-green-500 text-xl capitalize">{success}</p>}
                <a className='text-lg text-blue-400 underline cursor-pointer' onClick={ToLogin("/Login")}>I have account</a>
            </form>
        </div>
    </section>
  )
}

export default SingUp