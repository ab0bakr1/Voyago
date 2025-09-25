import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // أيقونات

export default function FilterSidebar() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [openSection, setOpenSection] = useState(null);

  const tourTypes = [
    "Nature Tours",
    "Adventure Tours",
    "Cultural Tours",
    "Food Tours",
    "City Tours",
    "Cruises Tours",
  ];

  const handleCheckbox = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
      {/* Date */}
      <div className="bg-orange-500 text-white p-4">
        <label className="block text-sm font-medium">
          When are you traveling?
        </label>
        <input
          type="text"
          placeholder="February 05 ~ March 14"
          readOnly
          className="mt-2 w-full p-2 rounded-md text-gray-700 text-sm focus:outline-none"
        />
      </div>

      {/* Tour Type */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="text-gray-800 font-medium mb-2">Tour Type</h4>
        {tourTypes.map((type, index) => (
          <label
            key={index}
            className="flex items-center text-sm text-gray-600 mb-2"
          >
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckbox(type)}
              className="mr-2 accent-blue-500"
            />
            {type}
          </label>
        ))}
        <button className="text-blue-600 text-sm mt-1">See More</button>
      </div>

      {/* Other Filters */}
      {[
        { title: "Filter Price", options: ["$0 - $100", "$100 - $500", "$500+"] },
        { title: "Duration", options: ["1-3 days", "4-7 days", "7+ days"] },
        { title: "Language", options: ["English", "Arabic", "French"] },
        { title: "Rating", options: ["5 Stars", "4 Stars & up", "3 Stars & up"] },
        { title: "Specials", options: ["Discounts", "Popular", "New"] },
      ].map((section, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex justify-between items-center p-4 text-gray-700 text-sm font-medium cursor-pointer"
          >
            {section.title}
            {openSection === section.title ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {/* Dropdown content */}
          {openSection === section.title && (
            <div className="px-4 pb-4 text-sm text-gray-600 space-y-2">
              {section.options.map((opt, i) => (
                <label key={i} className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-blue-500" />
                  {opt}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
