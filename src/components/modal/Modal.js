import React from "react";

const Modal = ({ title, isOpen, onClose, onSubmit, children }) => {
  // if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center overflow-auto z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <div></div>
        </div>

        {/* Modal Body */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
