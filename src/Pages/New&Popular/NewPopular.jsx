import React from "react";
import { Link } from "react-router-dom";
import Netflix from "../../Components/Common/Netflix";
import "./New&Popular.css";
import { data as moviesData } from "../Movies/moviesData";
import { data2 as tvShowsData } from "../TvShows/tvShowsData";
import { FaStar } from "react-icons/fa";

const NewPopular = () => {
  const combinedData = [...moviesData, ...tvShowsData];
  const sortedData = combinedData.sort((a, b) => b.year - a.year);

  return (
    <div className="news">
      <Netflix />

      <div className="grid text-center items-center justify-center text-[#ff0000]">
        <h1 className="font-bold text-4xl">News & Popular</h1>
        <h2 className="text-3xl font-semibold my-4 text-[#ff0000]">
          Latest Releases
        </h2>
      </div>

      <div className="text-center text-white">
        <div className="grid grid-cols-4 gap-6 p-10">
          {sortedData.map((item) => (
            <Link
              to={
                item.type === "movie"
                  ? `/movies/${item.id}`
                  : `/tvshows/${item.id}`
              }
              key={item.id}
              className="grid items-center justify-center py-2 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-80 rounded-md"
                width="200"
              />
              <div className="mt-2">
                <h2>{item.title}</h2>
                <p className="flex items-center justify-center gap-2">
                  <FaStar size={14} className="text-yellow-400" /> Rating:{" "}
                  {item.rating}
                </p>
                <p>Year: {item.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewPopular;
