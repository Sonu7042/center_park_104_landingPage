import React from "react";
import { Star } from "lucide-react";

const Location = () => {
  return (
    <section
      id="location"
      className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Central Park 104 Location
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          Discover Your Home in the Perfect Location | Easy access to NH-8, UER-II & Delhi
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left List */}
        <div className="space-y-6">
          {[
            { name: "IGI Airport & Aerocity", time: "15 Mins" },
            { name: "Railway Station", time: "10 Mins" },
            { name: "Cambridge Montessori Gurgaon", time: "3 Mins" },
            { name: "Delhi Public School Sector 103", time: "3 Mins" },
            { name: "Gurugram Global Heights School", time: "8 Mins" },
            { name: "Vibrant Hospital", time: "6 Mins" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-200 pb-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600">
                  <Star size={18} />
                </div>
                <span className="text-gray-800 font-medium text-lg">
                  {item.name}
                </span>
              </div>
              <span className="text-gray-500 text-lg">{item.time}</span>
            </div>
          ))}
        </div>

        {/* Right Google Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Central Park 104 Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.13478393553!2d76.98097447537509!3d28.475487275750964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17931d44cff5%3A0xfd71221b1775d65a!2sCentral%20Park%20Sector%20104!5e0!3m2!1sen!2sin!4v1760081135627!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
