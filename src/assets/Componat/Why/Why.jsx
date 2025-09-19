import { faBook, faGem, faLandmarkDome, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Why.css'

const Why = () => {
  return (
    <section className='why mx-auto my-20 lg:px-32 md:px-10 px-2'>
        <h2>Why choose Tourz</h2>
        <div className="flex justify-between items-center lg:gap-10 md:gap-5 gap-3 md:flex-nowrap flex-wrap">
            <div className="md:text-left text-center md:w-1/4 w-full">
                <FontAwesomeIcon icon={faBook} />
                <h5>Ultimate flexibility</h5>
                <p>You're in control, with free cancellation and payment options to satisfy any plan or budget.</p>
            </div>
            <div className="md:text-left text-center md:w-1/4 w-full">
                <FontAwesomeIcon icon={faLandmarkDome} />
                <h5>Memorable experiences</h5>
                <p>Browse and book tours and activities so incredible, you'll want to tell your friends.</p>
            </div>
            <div className="md:text-left text-center md:w-1/4 w-full">
                <FontAwesomeIcon icon={faGem} />
                <h5>Quality at our core</h5>
                <p>High-quality standards. Millions of reviews. A tourz company.</p>
            </div>
            <div className="md:text-left  text-center md:w-1/4 w-full">
                <FontAwesomeIcon icon={faStar} />
                <h5>Award-winning support</h5>
                <p>New price? New plan? No problem. We're here to help, 24/7.</p>
            </div>
        </div>
    </section>
  )
}

export default Why