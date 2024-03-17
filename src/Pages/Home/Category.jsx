import React from 'react'
import { Link } from 'react-router-dom';
import brand4 from "../../../public/Images/Company/brand4.png";
import brand1 from "../../../public/Images/Company/brand1.png";
import brand2 from "../../../public/Images/Company/brand2.png";
import brand3 from "../../../public/Images/Company/brand3.png";
import image1 from "../../../public/Images/Category/image1.png";



const companyLogo=[
    {id:1, img:"Images/Company/brand1.png"},
    {id:2, img:"Images/Company/brand2.png"},
    {id:3, img:"Images/Company/brand3.png"},
    {id:4, img:"Images/Company/brand4.png"},
    {id:5, img:"Images/Company/brand5.png"},
]

const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
        <div className='flex justify-around flex-wrap items-center py-6 gap-5'>
            {
                companyLogo.map(({id,img}) =>(
                    <div key={id}><img src={img} alt="" /></div>
                ))
            }
        </div>

        {/* Category grid */}
        <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
            <p className='font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-1.d p-2 rounded-sm inline-flex'>Explore new and popular styles</p>

            <div>
                
                <Link to="/"> <img src="/Images/Category/image1.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
            </div>
            <div className='md:w-1/2'>
                <div className='grid grid-cols-2 gap-2'>
                    <Link to="/"> <img src="/Images/Category/image2.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
                    <Link to="/"> <img src="/Images/Category/image3.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
                    <Link to="/"> <img src="/Images/Category/image4.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
                    <Link to="/"> <img src="/Images/Category/image5.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
                </div>
           
            </div>
        </div>
    </div>
  )
}

export default Category