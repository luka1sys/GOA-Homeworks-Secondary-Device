import { useCallback, useState } from 'react'
import Greet from './Greet'
import Counter from './counter'


function App() {
   const [count, setCount] = useState(0)
   const increment =useCallback(() =>{
    setCount(count+1)
  },[])

  return (
    <>
    
    <Greet text ="hayy"/>
    <Counter increment={increment} count={count}/>
    

    </>
  )
}


export default App
