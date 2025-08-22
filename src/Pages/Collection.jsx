import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Amber Blaze Classic Tee",
    price: "$250",
    sizes: "XS - XXXL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsJTIwd2VhcmluZyUyMGRlc2lnbmVyJTIwdCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    highlight: true,
  },
  {
    id: 2,
    name: "Amber Blaze Everyday Crew",
    price: "$350",
    sizes: "S - XXL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjB3ZWFyaW5nJTIwZGVzaWduZXIlMjB0JTIwc2hpcnRzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Amber Blaze Softwear Coat",
    price: "$500",
    sizes: "S - XL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1643308004429-ce3793d221a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwd2VhcmluZyUyMGRlc2lnbmVyJTIwdCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Amber Blaze Foundation Knit",
    price: "$350",
    sizes: "S - XXL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1601831000466-bad7b107a1bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsJTIwd2VhcmluZyUyMGRlc2lnbmVyJTIwdCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Amber Blaze Essential Hoodie",
    price: "$325",
    sizes: "S - XL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1685551207147-ad48e61bf72f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsJTIwd2VhcmluZyUyMGRlc2lnbmVyJTIwdCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Amber Blaze Active Longleeve",
    price: "$300",
    sizes: "S - XL",
    rating: 5,
    img: "https://images.unsplash.com/photo-1614495039153-e9cd13240469?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsJTIwd2VhcmluZyUyMGRlc2lnbmVyJTIwdCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Collection = () => {
  return (
    <div className="w-full min-h-screen bg-white px-10 py-12">
      {/* Top Filter + Search */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex gap-3 text-sm font-medium">
          <button className="px-4 py-1 border rounded-full hover:bg-black hover:text-white transition">
            Category
          </button>
          <button className="px-4 py-1 border rounded-full hover:bg-black hover:text-white transition">
            Size
          </button>
          <button className="px-4 py-1 border rounded-full bg-black text-white">
            Amber.
          </button>
          <button className="px-4 py-1 border rounded-full hover:bg-black hover:text-white transition">
            Price
          </button>
        </div>
        <div className="flex items-center gap-2 border px-3 py-1 rounded-full w-56">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="search"
            className="outline-none text-sm flex-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Left Sidebar */}
        <div className="col-span-3">
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
        <div className="col-span-9 grid grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative rounded-xl overflow-hidden border p-4 flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl ${
                product.highlight
                  ? "bg-gradient-to-br from-orange-100 to-orange-200"
                  : "bg-white shadow-sm"
              }`}
            >
              {/* Highlight top-right arrow */}
              {product.highlight && (
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                  <FiArrowUpRight className="text-lg" />
                </div>
              )}

              {/* Image */}
              <div className="w-full h-[320px] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="flex justify-between items-start mt-4">
                <div>
                  <h3 className="font-semibold text-base leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.sizes}</p>
                  <div className="flex text-black mt-1 text-sm">
                    {"★".repeat(product.rating)}
                  </div>
                </div>
                <p className="font-bold text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
