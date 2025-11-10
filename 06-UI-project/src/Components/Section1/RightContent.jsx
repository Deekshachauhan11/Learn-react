import React from 'react'
import RightCard from '../RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-6 flex overflow-x-auto flex-nowrap gap-4'>
      {props.user.map(function(elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
    </div>
  )
}

export default RightContent
