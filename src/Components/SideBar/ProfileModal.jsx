import React from "react";
import { FaTimes } from "react-icons/fa";

const ProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 pl-[20%]">
      <div className="bg-black border border-gray-200 rounded-lg shadow-lg py-5 px-7 w-80">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
