import { useState } from 'react'
import { RoleContext } from './context'
import { ShowRole } from './ShowRole'


function App() {
  const [count, setCount] = useState("")

  const handleClickguest = () => {
    setCount("“Hello Guest! Feel free to explore.”")
  }

  const handleClickmember = () => {
    setCount("“Welcome back, Member!”")
  }
  const handleClickadmin = () => {
    setCount("“Hello Admin! You have full access.”")
  }




  return (
    <>
      <RoleContext.Provider value={count}>
        <ShowRole />
      </RoleContext.Provider>
      <button onClick={handleClickguest}>guest</button>
      <button onClick={handleClickmember}>member</button>
      <button onClick={handleClickadmin}>admin</button>

    </>
  )
}

export default App
