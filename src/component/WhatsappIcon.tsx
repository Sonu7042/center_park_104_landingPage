import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // install via: npm install react-icons

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+91 9876543210" // 🔹 Replace with your WhatsApp number (no + or spaces)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsappButton;
