import React from 'react'
import "./Popular.css"
import { Link } from 'react-router-dom';

const Popular = () => {
    const tours = [
        {id: 1,big: "lg:col-span-1 lg:row-span-2", name: 'Cruises', img:"https://cdn.pixabay.com/photo/2024/09/21/15/07/eiffel-tower-9064240_1280.jpg" },
        {id: 2, name: 'Beach Tours', img:"https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg"},
        {id: 3,big: "lg:col-span-2 lg:row-span-1", name: 'City Tours', img:"https://cdn.pixabay.com/photo/2016/11/22/19/17/buildings-1850129_1280.jpg" },
        {id: 4, name: 'Museum Tour', img:"https://cdn.pixabay.com/photo/2017/04/07/06/34/historical-museum-2210325_1280.jpg" },
        {id: 5, name: 'Food', img:"https://cdn.pixabay.com/photo/2023/01/10/00/17/italy-7708551_1280.jpg" },
        {id: 6, name: 'Hiking', img:"https://cdn.pixabay.com/photo/2019/11/09/14/55/boats-4613735_1280.jpg" }
    ];
  return (
    <section className='popular mx-auto mt-20 lg:px-32 md:px-10 px-2'>
        <div className="flex justify-between items-center mb-5">
            <h2>Popular things to do</h2>
            <Link to="/List">see all</Link>
        </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px]">
                {tours.map((tour, id) => (
                    <div
                    key={id}
                    className={`relative rounded-lg overflow-hidden group ${tour.big}`}
                    >
                    <img
                        src={tour.img}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end">
                        <h3 className="text-white text-lg font-semibold p-4">
                        {tour.name}
                        </h3>
                    </div>
                    </div>
                ))}
            </div>
    </section>
  )
}

export default Popular