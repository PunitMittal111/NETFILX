import React, {useEffect} from "react";
import "../../Components/Common/Image.css";
// import { data2 } from "./tvShowsData";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Netflix from "../../Components/Common/Netflix";
import { useSelector, useDispatch } from "react-redux";
import { fetchTvShows } from "../../redux/tvShowsSlice/tvShowSlice";

const TvShows = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tvShows} = useSelector((state) => state.tvShows);
  // console.log(tvShows)

  useEffect(() => {
    dispatch(fetchTvShows());
  }, [dispatch]);

  function handlePage(id) {
    navigate(`/TvShowsDetails?id=${id}`);
  }
  

  // console.log(tvShows)

  return (
    <div className="image w-full">
      <Netflix />

      <div className="flex items-center justify-center text-[#ff0000]">
        <h1 className="font-bold text-4xl">TV Shows</h1>
      </div>

      <div className="h-screen">
        <div className="text-white">
          <div className="grid grid-cols-4 gap-6 p-10 text-center">
            {tvShows.map((tvShow) => (
              <div
                className="grid items-center justify-center py-2 cursor-pointer"
                key={tvShow._id}
                onClick={() => handlePage(tvShow._id)}
              >
                <img
                  className="h-80 rounded-md"
                  src={tvShow.image}
                  alt={tvShow.title}
                  width="200"
                />
                <div className=" ">
                  <h2>{tvShow.title}</h2>
                  <p className="flex items-center justify-center gap-2">
                    <FaStar size={14} className="text-yellow-400" /> Rating:{" "}
                    {tvShow.rating}
                  </p>
                  <p>Year: {tvShow.year}</p>
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
