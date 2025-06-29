import './App.css'
import useCounter from './myHook'

function App() {
  const [count,handleclick,handleDissolution] = useCounter()

  return (
    <>
    <p>{count}</p>
    <button onClick={handleclick}>click</button>
    <button onClick={handleDissolution}>Dissolution</button>

    </>
  )
}

export default App
