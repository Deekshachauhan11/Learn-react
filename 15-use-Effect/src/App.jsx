import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function Achanging(){
    console.log("A ki value cange ho gyi")
  }
  
  function Bchanging(){
    console.log("B ki value cange ho gyi")
  }

  useEffect(function () {
    Achanging()
    Bchanging()
  }, [a, b]);

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Click A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Click B
      </button>
    </div>
  );
};

export default App;
