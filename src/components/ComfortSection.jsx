import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ComfortSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://your-image-url-here.com" // replace with your image
        alt="Comfort Fashion"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 lg:px-32">
        {/* Heading */}
        <h1 className="text-black font-bold leading-tight text-5xl md:text-6xl lg:text-7xl max-w-lg">
          The Future <br /> of Comfort <br /> Awaits
        </h1>

        {/* Button (smaller + sleek) */}
        <button className="mt-6 flex items-center gap-2 bg-black text-white px-4 py-4 rounded-full text-sm font-medium shadow-sm hover:bg-gray-100 transition">
          Buy Now
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-black">
            <FiArrowUpRight size={14} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ComfortSection;
