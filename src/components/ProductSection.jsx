import React from "react";

const Products = () => {
  // ✅ Dynamic product data
  const shirtProducts = [
    {
      id: 1,
      name: "Textured cotton-linen t-shirt",
      price: 28.99,
      img: "https://shoptommy.scene7.com/is/image/ShopTommy/78J8297_FAP_main?wid=535&hei=705&qlt=80%2C0",
    },
    {
      id: 2,
      name: "Basic cotton stretch T-shirt",
      price: 22.99,
      img: "https://shoptommy.scene7.com/is/image/ShopTommy/XM05630_VLP_main?wid=535&hei=705&qlt=80%2C0",
    },
    {
      id: 3,
      name: "Basic lightweight cotton t-shirt",
      price: 21.99,
      img: "https://shoptommy.scene7.com/is/image/ShopTommy/XM05637_XJS_alternate10?wid=1728&qlt=80%2C0",
    },
    {
      id: 4,
      name: "100% linen slim-fit t-shirt",
      price: 19.99,
      img: "https://shoptommy.scene7.com/is/image/ShopTommy/XM05637_XJS_alternate10?wid=1728&qlt=80%2C0",
    },
    {
      id: 5,
      name: "Basic cotton V-neck T-shirt",
      price: 24.99,
      img: "/placeholder.svg?height=600&width=450",
    },
    {
      id: 6,
      name: "Basic cotton stretch T-shirt",
      price: 22.99,
      img: "/placeholder.svg?height=600&width=450",
    },
  ];

  // Reuse the same products for sweatshirts
  const sweatshirtProducts = [...shirtProducts];

  // ✅ Reusable Product Card
  const ProductCard = ({ product }) => (
    <div className="space-y-4">
      <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-medium">{product.name}</h3>
        <p className="text-lg font-semibold">₹{product.price}</p>
      </div>
    </div>
  );

  return (
    <section>
         <div className="flex flex-col ">
          {/* Left Content */}
          <div className="flex-1 flex md:flex-row flex-col justify-center px-8 lg:px-16">
            {/* Star decoration */}
            <div className="mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z" fill="currentColor" />
              </svg>
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-12">
              UNVEIL A WORLD OF TIMELESS PIECES AND CONTEMPORARY DESIGNS...
            </h1>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              Every garment and accessory is meticulously crafted to echo timeless beauty.
            </p>
          </div>
        </div>
      {/* ---------- First Marquee (Shirts) ---------- */}
      <div className="overflow-hidden whitespace-nowrap py-8 bg-white">
        <div className="animate-marquee inline-block text-8xl md:text-9xl font-black tracking-tight">
          SHIRT&nbsp;•&nbsp;BASIC COTTON&nbsp; SHIRT&nbsp;•&nbsp;BASIC COTTON&nbsp; SHIRT&nbsp;•&nbsp;BASIC COTTON
        </div>
      </div>

      {/* ---------- Product Grid (Shirts) ---------- */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-7xl mx-auto">
          {shirtProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      

    </section>
  );
};

export default Products;
