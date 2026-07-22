import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const API = import.meta.env.VITE_API_URL;
  const getData = async () => {
    try {
      debugger;
      const response = await fetch(`http://localhost:8000/hello/${name}`);
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }}
  return (
    <div style={{ padding: 40 }}>
      <h1>Hello App</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <button onClick={getData} style={{ marginLeft: 10 }}>
        Submit
      </button>
    </div>
  );
}

export default App;