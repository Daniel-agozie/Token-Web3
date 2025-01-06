import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Squeeze as Hamburger} from 'hamburger-react'
import { Link } from "react-scroll"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='bg-black p-5 text-light flex items-center animate-slideleft'>
      <div className='flex flex-1'>
        <div className='text-hunter font-bold font-playFair ml-4'>💎 DAN TOKEN</div>
      </div>


      <Hamburger toggled={isOpen} toggle={setOpen} duration={0.5} easing="ease-in" color="#4FD1C5" />

      {isOpen && (
        <div className='absolute right-0 top-16 md:top-5'>
        <div className='flex md:flex-row flex-col flex-1 gap-4 w-28 justify-end cursor-pointer text-sm mr-10 '>
              <Link to="/" spy={true} smooth={true} offset={-100} duration={1000} className='ml-5'> Home    </Link>
              <Link to="/claim" spy={true} smooth={true} offset={-100} duration={1000} className='ml-5'> Claim   </Link>
              <Link to="/balance"  spy={true} smooth={true} offset={-100} duration={1000}className='ml-5'> Balance </Link>
              <Link to="/transfer"  spy={true} smooth={true} offset={-100} duration={1000} className='ml-5'>Transfer </Link>
              </div>
           </div>
          )}



    </nav>
  )
}

export default Header