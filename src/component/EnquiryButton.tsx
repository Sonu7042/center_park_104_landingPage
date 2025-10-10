import React, { useState } from "react";

const EnquiryButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Enquiry Button (Visible & Centered Right Side) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-1/2 right-0 -translate-y-1/2 bg-blue-700 text-white font-medium py-3 rounded-tr-lg rounded-br-lg shadow-lg hover:bg-blue-800 transition-all z-50"
        style={{
          writingMode: "vertical-rl", // makes text vertical
          textOrientation: "mixed", // keeps readable text
          transform: "translateY(-50%) rotate(180deg)", // properly oriented text
        }}
      >
        Enquiry Now
      </button>

      {/* Overlay + Popup Form */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center relative animate-fadeIn"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Enquiry Form
            </h2>

            {/* Form */}
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryButton;
