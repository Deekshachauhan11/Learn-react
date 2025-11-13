import React from 'react'

const App = () => {

  function btn(elem){
    console.log("hello")
  }
  return (
    <div>
      <button onClick={(elem)=>{
        btn(elem.target.value)
      }}>click</button>
    </div>
  )
}

export default App


