import React from "react";

const Navbar = () => {
  return (
     <section>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 text-sm">
        <div className="font-medium">MONE</div>
        <div className="text-gray-600">3 weeks ago, 14 friends</div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">03 06 24</span>
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      </header>

      {/* Barcode */}
      <div className="absolute top-12 right-6">
        <div className="flex flex-col items-end gap-1">
          <div className="flex gap-px">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-px h-12 bg-black"></div>
            ))}
          </div>
          <div className="text-xs tracking-wider">9 8 0 3 0 3 1 6 0 9</div>
        </div>
      </div>
    </section>

  );
};

export default Navbar;
