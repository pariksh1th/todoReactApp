import React, { useState } from "react";
import List from "./list";

function App() {
  const [value, setvalue] = useState("");
  const [items, setItem] = useState(["add items"]);

  function updateItem(event) {
    const newValue = event.target.value;
    setvalue(newValue);
  }

  function addItem() {
    setItem((prevItems) => [...prevItems, value]);
    setvalue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateItem} type="text" value={value} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
