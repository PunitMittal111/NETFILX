import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./moviesData";
import "./moviesDetails.css";
import StarRating from "../../Components/Common/StarRating";
import CustomVideoPlayer from "../../Components/Common/Videoplayer";
import { FaHeart } from "react-icons/fa";

const MoviesDetails = () => {
  const { id } = useParams();
  const movie = data.find((movie) => movie.id === parseInt(id));

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("movieList")) || [];
    setMovieList(savedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(movieList));
  }, [movieList]);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  const toggleMovieInList = () => {
    if (movieList.some((m) => m.id === movie.id)) {
      setMovieList(movieList.filter((m) => m.id !== movie.id));
    } else {
      setMovieList([...movieList, movie]);
    }
  };

  const isInList = movieList.some((m) => m.id === movie.id);

  return (
    <div className="background-containers">
      <div className="flex flex-col justify-center items-start text-white p-10 gap-2">
        <div className=" flex w-full items-center justify-between ">
          <h1 className="text-4xl font-bold ">{movie.title}</h1>

          <button onClick={toggleMovieInList}>
            <FaHeart
              size={30}
              className={isInList ? "text-yellow-400" : "text-gray-400"}
            />
          </button>
        </div>

        <img
          src={movie.image}
          alt={movie.title}
          className="rounded-md my-2 w-[25%]"
        />

        <p className="text-xl gap-3">
          Rating : {movie.rating} <StarRating rating={movie.rating} />
        </p>

        <p className="text-md">Description : {movie.description} </p>
        <p className="text-md">
          Cast : [
          {movie.cast && movie.cast.length > 0
            ? movie.cast.map((member, index) => (
                <span key={index}>
                  {member}
                  {index < movie.cast.length - 1 ? ", " : ""}
                </span>
              ))
            : "No cast available"}
          ]
        </p>

        <p>Genre: {movie.genre}</p>

        <p className="text-md">Year: {movie.year}</p>

        <p className="mt-1">
          Screenshot:
          <div className="flex gap-2 mt-2">
            {movie.screenshot && movie.screenshot.length > 0
              ? movie.screenshot.map((ele, index) => (
                  <img key={index} src={ele} alt="" width={275} />
                ))
              : "No screenshots available"}
          </div>
        </p>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold pb-3">Watch the Movie</h2>
          <CustomVideoPlayer />
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
