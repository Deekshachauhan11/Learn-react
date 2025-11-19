import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
  return (
    <div className='nav'>
      <h2>Sheryians</h2>
      <Navbar2  theme={props.theme}/>
    </div>
  )
}

export default Navbar
