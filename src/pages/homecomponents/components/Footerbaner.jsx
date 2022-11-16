import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../../constant'

export const Footerbaner = () => {
  return (
    <section
    className="relative bg-[#A02279] text-white bg-cover "
  >
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex space-x-5 space-y-5 lg:items-center lg:p-8"
    >
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl font-extrabold sm:text-5xl">Metabnb NFTs</h1>
          
        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
        </p>
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <Link
            to="#"
            className="block w-full rounded bg-white  px-12 py-3 text-sm font-medium text-[#A02279] shadow hover:font-bold focus:outline-none focus:ring active:font-bold sm:w-auto"
          >
            Get Started
          </Link>
  
        </div>
      </div>
      <div className="flex-1 max-h-min">
            <img src={images.footerbanner} alt="banner" className="w-full max-h-min h-96" />
          </div>
    </div>
    
  </section>
  
  )
}
