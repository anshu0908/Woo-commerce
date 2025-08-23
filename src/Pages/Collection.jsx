import React, { useState } from "react";
import { FaArrowRight, FaSearch, FaChevronDown } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Amber Blaze Classic Tee",
    price: "$250",
    sizes: "XS - XXXL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=60",
    highlight: true,
  },
  {
    id: 2,
    name: "Amber Blaze Everyday Crew",
    price: "$350",
    sizes: "S - XXL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Amber Blaze Softwear Coat",
    price: "$500",
    sizes: "S - XL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1643308004429-ce3793d221a3?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Amber Blaze Foundation Knit",
    price: "$350",
    sizes: "S - XXL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1601831000466-bad7b107a1bf?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Amber Blaze Essential Hoodie",
    price: "$325",
    sizes: "S - XL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1685551207147-ad48e61bf72f?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Amber Blaze Active Longleeve",
    price: "$300",
    sizes: "S - XL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1614495039153-e9cd13240469?w=600&auto=format&fit=crop&q=60",
  },
];

const Collection = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="w-full min-h-screen bg-white px-3 py-12">
      {/* Top Filter + Search */}
      <div className="flex text-4xl font-semibold justify-between mb-6">
        <h3>Filter by</h3>
        <h3 className="md:block hidden">Search</h3>
      </div>
      <div className="flex justify-between items-center mb-12 relative">
        <div className="flex gap-3 text-sm font-medium">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("category")}
              className="px-4 py-1 border rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition"
            >
              Category <FaChevronDown className="text-xs" />
            </button>
            {openDropdown === "category" && (
              <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-40 z-10">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">T-Shirts</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hoodies</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jackets</li>
                </ul>
              </div>
            )}
          </div>

          {/* Size Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("size")}
              className="px-4 py-1 border rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition"
            >
              Size <FaChevronDown className="text-xs" />
            </button>
            {openDropdown === "size" && (
              <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-40 z-10">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">XS</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">S</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">M</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">L</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">XL</li>
                </ul>
              </div>
            )}
          </div>

          {/* Price Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("price")}
              className="px-4 py-1 border rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition"
            >
              Price <FaChevronDown className="text-xs" />
            </button>
            {openDropdown === "price" && (
              <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-40 z-10">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Under $200</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">$200 - $400</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">$400 - $600</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="md:flex hidden items-center gap-2 border px-3 py-1 rounded-full w-56">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="search"
            className="outline-none text-sm flex-1"
          />
        </div>
      </div>

      {/* Products Section */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* Left Sidebar */}
        <div className="md:col-span-3 col-span-10">
          <p className="text-sm text-gray-400 mb-2">/02</p>
          <h2 className="text-4xl font-bold mb-4">Amber Glow</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Bring warmth to every layer and bold comfort with a soft edge, rich
            hues for effortless days for you.
          </p>
          <button className="flex items-center gap-2 border px-5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition">
            Explore All <FaArrowRight />
          </button>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-9 col-span-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-xl overflow-hidden shadow-md bg-white group transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div
                className="w-full h-[380px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.img})` }}
              ></div>

              {/* Floating Info Card */}
              <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl shadow-md px-4 py-3 flex justify-between items-start transition duration-300 group-hover:shadow-lg">
                <div>
                  <h3 className=" text-base leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex text-yellow-500 text-sm">
                    {"★".repeat(product.rating)}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{product.sizes}</p>
                </div>
                <p className=" text-lg">{product.price}</p>
              </div>

              {/* Floating Arrow */}
              <button
                className="absolute bottom-[28%] right-3 bg-white rounded-full p-2 shadow-md 
                opacity-0 translate-y-2 scale-90 
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 
                transition-all duration-300 ease-out"
              >
                <FiArrowUpRight className="text-lg text-gray-700 group-hover:text-black" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
