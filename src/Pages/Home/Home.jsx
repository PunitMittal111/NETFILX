import React from "react";
import Netflix from "../../Components/Common/Netflix";
import "../../Components/Common/Image.css";

const Categories = () => {
  return (
    <div className="image">
      <Netflix />

      <div className="flex items-center justify-center text-[#ff0000] ">
        <h1 className="font-bold text-4xl">Home</h1>
      </div>
    </div>
  );
};

export default Categories;
