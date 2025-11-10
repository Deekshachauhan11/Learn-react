import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './Section1/RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80  shrink-0 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.img} alt='img'></img>
    <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard
