import React, { useState, useEffect } from "react";
import ReviewsJson from "./ReviewsJson.json";
import { AnimatePresence, motion } from "framer-motion";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import user1 from "../../IMG/user1.png";
import user2 from "../../IMG/user2.png";
import user3 from "../../IMG/user3.png";
import user4 from "../../IMG/user4.png";

const Images = {
  user1,
  user2,
  user3,
  user4
}
const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ReviewsJson.length);
    }, 5000);

    return () => clearInterval(interval); // تنظيف التايمر
  }, []);

  return (
    <section className="reviews mx-auto py-20 lg:px-32 md:px-10 px-4 text-center overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
      <div className="text-orange-500 text-4xl mb-6 flex justify-center">
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <div className="flex justify-center ">
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <p className="text-gray-600 text-lg mb-6 italic">{ReviewsJson[activeIndex].review}</p>
            <h6 className="font-semibold">{ReviewsJson[activeIndex].name}</h6>
            <p className="text-gray-500 text-sm">{ReviewsJson[activeIndex].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        {ReviewsJson.map((item, index) => (
          <div key={index} onClick={() => setActiveIndex(index)} className={`w-14 h-14 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-300 ${index === activeIndex ? "border-orange-500 opacity-100" : "border-transparent opacity-50 hover:opacity-100"}`}>
            <img className="w-full h-full object-cover" src={Images[item.img]} alt={item.name}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

