import React, { useState} from 'react'
import "./Input.css"

const Input = () => {

   const [todoInput, setTodoInput] = useState("");

   const update =()=>{
    //  // POST request
    //  axios.post(
    //    ,
    //    {
    //      title: "Hello World",
    //      isDone: false,
    //    },
    //    {
    //      headers: {
    //        apiKey: { apiKey },
    //      },
    //    }
    //  );
   }


   const submitTodo =()=>{
    console.log(todoInput)
    update()
   }

  return (
    <>
    <div className='to-do-input'>
        <input type="text" placeholder='Enter an task' id='todo-input' 
        onChange={(e)=>setTodoInput(e.target.value)}
        />
        <button className='submitBtn' onClick={submitTodo} >+</button>
    </div>
    </>
  )
}

export default Input