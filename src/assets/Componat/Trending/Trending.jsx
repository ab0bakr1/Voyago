import React from 'react'
import "./Trending.css"
import { Link } from 'react-router-dom'

const Trending = () => {
  return (
    <section className='trending mx-auto py-20 lg:px-32 md:px-10 px-2'>
        <div className="flex justify-between items-center">
            <h2>Trending Destinations</h2>
            <Link to="/List">See All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 auto-rows-[400px]">
            <div className="group">
                <div className="h-3/4">
                    <img className="w-full h-full object-cover group-hover:scale-95 md:group-hover:scale-110 transition-transform duration-500" src="https://cdn.pixabay.com/photo/2018/05/16/08/50/bali-3405221_1280.jpg" alt="Bali" />
                </div>
                <div className="h-1/4 p-3 flex flex-col gap-5 text-center text-white">
                    <h6>Bali</h6>
                    <p>+100 Tours</p>
                </div>
            </div>
            <div className="group">
                <div className="h-3/4">
                    <img className="w-full h-full object-cover group-hover:scale-95 md:group-hover:scale-110 transition-transform duration-500" src="https://cdn.pixabay.com/photo/2018/08/03/15/02/channel-3582081_1280.jpg" alt="Paris" />
                </div>
                <div className="h-1/4 p-3 flex flex-col gap-5 text-center text-white">
                    <h6>Paris</h6>
                    <p>+100 Tours</p>
                </div>
            </div>  
            <div className="group">
                <div className="h-3/4">
                    <img className="w-full h-full object-cover group-hover:scale-95 md:group-hover:scale-110 transition-transform duration-500" src="https://cdn.pixabay.com/photo/2017/05/30/18/06/rome-2357704_1280.jpg" alt="Roma" />
                </div>
                <div className="h-1/4 p-3 flex flex-col gap-5 text-center text-white">
                    <h6>Roma</h6>
                    <p>+100 Tours</p>
                </div>
            </div> 
            <div className="group">
                <div className="h-3/4">
                    <img className="w-full h-full object-cover group-hover:scale-95 md:group-hover:scale-110 transition-transform duration-500" src="https://cdn.pixabay.com/photo/2021/08/10/04/50/dea-6534982_1280.jpg" alt="Phuket" />
                </div>
                <div className="h-1/4 p-3 flex flex-col gap-5 text-center text-white">
                    <h6>Phuket</h6>
                    <p>+100 Tours</p>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Trending