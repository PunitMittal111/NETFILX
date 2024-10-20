import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Components/Common/Image.css";
import { FaStar } from "react-icons/fa";
import Netflix from "../../Components/Common/Netflix";

const MyList = () => {
  const [movieList, setMovieList] = useState([]);
  const [tvShowsList, setTvShowsList] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movieList")) || [];
    const savedTvShows = JSON.parse(localStorage.getItem("tvShowsList")) || [];
    setMovieList(savedMovies);
    setTvShowsList(savedTvShows);
  }, []);

  return (
    <div className="image">
      <Netflix />

      <div className="flex items-center justify-center text-[#ff0000] ">
        <h1 className="font-bold text-4xl">My List</h1>
      </div>

      <div className="text-center text-red-700 ">
        {movieList.length > 0 || tvShowsList.length > 0 ? (
          <ul className="grid grid-cols-4 gap-6 p-10 text-center">
            {movieList.map((movie) => (
              <li
                className="grid items-center justify-center py-2 cursor-pointer"
                key={movie.id}
              >
                <Link to={`/movies/${movie.id}`} className="text-white">
                  <img
                    className="h-80 rounded-md"
                    src={movie.image}
                    alt={movie.title}
                    width="200"
                  />
                  <div className="mt-2">
                    <h2>{movie.title}</h2>
                    <p className="flex items-center justify-center gap-2">
                      <FaStar size={14} className="text-yellow-400" /> Rating:{" "}
                      {movie.rating}
                    </p>
                    <p>Year: {movie.year}</p>
                  </div>
                </Link>
              </li>
            ))}

            {tvShowsList.map((tvShow) => (
              <li
                className="grid items-center justify-center py-2 cursor-pointer"
                key={tvShow.id}
              >
                <Link to={`/tvshows/${tvShow.id}`} className="text-white">
                  <img
                    className="h-80 rounded-md"
                    src={tvShow.image}
                    alt={tvShow.title}
                    width="200"
                  />
                  <div className="mt-2">
                    <h2>{tvShow.title}</h2>
                    <p className="flex items-center justify-center gap-2">
                      <FaStar size={14} className="text-yellow-400" /> Rating:{" "}
                      {tvShow.rating}
                    </p>
                    <p>Year: {tvShow.year}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="grid text-3xl">No movies or TV shows in your list.</p>
        )}
      </div>
    </div>
  );
};

export default MyList;
