import React from "react";
import "./Categories.css";
import Netflix from "../../Components/Common/Netflix";

const Categories = () => {
  return (
    <div className="Category">
      <Netflix />

      <div className="flex items-center justify-center text-[#ff0000] ">
        <h1 className="font-bold text-4xl">Categories</h1>
      </div>

      <div></div>
    </div>
  );
};
export default Categories;
