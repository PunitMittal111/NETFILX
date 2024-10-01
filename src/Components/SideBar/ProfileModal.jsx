import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import EditProfileModal from "./EditProfileModal";

const ProfileModal = ({ onClose }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState(
    "https://t4.ftcdn.net/jpg/03/91/55/85/360_F_391558541_Yqt3ZBJz6NxMrcgQbHC7Xb8lDkUkSF3r.jpg"
  );

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

  return (
    <>
      {isEditOpen ? (
        <EditProfileModal
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          onClose={closeEditModal}
          profileImageUrl={profileImageUrl}
          updateProfileImage={updateProfileImage}
        />
      ) : (
        <>
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[1.5px]"></div>
          </div>

          <div className="fixed inset-0 flex items-center justify-center z-50 pl-[20%]">
            <div className=" bg-black border border-gray-200 rounded-lg shadow-lg py-5 px-7 w-80">
              <div>
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
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              <div className="ml-4">
                <h2 className="text-base font-semibold">Punit Mittal</h2>
                <p className="text-gray-600 text-sm">punitnetflix@gmail.com</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileModal;
