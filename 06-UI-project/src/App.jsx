import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"


const App = () => {


  const user = [
    {
      img:"https://i.pinimg.com/736x/7d/f2/fb/7df2fbc4f4d2e2f9e48e70fa7a9999c4.jpg",
      intro:"",
      color:"black",
      tag: "Satisfied"
    },
    {
      img:"https://i.pinimg.com/736x/82/28/84/82288486b5da113403ded5a4f886fc63.jpg",
      intro:"",
      color:"orange",
      tag: "Underserved"
    },
    {
      img:"https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg",
      intro:"",
      color:"royalblue",
      tag: "Underbanked"
    },
    {
      img:"https://i.pinimg.com/1200x/e6/92/15/e692151bfc86c7d523697aa0dbd1a5d0.jpg",
      intro:"",
      color:"lightseagreen",
      tag: "Underwear"
    },
    {
      img:"https://i.pinimg.com/736x/34/da/e2/34dae2b1c9a2c38bfdc18bbb5a414149.jpg",
      intro:"",
      color:"pink",
      tag: "Undercover"
    }
  ]
  return (
    <div>
      <Section1 user={user}/>
      <Section2 />
    </div>
  )
}

export default App

