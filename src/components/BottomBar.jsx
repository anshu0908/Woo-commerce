import { Handbag, Home, House, Package, Phone, Search, TvMinimal, UserRound } from 'lucide-react'
import React from 'react'
import { FaBoxOpen, FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const BottomBar = () => {
  return (
<div className='flex items-center justify-center w-full z-50'>
        <div className='fixed bottom-5 bg-black px-12 rounded-4xl p-4 z-50'>
                <div className="text-gray-100 text-xl flex gap-10 ">
                    <div className="hover:text-black cursor-pointer">
                    <Search strokeWidth={0.75} />
                    </div>
                  <div className="hover:text-black cursor-pointer">
                    <Handbag strokeWidth={0.75} />
                    </div>
                                       <div className="hover:text-black cursor-pointer">
                 <TvMinimal color="#ffffff" strokeWidth={0.75} fill='#E4FF75' />
                   </div> 
                   <div className="hover:text-black cursor-pointer">
                 <Package strokeWidth={0.75} />
                   </div>
                    <div className=" cursor-pointer hover:text-black">
               <UserRound strokeWidth={1} />
              </div>
                </div>
        
    </div>
</div>
  )
}

export default BottomBar