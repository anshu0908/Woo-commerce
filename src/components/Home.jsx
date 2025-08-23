import React from 'react'
import Navbar from './Navbar'
import BrandSection from './BrandSection'
import ProductShowcase from './ProductShowcase'
import FabricSection from './FabricSection'
import Products from './ProductSection'
import Footer from './Footer'
import ComfortSection from './ComfortSection'

const Home = () => {
  return (
   <div>
 
  <BrandSection />    {/* Section to show brand identity / brand details */}
  <ProductShowcase /> {/* Section to highlight featured products */}
  <FabricSection />   {/* Section to describe fabric / material info */}
  <Products />        {/* Main product listing (shirts, sweatshirts, etc.) */}
 <ComfortSection/>
</div>
  )
}

export default Home