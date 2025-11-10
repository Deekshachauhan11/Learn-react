import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Center = (props) => {
  return (
    <div className='pb-16 pt-6  flex gap-10 px-18 h-[90vh] items-center'>
      <LeftContent />
      <RightContent user={props.user}/>
      
    </div>
  )
}

export default Center
