import React from "react";

const FabricSection = () => {
  return (
    <section className="px-6 mb-12">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="relative">
          <div className="text-xs text-gray-600 mb-4">
            FABRIC & FIT
            <br />
            PREMIUM
            <br />
            CONSTRUCTION
          </div>
          <div
            className="aspect-square rounded-lg overflow-hidden"
            style={{
              backgroundImage:
                "url(https://shoptommy.scene7.com/is/image/ShopTommy/78J9397_FAP_main?wid=1728&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp)",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          />
          <div className="absolute bottom-4 hidden md:block left-4 text-xs text-gray-600">
            SUPER SOFT
            <br />
            ORGANIC
            <br />
            COTTON
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="text-xs text-gray-600 mb-4">
            IMAGINATION AND
            <br />
            CREATIVITY FOR
            <br />
            IMPRESSION
          </div>
          <div
            className="aspect-square rounded-lg overflow-hidden"
            style={{
              backgroundImage:
                "url(https://shoptommy.scene7.com/is/image/ShopTommy/XM05637_XJS_main?wid=1728&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp)",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          />
        </div>
      </div>

      {/* Page footer (from original main content) */}
      <div className="text-xs text-gray-400 pb-8 mt-8">
        <div className="flex justify-between items-end">
          <div>
            AINOS COLLECTION
            <br />
            SPRING/SUMMER 2024
          </div>
          <div className="text-right">
            PAGE
            <br />
            01
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricSection;
