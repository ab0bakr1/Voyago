import React from "react";
import { useLocation, Link } from "react-router-dom";
import Data from "../../Data.json";

const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query")?.toLowerCase() || "";

  // فلترة النتائج (بحث في العنوان + المدينة + عدد الأيام)
  const results = Data.filter((item) =>
    item.title.toLowerCase().includes(query) ||
    item.city.toLowerCase().includes(query) ||
    item.days.toString().includes(query)
  );

  return (
    <section className="py-20 px-5 lg:px-20">
      <h2 className="text-2xl font-bold mb-6">
        Search Results for: <span className="text-orange-500">"{query}"</span>
      </h2>

      {results.length > 0 ? (
        <Link to={`/details/${results[0].id}`} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.city}</p>
                <p className="text-sm text-gray-500">{item.days} days</p>
                <Link
                  to={`/details/${item.id}`}
                  className="inline-block mt-3 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </Link>
      ) : (
        <p className="text-gray-600">No results found 😢</p>
      )}
    </section>
  );
};

export default Search;
