import React, { useState } from 'react'
import "./List.css"
import Data from "../../Data.json"
import Filter from './filter'
import Card from './Card'

const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // حساب عدد الصفحات
    const totalPages = Math.ceil(Data.length / itemsPerPage);

    // تحديد العناصر المعروضة حسب الصفحة
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = Data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <section className="list py-20 lg:px-32 md:px-10 px-2">
        <div className="flex justify-between items-center">
            <h2>Explore all things to do in Phuket</h2>
            <p className="md:block hidden">THE 10 BEST Phuket Tours & Excursions</p>
        </div>
        <div className="flex gap-4 mt-4">
            <div className="filter w-1/4 md:block hidden">
                <Filter />
            </div>
            <div className="items md:w-3/4 w-full">
                <div className="flex justify-between items-center">
                    <p>{Data.length} results</p>
                    <p>Sort by:Featured</p>
                </div>
                <div className="grid grid-cols-1 md:auto-rows-[300px] auto-rows-auto gap-4">
                    {currentItems.map((item, index) => (
                        <Card item={item} index={index}/>
                    ))}
                </div>
            </div>
        </div>
        {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-orange-700 text-white" : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
    </section>
  )
}

export default List