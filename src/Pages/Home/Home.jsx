import React, { useState } from "react";
import Netflix from "../../Components/Common/Netflix";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import HomeTD from "./HomeTD";
import { combinedData } from "./HomeTD";
import "./Home.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const pageCount = combinedData.length
    ? Math.ceil(combinedData.length / itemsPerPage)
    : 0;

  const offset = currentPage * itemsPerPage;

  const handleLeftClick = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleRightClick = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
    }
  };

  return (
    <div className="image h-screen relative flex flex-col">
      <Netflix />
      <div className="flex items-center justify-between">
        <FaArrowCircleLeft
          className="relative z-10 text-white cursor-pointer mt-[34%] left-14"
          size={32}
          style={{ opacity: currentPage === 0 ? 0.5 : 1 }}
          onClick={handleLeftClick}
        />
        <HomeTD
          offset={offset}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          combinedData={combinedData}
        />
        <FaArrowCircleRight
          className="relative text-white cursor-pointer mt-[34%] right-14"
          size={32}
          style={{ opacity: currentPage === pageCount - 1 ? 0.5 : 1 }}
          onClick={handleRightClick}
        />
      </div>
      {pageCount > 1 && (
        <div className="flex justify-center mt-4">
          <ReactPaginate
            previousLabel={null}
            nextLabel={null}
            breakLabel={null}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            containerClassName="pagination"
            disabledClassName="pagination__disabled"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
