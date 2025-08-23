import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ComfortSection = () => {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <img
        src="https://bluorng.com/cdn/shop/files/IMG_7760.jpg?v=1726314137&width=1946" // replace with your image
        alt="Comfort Fashion"
        className="absolute  inset-0 w-full h-full object-cover"
      />
        <div className="bg-black/50 absolute inset-0"/>
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-20 lg:px-32">
        {/* Heading */}
        <h1 className="text-white font-bold leading-tight text-5xl md:text-6xl lg:text-7xl max-w-lg">
          The Future <br /> of Comfort <br /> Awaits
        </h1>

        {/* Button (smaller + sleek) */}
        <button className="mt-6 flex items-center md:w-fit w-full gap-2 bg-white text-black px-4 py-4 rounded-full text-sm font-medium shadow-sm hover:bg-gray-100 transition">
          Buy Now
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white">
            <FiArrowUpRight size={14} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ComfortSection;
