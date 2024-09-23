import React from "react";
import "./movies.css";
import { data } from "./moviesData";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Netflix from "../../Components/Common/Netflix";

const MovieApp = () => {
  const navigate = useNavigate();

  function handlePage(id) {
    navigate(`/moviesdetails/${id}`);
  }

  return (
    <div className="background-container w-full">
      {/* <div className="navbar">
        <div className="ml-20">
          <h1 className="logo">
            <span className="bend">
              N
              <span className="move-up">
                E<span className="move-bit">TFL</span>I
              </span>
              X
            </span>
          </h1>
        </div>
      </div> */}
      <Netflix />

      <div className="flex items-center justify-center text-[#ff0000]">
        <h1 className="font-bold text-4xl">Movie List</h1>
      </div>

      <div className="h-screen">
        <div className="text-white">
          <div className="grid grid-cols-4 gap-6 p-10 text-center">
            {data.map((movie) => (
              <div
                className="grid items-center justify-center py-2 cursor-pointer"
                key={movie.id}
                onClick={() => handlePage(movie.id)}
              >
                <img
                  className="h-80 rounded-md"
                  src={movie.image}
                  alt=""
                  width="200"
                />
                <div>
                  <h2>{movie.title}</h2>
                  <p className="flex items-center justify-center gap-2">
                    <FaStar size={14} className="text-yellow-400" /> Rating:{" "}
                    {movie.rating}
                  </p>
                  <p>Year: {movie.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieApp;
