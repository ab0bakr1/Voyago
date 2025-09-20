import React from 'react'
import DataJson from '../../Data.json'
import "./Featured.css"

const Featured = () => {
    const FeaturedMenu = DataJson.slice(0,8);
  return (
    <section className='featured mx-auto py-20 lg:px-32 md:px-10 px-2'>
        <div className="flex justify-between items-center mb-5">
            <h2>Featured Trips</h2>
            <a href="#">see all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 auto-rows-[400px]">
            {FeaturedMenu.map((item)=>(
                <div className="singleTour rounded-lg shadow-lg" key={item.id}>
                    <div className="h-1/2">
                        <img className="w-full h-full object-cover rounded-t-lg" src={item.images[0]} alt={item.city} />
                    </div>
                    <div className="h-1/2 p-3 flex flex-col justify-between text-left bg-white rounded-b-lg">
                        <h6>{item.city}</h6>
                        <p>{item.title}</p>
                        <span className="text-center">{item.rating}({item.reviews})</span>
                        <hr />
                        <div className="flex justify-between items-center">
                            <p>{item.days} Days</p>
                            <p>From <b>${item.price}</b></p>
                        </div>
                    </div>
                </div>    
            ))}
        </div>
    </section>
  )
}

export default Featured