import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data2 } from "./tvShowsData";
import "./tvShowsDetails.css";
import StarRating from "../../Components/Common/StarRating";
import CustomVideoPlayer from "../../Components/Common/Videoplayer";
import { FaHeart } from "react-icons/fa";

const TvShowsDetails = () => {
  const { id } = useParams();
  const tvShows = data2.find((tvShows) => tvShows.id === parseInt(id));

  const [tvShowsList, setTvShowsList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("tvShowsList")) || [];
    setTvShowsList(savedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("tvShowsList", JSON.stringify(tvShowsList));
  }, [tvShowsList]);

  if (!tvShows) {
    return <h2>TV Show not found</h2>;
  }

  const toggleTvShowInList = () => {
    if (tvShowsList.some((show) => show.id === tvShows.id)) {
      setTvShowsList(tvShowsList.filter((show) => show.id !== tvShows.id));
    } else {
      setTvShowsList([...tvShowsList, tvShows]);
    }
  };

  const isInList = tvShowsList.some((show) => show.id === tvShows.id);

  return (
    <div className="background-contain">
      <div className="flex flex-col justify-center items-start text-white p-10 gap-2">
        <div className=" flex w-full items-center justify-between ">
          <h1 className="text-4xl font-bold ">{tvShows.title}</h1>

          <button onClick={toggleTvShowInList}>
            <FaHeart
              size={30}
              className={isInList ? "text-yellow-400" : "text-gray-400"}
            />
          </button>
        </div>

        <img
          src={tvShows.image}
          alt={tvShows.title}
          className="rounded-md my-2 w-[25%]"
        />

        <p className="text-xl gap-3">
          Rating : {tvShows.rating} <StarRating rating={tvShows.rating} />
        </p>

        <p className="text-md">Description : {tvShows.description} </p>
        <p className="text-md">
          Cast : [
          {tvShows.cast && tvShows.cast.length > 0
            ? tvShows.cast.map((member, index) => (
                <span key={index}>
                  {member}
                  {index < tvShows.cast.length - 1 ? ", " : ""}
                </span>
              ))
            : "No cast available"}
          ]
        </p>

        <p>Genre: {tvShows.genre}</p>

        <p className="text-md">Year: {tvShows.year}</p>

        <p className="mt-1">
          Screenshot:
          <div className="flex gap-2 mt-2">
            {tvShows.screenshot && tvShows.screenshot.length > 0
              ? tvShows.screenshot.map((ele, index) => (
                  <img key={index} src={ele} alt="" width={275} />
                ))
              : "No screenshots available"}
          </div>
        </p>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold pb-3">Watch the TV Show</h2>
          <CustomVideoPlayer />
        </div>
      </div>
    </div>
  );
};

export default TvShowsDetails;
