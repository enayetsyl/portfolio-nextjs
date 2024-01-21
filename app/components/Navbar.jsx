'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <div className='flex justify-between  items-center mt-7 relative'>
      {/* logo */}
      <h3 className='text-primary_text text-4xl font-bold'>Enayet <span className='text-signature'>.</span></h3>

      <div className='lg:flex hidden flex-row gap-7 text-xl'>
          <Link href='/'>Home</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/myself'>Myself</Link>
        </div>
          <Link href='/contact' className='text-xl'> 
          <MdMessage className='text-signature hidden lg:flex text-3xl'/>
          </Link>

      {/* menu */}
      <div >
     
      <IoMenu 
      onClick={() => setOpen((prevOpen) => !prevOpen)}
      className='text-4xl lg:hidden'/>
     
      </div>
    </div>
    {
        open && (
          <div className='flex flex-col gap-2 text-xl lg:hidden py-5'>
            <Link href='/'>Home</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/myself'>Myself</Link>
            <Link href='/contact'>Get In Touch</Link>
          </div>
        )
      }
    </>
  )
}

export default Navbar