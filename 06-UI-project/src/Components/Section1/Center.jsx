import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = () => {
  return (
    <div className='py-10  flex gap-10 px-18 h-[90vh] items-center'>
      <LeftContent />
      <RightContent />
      
    </div>
  )
}

export default Center
