import React, { useState } from "react";

function InputArea(props) {
  const [value, setvalue] = useState("");
  function updateItem(event) {
    const newValue = event.target.value;
    setvalue(newValue);
  }
  return (
    <div className="form">
      <input onChange={updateItem} type="text" value={value} />
      <button
        onClick={() => {
          props.onAdd(value);
          setvalue("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
