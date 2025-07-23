import React, { useMemo, useState } from "react";

const names = [
  "Luka", "Ana", "Nika", "Saba", "Mariam", "Giorgi", "Elene", "Dato", "Nino", "Sandro",
  "Sopho", "Lasha", "Keti", "Irakli", "Tornike", "Natia", "Tamuna", "Beka", "Tako", "Guga",
  "Salome", "Lali", "Ia", "Zura", "Nugzar", "Shorena", "Gvantsa", "Maia", "Teona", "Ilia",
  "Bacho", "Vano", "Tatia", "Kote", "Nani", "Manana", "Niko", "Gela", "Lili", "Rati",
  "Nana", "Neli", "Saba", "Ana", "Megi", "Giorgi", "Eka", "Lika", "Tatia", "Dato"
];

const App = () => {
  const [search, setSearch] = useState("");

  const filteredNames = useMemo(() => {
    console.log("Filtering...");
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter a name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;