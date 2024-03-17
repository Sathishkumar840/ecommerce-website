import React from 'react'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
        <h1 className='title m-b-8'>Follow products and discounts on Instagram</h1>
        {/* Instagrid */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
            <Link to="/">
                <img src="/public/Images/Instagram/card.png" alt="/" />
            </Link>
            <Link to="/">
                <img src="/public/Images/Instagram/card1.png" alt="/" />
            </Link>
            <Link to="/">
                <img src="/public/Images/Instagram/card2.png" alt="/" />
            </Link>
            <Link to="/">
                <img src="/public/Images/Instagram/card3.png" alt="/" />
            </Link>
            <Link to="/">
                <img src="/public/Images/Instagram/card4.png" alt="/" />
            </Link>
            <Link to="/">
                <img src="/public/Images/Instagram/card5.png" alt="/" />
            </Link>
        </div>

        <div>
            <h1 className='title'>Or subscribe to the newsletter</h1>
            <form>
                <input type="email" name='email' id="email" placeholder='Email Address.....' 
                className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5
                placeholder:text-red-300 mr-4' />

                <input type="submit" value={"Submit"} className='bg-black text-white px-6 py-1 rounded-sm' />
            </form>
        </div>
    </div>
  )
}



export default NewsLetter