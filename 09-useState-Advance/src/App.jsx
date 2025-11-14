import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function val(){
    setnum(12)
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={val}>click</button>
    </div>
  )
}

export default App
