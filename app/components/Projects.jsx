import Image from 'next/image'
import React from 'react'
import project_1 from '@/public/project-1.png'
import project_2 from '@/public/project-2.png'
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='my-10'>
      <h1 className='text-6xl py-5'>Projects<span className='text-signature'>.</span></h1>
     {/* first */}
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-5'>
        {/* left div */}
        <div className='h-[500px] w-full lg:w-1/3'>
          <div className='lg:h-2/3 h-[55%] rounded-xl bg-sky-100 flex justify-center items-center overflow-hidden'>
          <Image
          src={project_1}
          alt='project-1' className='px-8 h-60 lg:h-72 rounded-2xl cursor-pointer'
          />
          </div>
          {/* website name and icon */}
          <div className='flex justify-between items-center pt-3 gap-4'>
          <div className='flex justify-start font-bold lg:text-xl gap-2 items-center'>
            <h1>Avengers Web</h1>
            <LuArrowUpRightFromCircle className='text-signature hover:text-hover cursor-pointer'/>
          </div>
          {/* video link */}
          <Link href={'https://drive.google.com/file/d/1CdJMSNhSxcgNj5kAH3fNxpjDISJp-52S/view?usp=sharing'} target='_blank'><h1 className='font-bold lg:text-xl underline  hover:text-hover cursor-pointer'>Watch</h1></Link>

          <Link href={'https://avengers--web.web.app/about'} target='_blank'> 
          <h1 className='font-bold lg:text-xl underline hover:text-hover cursor-pointer'>Read</h1>
          </Link>

          </div>
          <p className='pt-3 text-sm lg:text-base'>A comprehensive MERN project designed to streamline the daily operational activities of a web development company, offering robust management functionalities for detailed reporting and analysis.</p>
        </div>
        {/* right div */}
        <div className='h-[500px] w-full lg:w-2/3 lg:mt-40'>
          <div className='lg:h-2/3 h-[55%] rounded-xl bg-sky-100 flex justify-center items-center overflow-hidden'>
          <Image
          src={project_1}
          alt='project-1' className='px-8 h-60 lg:h-72 rounded-2xl cursor-pointer'
          />
          </div>
          {/* website name and icon */}
          <div className='flex justify-between items-center pt-3 gap-4'>
          <div className='flex justify-start font-bold lg:text-xl gap-2 items-center'>
            <h1>Avengers Web</h1>
            <LuArrowUpRightFromCircle className='text-signature hover:text-hover cursor-pointer'/>
          </div>
          {/* video link */}
          <Link href={'https://drive.google.com/file/d/1CdJMSNhSxcgNj5kAH3fNxpjDISJp-52S/view?usp=sharing'} target='_blank'><h1 className='font-bold lg:text-xl underline  hover:text-hover cursor-pointer'>Watch</h1></Link>

          <Link href={'https://avengers--web.web.app/about'} target='_blank'> 
          <h1 className='font-bold lg:text-xl underline hover:text-hover cursor-pointer'>Read</h1>
          </Link>

          </div>
          <p className='pt-3 text-sm lg:text-base'>A comprehensive MERN project designed to streamline the daily operational activities of a web development company, offering robust management functionalities for detailed reporting and analysis.</p>
        </div>
        </div>      
     {/* second */}
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-5'>
      
        {/* left div */}
        <div className='h-[500px] w-full lg:w-2/3 lg:mt-40'>
          <div className='lg:h-2/3 h-[55%] rounded-xl bg-sky-100 flex justify-center items-center overflow-hidden'>
          <Image
          src={project_1}
          alt='project-1' className='px-8 h-60 lg:h-72 rounded-2xl cursor-pointer'
          />
          </div>
          {/* website name and icon */}
          <div className='flex justify-between items-center pt-3 gap-4'>
          <div className='flex justify-start font-bold lg:text-xl gap-2 items-center'>
            <h1>Avengers Web</h1>
            <LuArrowUpRightFromCircle className='text-signature hover:text-hover cursor-pointer'/>
          </div>
          {/* video link */}
          <Link href={'https://drive.google.com/file/d/1CdJMSNhSxcgNj5kAH3fNxpjDISJp-52S/view?usp=sharing'} target='_blank'><h1 className='font-bold lg:text-xl underline  hover:text-hover cursor-pointer'>Watch</h1></Link>

          <Link href={'https://avengers--web.web.app/about'} target='_blank'> 
          <h1 className='font-bold lg:text-xl underline hover:text-hover cursor-pointer'>Read</h1>
          </Link>

          </div>
          <p className='pt-3 text-sm lg:text-base'>A comprehensive MERN project designed to streamline the daily operational activities of a web development company, offering robust management functionalities for detailed reporting and analysis.</p>
        </div>

  {/* right div */}
  <div className='h-[500px] w-full lg:w-1/3'>
          <div className='lg:h-2/3 h-[55%] rounded-xl bg-sky-100 flex justify-center items-center overflow-hidden'>
          <Image
          src={project_1}
          alt='project-1' className='px-8 h-60 lg:h-72 rounded-2xl cursor-pointer'
          />
          </div>
          {/* website name and icon */}
          <div className='flex justify-between items-center pt-3 gap-4'>
          <div className='flex justify-start font-bold lg:text-xl gap-2 items-center'>
            <h1>Avengers Web</h1>
            <LuArrowUpRightFromCircle className='text-signature hover:text-hover cursor-pointer'/>
          </div>
          {/* video link */}
          <Link href={'https://drive.google.com/file/d/1CdJMSNhSxcgNj5kAH3fNxpjDISJp-52S/view?usp=sharing'} target='_blank'><h1 className='font-bold lg:text-xl underline  hover:text-hover cursor-pointer'>Watch</h1></Link>

          <Link href={'https://avengers--web.web.app/about'} target='_blank'> 
          <h1 className='font-bold lg:text-xl underline hover:text-hover cursor-pointer'>Read</h1>
          </Link>

          </div>
          <p className='pt-3 text-sm lg:text-base'>A comprehensive MERN project designed to streamline the daily operational activities of a web development company, offering robust management functionalities for detailed reporting and analysis.</p>
        </div>

        </div>    
          
     {/* third */}
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-5'>
        {/* left div */}
        <div className='h-[500px] w-full lg:w-1/3'>
          <div className='lg:h-2/3 h-[55%] rounded-xl bg-sky-100 flex justify-center items-center overflow-hidden'>
          <Image
          src={project_1}
          alt='project-1' className='px-8 h-60 lg:h-72 rounded-2xl cursor-pointer'
          />
          </div>
          {/* website name and icon */}
          <div className='flex justify-between items-center pt-3 gap-4'>
          <div className='flex justify-start font-bold lg:text-xl gap-2 items-center'>
            <h1>Avengers Web</h1>
            <LuArrowUpRightFromCircle className='text-signature hover:text-hover cursor-pointer'/>
          </div>
          {/* video link */}
          <Link href={'https://drive.google.com/file/d/1CdJMSNhSxcgNj5kAH3fNxpjDISJp-52S/view?usp=sharing'} target='_blank'><h1 className='font-bold lg:text-xl underline  hover:text-hover cursor-pointer'>Watch</h1></Link>

          <Link href={'https://avengers--web.web.app/about'} target='_blank'> 
          <h1 className='font-bold lg:text-xl underline hover:text-hover cursor-pointer'>Read</h1>
          </Link>

          </div>
          <p className='pt-3 text-sm lg:text-base'>A comprehensive MERN project designed to streamline the daily operational activities of a web development company, offering robust management functionalities for detailed reporting and analysis.</p>
        </div>
        {/* right div */}
        <div className='h-[500px] w-full lg:w-2/3 lg:mt-40'>
          <div className='lg:h-2/3 h-[55%] rounded-xl bg-sky-100 flex justify-center items-center overflow-hidden'>
          <Image
          src={project_1}
          alt='project-1' className='px-8 h-60 lg:h-72 rounded-2xl cursor-pointer'
          />
          </div>
          {/* website name and icon */}
          <div className='flex justify-between items-center pt-3 gap-4'>
          <div className='flex justify-start font-bold lg:text-xl gap-2 items-center'>
            <h1>Avengers Web</h1>
            <LuArrowUpRightFromCircle className='text-signature hover:text-hover cursor-pointer'/>
          </div>
          {/* video link */}
          <Link href={'https://drive.google.com/file/d/1CdJMSNhSxcgNj5kAH3fNxpjDISJp-52S/view?usp=sharing'} target='_blank'><h1 className='font-bold lg:text-xl underline  hover:text-hover cursor-pointer'>Watch</h1></Link>

          <Link href={'https://avengers--web.web.app/about'} target='_blank'> 
          <h1 className='font-bold lg:text-xl underline hover:text-hover cursor-pointer'>Read</h1>
          </Link>

          </div>
          <p className='pt-3 text-sm lg:text-base'>A comprehensive MERN project designed to streamline the daily operational activities of a web development company, offering robust management functionalities for detailed reporting and analysis.</p>
        </div>
        </div>      
    </div>
  )
}
export default Projects