import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import Netflix from "../../Components/Common/Netflix";
import { data } from "./Categoriesdata";

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (type) => {
    navigate(`/categoryresults/${type}`);
  };

  return (
    <div className="Category">
      <Netflix />

      <div className="flex items-center justify-center text-[#ff0000] ">
        <h1 className="font-bold text-4xl">Categories</h1>
      </div>

      <div className="grid grid-cols-4 gap-6 p-10 text-white text-center">
        {data.map((item) => (
          <div
            className="grid items-center justify-center py-2 cursor-pointer"
            key={item.id}
            onClick={() => handleCategoryClick(item.type)}
          >
            <img
              className="h-80 rounded-md"
              src={item.image}
              alt={item.title}
              width="200"
            />
            <h1>{item.type}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
