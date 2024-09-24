import React from "react";

const NotificationModal = () => {
  return (
    <div className="absolute z-20 bg-black border border-gray-200 text-white rounded-lg shadow-lg py-5 px-7 w-80">
      <h2 className="text-lg font-bold mb-4">Notifications</h2>
      <p className="">You have no new notifications.</p>
    </div>
  );
};

export default NotificationModal;
