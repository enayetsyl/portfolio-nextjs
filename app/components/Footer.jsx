import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='border-t border-signature py-5 mt-10 flex justify-between items-center'>
      <div className='flex justify-center items-center gap-10'>
      <Link href='/' target='_blank'>Home</Link>
          <Link href='/projects' target='_blank'>Projects</Link>
          <Link href='/myself' target='_blank'>Myself</Link>
      </div>
      <h1 className='font-bold'>Whatsapp 880 1730 197 620</h1>
      <div className='flex justify-center items-center text-2xl text-signature gap-10'>
        <Link href={'https://www.facebook.com/profile.php?id=100094416483981'} target='_blank'>
        <FaFacebookF />
        </Link>
        <Link href={'https://www.linkedin.com/in/md-enayetur-rahman/'} target='_blank'>
        <LuLinkedin /></Link>
        <Link href={
          'https://twitter.com/enayetu_syl'
        } target='_blank'>
        <FiTwitter />
        </Link>
      </div>
    </div>
  )
}

export default Footer