import React from 'react'
import "./Body.css"

const Body = () => {
  return (
    <>
      <div className="todo-list">
        <p className="todo-data">i have to do a work</p>
        <div>
          <button className="markBtn">+</button>
          <button className="deleteBtn">-</button>
        </div>
      </div>
    </>
  );
}

export default Body