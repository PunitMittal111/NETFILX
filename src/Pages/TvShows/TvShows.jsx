import React from "react";
import "./tvShows.css";
import { data2 } from "./tvShowsData";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Netflix from "../../Components/Common/Netflix";

const TvShows = () => {
  const navigate = useNavigate();

  function handlePage(id) {
    navigate(`/TvShowsDetails/${id}`);
  }

  return (
    <div className="background-cont w-full">
      <Netflix />

      <div className="flex items-center justify-center text-[#ff0000]">
        <h1 className="font-bold text-4xl">TV Shows</h1>
      </div>

      <div className="h-screen">
        <div className="text-white">
          <div className="grid grid-cols-4 gap-6 p-10 text-center">
            {data2.map((tvShows) => (
              <div
                className="grid items-center justify-center py-2 cursor-pointer"
                key={tvShows.id}
                onClick={() => handlePage(tvShows.id)}
              >
                <img
                  className="h-80 rounded-md"
                  src={tvShows.image}
                  alt={tvShows.title}
                  width="200"
                />
                <div className=" ">
                  <h2>{tvShows.title}</h2>
                  <p className="flex items-center justify-center gap-2">
                    <FaStar size={14} className="text-yellow-400" /> Rating:{" "}
                    {tvShows.rating}
                  </p>
                  <p>Year: {tvShows.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
