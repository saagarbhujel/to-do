import React from 'react'
import "./Body.css"

const Body = ({todoContent}) => {
  return (
    <>
      <div className="todo-list">
        <p className="todo-data">{todoContent}</p>
        <div>
          <button className="markBtn">+</button>
          <button className="deleteBtn">-</button>
        </div>
      </div>
    </>
  );
}

export default Body