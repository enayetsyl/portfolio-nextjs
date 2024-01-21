import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

const Skill = ({text, value}) => {
  return (
    <div className='flex justify-between items-center gap-4'>
        <h1 className='text-primary_text text-2xl font-bold'>{text}</h1>
      <CircularProgress value={value} color='#0066CC' thickness={'14px'}>
  <CircularProgressLabel>{value}%</CircularProgressLabel>
</CircularProgress>
      </div>
  )
}

export default Skill