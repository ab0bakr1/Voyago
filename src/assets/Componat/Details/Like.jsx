import React from 'react'
import Data from '../../Data.json'
import { Link } from 'react-router-dom'

const Like = () => {
  return (
    <div className='mt-5'>
        <h3>You might also like...</h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 auto-rows-[400px]">
            {Data.slice(10,14).map((item) => (
                <Link to={`/Details/${item.id}`} key={item.id} className="border rounded-lg overflow-hidden">
                    <img src={item.images[0]} alt={item.title} className="w-full h-1/2 object-cover"/>
                    <div className="px-4 py-3 h-1/2 flex flex-col justify-between">
                        <p className="text-sm text-gray-600 mb-2">{item.city}</p>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <div className="flex justify-center items-center">
                            <span className="text-yellow-500 mr-2">⭐ {item.rating}</span>
                            <span className="text-gray-600">({item.reviews})</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">{item.days} days</p>
                            <p className="text-sm text-gray-800 font-semibold">from ${item.price}</p>
                        </div>
                    </div>
                </Link>
                ))}
        </div>
    </div>
  )
}

export default Like