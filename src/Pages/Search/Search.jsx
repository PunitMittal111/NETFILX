import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import { IoIosSearch } from "react-icons/io";
import { data } from "../Movies/moviesData";
import { FaStar } from "react-icons/fa";
import { data2 } from "../TvShows/tvShowsData";
import Netflix from "../../Components/Common/Netflix";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [combinedData, setCombinedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(data) && Array.isArray(data2)) {
      const combined = [
        ...data.map((item) => ({ ...item, type: "movie" })),
        ...data2.map((item) => ({ ...item, type: "tvshow" })),
      ];
      setCombinedData(combined);
    } else {
      console.error("Data is not correctly structured");
    }
  }, []);

  const filteredData = combinedData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (item) => {
    if (item.type === "movie") {
      navigate(`/movies/${item.id}`);
    } else if (item.type === "tvshow") {
      navigate(`/tvshows/${item.id}`);
    }
  };

  return (
    <div className="Main flex flex-col">
      <Netflix />

      <div className="flex items-center justify-center text-[#ff0000]">
        <h1 className="font-bold text-4xl">Search</h1>
      </div>

      <div className="flex gap-3 items-center justify-center h-screen">
        <input
          className="bg-transparent border-b border-white placeholder-white text-white text-lg py-3 px-6 focus:outline-none focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-3.5 rounded-lg flex items-center space-x-2"
        >
          <IoIosSearch size={21} />
          <span>Search</span>
        </button>
      </div>

      {searchTerm && (
        <div className="grid text-center text-white">
          <div className="grid grid-cols-4 gap-6 p-10 items-center mt-4">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div
                  className="grid items-center justify-center py-2 cursor-pointer"
                  key={`${item.type}-${item.id}`}
                  onClick={() => handleItemClick(item)}
                >
                  <img
                    className="h-80 rounded-md"
                    src={item.image}
                    alt=""
                    width="200"
                  />
                  <h2>{item.title}</h2>
                  <p className="flex items-center justify-center gap-2">
                    <FaStar size={14} className="text-yellow-400" /> Rating:{" "}
                    {item.rating}
                  </p>
                  <p>Year: {item.year}</p>
                </div>
              ))
            ) : (
              <p className="grid text-3xl">No results found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
