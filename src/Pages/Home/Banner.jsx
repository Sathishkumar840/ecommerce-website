import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import BannerImg from "../../../public/Logo/BannerImg.jpg"

const Banner = () => {
  return (
    <div className='bg-PrimaryBG py-12 xl:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-4 '>

              {/* img */}
            <div className='md:w-1/2'>
                <img className='w-1/2 h-1/2 object-cover rounded-full' src={BannerImg} alt="/" />
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>Collections</h1>
                <p className='text-xl mb-7'>
                    You can explore ans shop many different collection from various 
                    brands here.
                </p>
                <button className=' flex justify-between items-center gap-2 text-xl bg-black hover:bg-orange-500 px-6 py-3 text-white rounded'>
                    <FaShoppingBag className='inline-flex' />Shop Now
                </button>

            </div>
           

           
            
        </div>
    </div>
  )
}

export default Banner