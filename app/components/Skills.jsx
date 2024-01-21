import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Skill from './Skill'

const Skills = () => {
  return (
    <div>
      {/* section heading */}
      <h1 className='text-6xl py-5 mb-5'>Skills<span className='text-signature'>.</span></h1>
      {/* Progress bar */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      <Skill text="HTML" value={95}/>
      <Skill text="CSS" value={95}/>
      <Skill text="TAILWIND" value={95}/>
      <Skill text="MATERIAL UI" value={90}/>
      <Skill text="CHAKRA UI" value={90}/>
      <Skill text="JAVASCRIPT" value={60}/>
      <Skill text="REACT" value={80}/>
      <Skill text="NEXT JS" value={70}/>
      <Skill text="NODE JS" value={80}/>
      <Skill text="EXPRESS" value={80}/>
      <Skill text="MONGODB" value={85}/>
      <Skill text="MONGOOSE" value={65}/>
      </div>
    </div>
  )
}

export default Skills