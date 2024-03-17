import React, { useState } from 'react'
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import logo from "../../public/Logo/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen]=useState(false);

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems=[
        {title:"Jewellery & Accessories", path:"/"},
        {title:"Clothing & Shoes",path:"/"},
        {title:"Home & Living",path:"/"},
        {title:"Wedding & Party",path:"/"},
        {title:"Toys & Enterainment",path:"/"},
        {title:"Arts & Collectibles",path:"/"},
        {title:"Craft Supplies & Tools",path:"/"},
    ]
  return (
    <>
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
            <FaSearch className='text-black w-5 h-5 cursor-pointer hidden md:block' />
            {/* logo */}
            <a href="/"><img className="w-10 h-10 object-cover" src={logo} alt="" /></a>

            {/* account & shop */}
            <div className=' text-lg text-black sm:flex items-center gap-5 hidden'>
                <a href="/" className='flex items-center gap-2'><FaRegUser /> Account</a>
                <a href="/" className='flex items-center gap-2'><FaShoppingBag /> Shopping</a>
            </div>

            {/* navbar for sm devices */}
            <div className='sm:hidden' >
                <button onClick={toggleMenu}>
                    {
                        isMenuOpen ?   <FaTimes className='w-5 h-5 text-black'/> : <FaBars className='w-5 h-5 text-black'/>
                    }
                   
                </button>
            </div>

        </nav>
        <hr />
        {/* Categories */}
        <div className='pt-4'>
            <ul className=' lg:flex justify-between items-center text-black hidden'>
                {
                    navItems.map(({title,path})=>(
                        <li key={title} className='hover:text-orange-600'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        {/* only mobile menu items */}
        <div>
        <ul className={`bg-black text-white px-4 py-4 rounded ${isMenuOpen ? "":"hidden" }`}>
                {
                    navItems.map(({title,path})=>(
                        <li key={title} className='hover:text-orange-600 my-3 cursor-pointer'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    </header>

    </>
  )
    
}

export default Navbar