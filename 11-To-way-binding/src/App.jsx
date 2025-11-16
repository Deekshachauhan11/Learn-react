import React, { useState } from 'react'

const App = () => {


  const [title, settitle] = useState("")
   const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form submit by", title)

    settitle("")
   }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your name:' onChange={(e)=>{
          value={title}
          settitle(e.target.value)
        }}></input>
        <button>click</button>
      </form>
    </div>
  )
}

export default App

