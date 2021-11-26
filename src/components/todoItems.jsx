import React from "react";

function TodoItem(props) {
  const [isDone, setIsDeco] = React.useState(false);

  function handelClick() {
    setIsDeco((prevValue) => !prevValue);
  }

  return (
    <div>
      <li
        onClick={handelClick}
        style={{ textDecorationLine: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default TodoItem;
