import React, { useState } from 'react'

const App = () => {
  
const [num, setnum] = useState({name:"anuk", age:12})
  let fnc = () =>{
    setnum(num+1)
    setnum(num+1)
    setnum(num+1)
    
  }
  return (
    <div>
      <h1>{num.name}, {num.age}</h1>
      <button onClick={fnc}>click</button>
    </div>
  )
}

export default App


