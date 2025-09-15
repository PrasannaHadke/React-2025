import React, { useState, useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'

function TodoApp() {
  const { add, remove, todos } = useContext(TodoContext)
  const [input, setInput] = useState("")

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={() => { add(input); setInput("") }}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => remove(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
