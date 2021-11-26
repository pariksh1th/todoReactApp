import React, { useState } from "react";
import TodoItem from "./TodoItems";
import InputArea from "./InputArea";

function App() {
  const [items, setItem] = useState(["add items"]);

  function addItem(value) {
    setItem((prevItems) => [...prevItems, value]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((item) => (
            <TodoItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
