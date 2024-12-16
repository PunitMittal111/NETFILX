import React, { useEffect } from "react";
import "../../Components/Common/Image2.css";
import {useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTvShowById,toggleTvShowInList  } from "../../redux/tvShowsSlice/tvShowSlice";
import { FaHeart } from "react-icons/fa";
import StarRating from "../../Components/Common/StarRating";

const TvShowsDetails = () => {
  const [searchParams] = useSearchParams() ;
  const id = searchParams.get("id")
  const dispatch = useDispatch();
  const { tvShowsList, selectedTvShow} = useSelector(
    (state) => state.tvShows
  );

  useEffect(() => {
    dispatch(fetchTvShowById({ id, token: localStorage.getItem("token") }));
  }, [dispatch, id]);

  if (!selectedTvShow) return <h2>TV Show not found</h2>;
  const isInList = tvShowsList?.some((show) => show.id === selectedTvShow.id);
  
  const handleToggleTvShow = () => {
    dispatch(toggleTvShowInList(selectedTvShow));
  };

  if (!id) {
    return <h2>TV Show not found</h2>;
  }

  // console.log("Video Link:", selectedTvShow.video[0].videoLink);


  return (
    <div className="image2">
      <div className="flex flex-col justify-center items-start text-white p-10 gap-2">
        <div className=" flex w-full items-center justify-between ">
          <h1 className="text-4xl font-bold ">{selectedTvShow.title}</h1>

          <button onClick={handleToggleTvShow}>
            <FaHeart
              size={30}
              className={isInList ? "text-yellow-400" : "text-gray-400"}
            />
          </button>
        </div>

        <img
          src={selectedTvShow.image}
          alt={selectedTvShow.title}
          className="rounded-md my-2 w-[25%]"
        />

        <p className="text-xl gap-3">
          Rating : {selectedTvShow.rating} <StarRating rating={selectedTvShow.rating} />
        </p>

        <p className="text-md">Description : {selectedTvShow.description} </p>
        <p className="text-md">
          Cast : [
          {selectedTvShow.cast && selectedTvShow.cast.length > 0
            ? selectedTvShow.cast.join(", ")
            : "No cast available"}
          ]
        </p>

        <p>Genre: {selectedTvShow.genre}</p>

        <p className="text-md">Year: {selectedTvShow.year}</p>

        <p className="mt-1">
          Screenshot:
          <div className="flex gap-2 mt-2">
            {selectedTvShow.screenshot && selectedTvShow.screenshot.length > 0
              ? selectedTvShow.screenshot.map((ele, index) => (
                  <img key={index} src={ele} alt="" width={275} />
                ))
              : "No screenshots available"}
          </div>
        </p>

<iframe
  width="100%"
  height="500"
  src={`https://www.youtube.com/embed/${selectedTvShow.video[0]?.videoId || selectedTvShow.video[0]?.videoLink?.split("v=")[1]}`}
  title={selectedTvShow.title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded-md"
></iframe>



      </div>
    </div>
  );
};

export default TvShowsDetails;
