import React from 'react'
import "./Articles.css"
const Articles = () => {
  return (
    <section className="articles mx-auto my-20 lg:px-32 md:px-10 px-2">
        <div className="flex justify-between items-center mb-5">
            <h2>Travel Articles</h2>
            <a href="#">see all</a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[350px]">
            <div className="article">
                <img className='w-full h-2/3 rounded-xl' src="https://cdn.pixabay.com/photo/2020/04/24/13/18/africa-5086835_1280.jpg" alt="" />
                <div className="h-1/3">
                    <div className="flex justify-between items-center my-5">
                        <p>April 06 2023</p>
                        <p>By Ali Tufan</p>
                    </div>
                    <h4>Kenya vs Tanzania Safari: The Better African Safari Experience</h4>
                </div>
            </div>
            <div className="article">
                <img className='w-full h-2/3 rounded-xl' src="https://cdn.pixabay.com/photo/2020/09/13/11/31/man-5568023_1280.jpg" alt="" />
                <div className="h-1/3">
                    <div className="flex justify-between items-center my-5">
                        <p>April 07 2023</p>
                        <p>By Emily Johnson</p>
                    </div>
                    <h4>Exploring the Serengeti: A Wildlife Adventure</h4>
                </div>
            </div>
            <div className="article">
                <img className='w-full h-2/3 rounded-xl' src="https://cdn.pixabay.com/photo/2017/06/28/19/53/sunset-2451989_1280.jpg" alt="" />
                <div className="h-1/3">
                    <div className="flex justify-between items-center my-5">
                        <p>April 08 2023</p>
                        <p>By Maxwell Rhodes</p>
                    </div>
                    <h4>Into the Wild: An Unforgettable Safari Journey</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Articles