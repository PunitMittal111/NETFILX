import React, { useState, useRef, useEffect } from "react";
import { FaListUl } from "react-icons/fa";
import { FaSearch, FaHome, FaStar, FaTv, FaFilm, FaList } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";

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
];

const SideBar = () => {
  const [click, setClick] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const modalRef = useRef(null);
  const notificationIconRef = useRef(null);
  const navigate = useNavigate();

  const notifications = [
    "New episodes of Money Heist are now available! Don't miss out on the latest adventures!",
    "We think you'll love The Matrix based on your recent viewing history!",
    "Reminder: Stranger Things Season 4 premieres this Friday!",
    "You've watched all episodes of The Witcher. Here are some similar shows you might enjoy!",
  ];

  const closeAllModals = () => {
    setIsNotificationModalOpen(false);
  };

  const handleNotificationClick = () => {
    setIsNotificationModalOpen((prev) => !prev);
  };

  function handleSideClick(index, ele) {
    setClick(index);
    navigate(ele.route);
    closeAllModals();
  }

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        notificationIconRef.current &&
        !notificationIconRef.current.contains(event.target)
      ) {
        closeAllModals();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`h-[100vh] ${
        isSidebarOpen ? "w-[20%]" : "w-[2.5%]"
      }  bg-black text-white transition-all duration-300 overflow-hidden `}
    >
      <div className="flex justify-between items-center w-full py-3 ">
        <FaListUl
          className="cursor-pointer"
          size={32}
          onClick={toggleSidebar}
        />

        <div
          className="cursor-pointer"
          onClick={handleNotificationClick}
          ref={notificationIconRef}
        >
          {isSidebarOpen ? <IoIosNotificationsOutline size={32} /> : ""}
          {isNotificationModalOpen && (
            <div ref={modalRef}>
              <NotificationModal notifications={notifications} />
            </div>
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <>
          <div className="flex gap-2 mt-2">
            <img
              src="https://t4.ftcdn.net/jpg/03/91/55/85/360_F_391558541_Yqt3ZBJz6NxMrcgQbHC7Xb8lDkUkSF3r.jpg"
              alt=""
              className="h-7 w-7 rounded-3xl"
            />
            <h1>PunitNetflix1111@gmail.com</h1>
          </div>

          <div>
            <div className="grid items-start justify-start gap-8 pt-[10%] pb-[12px] ">
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
                  <h2 className="text-[30px] font-semibold">{ele.name}</h2>
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
