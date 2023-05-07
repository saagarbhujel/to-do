import React, { useState} from 'react'
import "./Input.css"
import axios from 'axios';

const Input = ({ setShouldRefresh }) => {
  const [todoInput, setTodoInput] = useState("");

  const upload = async () => {
    // POST request

    try {
      await axios.post(
        "https://react-workshop-todo.fly.dev/todos/",
        {
          title: todoInput,
          isDone: false,
        },
        {
          headers: {
            apiKey: "645666987213f63d43086426",
          },
        }
      );
      // update the inputTodo state variable with the new item
      setTodoInput("");
      // clear the input field after the item is added
      setShouldRefresh((v) => !v);
    } catch (error) {
      console.log(error);
    }
  };

  const submitTodo = () => {
    console.log(todoInput);
    upload();
  };

  return (
    <>
      <div className="to-do-input">
        <input
          type="text"
          placeholder="Enter an task"
          id="todo-input"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="submitBtn" onClick={submitTodo}>
          +
        </button>
      </div>
    </>
  );
};

export default Input