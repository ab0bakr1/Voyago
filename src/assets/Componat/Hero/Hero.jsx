import React from 'react'
import "./Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFaceSmile, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <main>
        <div className="now">
            <h2>Life Is Adventure Make The Best Of It</h2>
            <div className="search md:flex hidden justify-between items-center text-left gap-3 bg-white rounded-full px-2 py-1">
                <div className="where flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationCrosshairs} />
                    <div className="">
                        <label htmlFor="">Where</label>
                        <input type="text" placeholder='Where you want to go?' />
                    </div>
                </div>
                <div className="when flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <div className="">
                        <label htmlFor="">When</label>
                        <div className="flex bg-white rounded-md">
                            <input type="date" className='w-24' placeholder='Start date' />
                            ~
                            <input type="date" className='w-24' placeholder='End date' />
                        </div>

                    </div>
                </div>
                <div className="type flex items-center gap-2">
                    <FontAwesomeIcon icon={faFaceSmile} />
                    <div className="">
                        <label htmlFor="">Tour Type</label>
                        <select type="text" placeholder='Type of travel'>
                            <option value="" disabled selected>Type of travel</option>
                            <option value="adventure">Adventure</option>
                            <option value="cultural">Cultural</option>
                            <option value="wildlife">Wildlife</option>
                            <option value="leisure">Leisure</option>
                            <option value="romantic">Romantic</option>
                            <option value="family">Family</option>
                        </select>
                    </div>
                </div>
                <button type="button">ok</button>
            </div>
        </div>
    </main>
  )
}

export default Hero