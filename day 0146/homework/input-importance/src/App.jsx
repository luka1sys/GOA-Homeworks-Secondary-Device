import useInput from './usetheme';
import './App.css'

function App() {
  const [value, handleChange] = useInput()

  return (
    <>
      <input type="email" name="email"  onChange={handleChange} />
      <input type="password" name='pass' onChange={handleChange} />
      <p>email: {value.email}</p>
      <p>pass: {value.pass}</p>
    </>
  )
}

export default App
