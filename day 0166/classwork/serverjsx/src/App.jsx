import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/tours');
        const data = await response.json();
        setTours(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {tours.map(tour => (
          <li key={tour.id}>
            <h2>{tour.name}</h2>
            <p>{tour.summary}</p>
            <strong>${tour.price}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;