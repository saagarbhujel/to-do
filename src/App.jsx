import Container from './Components/Container'
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import Input from './Components/Input';



 const App = ()=> {

  const fetchInput=()=>{
     const postsData = axios.get("https://react-workshop-todo.fly.dev/todos/all", {
      headers: {
        apiKey: "645666987213f63d43086426" ,
      },
      
    });
    console.log(postsData.data)
  }

useEffect(()=>{
  fetchInput()
},[])

  return (
    <>
      <Input />
      <div>
        <Container todoContent={"hello"} />
      </div>
    </>
  );
}

export default App
