import React from "react";
import { useParams, Link } from "react-router-dom";
import { data as movieData } from "../Movies/moviesData";
import { data2 as tvShowsData } from "../TvShows/tvShowsData";
import "./CategoryResult.css";
import Netflix from "../../Components/Common/Netflix";
import { FaStar } from "react-icons/fa";

const CategoryResults = () => {
  const { type } = useParams();

  const filteredMovies = movieData.filter((movie) =>
    movie.genre.includes(type)
  );
  const filteredTvShows = tvShowsData.filter((tvShow) =>
    tvShow.genre.includes(type)
  );

  const combinedResults = [
    ...filteredMovies.map((movie) => ({ ...movie, type: "movie" })),
    ...filteredTvShows.map((tvShow) => ({ ...tvShow, type: "tvShow" })),
  ];

  return (
    <div className="CategoryResult">
      <Netflix />
      <div className="flex items-center justify-center text-[#ff0000] ">
        <h1 className="text-4xl font-bold ">{type} Movies & TV Shows</h1>
      </div>

      <div className="grid text-center text-white">
        <div className="gap-6 p-10">
          {combinedResults.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {combinedResults.map((item) => (
                <Link
                  to={
                    item.type === "movie"
                      ? `/movies/${item.id}`
                      : `/tvshows/${item.id}`
                  }
                  key={item.id}
                >
                  <div className="grid items-center justify-center py-2 cursor-pointer">
                    <img
                      className="h-80 rounded-md"
                      src={item.image}
                      alt={item.title}
                      width="200"
                    />
                    <div>
                      <h2>{item.title}</h2>
                      <p className="flex items-center justify-center gap-2">
                        <FaStar size={14} className="text-yellow-400" /> Rating:{" "}
                        {item.rating}
                      </p>
                      <p>Year: {item.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="flex items-center justify-center font-bold text-4xl text-[#ff0000] ">
              No {type} movies or TV shows found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryResults;
