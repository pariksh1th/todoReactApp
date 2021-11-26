import React, { useState } from "react";
import TodoItem from "./TodoItems";

function App() {
  const [value, setvalue] = useState("");
  const [items, setItem] = useState([]);

  function updateItem(event) {
    const newValue = event.target.value;
    setvalue(newValue);
  }

  function addItem() {
    setItem((prevItems) => [...prevItems, value]);
    setvalue("");
  }

  function deleteItem(itemId) {
    setItem((prevItems) => {
      return prevItems.filter((nowItem, nowIndex) => nowIndex !== itemId);
    });
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
          {items.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              onChecked={deleteItem}
              text={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
