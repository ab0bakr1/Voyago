import React, { useState } from 'react'
import "./Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFaceSmile, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <main>
      <div className="now">
        <h2>Life Is Adventure Make The Best Of It</h2>
        <div className="search md:flex hidden justify-between items-center text-left gap-3 bg-white rounded-full px-2 py-1">
          <div className="where flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationCrosshairs} />
            <div>
              <label htmlFor="">Where</label>
              <input
                type="text"
                placeholder="Where you want to go?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="when flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarDays} />
            <div>
              <label htmlFor="">When</label>
              <div className="flex bg-white rounded-md">
                <input type="date" className="w-24" />
                ~
                <input type="date" className="w-24" />
              </div>
            </div>
          </div>

          <div className="type flex items-center gap-2">
            <FontAwesomeIcon icon={faFaceSmile} />
            <div>
              <label htmlFor="">Tour Type</label>
              <select>
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

          <button type="button" onClick={handleSearch}>
            ok
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
