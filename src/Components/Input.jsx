import React from 'react'
import "./Input.css"

const Input = () => {
  return (
    <>
    <div className='to-do-input'>
        <input type="text" placeholder='Enter an task' id='todo-input' />
        <button className='submitBtn'>+</button>
    </div>
    </>
  )
}

export default Input