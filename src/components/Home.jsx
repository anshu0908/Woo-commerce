import React from 'react'
import Navbar from './Navbar'
import BrandSection from './BrandSection'
import ProductShowcase from './ProductShowcase'
import FabricSection from './FabricSection'
import Products from './Products'
import Footer from './Footer'

const Home = () => {
  return (
   <div>
  <Navbar />          {/* Top navigation bar (logo + links) */}
  <BrandSection />    {/* Section to show brand identity / brand details */}
  <ProductShowcase /> {/* Section to highlight featured products */}
  <FabricSection />   {/* Section to describe fabric / material info */}
  <Products />        {/* Main product listing (shirts, sweatshirts, etc.) */}
  <Footer />          {/* Footer with links, contact, social media */}
</div>
  )
}

export default Home