import React, { useState, useRef, useEffect } from "react";
import { FaListUl } from "react-icons/fa";
import { FaSearch, FaHome, FaStar, FaTv, FaFilm, FaList } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import NotificationModal from "./NotificationModal";
import ProfileModal from "./ProfileModal";

const sideBarLinks = [
  { name: "Search", icon: <FaSearch size={22} />, route: "/search" },
  { name: "Home", icon: <FaHome size={22} />, route: "/" },
  { name: "New & Popular", icon: <FaStar size={22} />, route: "/new&Popular" },
  { name: "TV Shows", icon: <FaTv size={22} />, route: "/tvShows" },
  { name: "Movies", icon: <FaFilm size={22} />, route: "/movies" },
  { name: "Categories", icon: <FaList size={22} />, route: "/categories" },
  { name: "My List", icon: <BsPlusLg size={22} />, route: "/myList" },
];

const SideBar = () => {
  const [click, setClick] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [email, setEmail] = useState("PunitMittal@gmail.com");

  const notificationModalRef = useRef(null);
  const notificationIconRef = useRef(null);

  const navigate = useNavigate();

  const notifications = [
    "New episodes of Money Heist are now available! Don't miss out on the latest adventures!",
    "We think you'll love The Matrix based on your recent viewing history!",
    "Reminder: Stranger Things Season 4 premieres this Friday!",
    "You've watched all episodes of The Witcher. Here are some similar shows you might enjoy!",
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSideClick = (index, ele) => {
    setClick(index);
    navigate(ele.route);
    closeAllModals();
  };

  const closeAllModals = () => {
    setIsNotificationModalOpen(false);
    setIsProfileModalOpen(false);
  };

  const handleNotificationClick = () => {
    setIsNotificationModalOpen((prev) => !prev);
  };

  const toggleProfileModal = () => setIsProfileModalOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationModalRef.current &&
        !notificationModalRef.current.contains(event.target) &&
        notificationIconRef.current &&
        !notificationIconRef.current.contains(event.target)
      ) {
        setIsNotificationModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationModalOpen]);

  return (
    <div
      className={`relative top-0 left-0 h-[100vh] ${
        isSidebarOpen ? "w-[21%]" : "w-[4%]"
      } bg-[#0A0A0A] text-white border-r border-r-gray-500 transition-all duration-300 overflow-hidden`}
    >
      <div className="flex justify-between items-center w-[90%] ml-3 py-3">
        {/* <div
      className={`h-[100vh] ${
        isSidebarOpen ? "w-[21%]" : "w-[4%]"
      } bg-[#0A0A0A] text-white border-r border-r-gray-500 transition-all duration-300 overflow-hidden`}
    >
      <div className="flex justify-between items-center w-[90%] ml-3 py-3"> */}
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
          {isSidebarOpen && <IoIosNotificationsOutline size={32} />}
          {isNotificationModalOpen && (
            <div ref={notificationModalRef}>
              <NotificationModal notifications={notifications} />
            </div>
          )}
        </div>
      </div>
      {isSidebarOpen && (
        <>
          <div className="flex gap-2 mt-2 w-[90%] ml-3 cursor-pointer">
            <img
              src="https://t4.ftcdn.net/jpg/03/91/55/85/360_F_391558541_Yqt3ZBJz6NxMrcgQbHC7Xb8lDkUkSF3r.jpg"
              alt="Profile"
              className="h-7 w-7 rounded-3xl"
              onClick={toggleProfileModal}
            />
            <h1
              className="cursor-pointer text-[20px] font-semibold"
              onClick={toggleProfileModal}
            >
              {email}
            </h1>
            {isProfileModalOpen && (
              <div>
                <ProfileModal
                  onClose={toggleProfileModal}
                  isOpen={isProfileModalOpen}
                  setIsOpen={setIsProfileModalOpen}
                  email={email}
                  setEmail={setEmail}
                />
              </div>
            )}
          </div>
          <div className="w-[90%] ml-5">
            <div className="grid items-start justify-start gap-8 pt-[10%] pb-[12px]">
              {sideBarLinks.map((ele, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-start gap-10 cursor-pointer transition-all duration-400 ease-in-out ${
                    click === index ? "scale-110" : ""
                  }`}
                  onClick={() => handleSideClick(index, ele)}
                  onMouseEnter={() => {
                    if (click !== index) {
                      setClick(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (click !== index) {
                      setClick(null);
                    }
                  }}
                >
                  <div
                    className={`transition-opacity duration-400 ease-in-out ${
                      click === index ? "opacity-100" : "opacity-75"
                    }`}
                  >
                    {ele.icon}
                  </div>
                  <h2
                    className={`text-[22px] font-semibold transition-opacity duration-400 ease-in-out ${
                      click === index ? "opacity-100" : "opacity-75"
                    }`}
                  >
                    {ele.name}
                  </h2>
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
