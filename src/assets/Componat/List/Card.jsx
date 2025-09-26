import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item, index}) => {
  return (
    <div key={index} className="flex justify-between items-center gap-5 p-2 border-2 border-gray-200 rounded-lg">
        <img src={item.images[0]} alt={item.title} className='w-2/5 h-full object-cover rounded-lg' />
        <div className="info w-2/5 h-full flex flex-col justify-between md:gap-0 gap-3">
            <p>{item.city}</p>
            <h5 className='line-clamp-2'>{item.title}</h5>
            <h5>{item.rating} ({item.reviews})</h5>
            <p className='line-clamp-3'>{item.description}</p>
            <div className="flex justify-between items-center">
                <a href="#">Best Price Guarantee</a>
                <a href="#">Free Cancellation</a>
            </div>
        </div>
        <div className="price w-1/5 h-full flex flex-col justify-around items-center border-l-2 border-gray-200">
            <h6>{item.days} Days</h6>
            <h6>$ {item.price}</h6>
            <Link to={`/Details/${item.id}`}>
              <button className='md:py-3 md:px-4 py-1 px-2'>View Details</button>
            </Link>
        </div>
    </div>
  )
}

export default Card