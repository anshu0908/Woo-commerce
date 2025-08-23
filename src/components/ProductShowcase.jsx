import React from "react";

const ProductShowcase = () => {
  return (
    <section className="px-6 mb-12">
      <div className="relative">
        <video
          src="https://media.tommy.com/us/static/images/scheduled_marketing/video/TILE4_1366x812_D.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto"
        />

        {/* Overlay text elements */}
        <div className="absolute top-4 left-4 text-xs md:block hidden text-gray-600">
          CLOTHING <br /> ESSENTIAL <br /> WARDROBE
        </div>
        <div className="absolute top-4 right-4 md:block hidden text-xs text-gray-600">
          STYLE <br /> MODERN <br /> COMFORT
        </div>

        {/* Model labels */}
        <div className="absolute bottom-20 md:block hidden left-8 text-xs text-gray-600">
          MARCUS <br /> ESSENTIAL <br /> WHITE TEE
        </div>
        <div className="absolute bottom-20 md:block hidden left-1/4 text-xs text-gray-600">
          ALEX <br /> LIME <br /> HOODIE
        </div>
        <div className="absolute bottom-20 md:block hidden left-1/2 text-xs text-gray-600">
          JORDAN <br /> LAVENDER <br /> SWEATSHIRT
        </div>
        <div className="absolute bottom-20 md:block hidden right-8 text-xs text-gray-600">
          DAVID <br /> CORAL <br /> CREWNECK
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
