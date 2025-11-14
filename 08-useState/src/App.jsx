import React, { useState } from 'react'

const App = () => {

const [num, setnum] = useState(0)


  function inc(){
    setnum(num+1)
  }
  function dec(){
   setnum(num-1)
  }
   function jump(){
   setnum(num+5)
  }

  return (
    <div className='big'>
      <h1>{num}</h1>
      <div>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={jump}>Jump by 5</button>
      </div>

    </div>
  )
}

export default App


