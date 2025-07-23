import { useState } from "react"
import MyText from "./myText"


function App() {
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(count+1)
  }


  return (
    <>
    <p>{count}</p>
    <button onClick={handleClick}>click</button>
    <MyText/>


    </>
  )
}

export default App
