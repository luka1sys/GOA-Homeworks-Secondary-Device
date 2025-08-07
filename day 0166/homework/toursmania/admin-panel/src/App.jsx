import { useState, useEffect } from "react";

const API = "http://localhost:3000";

function App() {
  const [tours, setTours] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", duration: "" });
  const [editId, setEditId] = useState(null);

  const loadTours = async () => {
    const res = await fetch(`${API}/tours`);
    const data = await res.json();
    setTours(data);
  };

  useEffect(() => {
    loadTours();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${API}/tour?id=${id}`, {
      method: "DELETE",
    });
    loadTours();
  };

  const handleEdit = async (id) => {
    const res = await fetch(`${API}/tour?id=${id}`);
    const data = await res.json();
    setForm(data);
    setEditId(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PATCH" : "POST";
    const endpoint = editId ? `${API}/tour?id=${editId}` : `${API}/tour`;

    await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", price: "", duration: "" });
    setEditId(null);
    loadTours();
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1> Admin Panel - Tours</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          placeholder="Tour Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          placeholder="Duration"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
          required
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          {editId ? "Update" : "Add"} Tour
        </button>
      </form>

      <ul>
        {tours.map((tour) => (
          <li key={tour.id} style={{ marginBottom: "10px" }}>
            <b>{tour.name}</b> - ${tour.price} - {tour.duration}
            <button onClick={() => handleEdit(tour.id)} style={{ marginLeft: "10px" }}>
              Edit
            </button>
            <button onClick={() => handleDelete(tour.id)} style={{ marginLeft: "5px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
