import { useMemo, useState } from "react";

function App() {
  function findPrimesUpTo(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);

    }

    return primes;
  }
  const [light, setLight] = useState(false)
  const [n,setN] = useState(0)

  const handleLight = () =>{
    setLight(!light)
  }

  const primes = useMemo(()=>{
    return findPrimesUpTo(n)

  },[n])


  return (


    <main style={{width:"500px", display:"flex", justifyContent:"center", alignItems:"center", height:"500px", backgroundColor: light ? "black" : "white" }}>
      <input onChange={(e) => setN(parseInt(e.target.value) || 0)} type="number"  />
      <input onChange={handleLight} checked={light}  type="checkbox" />
      <p>{primes.join(", ")}</p>
    </main>
  )
}

export default App
