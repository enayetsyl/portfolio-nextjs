import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import head from '@/public/header.jpg'

const Banner = () => {
  return (
    <div className="lg:mt-10 mt-12 flex flex-col lg:flex-row gap-10 justify-between items-center min-h-[80vh]">
  <div className="lg:w-1/2">
  <p className="text-2xl">Hello, I'm Enayet</p>

   <h1 className="text-6xl text-primary_text font-bold py-4"><span className="text-signature">Full</span>stack Developer </h1>
  
   <p className="text-justify capitalize">I'm  a dedicated web developer with expertise in the MERN stack. Fueled by creativity and a commitment to ethical practices, I bring a distinctive blend of skills and principles, eager to contribute as a developer in dynamic projects.</p>
  
   {/* button */}
   <div className="flex gap-4 my-5">
  
    <Link href={'/projects'}><button className="bg-signature py-2 px-3 rounded-lg text-white hover:bg-hover font-semibold">Explore Projects</button></Link>
    
    <Link href={'/contact'}
    ><button className="bg-signature py-2 px-3 rounded-lg text-white font-semibold hover:bg-hover">Reach Out</button></Link>
    
   </div>
  </div>
  
  {/* image div */}
  <div className="border border-signature rounded-full p-5">
  
    <Image src={head} alt="header-image" className="rounded-full h-96 w-96"/>
  </div>
  </div>
  )
}

export default Banner