import React from "react";
import { FaBell, FaTimes } from "react-icons/fa";

const NotificationModal = ({ notifications, onClose }) => {
  return (
    <div className="absolute z-20 bg-black border border-gray-200 text-white rounded-xl shadow-2xl py-5 px-7 w-80 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold flex items-center">
          <FaBell className="mr-2" />
          Notifications
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <FaTimes />
        </button>
      </div>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li
              key={index}
              className="mb-2 flex items-center hover:bg-red-500 rounded-lg p-2 transition-colors duration-200"
            >
              {notification}
            </li>
          ))
        ) : (
          <li className="italic text-center text-gray-400">
            No new notifications
          </li>
        )}
      </ul>
    </div>
  );
};

export default NotificationModal;
