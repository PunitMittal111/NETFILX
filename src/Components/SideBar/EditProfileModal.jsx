import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

const EditProfileModal = ({
  isOpen,
  onClose,
  profileImageUrl,
  updateProfileImage,
}) => {
  const [imageUrl, setImageUrl] = useState(profileImageUrl);
  const [newImageFile, setNewImageFile] = useState(null);
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImageFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const handleSave = () => {
    if (newImageFile) {
      const newImageUrl = imageUrl;
      updateProfileImage(newImageUrl);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[1.5px]"></div>

          <motion.div
            ref={modalRef}
            className="bg-[#0A0A0A] shadow-lg pb-10 pl-4 pt-2 text-left rounded-xl w-[100%] max-w-[36rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Edit Profile Image</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-4 w-32 h-32 object-cover rounded-full"
              />
            )}
            <div className="mt-4 flex justify-end pr-10 gap-3">
              <button
                onClick={handleSave}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditProfileModal;
