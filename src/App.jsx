import Container from './Components/Container'
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import Input from './Components/Input';



 const App = ()=> {

  const [inputTodo, setInputTodo] = useState([]);
  // console.log(inputTodo)
const [shouldRefresh, setShouldRefresh] = useState([]);
  const fetchInput= async()=>{
     const postsData = await axios.get("https://react-workshop-todo.fly.dev/todos/all", {
      headers: {
        apiKey: "645666987213f63d43086426" ,
      },
      
    });
    setInputTodo(postsData.data)
    console.log(postsData.data)
  }

useEffect(()=>{
  fetchInput()
},[shouldRefresh])

  return (
    <>
      <Input setShouldRefresh={setShouldRefresh} />

      {inputTodo.map((todos) => {
        return (
          <Container
            name={todos.title}
            key={todos._id}
            _id={todos._id}
            setShouldRefresh={setShouldRefresh}
          />
        );
      })}

      {/* <Container name="changed"/> */}
    </>
  );
}

export default App
