import React from "react";
import { MdOutlineStar } from "react-icons/md";

const StarRating = ({ rating, maxRating = 10 }) => {
  const totalStars = 5;
  const starRating = (rating / maxRating) * totalStars;

  const getStarClass = (index) => {
    if (starRating >= index + 1) {
      return "text-yellow-300";
    } else {
      return "text-gray-400";
    }
  };

  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`inline-block relative ${getStarClass(index)}`}
        >
          <MdOutlineStar className="text-2xl" />
          {starRating > index && starRating < index + 1 && (
            <span
              className="absolute inset-0 overflow-hidden"
              style={{
                width: `${(starRating - index) * 100}%`,
                left: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <MdOutlineStar className="text-2xl text-yellow-300" />
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
