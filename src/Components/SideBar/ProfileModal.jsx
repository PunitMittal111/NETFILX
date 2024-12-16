import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import EditProfileModal from "./EditProfileModal";
import { motion, AnimatePresence } from "framer-motion";

const formFields = [
  { label: "Name", type: "text", placeholder: "Enter your name" },
  { label: "Phone", type: "tel", placeholder: "Enter your phone number" },
  { label: "Email", type: "email", placeholder: "Enter your email" },
  { label: "Password", type: "text", placeholder: "Enter your password" },
];

const ProfileModal = ({ onClose, isOpen, setIsOpen, email, setEmail }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState(
    "https://t4.ftcdn.net/jpg/03/91/55/85/360_F_391558541_Yqt3ZBJz6NxMrcgQbHC7Xb8lDkUkSF3r.jpg"
  );
  const modalRef = useRef();  

  const openEditModal = () => {
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
  };

  const updateProfileImage = (newImageUrl) => {
    setProfileImageUrl(newImageUrl);
    closeEditModal();
  };

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      !isEditOpen
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && !isEditOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isEditOpen]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-gray-900/20 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div
                ref={modalRef}
                className="bg-[#0A0A0A] border border-gray-200 rounded-lg shadow-lg py-5 px-7 w-max"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <img
                      src={profileImageUrl}
                      alt="Profile"
                      className="w-24 h-24 object-cover rounded-full border-2 border-red-500 shadow-lg"
                    />
                    <button
                      onClick={openEditModal}
                      className="absolute flex items-center justify-center -bottom-1 -right-10 mr-10 bg-red-600 rounded-full h-10 w-10 border border-gray-200"
                    >
                      <MdOutlineEdit className="text-white" size={14} />
                    </button>
                  </div>

                  <button
                    onClick={onClose}
                    className="text-gray-400 pb-[30%] hover:text-white transition-colors duration-200"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex flex-col ml-4 space-y-6">
                  {formFields.map(({ label, type, placeholder }, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      {/* <h2 className="w-1/4 text-lg font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        <span className="font-serif">{label}</span>
                        <span className="text-red-500 font-medium"> *</span>:
                      </h2> */}
                      <h2 className="w-1/4 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-red-500">
                        <span className="font-serif">{label}</span>
                        <span className="text-red-500">*</span>:
                      </h2>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={label === "Email" ? email : ""}
                        onChange={label === "Email" ? handleEmailChange : null}
                        className="flex-1 px-10 py-2 rounded-3xl text-gray-700 bg-gray-200 focus:bg-white border border-gray-300 focus:border-blue-500 outline-none transition duration-200 shadow-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-end gap-3">
                  <button
                    // onClick={handleSave}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Save Changes
                  </button>
                  <button
                    // onClick={onClose}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>

            {isEditOpen && (
              <EditProfileModal
                isOpen={isEditOpen}
                setIsOpen={setIsEditOpen}
                onClose={closeEditModal}
                profileImageUrl={profileImageUrl}
                updateProfileImage={updateProfileImage}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileModal;
