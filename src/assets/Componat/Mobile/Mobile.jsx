import React from 'react'
import "./Mobile.css"
import bgImage from '../../IMG/mobile.png';
import mobile from '../../IMG/mobile2.png';
const Mobile = () => {
  return (
    <section className="mobile-section mx-auto py-10 lg:px-32 md:px-10 px-2 text-white" style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="md:w-1/2 w-full">
            <h3 className='text-4xl font-bold uppercase'>Get 5% off your 1st <br /> app booking</h3>
            <p className='text-lg md:w-full w-3/4'>Booking's better on the app. Use promo code <br /> "TourBooking" to save!</p>
            <form className='flex justify-start items-center gap-5 mt-10' action="">
                <input className='px-5 py-2 rounded-lg text-black' type="text" placeholder='Enter your email' />
                <button className='px-5 py-2 rounded-lg bg-white text-black font-bold uppercase' type="submit">send</button>
            </form>
        </div>
        <div className="w-1/2 md:block hidden">
            <img src={mobile} alt="" />
        </div>
    </section>
  )
}

export default Mobile