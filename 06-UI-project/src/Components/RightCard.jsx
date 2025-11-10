import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './Section1/RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full w-80 bg-amber-300 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src='https://i.pinimg.com/736x/7d/f2/fb/7df2fbc4f4d2e2f9e48e70fa7a9999c4.jpg' alt='img'></img>
    <RightCardContent />
    </div>
  )
}

export default RightCard
