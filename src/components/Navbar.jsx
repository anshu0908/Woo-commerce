import { FaBoxOpen, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { Link } from "react-router-dom";
import {  User } from "lucide-react";

const Navbar = () => {
  return (
    <section>
      {/* Header */}
      <header className="flex items-center justify-between px-3 py-4 text-sm">
        <div className="font-medium">LUXE</div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">03 06 24</span>
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      </header>

      {/* Barcode */}
      <div className="absolute top-12 right-3">
        <div className="flex flex-col items-end gap-1">
          <div className="flex">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-px h-12 bg-black"></div>
            ))}
          </div>
          <div className="text-xs tracking-wider">9 8 0 3 0 3 1 6 0 9</div>
        </div>
      </div>

      {/* Links */}
      <div className="text-xs px-3 mb-12 text-gray-500">
        BRAND
        <br />
        <a href="/">AINOS</a>
        <br />
        
        <Link to="/collection">COLLECTION</Link>
      </div>
    </section>
  );
};

export default Navbar;
