import React from 'react'
import Navbar from './Navbar'
import Center from './Center'

const section1 = (props) => {


  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Center user={props.user}/>
    </div>
  )
}

export default section1


