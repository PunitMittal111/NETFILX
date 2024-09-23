import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { FaSearch, FaHome, FaStar, FaTv, FaFilm, FaList } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const sideBarLinks = [
  {
    name: "Search",
    icon: <FaSearch size={22} />,
    route: "/search",
  },
  {
    name: "Home",
    icon: <FaHome size={22} />,
    route: "/",
  },
  {
    name: "New & Popular",
    icon: <FaStar size={22} />,
    route: "/new&Popular",
  },
  {
    name: "TV Shows",
    icon: <FaTv size={22} />,
    route: "/tvShows",
  },
  {
    name: "Movies",
    icon: <FaFilm size={22} />,
    route: "/movies",
  },
  {
    name: "Categories",
    icon: <FaList size={22} />,
    route: "/categories",
  },
  {
    name: "My List",
    icon: <BsPlusLg size={22} />,
    route: "/myList",
  },
  {
    name: "Notifications",
    icon: <IoIosNotificationsOutline size={22} />,
    route: "/notifications",
  },
];

const SideBar = () => {
  const [click, setClick] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigate = useNavigate();

  function handleSideClick(index, ele) {
    setClick(index);
    navigate(ele.route);
  }

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div
      className={`h-[100vh] ${
        isSidebarOpen ? "w-[20%]" : "w-[4%] "
      }  bg-black text-white transition-all duration-300 overflow-hidden`}
    >
      <div className="flex justify-start items-center w-full ml-4 py-3">
        <FaListUl
          size={32}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {isSidebarOpen && (
        <>
          <div className="ml-4 flex gap-2">
            <img
              src="https://t4.ftcdn.net/jpg/03/91/55/85/360_F_391558541_Yqt3ZBJz6NxMrcgQbHC7Xb8lDkUkSF3r.jpg"
              alt=""
              className="h-7 w-7 rounded-3xl border border-white"
            />
            <h1>Punitnohar111@gmail.com</h1>
          </div>
          <div>
            <div className="grid items-start justify-start gap-6 pt-[10%] pb-[12px] px-[20px] ">
              {sideBarLinks.map((ele, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-start gap-10 cursor-pointer`}
                  onClick={() => handleSideClick(index, ele)}
                >
                  <div
                    className={`${
                      click === index
                        ? "underline border-b border-red-700 px-1 py-1"
                        : ""
                    }`}
                  >
                    {ele.icon}
                  </div>
                  <h2 className="text-[28px] font-semibold">{ele.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
