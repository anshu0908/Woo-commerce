import React from "react";

const BrandSection = () => {
  return (
    <section className="px-6 mb-12">
      <div className="text-xs text-gray-500 mb-2">
        BRAND
        <br />
        AINOS
        <br />
        COLLECTION
      </div>

      <div className="my-12">
        <h1 className="lg:text-[12rem] text-5xl font-black leading-none tracking-tight">
          AINOS<sup className="text-4xl">®</sup>
        </h1>
      </div>

      <div className="text-xs text-gray-400 max-w-md">
        AINOS is a fashion brand that creates sustainable, high-quality clothing for the modern consumer.
      </div>
    </section>
  );
};

export default BrandSection;
