import React from "react";

const Itinerary = ({ item }) => {
  return (
    <div className="mt-5">
      <h3>Itinerary</h3>
      <ol className="relative border-l-2 border-dotted border-orange-500">
        {item.itinerary.map((itinerary, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* الدائرة */}
            <span
              className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full 
              ${
                index === 0 || index === item.itinerary.length - 1
                  ? "bg-orange-500"
                  : "bg-white border-2 border-orange-500"
              }`}
            ></span>

            {/* نص اليوم */}
            <p>{itinerary}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Itinerary;
