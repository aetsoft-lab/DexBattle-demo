import Image from 'next/image';
import {Link} from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { social } from '../info.config';


function Navbar () {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
    <div className='fixed z-[100] w-full h-auto bg-black/30 backdrop-blur-sm overflow-hidden border-b-white'>
      <ul className='flex flex-row items-center justify-between my-4 mx-10'>
        <a href='/'>
          <li>
          <img className = 'w-auto h-[55px]' 
            src = '/Dex.png'
          />
        </li>
        </a>
          <div className='hidden bg-gray-700/30 py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-md lg:text-[20px] md:text-[16px] text-sm'>
            <a className="cursor-pointer bg-white hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent" href='/'><h1 className='mx-4'>Home</h1></a>
          </div>

        <li>
        <a href='/mintingPortal'>
        <div className='hidden py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white font-semibold border border-white hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 hover:text-black  hover:font-semibold'>
            <h1 className='mx-4 uppercase tracking-wide'>Mint now</h1>

          </div>
          </a>
        </li>
        <li className='md:hidden'>
        <div onClick={handleNav}
          className=' md:hidden rounded-md p-2 bg-white mr-2 cursor-pointer' >
            <AiOutlineMenu size={18} />
          </div>
        </li>

      </ul>
      
      </div>
            {/* Mobile Menu */}
      {/* Overlay */}
      <div className={
         nav? 'z-[120] md:hidden fixed left-0 top-0 w-full h-screen bg-gray-400/10 backdrop-filter backdrop-blur-sm' : ""
        }>
        
        {/* Side Drawer Menu */}
      <div className ={
        nav? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500 border-r-2"
      :'fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen'
      }>
      <div className='flex w-full items-center justify-between'>
      <a className="cursor-pointer" href='/'>
                
                  <Image
                    src="/Dex.png"
                    width='45'
                    height='45'
                    alt='/'
                    className="rounded-md"
                  />
                
              </a>
              <div onClick={handleNav}
              className='fixed md:right-[-100%] rounded-full bg-gray-400 hover:shadow-lg hover:shadow-gray-600 p-3 cursor-pointer '>
              <AiOutlineClose size={18} />
             </div>
          </div>
          <div className='border-b py-4 flex flex-col mt-4'>
              <p className='uppercase text-[18px] text-white font-Kanit text-center'>
              Dex Battle
              </p>
            </div>
            <div  className='py-4 flex flex-col '>
        <ul className='uppercase text-gray-200 font-Kanit text-center'>
            <li  className='py-4 text-sm hover:text-white'>
            <a onClick={() => setNav(false)} href='/'>Home</a>
            </li>
            <li  className='py-4 text-sm hover:text-white'>
            <a onClick={() => setNav(false)} href='/Aboutus' >About us</a>
            </li>
            <li  className='py-4 text-sm hover:text-white'>
            <a onClick={() => setNav(false)} href='/Contactus' >Contact Us</a>
            </li>
            <li>
        <div className='py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-md border border-white hover:bg-blue-200 hover:text-black mt-4'>
            <a href='/mintingPortal'><h1 className='mx-4 uppercase tracking-wide hover:font-semibold'>MINT NOW</h1> </a>

          </div>
          </li>
            
          </ul>

        </div>
        </div>
        

      </div>

    </div>
  )
}

export default Navbar
