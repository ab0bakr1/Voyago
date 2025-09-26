import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../../Data.json";
import BookingCard from "./Booking";

const Details = () => {
  const { id } = useParams(); // يجيب id من الرابط
  const item = Data.find((item) => item.id === parseInt(id)); // العنصر حسب id

  const DesignImg = [
    {id: 1, big: "md:col-span-3 md:row-span-2" },
    {id: 2, big: "md:col-span-2 md:row-span-1" },
    {id: 3, big: "md:col-span-2 md:row-span-1" },
  ]

  if (!item) {
    return <h2 className="text-center mt-20">Item not found 😢</h2>;
  }

  return (
    <section className="py-20 lg:px-32 md:px-10 px-2">
      {/* <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to List
      </Link> */}
      <h1>{item.title}</h1>
      <div className="flex justify-start items-center gap-4">
        <p>{item.rating} ({item.reviews})</p>
        <p>{item.city}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 auto-rows-[200px]">
        {item.images.map((image, index) => (
            <div key={index} className={`relative rounded-lg overflow-hidden group ${DesignImg[index].big}`}>
                <img 
                  key={index}
                  src={image}
                  alt={item.title}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${DesignImg[index].big}`}
                />
            </div>
        ))}
      </div>
      <div className="w-full flex justify-between">
        <div className="overview w-4/5">
            <h3>Tour Overview</h3>
            <p>{item.title} {item.description}</p>
            <h5>Tour Highlights</h5>
            <ul>
                {item.Highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
        </div>
        <div className="Booking w-1/5 h-full flex flex-col justify-around items-center border-l-2 border-gray-200">
            <BookingCard id={item.id}/>
        </div>
      </div>

    </section>
  );
};

export default Details;
