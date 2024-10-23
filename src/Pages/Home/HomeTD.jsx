import React, { useState } from "react";
import { data as moviesData } from "../Movies/moviesData";
import { data2 as tvShowsData } from "../TvShows/tvShowsData";
import { Link } from "react-router-dom";
import "./Home.css";

export const combinedData = [
  ...moviesData.map((item) => ({ ...item, type: "movie" })),
  ...tvShowsData.map((item) => ({ ...item, type: "tvshow" })),
];

const HomeTD = ({ currentPage, itemsPerPage }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const startIndex = currentPage * itemsPerPage;
  const visibleData = combinedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="text-center text-white  relative flex-1">
      <div className="flex items-center justify-center mt-8">
        {hoveredItem && (
          <div className="absolute -top-3 left-[50%] transform -translate-x-1/2 transition-opacity">
            <div className="relative">
              <img
                src={hoveredItem.image}
                alt={hoveredItem.title}
                className="h-96 w-[50rem] rounded-lg shadow-lg pop-up-animation"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 pop-up-animation ">
                <h3 className="text-xl font-bold">{hoveredItem.title}</h3>
                <p>Rating: {hoveredItem.rating}</p>
                <p>Genre: {hoveredItem.genre}</p>
                <p>Year: {hoveredItem.year}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-[30%] gap-5 p-2 w-full flex justify-center">
          <div className="flex justify-center gap-4">
            {visibleData.map((item) => (
              <Link
                to={
                  item.type === "movie"
                    ? `/moviesdetails/${item.id}`
                    : `/tvshowsdetails/${item.id}`
                }
                key={item.id}
                className="min-w-[200px] flex-shrink-0 cursor-pointer pl-3"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-90"
                  width="175"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTD;
