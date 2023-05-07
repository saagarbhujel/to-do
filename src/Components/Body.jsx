import React  from 'react'
import "./Body.css"
import axios from "axios";

const Body = ({ name, _id,setShouldRefresh }) => {



  // console.log(name);
  // console.log("name:", name);
  // console.log("_id:", _id);

  const deleteTodo = async () => {
    // console.log("deleting todo:", _id);

    // DELETE request
    await axios.delete(`https://react-workshop-todo.fly.dev/todos/${_id}`, {
      headers: {
        apiKey: "645666987213f63d43086426",
      },
    });
    setShouldRefresh((v) => !v);



    // console.log("deleted todo:", _id);

  };




  return (
    <>
      <div className="todo-list">
        <p className="todo-data">{name}</p>
        <div>
          {/* <button className="markBtn">+</button> */}
          <button className="deleteBtn" onClick={deleteTodo}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Body