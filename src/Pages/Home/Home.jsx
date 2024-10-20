// import React, { useState } from "react";
// import Netflix from "../../Components/Common/Netflix";
// import { data as moviesData } from "../Movies/moviesData";
// import { data2 as tvShowsData } from "../TvShows/tvShowsData";
// import { FaArrowLeft, FaArrowCircleRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   const combinedData = [
//     ...moviesData.map((item) => ({ ...item, type: "movie" })),
//     ...tvShowsData.map((item) => ({ ...item, type: "tvshow" })),
//   ].sort((a, b) => b.rating - a.rating);

//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 5;
//   const [hoveredItem, setHoveredItem] = useState(null); // State for hovered item

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < combinedData.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const handlePrevious = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   const visibleData = combinedData.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="image h-screen relative">
//       <Netflix />

//       <div className="text-center text-white mt-5 relative">
//         <div className="flex items-center">
//           {startIndex > 0 && (
//             <button
//               onClick={handlePrevious}
//               className="absolute left-0 z-10 p-2 rounded-full bg-black bg-opacity-50"
//             >
//               <FaArrowLeft size={24} />
//             </button>
//           )}

//           {hoveredItem && (
//             <div className="absolute -top-2 left-[17%] transform -translate-x-1/2 realistic-ps4-pop-up-animation">
//               <img
//                 src={hoveredItem.image}
//                 alt={hoveredItem.title}
//                 className="h-96 w-[50rem] rounded-lg shadow-lg"
//               />
//             </div>
//           )}
//           <div className="relative mt-[30%] bottom-0 left-10 gap-5 p-6">
//             <div className="flex justify-center">
//               {visibleData.map((item) => (
//                 <Link
//                   to={
//                     item.type === "movie"
//                       ? `/moviesdetails/${item.id}`
//                       : `/tvshowsdetails/${item.id}`
//                   }
//                   key={item.id}
//                   className="min-w-[200px] flex-shrink-0 cursor-pointer"
//                   onMouseEnter={() => setHoveredItem(item)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-60 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-90"
//                     width="175"
//                   />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {startIndex + itemsPerPage < combinedData.length && (
//             <button
//               onClick={handleNext}
//               className="absolute right-0 bg-black bg-opacity-50 z-10 p-2 rounded-full"
//             >
//               <FaArrowCircleRight size={32} />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Netflix from "../../Components/Common/Netflix";
import { data as moviesData } from "../Movies/moviesData";
import { data2 as tvShowsData } from "../TvShows/tvShowsData";
import { Link } from "react-router-dom";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const combinedData = [
    ...moviesData.map((item) => ({ ...item, type: "movie" })),
    ...tvShowsData.map((item) => ({ ...item, type: "tvshow" })),
  ].sort((a, b) => b.rating - a.rating);

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="w-full image relative border border-gray-200 ">
      <Netflix />

      <div className="text-center text-white mt-5 relative w-[20%]">
        <div className="flex items-center border border-white justify-center ml-auto w-[70%]">
          <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            navigation
            className="mt-[24%] w-[100%]"
            // style={{ zIndex: 10 }}
          >
            {hoveredItem && (
              <div className="absolute top-2 left-[17%] transform -translate-x-1/2 realistic-ps4-pop-up-animation">
                <img
                  src={hoveredItem.image}
                  alt={hoveredItem.title}
                  className="h-96 w-[50rem] rounded-lg shadow-lg"
                />
              </div>
            )}
            {combinedData.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={
                    item.type === "movie"
                      ? `/moviesdetails/${item.id}`
                      : `/tvshowsdetails/${item.id}`
                  }
                  className="min-w-[200px] flex-shrink-0 cursor-pointer"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-90"
                    width="175"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
